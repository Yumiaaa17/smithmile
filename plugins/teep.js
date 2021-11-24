let handler = async m => m.reply(`

CARA TRANSFER ANTAR PAYMENT

🌀OVO KE GOPAY🌀

BANK CIMB NIAGA

2849 + NOMOR GOPAY

🌀OVO KE DANA🌀

BANK CIMB NIAGA

8059 + NOMOR DANA

🌀GOPAY KE OVO🌀

BANK CIMB NIAGA SYARIAH

8099 + NOMOR OVO

🌀DANA KE OVO🌀

BANK CIMB NIAGA

8099 + NOMOR OVO

🌀GOPAY KE DANA🌀

BANK CIMB NIAGA

8059 + NOMOR DANA

🌀DANA KE GOPAY🌀

PERMATA BANK

898 + NOMOR GOPAY

NB: *Sertakan bukti transfer*

`.trim()) // Tambah sendiri kalo mau

handler.help = ['teep']

handler.tags = ['store']

handler.command = /^(teep)$/i

handler.limit = false

module.exports = handler

