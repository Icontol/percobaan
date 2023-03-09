import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let list = `
┏━━━━━━━━━━━━━━━━━━━━┅
┇  *「 Sukses Mengaktifkan Fitur 」*
┗━━━━━━━━━━━━━━━━━━━━┅
`.trim()// Tambah sendiri kalo mau
await conn.reply(m.chat, list, 0, {
    contextInfo: { mentionedJid: [m.sender],
    externalAdReply :{
    mediaUrl: '',
    mediaType: 2,
    title: global.wm, 
    body: 'Ini Aku Saranin Kak',  
    sourceUrl: 'https://chat.whatsapp.com/EPmjuw9X1wZDGX1p4NCV1e', 
    thumbnail: await (await fetch(`https://telegra.ph/file/96938a7edf09f5511ce10.jpg`)).buffer()
      }}
     })
}    
handler.command = /^fituron$/i

handler.owner = true

export default handler
