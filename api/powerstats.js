const axios = require('axios');

const apikey = require('./token');

const get_powerstats = id => {
    return new Promise(async (resolve, reject) => {
        try {
            const powerstats = await axios.get(`https://superheroapi.com/api/${apikey}/${id}/powerstats`);
            resolve(powerstats.data);
        }
        catch (error) {
            reject(error);
        }
    });
}

module.exports = get_powerstats;