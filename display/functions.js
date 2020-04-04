const Discord = require('discord.js');
const embed = new Discord.MessageEmbed()

module.exports.display_powerstats = function (channel, powerstats) {
    try{
        embed.setDescription(
            'Intelligence: '+ powerstats.intelligence + '\n'
            +'Strength: '+ powerstats.strength + '\n'
            +'Speed: '+ powerstats.speed + '\n'
            +'Durability: '+ powerstats.durability + '\n'
            +'Power: '+ powerstats.power + '\n'
            +'Combat: '+ powerstats.combat
        );
        channel.send(embed);
    }catch(e) {
        console.log(e);
    }
}

module.exports.display_biography = function (channel, biography) {
    try{
    embed.setDescription(
        'Real name: '+ biography['full-name'] + '\n'
        + 'Alter egos: '+ biography['alter-egos'] + '\n'
        + 'Aliases: '+ biography.aliases + '\n'
        + 'First appearance: '+ biography['first-appearance'] + '\n'
        + 'Alignment: '+ biography.alignment
    );
    channel.send(embed);
    }catch(e) {
        console.log(e);
    }
}

module.exports.display_appearance = function (channel, appearance) {
    try{
        embed.setDescription(
            'Gender: '+ appearance.gender + '\n'
            +'Race: '+ appearance.race + '\n'
            +'Height: '+ appearance.height[1] + '\n'
            +'Weight: '+ appearance.weight[1] + '\n'
            +'Eye-color: '+ appearance['eye-color'] + '\n'
            + 'Hair-color: '+ appearance['hair-color']
        );
        channel.send(embed);
    }catch(e){
        console.log(e)
    }
}

module.exports.display_occupation = function (channel, occupation) {
    try{
        embed.setDescription(
            'Occupation: '+ occupation.occupation
        );
        channel.send(embed);
    }catch(e){
        console.log(e)
    }

}

