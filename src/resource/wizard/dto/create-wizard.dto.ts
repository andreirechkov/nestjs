import { IsEnum, IsString } from "class-validator";
import { QuizType } from "../enums";

export class CreateWizardDto {
  @IsString()
  public readonly description: string;

  @IsEnum(QuizType)
  public readonly type: QuizType;
}
