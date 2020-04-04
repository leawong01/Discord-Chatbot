const axios = require('axios');

const apikey = process.env.API_TOKEN;

const get_all = id => {
    return new Promise(async (resolve, reject) => {
        try {
            const info = await axios.get(`https://superheroapi.com/api/${apikey}/${id}`);
            if(info.data.response !== 'error'){

                resolve(info.data);
            }
            else{
                resolve(null);
            }
        }
        catch (error){
            reject(error);
        }
    });
}

module.exports = get_all;