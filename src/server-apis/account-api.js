const axios = require('axios');
const { Keypair } = require('stellar-base');
const transaction = require('../lib/transaction/index');
const MAIN_SERVER_URL = "http://localhost:3000";
const base32 = require('base32.js');
const vstruct = require('varstruct');



export const accoutLogin = async (secretKey) =>{
    const key = Keypair.fromSecret(secretKey);
    const publicKey = key.publicKey();
    let result = await axios.post(MAIN_SERVER_URL + '/account/login', {
            public_key: publicKey,
      });
    return result;
};
const Followings = vstruct([
    { name: 'addresses', type: vstruct.VarArray(vstruct.UInt16BE, vstruct.Buffer(35)) },
]);

const PlainTextContent = vstruct([
    { name: 'type', type: vstruct.UInt8 },
    { name: 'text', type: vstruct.VarString(vstruct.UInt16BE) },
]);


export const getListFollowers= async (publicKey) =>{
    let result = await axios.post(MAIN_SERVER_URL + '/account/followers', {
        public_key:publicKey
    });

    return result.data;
};

export const getListFollowings = async(publicKey) =>{
    let result = await  axios.post(MAIN_SERVER_URL + '/account/followings', {
        public_key: publicKey,
    });

    return result.data;
};

export const onFollowingAccount = async (secretKey, accountFollowing) =>{
    secretKey = 'SB4BGT5YZY3FIRAGTYMHYKHPUTUY4BWNHAPMVJVFHRQDTSQBWIVMY6CR';
    let key = Keypair.fromSecret(secretKey);
    let publicKey = key.publicKey();
    let lastSequenceResponse = await axios.post(MAIN_SERVER_URL + '/account/lastSequence', {
        public_key:  publicKey,
    });

    let lastSequence = lastSequenceResponse.data.sequence;

    var followings =   [Buffer.from(base32.decode('GAO4J5RXQHUVVONBDQZSRTBC42E3EIK66WZA5ZSGKMFCS6UNYMZSIDBI'))];
    let value =  Followings.encode({
        addresses : followings,
    });

    console.log(followings);
    let tx = {
        version: 1,
        sequence: lastSequence + 1,
        memo: Buffer.from('Cập nhật tài khoản'),
        operation: 'update_account',
        params: {
            key:'followings',
            value: value
        }
    };

    //UpdateAccountParams.encode(tx.params);

    //UpdateAccountParams.encode(tx.params);

    transaction.sign(tx, secretKey);
    let transaction_data = transaction.encode(tx).toString('base64');

    let result =  await axios.post(MAIN_SERVER_URL + '/account/updateAccount', {
       tx: transaction_data,
    });

    console.log(result);
};

export const onUpdateAccountName = async (secretKey, newName) =>{
    secretKey = 'SB4BGT5YZY3FIRAGTYMHYKHPUTUY4BWNHAPMVJVFHRQDTSQBWIVMY6CR';
    let key = Keypair.fromSecret(secretKey);
    let publicKey = key.publicKey();
    let lastSequenceResponse = await axios.post(MAIN_SERVER_URL + '/account/lastSequence', {
        public_key:  publicKey,
    });

    let lastSequence = lastSequenceResponse.data.sequence;
    let tx = {
        version: 1,
        sequence: lastSequence + 1,
        memo: Buffer.from('Cập nhật tài khoản', 'utf-8'),
        operation: 'update_account',
        params:{
            key:'name',
            value: Buffer.from(newName, 'utf-8')
        }
    };

    transaction.sign(tx, secretKey);
    let transaction_data = transaction.encode(tx).toString('base64');

    let result =  await axios.post(MAIN_SERVER_URL + '/account/updateAccount', {
        tx: transaction_data,
    });

    console.log(result);
};

export const onPostContent = async (secretKey, postContent)=>{
    secretKey = 'SB4BGT5YZY3FIRAGTYMHYKHPUTUY4BWNHAPMVJVFHRQDTSQBWIVMY6CR';
    let key = Keypair.fromSecret(secretKey);
    let publicKey = key.publicKey();
    let lastSequenceResponse = await axios.post(MAIN_SERVER_URL + '/account/lastSequence', {
        public_key:  publicKey,
    });

    let lastSequence = lastSequenceResponse.data.sequence;
    let tx = {
        version: 1,
        sequence: lastSequence + 1,
        memo: Buffer.from('Đăng bài'),
        operation: 'post',
        params: {
            content: PlainTextContent.encode({
                type: 1,
                text: postContent,
            }),
            keys:[]
        }
    };

    transaction.sign(tx, secretKey);
    let transaction_data = transaction.encode(tx).toString('base64');

    let result =  await axios.post(MAIN_SERVER_URL + '/account/post', {
        tx: transaction_data,
    });

    console.log(result);

};

export const onPayment = async (secretKey, amount, addressRecived, notePayment)=>{
    secretKey = 'SB4BGT5YZY3FIRAGTYMHYKHPUTUY4BWNHAPMVJVFHRQDTSQBWIVMY6CR';
    let key = Keypair.fromSecret(secretKey);
    let publicKey = key.publicKey();
    let lastSequenceResponse = await axios.post(MAIN_SERVER_URL + '/account/lastSequence', {
        public_key:  publicKey,
    });

    let lastSequence = lastSequenceResponse.data.sequence;
    let tx = {
        version: 1,
        sequence: lastSequence + 1,
        memo: Buffer.from(notePayment, 'utf-8'),
        operation: 'payment',
        params: {
            address: addressRecived,
            amount: amount,
        }
    };

    transaction.sign(tx, secretKey);
    let transaction_data = transaction.encode(tx).toString('base64');

    let result =  await axios.post(MAIN_SERVER_URL + '/account/post', {
        tx: transaction_data,
    });
    console.log(result);
};

export const getAccountInfo =  async (secretKey) =>{
    try {
        let key = Keypair.fromSecret(secretKey);
        let publicKey = key.publicKey();
        let result = await axios.post(MAIN_SERVER_URL + '/account/getAccountInfo', {
            public_key: publicKey,
        });

        return result.data;
    }
    catch (e) {
        return null;
    }
};

export const getAccountInfoByPublicKey =  async (publicKey) =>{
    try {
        let result = await axios.post(MAIN_SERVER_URL + '/account/getAccountInfo', {
            public_key: publicKey,
        });

        return result.data;
    }
    catch (e) {
        return null;
    }
};
