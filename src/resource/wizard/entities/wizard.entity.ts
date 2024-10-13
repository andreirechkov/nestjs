import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Answer } from "../../answer/entities/answer.entity";
import { QuizType } from "../enums";

@Entity()
export class Wizard {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  position: number;

  @Column({ nullable: true })
  description: string;

  @Column({ default: QuizType.Text, enum: QuizType })
  type: QuizType;

  @OneToMany(() => Answer, (item: Answer) => item.wizard)
  answers: Answer[];
}
