import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DbModule } from './db/db.module';
import { WizardModule } from './resource/wizard/wizard.module';
import { AnswerModule } from './resource/answer/answer.module';

@Module({
  imports: [DbModule, WizardModule, AnswerModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
