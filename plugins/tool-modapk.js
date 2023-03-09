let handler = async m => m.reply(`
www.apkshub.com
`.trim()) // Tambah sendiri kalo mau
handler.help = ['modapk']
handler.tags = ['tools']
handler.command = /^(modapk)$/i

export default handler 
