import { IsEmail, IsString, IsNotEmpty } from 'class-validator';
export class AuthDto {
  @IsNotEmpty()
  @IsEmail()
  readonly email: string;
  @IsNotEmpty()
  @IsString()
  readonly password: string;
}
