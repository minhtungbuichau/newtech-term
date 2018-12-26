import {getAccountInfo} from "./account-api";

const axios = require('axios');
const { Keypair } = require('stellar-base');
const transaction = require('../lib/transaction/index');
const MAIN_SERVER_URL = "http://localhost:3000";
const base32 = require('base32.js');
const vstruct = require('varstruct');

export const getUsers = async (secretKey) =>{

    const key = Keypair.fromSecret(secretKey);
    const publicKey = key.publicKey();

    console.log("SECRET   :" + secretKey);
    console.log("PUBLIC KEY :" + publicKey);
    let result = await axios.post(MAIN_SERVER_URL + '/account/listForFollowings',{
        public_key: publicKey,
    });
    return result;
};


