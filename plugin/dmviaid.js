let handler = async m => m.reply(`
𝐎𝐩𝐞𝐧 𝐑 𝐃𝐦 𝐕𝐢𝐚 𝐢𝐝

🐣 𝟓  𝐃𝐌    : 𝟖𝟎𝟏
🐣 𝟐𝟎 𝐃𝐌    : 𝟐.𝟔𝟕𝟎
🐣 𝟓𝟎 𝐃𝐌    : 𝟔.𝟒𝟎𝟖
🐣 𝟕𝟎 𝐃𝐌    : 𝟖.𝟖𝟏𝟏
🐣 𝟏𝟎𝟎 𝐃𝐌    : 𝟏𝟐.𝟖𝟏𝟔
🐣 𝟏𝟒𝟎 𝐃𝐌    : 𝟏𝟕.𝟔𝟐𝟐
🐣 𝟐𝟏𝟎 𝐃𝐌    : 𝟐𝟔.𝟒𝟑𝟑
🐣 𝟑𝟓𝟓 𝐃𝐌    : 𝟒𝟒.𝟎𝟓𝟓
🐣 𝟓𝟎𝟎 𝐃𝐌    : 𝟔𝟐.𝟒𝟕𝟖
🐣 𝟕𝟐𝟎 𝐃𝐌    : 𝟖𝟖.𝟏𝟏𝟎

🐣 𝐌. 𝐌𝐢𝐧𝐠𝐠𝐮𝐚𝐧 : 𝟐𝟔.𝟕𝟎𝟎
🐣 𝐌. 𝐁𝐮𝐥𝐚𝐧𝐚𝐧 : -
`.trim()) // Tambah sendiri kalo mau
handler.help = ['dmviaid']
handler.tags = ['store']
handler.command = /^(dmviaid)$/i

module.exports = handler
