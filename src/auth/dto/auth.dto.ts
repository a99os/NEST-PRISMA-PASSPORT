import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
export class AuthDto {
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
