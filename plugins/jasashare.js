let handler = async m => m.reply(`
𝐋𝐢𝐬𝐭 𝐉𝐚𝐬𝐚 𝐒𝐡𝐚𝐫𝐞 𝐤𝐞 𝟐𝟓𝟔 𝐠𝐜 𝐥𝐚𝐝𝐢𝐞𝐬
🍰𝟏𝐱 𝟐𝟎𝟎𝐩
🍰𝟐𝐱 𝟒𝟎𝟎𝐩
🍰𝟑𝐱 𝟔𝟎𝟎𝐩
🍰𝟒𝐱 𝟕𝟓𝟎𝐩
┈─  ꕀ  ──  ꕀ  ──  ꕀ   ─┈
𝐋𝐢𝐬𝐭 𝐣𝐚𝐬𝐚 𝐩𝐞𝐫𝐦𝐞𝐧𝐢𝐭 𝐤𝐞 𝟑𝟑𝟎++ 𝐠𝐜 𝐥𝐚𝐝𝐢𝐞𝐬
🍰𝟏𝟎 𝐦𝐞𝐧𝐢𝐭 𝟕𝟎𝟎𝐩
🍰𝟐𝟎 𝐦𝐞𝐧𝐢𝐭 𝟏,𝟐𝐤
𝐃𝐢𝐣𝐞𝐝𝐚 𝟏 𝐦𝐞𝐧𝐢𝐭 𝐲𝐚 𝐠𝐞𝐬𝐬 𝐲𝐚
`.trim()) // Tambah sendiri kalo mau
handler.help = ['js']
handler.tags = ['store']
handler.command = /^(js)$/i

handler.limit = false

module.exports = handler
