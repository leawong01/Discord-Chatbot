const axios = require('axios');

const apikey = process.env.API_TOKEN;

const get_id = async(name) => {
        try {
            const id = await axios.get(`https://superheroapi.com/api/${apikey}/search/${name}`);
            if(id.data.response !== 'error'){
                let result = {};
                for(let i=0;i < id.data.results.length; i++){
                    if(id.data.results[i].biography['full-name'] !== "")
                    {
                        result[id.data.results[i].id] = id.data.results[i].name + " (" + id.data.results[i].biography['full-name'] + ")";
                    }
                    else {
                        result[id.data.results[i].id] = id.data.results[i].name;
                    }
                }
                return result;                
            }
            else{
                return null;
            }
        }
        catch (error) {
            console.log(error);
        }
}

module.exports = get_id;