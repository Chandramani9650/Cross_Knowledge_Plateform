const nodemailer = require('nodemailer')

const transport = nodemailer.createTransport({
    service:'gmail',
    port: process.env.MAIL_PORT,
    auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
    },
})