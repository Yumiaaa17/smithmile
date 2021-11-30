 let handler = async m => m.reply(`
𝐉𝐚𝐬𝐚 𝐁𝐮𝐤𝐚 𝐖𝐀 𝐤𝐞 𝐛𝐥𝐨𝐤𝐢𝐫
🍰 𝟏 𝐍𝐨𝐦𝐨𝐫 𝐤𝐞 𝐛𝐥𝐨𝐤 : 𝟖𝟎𝟎𝐩
🍰 𝟐 𝐍𝐨𝐦𝐨𝐫 𝐤𝐞 𝐛𝐥𝐨𝐤 : 𝟏,𝟑𝐤
🍰 𝟑 𝐍𝐨𝐦𝐨𝐫 𝐤𝐞 𝐛𝐥𝐨𝐤 : 𝟏,𝟖𝐤
`.trim()) // Tambah sendiri kalo mau
handler.help = ['bukablokir']
handler.tags = ['store']
handler.command = /^(bukablokir)$/i

handler.limit = false

module.exports = handler
