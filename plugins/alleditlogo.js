let handler = async m => m.reply(`
𝐀𝐥𝐥 𝐞𝐝𝐢𝐭
- 𝐒𝐨𝐥𝐨 : 𝟑𝟎𝟎𝐩
- 𝐃𝐮𝐨 : 𝟒𝟎𝟎𝐩
- 𝐒𝐪𝐮𝐚𝐝 : 𝟓𝟎𝟎𝐩
𝐋𝐨𝐠𝐨 𝐓𝐞𝐚𝐦,𝐠𝐮𝐢𝐥𝐝,𝐬𝐞𝐫𝐭𝐢𝐟 𝐬𝐭𝐚𝐫𝐭 𝐡𝐚𝐫𝐠𝐚 𝟏𝟎𝟎𝐩 - 𝟏𝐤 𝐭𝐞𝐫𝐠𝐚𝐧𝐭𝐮𝐧𝐠.
🏵️ 𝐄𝐝𝐢𝐭 𝐧𝐨 𝐩𝐚𝐬𝐚𝐫𝐚𝐧 𝐨𝐧𝐥𝐲 𝐛𝐮𝐚𝐭𝐚𝐧 𝐨𝐰𝐧𝐞𝐫 𝐬𝐭𝐚𝐫𝐭 𝟕𝟎𝟎𝐩 - 𝟏,𝟓𝐤 𝐭𝐞𝐫𝐠𝐚𝐧𝐭𝐮𝐧𝐠 𝐤𝐞𝐬𝐮𝐥𝐢𝐭𝐚𝐧 𝐝𝐚𝐧 𝐤𝐞𝐫𝐢𝐛𝐞𝐭𝐚𝐧
`.trim()) // Tambah sendiri kalo mau
handler.help = ['alleditlogo']
handler.tags = ['store']
handler.command = /^(alleditlogo)$/i

handler.limit = false

module.exports = handler
