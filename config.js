const fs = require('fs')
const chalk = require('chalk')

global.owner = ['558287515844','558287515844']
global.premium = ['558287515844']
global.packname = 'ｌｏｆｙ- ｂｏｔ'
global.author = 'ウェンデル'
global.sessionName = 'session'
global.prefix = '/'
global.sp = '⭔'
global.mess = {
    success: '✓ Pronto',
    admin: 'So o adm pode usar 🤨!',
    botAdmin: 'O bot deve ser administrador primeiro🥺!',
    owner: 'So meu dono pode usar',
    group: 'Apenas para grupos!',
    private: 'So no pv 😳!',
    bot: 'Oxi 🤨',
    wait: 'Aguarde...',
    endLimit: 'Seu limite diário expirou, o limite será redefinido a cada 12 horas',
}

global.thumb = fs.readFileSync('./lib/menu.jpeg')
global.visoka = { url: 'https://telegra.ph/file/836db4b72230f186a2ac3.gif' }

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
