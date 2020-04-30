const sgMail = require('@sendgrid/mail')

sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cedric.louis@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how you get along with the app`,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    })
}

const sendCancellationAccount = (email, name) => {
    sgMail.send({
        to: email,
        from: 'cedric.louis@gmail.com',
        subject: 'Good bye!',
        text: `Thanks to have used the app, ${name}. Let me know how you feel with the app`,
        // html: '<strong>and easy to do anywhere, even with Node.js</strong>',
    })
}


module.exports = {
    sendWelcomeEmail,
    sendCancellationAccount
}