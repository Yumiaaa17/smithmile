let handler = async m => m.reply(`
𝐏𝐚𝐲𝐦𝐞𝐧𝐭 

*g᥆⍴ᥲу : sᥴᥲᥒ kᥲ𝗍ᥲᥣ᥆g*
*ძᥲᥒᥲ,᥆᥎᥆,sһ᥆⍴ᥱᥱ,ᥲ𝗍ᥲᥙ уg ᑲᥱᥣᥙm ⍴rᥱm ᑲіsᥲ ⍴ᥲkᥱ 𝗊rіs ᥲᥣᥣ⍴ᥲуmᥱᥒ𝗍 𝖿ᥱᥱ 80⍴*

𝐒𝐜𝐚𝐧 𝐚𝐝𝐚 𝐝𝐢 𝐨𝐰𝐧𝐞𝐫 ( https://wa.me/c/62857376972022  )
`.trim()) // Tambah sendiri kalo mau
handler.help = ['pay']
handler.tags = ['store']
handler.customPrefix = /^pay$/i
handler.command = new RegExp

handler.limit = false

module.exports = handler
