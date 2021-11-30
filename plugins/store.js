let fetch = require('node-fetch')
let { MessageType } = require('@adiwajshing/baileys')
let handler = async(m, { conn }) => {
    let kontol = `Silahkan Pilih Dibawah
    `.trim()
    const button = {
        buttonText: 'List Harga',
        description: kontol,
        sections:  [{title: "Silahkan di pilih 😇", rows: [
        {title: '𝐃𝐌 𝐯𝐢𝐚 𝐢𝐝', description: "", rowId:".dmviaid"},
        {title: '𝐆𝐚𝐫𝐞𝐧𝐚 𝐒𝐡𝐞𝐥𝐥', description: "", rowId:".garenashell"},
        {title: '𝐉𝐚𝐬𝐚 𝐬𝐡𝐚𝐫𝐞', description: "", rowId:".js"},
        {title: '𝐀𝐥𝐥 𝐞𝐝𝐢𝐭 𝐥𝐨𝐠𝐨', description: "", rowId:"."},
        {title: '𝐀𝐥𝐥 𝐧𝐨𝐤𝐨𝐬', description: "", rowId:".allnokos"},
        {title: '𝐄𝐝𝐢𝐭 𝐉𝐉', description: "", rowId:".editjj"},
        {title: '𝐀𝐥𝐥 𝐏𝐮𝐥𝐬𝐚', description: "", rowId:".allpulsa"},
        {title: '𝐏𝐚𝐤𝐞𝐭 𝐝𝐚𝐭𝐚', description: "", rowId:"."},
        {title: '𝐊𝐞𝐛𝐮𝐭𝐮𝐡𝐚𝐧 𝐬𝐨𝐬𝐦𝐞𝐝', description: "", rowId:"."},
        {title: '𝐉𝐚𝐬𝐚 𝐁𝐮𝐤𝐚 𝐖𝐀 𝐤𝐞 𝐛𝐥𝐨𝐤𝐢𝐫', description: "", rowId:".bukablokir"},
       ] }],
        listType: 1
       }
    conn.sendMessage(m.chat, button, MessageType.listMessage, { quoted: m })
}
handler.tags = ['list']
handler.customPrefix = /^list$/i
handler.command = new RegExp
module.exports = handler
