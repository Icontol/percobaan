import fs from 'fs'
import fetch from 'node-fetch'

let handler = async(m, { conn, text, usedPrefix: _p }) => {
let list = `
┏━━━━━━━━━━━━━━━━━━━━┅
┇  *「 Sukses Menonaktifkan Fitur 」*
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
    thumbnail: await (await fetch(`https://telegra.ph/file/2cb377366f990d128aede.jpg`)).buffer()
      }}
     })
}    
handler.command = /^fituroff$/i

handler.owner = true

export default handler
