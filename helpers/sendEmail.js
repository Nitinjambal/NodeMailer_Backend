import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    secure: true,
    auth: {
        // TODO: replace `user` and `pass` values from <https://forwardemail.net>
        user: 'nitinjam8800@gmail.com',
        pass: 'dioudnmzmclwkdxr'
    },
    tls: {
        rejectUnauthorized: false // Disable certificate verification
    }
});

// async..await is not allowed in global scope, must use a wrapper
async function sendMail(to,subject, text) {
    // send mail with defined transport object
    await transporter.sendMail({
        from: 'nitinjam8800@gmail.com',
        to,
        subject,
        text,
    });
}

export default sendMail;