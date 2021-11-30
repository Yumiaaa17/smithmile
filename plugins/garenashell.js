let handler = async m => m.reply(`
𝐋𝐢𝐬𝐭 𝐆𝐒
🍰 𝟑𝟑 𝐠𝐬 𝟖.𝟓𝟎𝟎-𝟖.𝟖𝟎𝟎
🍰 𝟔𝟔 𝐠𝐬 𝟏𝟕.𝟑𝟎𝟎-𝟏𝟕.𝟓𝟎𝟎
🍰 𝟑𝟑𝟎 𝐠𝐬 𝟖𝟕.𝟖𝟎𝟎-𝟖𝟖.𝟏𝟎𝟎
`.trim()) // Tambah sendiri kalo mau
handler.help = ['garenashell']
handler.tags = ['store']
handler.command = /^(garenashell)$/i

handler.limit = false

module.exports = handler
