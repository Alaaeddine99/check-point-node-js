const nodemailer = require('nodemailer');

// Create a transporter object using the SMTP transport
let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587, // or 465 for secure
    secure: false, // true for port 465, false for other ports
    auth: {
        user: 'ala.maamer12@gmail.com', // your email address
        pass: 'rmhiodmbnxebmykb' // your email password or app password
    },
    tls: {
        rejectUnauthorized: false // allow self-signed certificates
    }
});

// Set up email data with unicode symbols
let mailOptions = {
    from: '"alaa" <ala.maamer12@gmail.com>', // sender address
    to: 'BenSalah.Meriem0@gmail.com', // list of receivers
    subject: 'Hello ✔', // Subject line
    text: 'Hello world?', // plain text body
    html: '<b>Hello world?</b>' // html body
};

// Send mail with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        return console.log(error);
    }
    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
});
