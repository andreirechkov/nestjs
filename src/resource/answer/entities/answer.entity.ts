import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Wizard } from "../../wizard/entities/wizard.entity";

@Entity()
export class Answer {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @ManyToOne(() => Wizard, item => item.answers)
  wizard: Wizard;

  @Column()
  wizardId: string;
}
