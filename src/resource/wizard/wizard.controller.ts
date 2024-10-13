import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { WizardService } from './wizard.service';
import { Wizard } from "./entities/wizard.entity";
import { CreateWizardDto } from "./dto/create-wizard.dto";

@Controller('api/wizards')
export class WizardController {
  constructor(private readonly wizardService: WizardService) {}

  @Get()
  public list(): Promise<Wizard[]> {
    return this.wizardService.findAll();
  }

  @Post()
  public create(@Body() dto: CreateWizardDto): Promise<Wizard> {
    return this.wizardService.create(dto);
  }

  @Delete(':id')
  public delete(@Param('id') id: string): Promise<void> {
    return this.wizardService.delete(id);
  }
}
