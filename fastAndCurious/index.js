const Discord = require('discord.js');

module.exports.q1 = function (channel,heroList) {

    return new Promise(resolve => {
        try{
            const filter = m => !m.author.bot;
            let collector = new Discord.MessageCollector(channel, filter);
            
                const embed = new Discord.MessageEmbed()
                                            .setTitle("On which side are you ?")
                                            .setDescription(
                                                "**A1** : Of course I'm a good guy \n"
                                                +"**A2** : I always liked the vilains \n"
                                                +"**A3** : I can't choose :cry: \n"
                                            )
                                            .setFooter(
                                                "Question 1 out of 6"
                                            );
                channel.send(embed)
            
            collector.on('collect', message => {
                
                
                    
                if(message.content.toUpperCase() === 'A1'){
                    for(let key in    heroList){
                        if(key === 'Superman' || key === 'Batman' || key === 'Aquaman' || key === 'Wonder Woman'
                            || key === 'Flash' || key === 'Raven' || key === 'Catwoman'){   
                            heroList[key]+=1;
                        }    
                        if(key === 'Joker' || key === 'Lex Luthor' || key === 'Deadshot'){
                            heroList[key]-=1;
                        }            
                    }
                }
                else if(message.content.toUpperCase() === 'A2'){
                    for(let key in    heroList){
                        if(key === 'Joker' || key === 'Lex Luthor' || key === 'Deadshot'
                            || key === 'Flash' || key === 'Raven' || key === 'Catwoman'){
                            heroList[key]+=1;
                        }
                        if(key === 'Superman' || key === 'Batman' || key === 'Aquaman' || key === 'Wonder Woman'){   
                            heroList[key]-=1;
                        } 
                    }
    
                }
                else if(message.content.toUpperCase() === 'A3'){
                    for(let key in    heroList){
                        if(key === 'Flash' || key === 'Raven' || key === 'Catwoman'){
                            heroList[key]+=2;
                        }
                        else{
                            heroList[key]+=1;
                        }
                    }
    
                }
                else{
                    channel.send("Please give a valid response");
                    collector.stop();
                    resolve(q1(channel, heroList));
                }
                
                collector.stop();
                resolve(heroList);
            })
        }catch(e){
            console.log(e);
        }

    })
    
}

