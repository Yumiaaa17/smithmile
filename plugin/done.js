let handler = async m => m.reply(`
*STATUS PESANAN*

*𝑆𝑡𝑎𝑡𝑢𝑠 𝑃𝑒𝑠𝑎𝑛𝑎𝑛 : 𝑆𝑒𝑙𝑒𝑠𝑎𝑖*

*𝑇𝑒𝑟𝑖𝑚𝑎 𝐾𝑎𝑠𝑖ℎ 𝑑𝑢𝑖𝑡𝑛𝑦𝑎 𝑗𝑎𝑛𝑔𝑎𝑛 𝑙𝑢𝑝𝑎 𝑜𝑟𝑑𝑒𝑟 𝑙𝑎𝑔𝑖*

- 𝑌𝑢𝑚𝑖><

`.trim()) // Tambah sendiri kalo mau
handler.help = ['done']
handler.tags = ['store']
handler.customPrefix = /^done$/i
handler.command = new RegExp

handler.admin = true

handler.limit = false

module.exports = handler
