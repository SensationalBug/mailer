import { Injectable } from '@nestjs/common';
import { SubjectDto } from './dto/email-sender.dto';
import { transportConfig } from './transport/transport-config';
import nodemailer from 'nodemailer';

@Injectable()
export class EmailSenderService {
  sendEmail(subject: SubjectDto) {
    // const transporter = nodemailer.createTransport(transportConfig);
    console.log(nodemailer);
  }
}
