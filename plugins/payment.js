let handler = async m => m.reply(`
𝐏𝐚𝐲𝐦𝐞𝐧𝐭
*g᥆⍴ᥲу : sᥴᥲᥒ kᥲ𝗍ᥲᥣ᥆g*
*ძᥲᥒᥲ,᥆᥎᥆,sһ᥆⍴ᥱᥱ,ᥲ𝗍ᥲᥙ уg ᑲᥱᥣᥙm ⍴rᥱm ᑲіsᥲ ⍴ᥲkᥱ 𝗊rіs ᥲᥣᥣ⍴ᥲуmᥱᥒ𝗍 mіᥒіm 𝗍rх 1k*
`.trim()) // Tambah sendiri kalo mau
handler.help = ['pay']
handler.tags = ['store']
handler.customPrefix = /^pay$/i
handler.command = new RegExp

handler.limit = false

module.exports = handler
