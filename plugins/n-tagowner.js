let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Sayanggg, Ada Yang Manggil Tuhhh😊
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@6285346545126/i
handler.command = new RegExp

module.exports = handler