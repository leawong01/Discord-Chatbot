const axios = require('axios');

const apikey = process.env.API_TOKEN;s

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