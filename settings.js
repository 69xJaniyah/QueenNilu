/*
===================================================================================================
💃 𝗤𝘂𝗲𝗲𝗻 𝗡𝗶𝗹𝘂 𝗕𝗼𝘁 𝗠𝗱 💃
   ____                           _   _ _ _       
  / __ \                         | \ | (_) |      
 | |  | |_   _  ___  ___ _ __    |  \| |_| |_   _ 
 | |  | | | | |/ _ \/ _ \ '_ \   | . ` | | | | | |
 | |__| | |_| |  __/  __/ | | |  | |\  | | | |_| |
  \___\_\\__,_|\___|\___|_| |_|  |_| \_|_|_|\__,_|
                                                  
                                                  BY Janiya
===================================================================================================
*/

const fs = require('fs')
const chalk = require('chalk')



//👇 if you need seen massage use " true "
global.READ_MASSAGE = 'false'
//👇 enable desable Girls Voice Reply
global.VOICE_REPLY =  'true'
// You Bots Owner Number 
global.owner = ['94765743034'] 
//👇 Your Caption ( Image Video )
global.cap = '© 𝙶𝙴𝙽𝙴𝚁𝙰𝚃𝙴𝙳 𝙱𝚈 𝚀𝚄𝙴𝙴𝙽 KA𝚆YA ²⁰²³'
//👇 Do you want show time on your bio use "on" want desable use "off"
global.AUTO_BIO =  'off'
//👇 Inbox massage block PM block
global.INBOX_BLOCK =  'off'
//👇 Auto react 
global.AUTO_REACT =  'true'
//👇 Bad word Auto delete ( you must add bad words )
global.ANTI_BADWORD =  'true'
//👇 Your Bot Name
global.botnma =  'Queen Kawya' 
//👇 Your name
global.ownernma =  'JANIYA' 
//👇 Sticker package name
global.packname =  '𝚀𝚄𝙴𝙴𝙽 𝙺𝙰𝚆𝚈𝙰' 
//👇 Sticker Author Name
global.author =  '_JANIYA_' 
//👇 Kick And Auto Delete Group link Senders
global.antilink =  'false'
//👇 Inbox Block Massage 
global.INBOX_BLOCK_MSG = 'BLOCK !!!'
//👇 Owner React Imoji
global.OWNER_REACT =  ''
global.BAD_KICK_MSG = '*Bad word detect !*'
//👇 URL.button 1 name
global.BUTTON1 = '𝙶𝚒𝚝𝚑𝚞𝚋'
//👇 URL button 2 name
global.BUTTON2 = '𝚈𝚘𝚞𝚝𝚞𝚋𝚎'
//👇 Button 1 url 
global.BUTTON1_URL = 'https://github.com/janithsadanuwan/'
//👇 Button 2 url
global.BUTTON2_URL = 'https://youtube.com/c/Janithsadanuwan'
//👇 Your Add Massage 
global.ADD_MSG = '*𝙰𝙻𝚄𝚃𝙷 𝚂𝙰𝙼𝙰𝙹𝙸𝙺𝙰𝚈𝙴𝙺 𝙰𝚆𝙰*' 
//👇 Your Kick Massage 
global.KICK_MSG = '*𝙼𝚄𝙽𝙰𝙼 𝙷𝙸𝚃𝙸𝚈𝙰𝚃𝙷 𝚆𝙰𝙳𝙰𝙺 𝙽𝙰*' 
//👇 Song Download Massage 
global.SONG_DOWN = '```𝙿𝙾𝙳𝙳𝙰𝙺 𝙷𝙸𝚃𝙰𝙷𝙰𝙼...```' 
//👇 Song Uplode massage 
global.SONG_UP = '```𝙸𝚆𝙰𝚂𝙰𝙶𝙴𝙽𝙰 𝙸𝙳𝙰𝙷𝙰𝙼 𝙿𝙾𝙳𝙳𝙰𝙺...```'
//👇 212 Number block
global.NUMBER_212_BLOCK = 'true'
//👇 Menu imoji 
global.MENU_IMOJI = '👸|🪄'
//👇 Your time zone ( use correct time zone )
global.TIME_ZONE = process.env.TIME_ZONE || 'Asia/Colombo'
//👇 Removebg Api key
global.REMOVE_BG_API = ''
//👇 Pron Video Download 
global.SEX_VIDEO_DOWNLOAD = process.env.SEX_VIDEO_DOWNLOAD || 'true'
//👇 Change Bot Language (English-' EN ', Sinhala , ' SI ' , Tamil - ' TL ')
global.LANG = 'SI'
//Alive logo
global.alivelogo = process.env.ALIVE_IMAGE || `https://te.legra.ph/file/3e57249993356ba15109f.jpg`
//👇 Alive message
global.ALIVE_MESSAGE = process.env.ALIVE_MESSAGE || `𝙼𝙰𝙼𝙰 𝙾𝙽𝙻𝙰𝚈𝙸𝙽 𝚃𝙷𝙰𝙼𝙰𝚈𝙸 𝙱𝙰𝙽`
//👇 Welcome Mesaage
global.WELCOME = process.env.WELCOME || `𝚂𝙰𝙳𝙰𝚁𝙰𝚈𝙴𝙽 𝙿𝙸𝙻𝙸𝙶𝙰𝙽𝙽𝙰𝚆𝙰 `
//👇 welcome image 
global.WELCOME_IMAGE = process.env.WELCOME_IMAGE || ``
//👇 Goodbye message 
global.GOODBYE = process.env.GOODBYE || `𝚄 𝙷𝙸𝚃𝙸𝚈𝙰𝚃𝙷 𝚆𝙰𝙳𝙰𝙺 𝙽𝙰𝙽𝙴 𝙱𝙰𝙽 `
//👇 Good bye image
global.GOODBYE_IMAGE = process.env.GOODBYE_IMAGE || ``
//👇 Send Welcome ( true or false )
global.SEND_WELCOME = process.env.SEND_WELCOME || true
//👇 Send block command message (true or false )
global.BLOCK_CMD_MESSAGE_SEND = false
//👇 Desable PM Block
global.NO_BLOCK = ["94767438882"]







