const Discord = require('discord.js');
const client = new Discord.Client();

exports.run = async (client, message) => {
  var m = await message.channel.send(`Bot Aktif Looo`)

};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: `Yetki gerekmiyor.`
};

exports.help = {
  name: 'test',
  category: "genel",
  description: 'Botun çalışıp çalışmadığını anlarsınız',
  usage: 'test'
};