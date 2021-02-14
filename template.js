const Discord = require("discord.js");
const client = new Discord.Client();
const prefix = "";
var tokenn = ("")//process.env.DISCORDTOKEN
client.once('ready', () => {
client.user.setPresence({status:'idle', activity: {status:'idle', name:"Template",type: "WATCHING"}});
	 console.log("we are in");
})
client.on("message", (message) => {
if(message.content == "ping"){
	message.channel.send('Latency: ' + Math.round(client.ws.ping) + ' ms')
}
});	
client.login(tokenn);