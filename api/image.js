const listId = {
    "Superman" : 644,	
    "Batman" : 70,	
    "Aquaman" : 38,	
    "Wonder Woman" : 720,		
    "Catwoman" : 165,
    "Joker" : 370,	
    "Lex Luthor" : 405,
    "Deadshot " : 214,			
    "Flash" : 100,
    "Raven" : 542    
}

const axios = require('axios');

const apikey = process.env.API_TOKEN;

const get_image = name => {
    return new Promise(async (resolve, reject) => {
        try {
            let id;
            for( let key in listId){
                if(key === name){
                    id = listId[key]
                }
            }
            const info = await axios.get(`https://superheroapi.com/api/${apikey}/${id}/image`);
            if(info.data.response !== 'error'){
                resolve(info.data.url);
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

module.exports = get_image;