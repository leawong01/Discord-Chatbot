const axios = require('axios');

const apikey = require('./token');

const get_work = id => {
    return new Promise(async (resolve, reject) => {
        try {
            const work = await axios.get(`https://superheroapi.com/api/${apikey}/${id}/work`);
            resolve(work.data);
        }
        catch (error) {
            reject(error);
        }
    });
}

module.exports = get_work;