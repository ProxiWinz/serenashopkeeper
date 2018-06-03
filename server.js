const fs = require("fs");
const ms = require("ms");
const economy = require('discord-eco');
const { Client, Util } = require('discord.js');
const YouTube = require('simple-youtube-api');
const ytdl = require('ytdl-core');
const Config = require("./config.js")
const prettyMs = require("pretty-ms");
const token = 'LOGZVjdhC1XDZaEUh_hXf1Uq66CuoUPSXLsbmwX003C0AfaKNFEJfp_nhEghRkJQuJOS';
const Discord = require('discord.js');
const bot = new Discord.Client({disableEveryone : true});
let timer = {};
bot.on("ready", async () => {
  console.log(`${bot.user.username} is online!`);
});
bot.on("ready", async () => {
   bot.user.setGame("in the bed with Chil");
});
   const filterWords = ["Roblox,fuck,shit,porn,pron,hent,sucks,shan,die,suicide,knife,stab,"];
        const rgx = new RegExp(filterWords.join(""), "gi");

        function wordFilter(str) {
        	return str.replace(rgx, "****");
        }

bot.on('guildMemberAdd', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`I have found ${member.user.username} and flew ${member.user.username} in! Pwease welcome ${member.user.username} !!!`);
         economy.updateBalance(member.user.username, 100)
            
 
});



bot.on('guildMemberRemove', member => {
  let guild = member.guild;
  guild.defaultChannel.sendMessage(`Pwease press b!b to pay respects to ${member.user.username}, we will miss you!`);
});


bot.on('guildBanAdd',(guild, user) => {
  guild.defaultChannel.sendMessage(`*${user.username} has fainted!*`);
});