module.exports.q2 = function (channel,heroList){
    return new Promise(resolve => {
        try{
            
                const embed = new Discord.MessageEmbed()
                                    .setTitle("On a fight...")
                                    .setDescription(
                                        "**B1** : I think fisrt of a strategy, only the wisest win\n"
                                        +"**B2** : Go beat them fisrt, then we'll see what happen \n"
                                    )
                                    .setFooter(
                                        "Question 2 out of 6"
                                    );
                channel.send(embed)
            
            const filter = m => !m.author.bot;
            let collector = new Discord.MessageCollector(channel, filter);
            collector.on('collect', message => {
            
                    
                if(message.content.toUpperCase() === 'B1'){
                    for(let key in    heroList){
                        if(key === 'Lex Luthor' || key === 'Batman' || key === 'Deadshot' || key === 'Flash' 
                            || key === 'Catwoman' || key === 'Joker' || key === 'Raven'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'B2'){
                    for(let key in    heroList){
                        if(key === 'Superman' || key === 'Wonder Woman' || key === 'Aquaman'){
                            heroList[key]+=1;
                        }
                    }
    
                }
                else{
                    channel.send("Please give a valid response");
                    collector.stop();
                    resolve(q2(channel, heroList));
                }

                collector.stop();
                resolve(heroList);
            })
        }catch(e){
            console.log(e);
        }
    })
    
}

module.exports.q3 = function (channel,heroList){
    return new Promise(resolve => {
        try{
            
                const embed = new Discord.MessageEmbed()
                                    .setTitle("What is your fighting style?")
                                    .setDescription(
                                        "**C1** : With powers, who need to know how to fight? \n"
                                        +"**C2** : Powers are convenient, but master art of fighting is better \n"
                                        +"**C3** : Use powers only in emergency, I will show you I am better than you in every way\n"
                                        +"**C4** : Why should I dirty my hands ? I send other to fight for me"
                                    )
                                    .setFooter(
                                        "Question 3 out of 6"
                                    )
                channel.send(embed)
            
            const filter = m => !m.author.bot;
            let collector = new Discord.MessageCollector(channel, filter);
            collector.on('collect', message => {
                
                    
                if(message.content.toUpperCase() === 'C1'){
                    for(let key in     heroList){
                        if(key === 'Flash' || key === 'Raven'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'C2'){
                    for(let key in     heroList){
                        if(key === 'Batman' || key === 'Catwoman' || key === 'Deadshot'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'C3'){
                    for(let key in     heroList){
                        if(key === 'Superman' || key === 'Wonder Woman' || key === 'Aquaman'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'C4'){
                    for(let key in     heroList){
                        if(key === 'Joker' || key === 'Lex Luthor'){
                            heroList[key]+=1;
                        }
                    }
                }
                else{
                    channel.send("Please give a valid response");
                    collector.stop();
                    resolve(q3(channel, heroList));
                }

                collector.stop();
                resolve(heroList);
             })
        
        }catch(e){
        console.log(e);
        }

    })
    
}

module.exports.q4 = function (channel,heroList){
    return new Promise(resolve => {
        try{
            
                const embed = new Discord.MessageEmbed()
                                    .setTitle("Oh crap, I'm surrounded...")
                                    .setDescription(
                                        "**D1** : That's okay, I will lost them easily \n"
                                        +"**D2** : Running is useless, let's fight till the end \n"
                                        +"**D3** : How did this happen again? \n"
                                    )
                                    .setFooter(
                                        "Question 4 out of 6"
                                    )
                channel.send(embed)
            
            const filter = m => !m.author.bot;
            let collector = new Discord.MessageCollector(channel, filter,)
            collector.on('collect', message => {
            
                    
                if(message.content.toUpperCase() === 'D1'){
                    for(let key in    heroList){
                        if(key === 'Flash'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'D2'){
                    for(let key in   heroList){
                        if(key === 'Batman' || key === 'Superman' || key === 'Aquaman' || key === 'Wonder Woman' 
                            || key === 'Joker' || key === 'Lex Luthor' || key === 'Raven'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'D3'){
                    for(let key in   heroList){
                        if(key === 'Catwoman' || key === 'Deadshot'){
                            heroList[key]+=1;
                        }
                    }
                }
                else{
                    channel.send("Please give a valid response");
                    collector.stop();
                    resolve(q4(channel, heroList));
                }
                
                collector.stop();
                resolve(heroList);
    
            })
        }catch(e){
            console.log(e);
        }

    })
    
}

module.exports.q5 = function (channel,heroList){
    return new Promise(resolve => {
        try{
            
                const embed = new Discord.MessageEmbed()
                                    .setTitle("Where are you from?")
                                    .setDescription(
                                        "**E1** : I'm from Earth, where else? \n"
                                        +"**E2** : I'm a foreigner, from faaar away \n"
                                        +"**E3** : Story of my life \n"
                                    )
                                    .setFooter(
                                        "Question 5 out of 6"
                                    )
                channel.send(embed)
            
            const filter = m => !m.author.bot;
            let collector = new Discord.MessageCollector(channel, filter);
            collector.on('collect', message => {
            
                    
                if(message.content.toUpperCase() === 'E1'){
                    for(let key in    heroList){
                        if(key === 'Flash' || key === 'Batman' || key === 'Catwoman' || key === 'Joker' 
                            || key === 'Lex Luthor' || key === 'Deadshot'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'E2'){
                    for(let key in    heroList){
                        if(key === 'Superman' || key === 'Aquaman'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'E3'){
                    for(let key in    heroList){
                        if(key === 'Wonder Woman' || key === 'Raven'){
                            heroList[key]+=1;
                        }
                    }
                }
                else{
                    channel.send("Please give a valid response");
                    collector.stop();
                    resolve(q5(channel, heroList));
                }

                collector.stop();
                resolve(heroList);
    
            })
        }catch(e){
            console.log(e);
        }

    })
    
}

module.exports.q6 = function (channel,heroList){
    return new Promise(resolve => {
        try{
                const embed = new Discord.MessageEmbed()
                                    .setTitle("Where did you get your powers?")
                                    .setDescription(
                                        "**F1** : Oh, I just thought that it was normal \n"
                                        +"**F2** : I was born like this, extraordinary since forever! \n"
                                        +"**F3** : Let's say that I woke up like this one day\n"
                                        +"**F4** : Powers are for the weak, I'm already a legend! \n"
                                        +"**F5** : Is money a power? Because I'm very powerful"
                                    )
                                    .setFooter(
                                        "Question 6 out of 6"
                                    )
                channel.send(embed)
            
            const filter = m => !m.author.bot;
            let collector = new Discord.MessageCollector(channel, filter);
            collector.on('collect', message => {
            
                    
                if(message.content.toUpperCase() === 'F1'){
                    for(let key in    heroList){
                        if(key === 'Superman'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'F2'){
                    for(let key in    heroList){
                        if(key === 'Wonder Woman' || key === 'Aquaman' || key === 'Raven'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'F3'){
                    for(let key in    heroList){
                        if(key === 'Catwoman' || key === 'Flash'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'F4'){
                    for(let key in    heroList){
                        if(key === 'Joker' || key === 'Deadshot'){
                            heroList[key]+=1;
                        }
                    }
                }
                else if(message.content.toUpperCase() === 'F5'){
                    for(let key in    heroList){
                        if(key === 'Batman' || key === 'Lex Luthor'){
                            heroList[key]+=1;
                        }
                    }
                }
                else{
                    channel.send("Please give a valid response");
                    collector.stop();
                    resolve(q6(channel, heroList));
                }
                
                collector.stop();
                resolve(heroList);
    
            })
        }catch(e){
            console.log(e);
        }

    })
    
}


