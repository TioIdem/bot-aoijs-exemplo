//setup do bot
const Aoijs = require('aoi.js');
const config = require('./config.js');
const bot = new Aoijs.Bot(config.Bot);
const fs = require('fs');

//obter os status, variaveis e callbacks👍
require('./handler/status')(bot)
require('./handler/variables')(bot)
require('./handler/callbacks')(bot)


//carregando os comandos👍
const loader = new Aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")

//obtém a pasta e os arquivos de eventos👌
const files = fs.readdirSync('./events').filter(file => file.endsWith('.js'))
files.forEach( x => {
require(`./events/${x}`)(bot)
});  
