const axios = require('axios');
const { Keypair } = require('stellar-base');
const transaction = require('../lib/transaction/index');
const MAIN_SERVER_URL = "http://localhost:3000";

export const accoutLogin = async (secretKey) =>{
    const key = Keypair.fromSecret(secretKey);
    const publicKey = key.publicKey();
    let result = await axios.post(MAIN_SERVER_URL + '/account/login', {
            public_key: publicKey,
      });
    return result;
};

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
    const key = Keypair.fromSecret(secretKey);
    let publicKey = key.publicKey();

    let tx = {
        version: 1,
        sequence: 1 + 1,
        memo: Buffer.from('Cập nhật tài khoản'),
        operation: 'update_account',
        params:{
            key:'name',
            value:      Buffer.from('1512639_1512651', 'utf-8')
        }
    };
    transaction.sign(tx,secretKey);
    let dataEncoding = transaction.encode(tx).toString('base64');

    let result = await axios.post('/account/followingAccount', {
        transaction_data: dataEncoding,
    });

    return result;

};