//MORE
global.zenzapi = '01ABEB1E11'
global.tiktokthub = 'https://telegra.ph/file/d83742c9e0a076364184e.jpg'
//other
global.pemilik = ['94767438882'] //Change  it , ඔබට කැමති නම් වෙනස් කරන්න
global.premium = ['94767438882'] //Change it ඔබට කැමතිනම් වෙනස් කරන්න 
global.pengguna = '_Janiya_' // Your name ඔබේ නම 
global.sessionName = 'session'
global.prefix = ['#','!','.'] 
global.sp = '🔵'


global.mess = {
    success: '✅ Done!',
    admin: '*Only admins can use this command !*',
    botAdmin: '*Please admin the bot first !*',
    owner: '*Sorry, this command is only for the owner !*',
    group: '*This command can only be used in groups !*',
    private: '*This command can only be used in Inbox !*',
    bot: '*This command can only be used by bot number !*',
    wait: '*♲ Please Wait ...*',
    endLimit: 'Your Daily Limit Has Expired, The Limit Will Be Reset Every 12 Hours',
    BLOCK_CMD_MSG : '*⚠️ This Command is Block By Owner*',
    BLOCK : '',
    UNBLOCK : '',
    KICK : '',
    ADD : '',
    LEAVE : '',
    PROMOTE : '',
    DEMOTE : ''
}
global.limitawal = {
    premium: "Infinity", 
    free: 90 
}
    global.rpg = {
        darahawal: 100,
        besiawal: 15,
        goldawal: 10,
        emeraldawal: 5,
        umpanawal: 5,
        potionawal: 1
     }    




//global api
global.fbapi = 'dd79-1aeb-21a3'
global.APIs = {
	zenz: 'https://zenzapi.xyz', 
}
global.APIKeys = {
	'https://zenzapi.xyz': '01ABEB1E11', //Kalau habis beli sendiri
}

global.thumb = fs.readFileSync('./Media/image/Nilu.jpg')
global.alivelogo = `https://te.legra.ph/file/3e57249993356ba15109f.jpg`
global.imgalive = fs.readFileSync('./Media/image/Nilu.jpg')
let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
