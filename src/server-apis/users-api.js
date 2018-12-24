const axios = require('axios');

export const getUsers = async () =>{
    let result = await axios.get('http://localhost:3000/users');
    console.log(result);
};


