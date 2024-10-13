import { Module } from '@nestjs/common';
import { WizardService } from './wizard.service';
import { WizardController } from './wizard.controller';
import { TypeOrmModule } from "@nestjs/typeorm";
import { Wizard } from "./entities/wizard.entity";

@Module({
  imports: [TypeOrmModule.forFeature([Wizard])],
  controllers: [WizardController],
  providers: [WizardService],
})
export class WizardModule {}
