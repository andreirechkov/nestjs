import { Injectable } from '@nestjs/common';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { InjectRepository } from "@nestjs/typeorm";
import { Answer } from "./entities/answer.entity";
import { Repository } from "typeorm";

@Injectable()
export class AnswerService {
  constructor(
    @InjectRepository(Answer) private readonly answerRepository: Repository<Answer>
  ) {}

  async create(dto: CreateAnswerDto): Promise<Answer> {
    let newAnswer: Answer = new Answer();
    newAnswer.title = dto.title;
    newAnswer.wizardId = dto.wizardId;
    return await this.answerRepository.save(newAnswer);
  }
}
