'use strict';

// requires
const matcher = require('./matcher/index'); //to use the matcher module here
const toId = require('./api/name_id');
const call_powerstats = require('./api/powerstats');
const call_biography = require('./api/biography');
const call_appearance = require('./api/appearance');
const call_occupation = require('./api/occupation');
const call_all = require('./api/all');
const call_image = require('./api/image');
const display = require('./display/functions');
const questions = require('./fastAndCurious/index');
const Discord = require('discord.js');



// start of the bot
const bot = new Discord.Client();
bot.on('ready', () => {
    console.log('Ready!')
})

// The messages to go to the menu (work everywhere in the chatbot)
bot.on('message', msg => {
    if(!msg.author.bot){
        if(msg.content === '!start'){
                try {
                    const embed = new Discord.MessageEmbed()
                                    .setTitle("Hello my Friend")
                                    .setDescription(
                                        "What a good day ! \n"
                                        +"I'm HEROBOT, the specialist of all heroes and vilains.\n"
                                        +"Let's choose a category first \n"
                                        +"What hero/vilain are you? --> click on :man_superhero: \n"
                                        +"Wanna know everything on your favourite character? --> click on :grey_question:"
                                    )
                                    .setFooter(
                                        "Rember that at all time you can enter '!start' to come back to the menu\n"
                                        +"and '!end' to leave"
                                    );
                    msg.channel.send(embed).then(async message => {
                        await message.react("🦸‍♂️");
                        await message.react("❔");
                    });
                    }catch(e) {
                        console.log(e);
                    }
        }
        if(msg.content === '!end'){
            msg.channel.send("See you Soon For Great Adventures!");

            process.exit()
        }

        if(msg.content === 'help'){
            msg.channel.send("To start the chatbot, enter '!start'\n"
            +"Anytime you can enter '!end' to quit the server.")
        }
    }
})

// The function to launch according to the choice of the user when he clicks on emoji
bot.on('messageReactionAdd', (reply,user) => {
    if(!user.bot){
        if(reply.emoji.name === '🦸‍♂️')
        {
            fastAndCurious(reply.message.channel);
        }
        else if(reply.emoji.name === '❔')
        {
            askMe(reply.message.channel,0);
        }
    }
})

// First function when the user chooses to ask about a hero
// - check if the user wants an available feature and then call heroInfo to get all the datas
function askMe(channel, round = 1){
    if(round !== 1){
        channel.send("You can ask me questions about super heroes on his powerstats, occupation, appearance, real identity or all of them");
        channel.send("So, what and on who do you wish information?")
    }
    const filter = m => !m.author.bot;
    let collector = new Discord.MessageCollector(channel, filter);
    collector.on('collect', message => {
        matcher(message.content, cb =>{
            if(Object.keys(cb).length === 0 && message.content !== '!end' && message.content!== '!start'){
                message.channel.send("Sorry, I don't understand. Please try again.");
                collector.stop();
                askMe(channel);                    
            }
            else{
                collector.stop();
                if(cb.entities.name !== undefined)
                {
                    heroInfo(message.channel,cb.entities.name,cb.intent);                                
                }
                else{
                    message.channel.send("Please give a feature and a name in this order")
                    collector.stop();
                    askMe(channel);                    
                }
            }
        })
    });
}

// If the user chooses to get all the info about a hero
function getAllInfo(channel,id){
    return new Promise(resolve => {
        if(id !== null){
            try{
                const data = call_all(id); 
                data.then(response => {
                    if(response !== null )
                    {
                        channel.send("Here all the informations about "+ response.name);
                        display.display_powerstats(channel,response.powerstats);
                        display.display_biography(channel,response.biography);
                        display.display_appearance(channel,response.appearance);
                        display.display_occupation(channel,response.work)
                        
                        resolve();
                        
                    }
                    else{
                        resolve(channel.send("I'm so sorry :cry: \nI couldn't fetch any information"))
                    }    
                })        
            }catch(e){
                console.log(e);
            }

        }

    })
      
}

