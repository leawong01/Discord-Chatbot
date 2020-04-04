const axios = require('axios');

const apikey = require('./token');

const get_appearance = id => {
    return new Promise(async (resolve, reject) => {
        try {
            const appearance = await axios.get(`https://superheroapi.com/api/${apikey}/${id}/appearance`);
            resolve(appearance.data);
        }
        catch (error) {
            reject(error);
        }
    });
}

module.exports = get_appearance;