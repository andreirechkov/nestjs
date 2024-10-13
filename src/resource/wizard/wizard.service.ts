import { Injectable } from '@nestjs/common';
import { CreateWizardDto } from './dto/create-wizard.dto';
import { Wizard } from "./entities/wizard.entity";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";

@Injectable()
export class WizardService {
  constructor(
    @InjectRepository(Wizard) private readonly _wizardRepository: Repository<Wizard>
  ) {};

  async findAll(): Promise<Wizard[]>{
    return await this._wizardRepository.find({
      order: { position: "ASC" },
      relations: { answers: true },
    });
  }

  async create(dto: CreateWizardDto): Promise<Wizard> {
    let newWizard: Wizard = new Wizard();
    newWizard.position = await this._wizardRepository.count() + 1;
    newWizard.type = dto.type;
    newWizard.description = dto.description;
    return await this._wizardRepository.save(newWizard);
  }

  async delete(id: string): Promise<void> {
    const record: Wizard = await this._wizardRepository.findOne({ where: { id }});
    await this._wizardRepository.remove(record);
  }
}
