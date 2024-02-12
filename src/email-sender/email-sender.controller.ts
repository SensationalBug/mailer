import { EmailSenderService } from './email-sender.service';
import { Body, Controller, Post } from '@nestjs/common';
import { SubjectDto } from './dto/email-sender.dto';

@Controller('email-sender')
export class EmailSenderController {
  constructor(private emailSenderService: EmailSenderService) {}
  @Post()
  sendEmail(@Body() subject: SubjectDto) {
    return this.emailSenderService.sendEmail(subject);
  }
}
