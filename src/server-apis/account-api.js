const axios = require('axios');
const { Keypair } = require('stellar-base');

export const accoutLogin = (secretKey) =>{
    const key = Keypair.fromSecret(secretKey);
    const publicKey = key.publicKey();
    axios.post('http://localhost:3000/account/login', {
            publicKey: publicKey,
      }).then( (response) =>{
        console.log(response);
    });
};


