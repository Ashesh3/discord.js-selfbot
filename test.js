const Discord = require('./src');

const client = new Discord.Client();

client.on('ready', () => {
    console.log(`Logged in as ${client.user.tag}!`);
});

client.on('messageCreate', (message) => {
    console.log(message.content);
    console.log(message.components);

});

client.login("TOKEN");