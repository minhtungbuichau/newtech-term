const axios = require('axios');

export const accoutLogin = (publicKey) =>{
    axios.post('http://localhost:3000/account/login', {
            publicKey: publicKey,
      }).then( (response) =>{
        console.log(response);
    });
};

