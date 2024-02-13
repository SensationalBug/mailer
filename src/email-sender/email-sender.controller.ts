import { EmailSenderService } from './email-sender.service';
import { Body, Controller, Post } from '@nestjs/common';
import { RecipientDto } from './dto/email-sender.dto';

@Controller('email-sender')
export class EmailSenderController {
  constructor(private emailSenderService: EmailSenderService) {}
  @Post()
  sendEmail(@Body() recipient: RecipientDto) {
    return this.emailSenderService.sendEmail(recipient);
  }
}
