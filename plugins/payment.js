let handler = async m => m.reply(`
𝐏𝐚𝐲𝐦𝐞𝐧𝐭 

*g᥆⍴ᥲу : sᥴᥲᥒ kᥲ𝗍ᥲᥣ᥆g*
*ძᥲᥒᥲ,᥆᥎᥆,sһ᥆⍴ᥱᥱ,ᥲ𝗍ᥲᥙ уg ᑲᥱᥣᥙm ⍴rᥱm ᑲіsᥲ ⍴ᥲkᥱ 𝗊rіs ᥲᥣᥣ⍴ᥲуmᥱᥒ𝗍 𝖿ᥱᥱ 80⍴*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['pay']
handler.tags = ['store']
handler.customPrefix = /^pay$/i
handler.command = new RegExp

handler.limit = false

module.exports = handler
