import { Injectable } from '@nestjs/common';
import { createTransport } from 'nodemailer';
import { RecipientDto } from './dto/email-sender.dto';
import { transportConfig } from './transport/transport-config';

@Injectable()
export class EmailSenderService {
  private transporter = createTransport(transportConfig);
  sendEmail(recipient: RecipientDto) {
    const mailOptions = {
      from: 'Esto es un asunto de prueba',
      to: recipient.recipient,
      subject: 'Esto es un correo de prueba',
      html: '<p style="font-size: 16px;">¡Gracias por usar nuestros servicios!</p>',
    };
    this.transporter.verify((error, success) => {
      if (success) {
        return this.transporter.sendMail(mailOptions);
      } else {
        console.log(`error: ${error}`);
      }
    });
  }
}
