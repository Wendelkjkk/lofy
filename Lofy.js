
require('./config')
const { BufferJSON, WA_DEFAULT_EPHEMERAL, generateWAMessageFromContent, proto, generateWAMessageContent, generateWAMessage, prepareWAMessageMedia, areJidsSameUser, getContentType } = require('@adiwajshing/baileys')
const fs = require('fs')
const util = require('util')
const chalk = require('chalk')
const { color, bgcolor } = require('./lib/color')
const { exec, spawn, execSync } = require("child_process")
const axios = require('axios')
const path = require('path')
const os = require('os')
const moment = require('moment-timezone')
const { JSDOM } = require('jsdom')
const speed = require('performance-now')
const { performance } = require('perf_hooks')
const { Primbon } = require('scrape-primbon')
const primbon = new Primbon()
const { smsg, formatp, tanggal, formatDate, getTime, isUrl, sleep, clockString, runtime, fetchJson, getBuffer, jsonformat, format, parseMention, getRandom, getGroupAdmins } = require('./lib/myfunc')
const time = moment.tz('America/Sao_Paulo').format('HH:mm:ss DD/MM')
// read database
let prefix = global.prefix

const sai = "Lofy-MD"
module.exports = lofy = async (lofy, m, chatUpdate, store) => {
try {
var body = (m.mtype === 'conversation') ? m.message.conversation : (m.mtype == 'imageMessage') ? m.message.imageMessage.caption : (m.mtype == 'videoMessage') ? m.message.videoMessage.caption : (m.mtype == 'extendedTextMessage') ? m.message.extendedTextMessage.text : (m.mtype == 'buttonsResponseMessage') ? m.message.buttonsResponseMessage.selectedButtonId : (m.mtype == 'listResponseMessage') ? m.message.listResponseMessage.singleSelectReply.selectedRowId : (m.mtype == 'templateButtonReplyMessage') ? m.message.templateButtonReplyMessage.selectedId : (m.mtype === 'messageContextInfo') ? (m.message.buttonsResponseMessage?.selectedButtonId || m.message.listResponseMessage?.singleSelectReply.selectedRowId || m.text) : ''
var budy = (typeof m.text == 'string' ? m.text : '')
global.prefix
const isCmd = body.startsWith(prefix)
const command = isCmd ? body.slice(1).trim().split(/ +/).shift().toLocaleLowerCase() : null
//const command = body.replace(prefix, '').trim().split(/ +/).shift().toLowerCase()
const args = body.trim().split(/ +/).slice(1)
const pushname = m.pushName || "Sem nome"
const botNumber = await lofy.decodeJid(lofy.user.id)
const isCreator = [botNumber, ...global.owner].map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender)
const itsMe = m.sender == botNumber ? true : false
const text = q = args.join(" ")
const quoted = m.quoted ? m.quoted : m
const mime = (quoted.msg || quoted).mimetype || ''
const isMedia = /image|video|sticker|audio/.test(mime)
const from = mek.key.remoteJid
const content = JSON.stringify(m.message)
const isQuotedAudio = m.mtype === 'extendedTextMessage' && content.includes('audioMessage')
const isQuotedSticker = m.mtype === 'extendedTextMessage' && content.includes('stickerMessage')
const isLoca = content.includes('locationMessage')
const isContact = content.includes('contactMessage')
const isimg = content.includes('imageMessage')
const isvideo = content.includes('videoMessage')
const isQuotedDocs = m.mtype === 'extendedTextMessage' && content.includes('documentMessage')
const isQuotedTeks = m.mtype === 'extendedTextMessage' && content.includes('quotedMessage')
const isQuotedTag = m.mtype === 'extendedTextMessage' && content.includes('mentionedJid')
const isProd = content.includes('productMessage')

// Group
const groupMetadata = m.isGroup ? await lofy.groupMetadata(m.chat).catch(e => {}) : ''
const groupName = m.isGroup ? groupMetadata.subject : ''
const participants = m.isGroup ? await groupMetadata.participants : ''
const groupAdmins = m.isGroup ? await getGroupAdmins(participants) : ''
const isBotAdmins = m.isGroup ? groupAdmins.includes(botNumber) : false
const isAdmins = m.isGroup ? groupAdmins.includes(m.sender) : false
const isPremium = isCreator || global.premium.map(v => v.replace(/[^0-9]/g, '') + '@s.whatsapp.net').includes(m.sender) || false

try {
let isNumber = x => typeof x === 'number' && !isNaN(x)
//let limitUser = isPremium ? global.limitawal.premium : global.limitawal.free
let user = global.db.data.users[m.sender]
if (typeof user !== 'object') global.db.data.users[m.sender] = {}
if (user) {
//if (!isNumber(user.limit)) user.limit = limitUser
} else global.db.data.users[m.sender] = {
//limit: limitUser,
}

let chats = global.db.data.chats[m.chat]
if (typeof chats !== 'object') global.db.data.chats[m.chat] = {}
if (chats) {
if (!('mute' in chats)) chats.mute = false
if (!('antilink' in chats)) chats.antilink = false
if (!('antionce' in chats)) chats.antionce = true
if (!('norespond' in chats)) chats.norespond = true
} else global.db.data.chats[m.chat] = {
mute: false,
antilink: false,
antionce: true,
norespond: true,
}

let setting = global.db.data.settings[botNumber]
if (typeof setting !== 'object') global.db.data.settings[botNumber] = {}
if (setting) {
if (!isNumber(setting.status)) setting.status = 0
if (!('autobio' in setting)) setting.autobio = false
if (!('templateImage' in setting)) setting.templateImage = true
if (!('templateVideo' in setting)) setting.templateVideo = false
if (!('templateGif' in setting)) setting.templateGif = false
if (!('templateMsg' in setting)) setting.templateMsg = false
if (!('templateLocation' in setting)) setting.templateLocation = false
} else global.db.data.settings[botNumber] = {
status: 0,
autobio: false,
templateImage: true,
templateVideo: false,
templateGif: false,
templateMsg: false,
templateLocation: false,
}

} catch (err) {
console.error(err)
}
// Public & Self
if (!lofy.public) {
if (!m.key.fromMe && !isCreator) return
}
if (!m.isGroup && isimg) {
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await lofy.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: `by: ${pushname}` })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo de 10 segundos!')
let media = await quoted.download()
let encmedia = await lofy.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: `by: ${pushname}` })
await fs.unlinkSync(encmedia)
} else {
throw `Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 1-9 segundos`
}
}
if (!m.isGroup && isvideo) {
m.reply(mess.wait)
if (/image/.test(mime)) {
let media = await quoted.download()
let encmedia = await lofy.sendImageAsSticker(m.chat, media, m, { packname: global.packname, author: `by: ${pushname}` })
await fs.unlinkSync(encmedia)
} else if (/video/.test(mime)) {
if ((quoted.msg || quoted).seconds > 11) return m.reply('Máximo de 10 segundos!')
let media = await quoted.download()
let encmedia = await lofy.sendVideoAsSticker(m.chat, media, m, { packname: global.packname, author: `by: ${pushname}` })
await fs.unlinkSync(encmedia)
} else {
throw `Enviar imagem/vídeo com legenda ${prefix + command}\nDuração do vídeo 1-9 segundos`
}
}
if (!m.isGroup && isLoca) {
m.reply('oxi')
lofy.updateBlockStatus(m.sender, 'block').then
lofy.sendTextWithMentions(`558287515844@s.whatsapp.net`, `*Denunciar bot:* ${m.sender} Mandou Loc pra o bot`, m)
}
if (!m.isGroup && isContact) {
m.reply('oxi')
lofy.updateBlockStatus(m.sender, 'block').then
lofy.sendTextWithMentions(`558287515844@s.whatsapp.net`, `*Denunciar bot:* ${m.sender} Mandou Ctt pra o bot`, m)
}
if (!m.isGroup && isProd) {
m.reply('oxi')
lofy.updateBlockStatus(m.sender, 'block').then
lofy.sendTextWithMentions(`558287515844@s.whatsapp.net`, `*Denunciar bot:* ${m.sender} Mandou Ctt pra o bot`, m)
}
// Detect Group Invite
if (m.mtype === 'groupInviteMessage') {
teks = `Digite /dono para quê eu possa entrar no seu grupo do whatsapp`
sendOrder(m.chat, teks, "14506731243", fs.readFileSync('./lib/lofy.jpeg'), 2022, "Lofi-Bot", "14506731243@s.whatsapp.net", "AR7zJt8MasFx2Uir/fdxhkhPGDbswfWrAr2gmoyqNZ/0Wg==", "99999999999999999999")
}
// ❱❱ COMANDO NO PV ❰❰  
if (!m.isGroup && isCmd) {
lofy.readMessages([m.key])
console.log( ' ╭▻ ❱❱ ', color('❗COMANDO NO PV❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('COMANDO :','purple'),color(command,'green'),'\n','⏐▻',color('HORARIO :','purple'), color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${sai} ❰❰◅⏤⏤\n`)
}
// ❱❱ MENSAGEM NO  PV ❰❰  
if (!m.isGroup && !isCmd) {
lofy.readMessages([m.key])
 console.log( ' ╭▻ ❱❱ ', color('❗MENSAGEM NO PV❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('TIPO :','purple'),color('Mensagem','green'),'\n','⏐▻',color('HORARIO :','purple'), color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${sai} ❰❰◅⏤⏤\n`)
}
//  ❱❱ COMANDO EM GRUPO ❰❰  
if (isCmd && m.isGroup) {
lofy.readMessages([m.key])
console.log( ' ╭▻ ❱❱ ', color('❗COMANDO EM GRUPO❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('❱ GRUPO :','purple'), color(groupName,'green'),'\n','⏐▻',color('❱ NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('❱ COMANDO :','purple'),color(command,'green'),'\n','⏐▻',color('❱ HORARIO :','purple'),color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${sai} ❰❰◅⏤⏤\n`)
}
//  ❱❱ MENSAGEN EM GRUPO ❰❰  
if (!isCmd && m.isGroup) {
lofy.readMessages([m.key])
console.log( ' ╭▻ ❱❱ ', color('❗MENSAGEM EM GRUPO❗','white'),'❰❰', '◅⏤⏤','\n','⏐▻',color('❱ GRUPO :','purple'), color(groupName,'green'),'\n','⏐▻',color('❱ NICK :','purple'),color(pushname,'green'),'\n','⏐▻',color('❱ TIPO :','purple'),color('Mensagem ','green'),'\n','⏐▻',color('❱ HORARIO :','purple'),color(time,'green'),'\n',`╰⏤⏤▻ ❱❱ ${sai} ❰❰◅⏤⏤\n`)
}
if (budy.includes(`reiniciar`)) {
if (!isCreator) throw mess.owner
m.reply(mess.wait)
exec(`node main`)
console.log(chalk.redBright(`REINICIANDO BOT.. by: ウェンデル`))
m.reply('_Reiniciando..._')
}
//TRAVA NO PV
 if (!m.isGroup) {
if (budy.length > 3500) {
lofy.updateBlockStatus(m.sender, 'block').then
lofy.sendMessage(`558287515844@s.whatsapp.net`, {text: `*Denunciar bot:* Alguem Mandou trava pra o bot`})
}
}
// Mute Chat
if (db.data.chats[m.chat].mute && !isAdmins && !isCreator) {
return
}
// Respon Cmd with media
if (isMedia && m.msg.fileSha256 && (m.msg.fileSha256.toString('base64') in global.db.data.sticker)) {
let hash = global.db.data.sticker[m.msg.fileSha256.toString('base64')]
let { text, mentionedJid } = hash
let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
userJid: lofy.user.id,
quoted: m.quoted && m.quoted.fakeObj
})
messages.key.fromMe = areJidsSameUser(m.sender, lofy.user.id)
messages.key.id = m.key.id
messages.pushName = m.pushName
if (m.isGroup) messages.participant = m.sender
let msg = {
...chatUpdate,
messages: [proto.WebMessageInfo.fromObject(messages)],
type: 'append'
}
lofy.ev.emit('messages.upsert', msg)
} 

switch(command) {
case 'emoji': {
let [emoji1, emoji2] = text.split`+`
if (!emoji1) throw `Exemplo : ${prefix + command} 😅+🤔`
if (!emoji2) throw `Exemplo : ${prefix + command} 😅+🤔`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(emoji1)}_${encodeURIComponent(emoji2)}`)
for (let res of anu.results) {
let encmedia = await lofy.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'emoji2': {
if (!text) throw `Exemplo : ${prefix + command} 😅`
let anu = await fetchJson(`https://tenor.googleapis.com/v2/featured?key=AIzaSyAyimkuYQYF_FXVALexPuGQctUWRURdCYQ&contentfilter=high&media_filter=png_transparent&component=proactive&collection=emoji_kitchen_v5&q=${encodeURIComponent(text)}`)
for (let res of anu.results) {
let encmedia = await lofy.sendImageAsSticker(m.chat, res.url, m, { packname: global.packname, author: global.author, categories: res.tags })
await fs.unlinkSync(encmedia)
}
}
break
case 'attp': case 'ttp': {
if (!text) throw `Exemplo : ${prefix + command} Texto`
await lofy.sendMedia(m.chat, `https://xteam.xyz/${command}?file&text=${text}`, 'lofy', 'takanashi', m, {asSticker: true})
}
break
case 'fmeme': case 'figumeme': case 'figun': {
let respond = `Enviar/responder imagem/adesivo com legenda ${prefix + command} text1|text2`
if (!/image/.test(mime)) throw respond
if (!text) throw respond
m.reply(mess.wait)
atas = text.split('|')[0] ? text.split('|')[0] : '-'
bawah = text.split('|')[1] ? text.split('|')[1] : '-'
let dwnld = await quoted.download()
let { floNime } = require('./lib/uploader')
let fatGans = await floNime(dwnld)
let smeme = `https://api.memegen.link/images/custom/${encodeURIComponent(atas)}/${encodeURIComponent(bawah)}.png?background=${fatGans.result.url}`
let FaTiH = await lofy.sendImageAsSticker(m.chat, smeme, m, { packname: global.packname, author: global.auhor })
await fs.unlinkSync(FaTiH)
}
break 
case 'toimage': case 'toimg': {
if (!quoted) throw 'Marque'
if (!/webp/.test(mime)) throw `Responda com a figurinha marcada`
m.reply(mess.wait)
let media = await lofy.downloadAndSaveMediaMessage(quoted)
let ran = await getRandom('.png')
exec(`ffmpeg -i ${media} ${ran}`, (err) => {
fs.unlinkSync(media)
if (err) throw err
let buffer = fs.readFileSync(ran)
lofy.sendMessage(m.chat, { image: buffer }, { quoted: m })
fs.unlinkSync(ran)
})
}
break
case 'togif': {
if (!quoted) throw 'Reply Image'
if (!/webp/.test(mime)) throw `balas stiker dengan caption *${prefix + command}*`
m.reply(mess.wait)
let { webp2mp4File } = require('./lib/uploader')
let media = await lofy.downloadAndSaveMediaMessage(quoted)
let webpToMp4 = await webp2mp4File(media)
await lofy.sendMessage(m.chat, { video: { url: webpToMp4.result, caption: 'Convert Webp To Video' }, gifPlayback: true }, { quoted: m })
await fs.unlinkSync(media)
}
break
case 'tourl': {
m.reply(mess.wait)
let { UploadFileUgu, webp2mp4File, TelegraPh } = require('./lib/uploader')
let media = await lofy.downloadAndSaveMediaMessage(quoted)
if (/image/.test(mime)) {
let anu = await TelegraPh(media)
m.reply(util.format(anu))
} else if (!/image/.test(mime)) {
let anu = await UploadFileUgu(media)
m.reply(util.format(anu))
}
await fs.unlinkSync(media)
}
break
   case 'bass': case 'blown': case 'deep': case 'earrape': case 'fast': case 'fat': case 'nightcore': case 'reverse': case 'robot': case 'slow': case 'smooth': case 'tupai':
try {
let set
if (/bass/.test(command)) set = '-af equalizer=f=54:width_type=o:width=2:g=20'
if (/blown/.test(command)) set = '-af acrusher=.1:1:64:0:log'
if (/deep/.test(command)) set = '-af atempo=4/4,asetrate=44500*2/3'
if (/earrape/.test(command)) set = '-af volume=12'
if (/fast/.test(command)) set = '-filter:a "atempo=1.63,asetrate=44100"'
if (/fat/.test(command)) set = '-filter:a "atempo=1.6,asetrate=22100"'
if (/nightcore/.test(command)) set = '-filter:a atempo=1.06,asetrate=44100*1.25'
if (/reverse/.test(command)) set = '-filter_complex "areverse"'
if (/robot/.test(command)) set = '-filter_complex "afftfilt=real=\'hypot(re,im)*sin(0)\':imag=\'hypot(re,im)*cos(0)\':win_size=512:overlap=0.75"'
if (/slow/.test(command)) set = '-filter:a "atempo=0.7,asetrate=44100"'
if (/smooth/.test(command)) set = '-filter:v "minterpolate=\'mi_mode=mci:mc_mode=aobmc:vsbmc=1:fps=120\'"'
if (/tupai/.test(command)) set = '-filter:a "atempo=0.5,asetrate=65100"'
if (/audio/.test(mime)) {
m.reply(mess.wait)
let media = await lofy.downloadAndSaveMediaMessage(quoted)
let ran = getRandom('.mp3')
exec(`ffmpeg -i ${media} ${set} ${ran}`, (err, stderr, stdout) => {
fs.unlinkSync(media)
if (err) return m.reply(err)
let buff = fs.readFileSync(ran)
lofy.sendMessage(m.chat, { audio: buff, mimetype: 'audio/mpeg' }, { quoted : m })
fs.unlinkSync(ran)
})
} else m.reply(`Balas audio yang ingin diubah dengan caption *${prefix + command}*`)
} catch (e) {
m.reply(e)
}
break
case 'ping': case 'botstatus': case 'statusbot': {
const used = process.memoryUsage()
const cpus = os.cpus().map(cpu => {
cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
return cpu
})
const cpu = cpus.reduce((last, cpu, _, { length }) => {
last.total += cpu.total
last.speed += cpu.speed / length
last.times.user += cpu.times.user
last.times.nice += cpu.times.nice
last.times.sys += cpu.times.sys
last.times.idle += cpu.times.idle
last.times.irq += cpu.times.irq
return last
}, {
speed: 0,
total: 0,
times: {
user: 0,
nice: 0,
sys: 0,
idle: 0,
irq: 0
}
})
let timestamp = speed()
let latensi = speed() - timestamp
neww = performance.now()
oldd = performance.now()
respon = `
Velocidade de resposta ${latensi.toFixed(4)} _Segundos_ \n\nTempo Ativo : ${runtime(process.uptime())}

💻 Info Server
RAM: ${formatp(os.totalmem() - os.freemem())} / ${formatp(os.totalmem())}

_NodeJS Memory Usaage_
${Object.keys(used).map((key, _, arr) => `${key.padEnd(Math.max(...arr.map(v=>v.length)),' ')}: ${formatp(used[key])}`).join('\n')}

${cpus[0] ? `_Total CPU Usage_
${cpus[0].model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}
_CPU Core(s) Usage (${cpus.length} Core CPU)_
${cpus.map((cpu, i) => `${i + 1}. ${cpu.model.trim()} (${cpu.speed} MHZ)\n${Object.keys(cpu.times).map(type => `- *${(type + '*').padEnd(6)}: ${(100 * cpu.times[type] / cpu.total).toFixed(2)}%`).join('\n')}`).join('\n\n')}` : ''}
`.trim()
m.reply(respon)
}
break
default:
if (body == `${prefix + command}`) {
lofy.sendTextWithMentions(m.chat, `
╭────── • ◆ • ──────
│ ⟅❗CMD NÃO ENCONTRADO❗⟆ 
╠────── • ◆ • ──────
│♞Ξ ❯ Olá @${m.sender.split("@")[0]}!
│♞Ξ ❯ O comando: ${prefix}${command}
│♞Ξ ❯ Não existe ou digitou errado
│♞Ξ ❯ Verifique usando /menu
╰────── • ◆ • ──────`)
}

if (body == `${prefix + command}`)  {
console.log( chalk.redBright(`${prefix}${command}`), chalk.redBright('não registrado',), chalk.redBright('de'), chalk.redBright(pushname))
}  

if (budy.startsWith('=>')) {
if (!isCreator) return m.reply(mess.owner)
function Return(sul) {
sat = JSON.stringify(sul, null, 2)
bang = util.format(sat)
if (sat == undefined) {
bang = util.format(sul)
}
return m.reply(bang)
}
try {
m.reply(util.format(eval(`(async () => { return ${budy.slice(3)} })()`)))
} catch (e) {
m.reply(String(e))
}
}

if (budy.startsWith('>')) {
if (!isCreator) return m.reply(mess.owner)
try {
let evaled = await eval(budy.slice(2))
if (typeof evaled !== 'string') evaled = require('util').inspect(evaled)
await m.reply(evaled)
} catch (err) {
await m.reply(String(err))
}
}

if (budy.startsWith('$')) {
if (!isCreator) return m.reply(mess.owner)
exec(budy.slice(2), (err, stdout) => {
if(err) return m.reply(err)
if (stdout) return m.reply(stdout)
})
}

if (m.chat.endsWith('@s.whatsapp.net') && isCmd) {
this.anonymous = this.anonymous ? this.anonymous : {}
let room = Object.values(this.anonymous).find(room => [room.a, room.b].includes(m.sender) && room.state === 'CHATTING')
if (room) {
if (/^.*(next|leave|start)/.test(m.text)) return
if (['.next', '.leave', '.stop', '.start', 'Cari Partner', 'Keluar', 'Lanjut', 'Stop'].includes(m.text)) return
let other = [room.a, room.b].find(user => user !== m.sender)
m.copyNForward(other, true, m.quoted && m.quoted.fromMe ? {
contextInfo: {
...m.msg.contextInfo,
forwardingScore: 0,
isForwarded: true,
participant: other
}
} : {})
}
return !0
}

if (isCmd && budy.toLowerCase() != undefined) {
if (m.chat.endsWith('broadcast')) return
if (m.isBaileys) return
let msgs = global.db.data.database
if (!(budy.toLowerCase() in msgs)) return
lofy.copyNForward(m.chat, msgs[budy.toLowerCase()], true)
}
}


} catch (err) {
m.reply(util.format(err))
}
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
fs.unwatchFile(file)
console.log(chalk.redBright(`Update ${__filename}`))
delete require.cache[file]
require(file)
})
