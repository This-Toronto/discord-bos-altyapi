const Discord = require("discord.js");
const ayarlar = require('../ayarlar.json');

module.exports = async client => {

  client.user.setPresence({ activity: { type: "PLAYING", name: `Toronto Boş Altyapı`}, status: 'idle' })

};
