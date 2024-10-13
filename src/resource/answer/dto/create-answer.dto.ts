import { IsString } from "class-validator";

export class CreateAnswerDto {
  @IsString()
  public readonly title: string;

  @IsString()
  public readonly wizardId: string;
}
