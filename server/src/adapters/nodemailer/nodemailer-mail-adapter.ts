import { MailAdapter, SendMailData } from "../mail-adapter";
import nodemailer from 'nodemailer'

const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "87e7e016c75ee2",
    pass: "29744cfa7dbc5a"
  }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
     await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: ' Leonardo Chagas <leochagas09@hotmail.com>',
        subject,
        html: body,
    })

    }
}