bot.on('guildBanRemove',(guild, user) => {
  guild.defaultChannel.sendMessage(`*${user.username} was revived!*!`);
});
const prefix = 's!' 
bot.on('message', message => {
if(message.author.bot) return;
  if(!message.content.startsWith(prefix)) return;
  
 let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  let args = message.content.split(" ").slice(1);

// Constants for commands
const modLogs = 396462675976126476
let embedColor = parseInt("0x" + Math.floor(Math.random() * 16777215).toString(16));
  if(command === 'serverinfo') {
  let sicon = message.guild.iconURL;
    let serverembed = new Discord.RichEmbed()
    .setDescription("Server Information")
    .setColor("#15f153")
    .setThumbnail(sicon)
    .addField("Server Name", message.guild.name)
    .addField("Created On", message.guild.createdAt)
    .addField("You Joined", message.member.joinedAt)
    .addField("Total Members", message.guild.memberCount);

    return message.channel.send(serverembed);
  }
  if(message.author.id = '440910866490327042') {
if(command === 'kms') {
  let deathEmbed = new Discord.RichEmbed()
  .setTitle("Lily's Gravestone440910866490327042")
  .setColor(embedColor)
  .setDescription("December 31st, 2001 - May 29, 2018")
  .addField("Press F to pay disrespects", "This girl is a pile of shit that should have died January 1st 2002")
  .setFooter("This is not a fake")
  message.channel.send(deathEmbed)
}

                  if(message.author.id === "405044808026030092") {
                  return message.reply(message.content)
};
                  
  
    if(command === 'botinfo') {

    let bicon = bot.user.displayAvatarURL;
    let botembed = new Discord.RichEmbed()
    .setDescription("Bot Information")
    .setColor("#15f153")
    .setThumbnail(bicon)
    .addField("Bot Name", bot.user.username)
    .addField("Created On", bot.user.createdAt)
    .setFooter("Owned by Chil Pikachu~");
    return message.channel.send(botembed);
  }

  if (command === "cc" | command === "kick") {
    message.delete();
    let modRole = message.guild.roles.find("name", "Pika Staff");
    let modLogs = message.guild.channels.get()
  if(!message.member.roles.has(modRole.id)) {
    return message.reply("Sorry chu awen't my trainer *Skreeeee!!!*").catch(console.error);
  }
if(message.mentions.users.size == 0); {
  return message.reply("Select a member to attack pwease *Skwaaah!!!*").catch(console.error);
}
    let kickMember = message.guild.member(message.mentions.users.first());
    if(!kickMember) {
    return message.reply("Crush Claw won't effect ghost-types :cry:");
    }
    if(!message.guild.member(bot.user).hasPermission("KICK_MEMBERS")) {
    return message.reply("I don't have access to Crush Claw :cry: ").catch(console.error);
    }
    kickMember.kick().then(member => {
      message.reply (` *Braviary used Crush Claw on ${member.user.username} !* *It was super-effective!*`).catch(console.error);
      
    }).catch(console.error)
  }
    if (command === "bb" | command === "ban" | command === 'delAcc') {
      message.delete();
    let modRole = message.guild.roles.find("name", "Pika Staff");
  if(!message.member.roles.has(modRole.id)) {
    return message.reply("Sorry chu awen't my trainer *Skreeeee!!!*").catch(console.error);
  }
if(message.mentions.users.size == 0) {
  return message.reply("Select a target to attack pwease *Skwaaah!!!*").catch(console.error);
}
    let banMember = message.guild.member(message.mentions.users.first());
    if(!banMember) {
    return message.reply("*Brave Bird missed!* :cry:");
    }
    if(!message.guild.member(bot.user).hasPermission("BAN_MEMBERS")) {
    return message.reply("I don't have access to Brave Bird:cry: ").catch(console.error);
    }
    banMember.ban().then(member => {
      message.reply (  ` *Braviary used Brave Bird on ${member.user.username}!* *It was super-effective!* `).catch(console.error);
    }).catch(console.error)
  }
  if(command === 'lf'){ 
    let protoEmbed = new Discord.RichEmbed()
    .setColor(embedColor)
    .setTitle('Who is the best')
    .addField("The best is", "Protoclasm")
    .setFooter("The above statement is incorrect and it is supposed to say Chil")
    message.channel.send(protoEmbed)
  }
              
  if(command === "copycat" | command === 'say') {
  message.channel.send(args)
  };
   
if(command === 'uturn' | command === "ping") { 
 message.delete();
  return message.reply(`*Braviary used U-Turn!* \`${Date.now() - message.createdTimestamp} ms\``);

};
  if(command === 'Future Sight' | command === 'fs' | command === '8ball'){
   if(!args[2]) return message.reply("Pwease ask a full question. *SKRAH!*");
    let replies = ['Yes' +  " *Skree!*", "No" + " *Skrah!*" || " *Skree!*","Undefined *SKREEEEEE!*","There is no answer to that" + " *Skrah!*" || " *Skree!*", "Ask again later" + " *Skrah!*" || " *Skree!*" ];
     
    let result = Math.floor((Math.random() * replies.length));
    let question = args.slice(1).join(" ");
    
    let ballEmbed = new Discord.RichEmbed()
    .setAuthor(message.author.tag)
    .setColor(embedColor)
    .addField("Question", question)
    .addField("Answer", replies[result]);
    message.channel.send(ballEmbed)
  };
if (command === "eval") {
       if (!Config.owners.includes(message.member.id)) return message.channel.send("You are not an Owner :skull:");
       try {
         const com = eval(message.content.split(" ").slice(1).join(" "));
         if (message.content.includes("token")) return message.channel.send("You are not an Owner :skull:")
          message.channel.send('```\n' + com + '```');
       } catch(e) {
         message.channel.send('```\n' + e + '```');
       }
     }     

  if(command === 'rs' | command === "prune" | command === "purge") {
  message.delete();

  if(!args[0]) return message.channel.send("*Braviary used Rock Slide*");
  message.channel.bulkDelete(args[0]).then(() => {
   message.channel.send(`*Rock Slide caused ${args[0]} messages to dissappear into the dust!*`).then(msg=> msg.delete(5000));
  })
  
  }
if(command === 'b') {
   message.channel.send("", {embed : {
'color' : embedColor, 'title': 'Rip',
'description' : ` ${message.mention.user.id} has payed their respects! *Skreeee*!;`,
   }
                            
                             });
}
  
                                                  
if(command === "uptime") {
   message.channel.send("", {embed: {
      "color": embedColor, "title": "Braviary's Uptime",
      "description": `**Uptime:** ${prettyMs(Math.round(bot.uptime))}`
    }})
   }



  if(command === 'm') {
    const memberEmbed = new Discord.RichEmbed()
		.setAuthor(message.guild.name, message.guild.iconURL())
		.setColor('embedColor')
		.setThumbnail(message.guild.iconURL())
		.addField('Humans', `**${message.guild.members.filter(member => !member.user.bot).size}**`, true)
		.addField('Member Status', `**${message.guild.members.filter(o => o.presence.status === 'online').size}** Online\n**${message.guild.members.filter(i => i.presence.status === 'idle').size}** Idle/Away\n**${message.guild.members.filter(dnd => dnd.presence.status === 'dnd').size}** Do Not Disturb\n**${message.guild.members.filter(off => off.presence.status === 'offline').size}** Offline/Invisible\n**${message.guild.members.filter(s => s.presence.status === 'streaming').size}** Streaming`)
		.setFooter(`Owner: ${message.guild.owner.user.tag}`)
  return message.channel.send(memberEmbed);

  };
     if(command === 'mute') {
      
    let tomute = message.guild.member(message.mentions.users.first() || message.guild.members.get(args[0]));
    if (!tomute) return message.reply("Couldn't find user.");
    if (tomute.hasPermission("ADMINISTRATOR")) return message.reply("The user chu are trying to mute is either the same, or higher role than chu.");
    let muterole = message.guild.roles.find(`name`, "Muted");

    if (!muterole) {
        try {
            muterole =  message.guild.createRole({
                name: "Muted",
                color: "#000000",
                permissions: []
            })
            message.guild.channels.forEach(async (channel, id) => {
                await channel.overwritePermissions(muterole, {
                    SEND_MESSAGES: false,
                    ADD_REACTIONS: false
                });
            });
        } catch (e) {
            console.log(e.stack);
        }
    }

    let mutetime = args[1];
    if (!mutetime) return message.reply("Chu didn't specify a time!");

   (tomute.addRole(muterole.id));
    message.reply(`<@${tomute.id}> has been muted for ${ms(ms(mutetime))}`);

    setTimeout(function() {
        tomute.removeRole(muterole.id);
        message.channel.send(`<@${tomute.id}> has been unmuted!`);
    }, ms(mutetime));

     }
     }
  const randomizeCase = word => word.split('').map(c => Math.random() > 0.5 ? c.toUpperCase() : c.toLowerCase()).join('');

if(command === "clap") {
    if (args.length < 1) return message.channel.send("**I need some text to clapify.** `ium clap <sentence>`")
    message.channel.send(args.map(randomizeCase).join(`:clap:`));
}
  if(command === 'bal') {
    if(!args[0]) {
      economy.fetchBalance(message.author.id).then ((i) => {
        message.channel.send(`You have ${i.money} Talons`);
      });
      return;
    };
    economy.fetchBalance(message.mentions.users.first().id).then((i) =>{
    message.channel.send(`This user has ${i.money} Talons`);  
    });
    if(command === 'pay') {
    if(message.user.id = '440910866490327042'){
      economy.updateBalance(message.author.id, 10)
      setTimeout(function() {
      economy.fetchBalance(message.author.id).then ((i) => {
      message.channel.send(`**BALANCE UPDATED New Amount of Talons:** ${i.money}`)
      });
      }, 10);  
      return;
    };
      message.channel.send("Chu awen't my trainer *Skreee!*");
    }
    if(command === 'daily' | command === '' ) {
    if(timer[message.author.id] === 1) {
     message.channel.send("Chu already claimed your daily *Braviiiiiary!*")
    }else {
    message.channel.send("Chu have collected your daily *Bravi Braviiii!*")
      economy.updateBalance(message.author.id,50)
      timer[message.author.id] = 1
      
      setTimeout(function(){
        timer[message.author.id] = 0
      }, 300000);
    }
    }
                                                                
  
 
  }
});

bot.login(token);