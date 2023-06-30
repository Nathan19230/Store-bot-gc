/*
    Created & Base By NATHAN OFIC 27
    Jual Sc? Neraka Paling Bawah
    My Contact https://wa.me/6287870356915
    
   Notes:
   Jika Ingin Recode Silakan Tapi Ingat Creditnya
   Sc Adrian-MD Akan Terus Di Update.
   Jika Ingin Beli Apikey Chat Owner Lolhuman
   
*/

const fs = require('fs')
const chalk = require('chalk')

global.apikey = '-' // LOLHUMAN
global.rosekey = '-' // ROSE

//—————「 Set Nama Bot & Own 」—————//
global.namabot = 'Store-Bot V1.3'
global.namaowner = 'NATHAN OFFICIAL 27'

//—————「 Setting Owner 」—————//
global.owner = ['6285813708397']
global.nomerowner = '6285813708397'
global.premium = ['6285813708397']

//—————「 Set Wm 」—————//
global.packname = '𝚂𝚃𝙸𝙲𝙺𝙴𝚁 𝙱𝚈 𝙰𝙳𝚁𝙸𝙰𝙽𝙱𝙾𝚃\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n'
global.author = '𝙹𝙰𝙽𝙶𝙰𝙽 𝙻𝚄𝙿𝙰 𝚂𝚄𝙱𝚂𝙲𝚁𝙸𝙱𝙴\n𝚈𝚃:FallXD425'
global.prefa = ['', '.']
global.sp = '•'

//—————「 Set Message 」—————//
global.mess = {
    success: '🤗Done, Oke Desu~',
    admin: '❗Perintah Ini Hanya Bisa Digunakan Oleh Admin Group !',
    botAdmin: '❗Perintah Ini Hanya Bisa Digunakan Ketika Bot Menjadi Admin Group !',
    owner: '❗Perintah Ini Hanya Bisa Digunakan Oleh Owner !',
    group: '❗Perintah Ini Hanya Bisa Digunakan Di Group Chat !',
    private: '❗Perintah Ini Hanya Bisa Digunakan Di Private Chat !',
    bot: '🤖 Fitur Khusus Pengguna Nomor Bot !',
    wait: '⏳ Sedang Di Proses !',
    endLimit: '🕊️ Limit Harian Anda Telah Habis, Limit Akan Direset Setiap Jam 12 !',
    error: '🚫 Fitur Sedang Error !',
}

//—————「 Set Welcome 」—————//
if (!islnit) {
  conn.welcome = '✧━━━━━━[ *WELCOME* ]━━━━━━✧\n\n┏––––––━━━━━━━━•\n│⫹⫺ @subject\n┣━━━━━━━━┅┅┅\n│( 👋 Hallo @user selamat datang di @subject semoga betah di sini ya terimakasih..)\n├[ *INTRO* ]—\n│ *•Nama:* \n│ *•Gender:* \n│ *•Askot:*\n |│ *•Status:*\n┗––––––━━┅┅┅\n\n––––––┅┅ *DESCRIPTION* ┅┅––––––\n@desc'
  conn.bye = '✧━━━━━━[ *GOOD BYE* ]━━━━━━✧\nSelamat tinggal *@user* Kami bakalan merindukanmu😭☺️'
  islint= false
  return true
}

//—————「 Set Limit 」—————//
global.limitawal = {
    premium: "Infinity",
    free: 50
}

//—————「 Set Image 」—————//
global.imageurl = 'https://telegra.ph/file/6d78dbc8e389cf01b79cf.jpg'
global.link = 'https://youtube.com/@NATHAN_OFFICIAL_27'
global.thumb = fs.readFileSync('./media/thumb.jpg')

//—————「 Batas Akhir 」—————//
let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update'${__filename}'`))
    delete require.cache[file]
    require(file)
})
