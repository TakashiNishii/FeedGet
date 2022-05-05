import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({ //criando o transporte para o nodemailer
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "4b17b1b018d944",
      pass: "88d2c360627bfe"
    }
});

export class NodemailerMailAdapter implements MailAdapter {
    async sendMail({subject, body}: SendMailData) {
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Takashi Nishi <ygortn14@gmail.com>',
        subject,
        html: body,
    });
    }
} 