// If the user wants only the characteristics of a hero
function get_powerstats(channel, id){
    return new Promise (resolve => {
        if(id !==null){
            try{
                const data = call_powerstats(id);
                data.then(response => {
                    if(response!=null){
                            channel.send("Here the powerstats of "+ response.name)
                            display.display_powerstats(channel,response)
                        
                        resolve()
                        
                    }
                    else{
                        resolve(channel.send("I'm so sorry :cry: \nI couldn't fetch any information"))
                    }    
                })        
            }catch(e){
                console.log(e);
            }
            
        }

    })
    

}

// If the user wants only the background history of a hero
function get_biography(channel, id){
    return new Promise (resolve => {
        if(id !==null){
            try{
                const data = call_biography(id);
                data.then(response => {
                    if(response!=null){
                        channel.send("Here the background of "+ response.name)
                        display.display_biography(channel,response)
                        
                        resolve();
                        
                    }
                    else{
                        resolve(channel.send("I'm so sorry :cry: \nI couldn't fetch any information"))
                    }    
                })        
            }catch(e){
                console.log(e);
            }
            
        }

    })
    

}

// If the user wants only the appareance description of a hero
function get_appearance(channel, id){
    return new Promise (resolve => {
        if(id !==null){
            try{
                const data = call_appearance(id);
                data.then(response => {
                    if(response!=null){
                        channel.send("Here is what "+ response.name + " looks like")
                        display.display_appearance(channel,response)
                        
                        resolve();                        
                    }
                    else{
                        resolve(channel.send("I'm so sorry :cry: \nI couldn't fetch any information"))
                    }    
                })        
            }catch(e){
                console.log(e);
            }
            
        }

    })
    

}

// If the user wants only the occupation of a hero
function get_occupation(channel, id){
    return new Promise (resolve => {
        if(id !==null){
            try{
                const data = call_occupation(id);
                data.then(response => {
                    if(response!=null){
                        channel.send("Here the job of "+ response.name)
                        display.display_occupation(channel,response)
                        resolve();
                    }
                    else{
                        resolve(channel.send("I'm so sorry :cry: \nI couldn't fetch any information"))
                    }    
                })        
            }catch(e){
                console.log(e);
            }
            
        }
    })
    

}

// This function is called whenever the user wants to have another information about the same hero
function again(channel,id,name,round = 1){

    if(round !== 1)
    {
        channel.send("Reminder:\n"
        +"The categories available are: powerstats, occupation, appearance, background or all")
    }
    const filter = m => !m.author.bot;
    let collector = new Discord.MessageCollector(channel, filter);
    collector.on('collect', message => {
        matcher(message.content, async cb =>{
            if(Object.keys(cb).length === 0 && message.content !== '!end' && message.content!== '!start'){
                message.channel.send("Sorry, I don't understand. Please try again.\n"
                +"(remark: enter'!end' if you wanna leave \n"
                +"and '!start' if you wanna go back to the menu)");
                collector.stop();
                again(channel,id);                    
            }
            else{
                if(cb.intent === 'all'){
                    await getAllInfo(channel,id)
                }
                if(cb.intent === 'sug_appearance'){
                    await get_appearance(channel,id)
                } 
                if(cb.intent === 'sug_powerstats'){
                    await get_powerstats(channel,id)
                } 
                if(cb.intent === 'sug_biography'){
                    await get_biography(channel,id)
                } 
                if(cb.intent === 'sug_occupation'){
                    await get_occupation(channel,id)
                }
                else{
                    channel.send(":confounded: I didn't understand you \nPlease just write the name of the category or \n"
                    +"'!end' if you wanna leave \n"
                    +"'!start' if you wanna go back to the menu")
                }
                channel.send("Do you want to have other informations about " + name + "?")
                if(message.content.toLowerCase() === 'yes'){
                    again(channel,id,name,0);
                }
                else if(message.content.toLowerCase() === 'no'){
                    collector.stop()
                }  
            }
        })
    })


    

}

