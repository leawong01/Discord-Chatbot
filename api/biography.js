const axios = require('axios');

const apikey = require('./token');

const get_biography = id => {
    return new Promise(async (resolve, reject) => {
        try {
            const biography = await axios.get(`https://superheroapi.com/api/${apikey}/${id}/biography`);
            resolve(biography.data);
        }
        catch (error) {
            reject(error);
        }
    });
}

module.exports = get_biography;