// Principal function to fetch informations
// -first check if the hero is in the api
// -then fetch the id and make the request 
// -if the request in not 'all', call the function again so we can make other request for the same id
function heroInfo(channel,name,intent){
    const result = toId(name);
    let id ;
    let keys = new Array();
    result.then(response => {
        if(response === null){
            channel.send("Sorry, No Hero correspond to your request. Please try again.\n"
            +"(remark: don't forget spaces or hyphens)")
            id = null;
            askMe(channel);
        }
        else{
            channel.send("Here the results for " + name + ".\nPlease enter the id of the " + name + " you want.");
            for(let key in    response){
                channel.send(key +": "+response[key])
                keys.push(key);
            }
        
            const filter = m => !m.author.bot;
            let collector = new Discord.MessageCollector(channel, filter);
            let getid = false;
            collector.on('collect', async message => {
                if(!getid){
                    id= message.content;
                    getid = true;
                }
                if(message.content === "!end" || message.content === '!start'){
                    collector.stop();
                }
                else if(message.content === 'no'){
                    channel.send("If you want to make a new research, enter '!start'")
                    channel.send("If you want to quit, enter '!end'")
                    
                    collector.stop();
                }

                else if(message.content === 'yes'){
                    collector.stop();
                    again(channel,id,name,0);
                } 
                else{
                    if(intent === 'all'){
                        try{
                            await getAllInfo(channel,id)
                            collector.stop();
                            channel.send("If you want to make a new research, enter '!start'")
                            channel.send("If you want to quit, enter '!end'")
                        }
                        catch(e){
                            console.log(e);
                        }
                    } 
        
                    if(intent == 'powerstats' || intent == 'biography' || intent == 'appearance' || intent == 'occupation')
                    {
                        try{
                            if(intent === 'powerstats'){ await get_powerstats(channel,id)}
                            if(intent === 'biography'){ await get_biography(channel,id)}
                            if(intent === 'appearance'){ await get_appearance(channel,id)}
                            if(intent === 'occupation'){ await get_occupation(channel,id)}
                            channel.send("Do you want to have other informations about " + name + "?")
                        
                        }catch(e){
                            console.log(e)
                        }                    
                    } 

                }                       
            }) 

        }   
    })
    
}

// A serie of 6 questions to determine to whom hero/vilain the user is alike
// Request the API for the image of the result
async function fastAndCurious(channel){
    let heroList = {
        "Superman" : 0,	
        "Batman" : 0,	
        "Aquaman" : 0,	
        "Wonder Woman" : 0,		
        "Catwoman" : 0,
        "Joker" : 0,	
        "Lex Luthor" : 0,
        "Deadshot " : 0,			
        "Flash" : 0,
        "Raven" : 0
    }
    channel.send("Let's see what hero or vilain you are");
    channel.send("Please answer all 6 following questions by writing the id of the answer you want");
    
    heroList = await questions.q1(channel,heroList,0);
    heroList = await questions.q2(channel,heroList,0);
    heroList = await questions.q3(channel,heroList,0);
    heroList = await questions.q4(channel,heroList,0);
    heroList = await questions.q5(channel,heroList,0);
    heroList = await questions.q6(channel,heroList,0);

    let max = 'Superman'
    let equal = [];
    for(let key in    heroList){
        if (heroList[key] > heroList[max]){
            max = key;
        }
        else if (heroList[max] === heroList[key] && key !== max)
        {
            equal.push(key);
        }
    }

    if(equal.includes(max)){
        const i = Math.floor(Math.random() * (+equal.length - +0)) + +0; 
        max = equal[i];
    }

    const image = call_image(max);
    image.then(url => {
        const embed = new Discord.MessageEmbed()
                                    .setTitle("Results of the test")
                                    .setDescription(
                                        "You are..... \n\n" + "**"+max.toUpperCase()+"**"
                                    )
                                    .setImage(url);
        channel.send(embed)

        channel.send("If you want to make a new research, enter '!start'")
        channel.send("If you want to quit, enter '!end'")

    })
  
}

bot.login(process.env.BOT_TOKEN);


