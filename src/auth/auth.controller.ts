import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Param,
  Post,
  Res,
} from '@nestjs/common';
import { GetCurrentUserId, Public } from '../common/decorators';
import { AuthService } from './auth.service';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @Post('signup')
  @HttpCode(HttpStatus.CREATED)
  signup(@Body() authDto: AuthDto): Promise<Tokens> {
    return this.authService.signup(authDto);
  }

  @Public()
  @Post('signin')
  @HttpCode(HttpStatus.CREATED)
  async signin(@Body() authDto: AuthDto): Promise<Tokens> {
    return await this.authService.signin(authDto);
  }

  @Post('logaut')
  @HttpCode(HttpStatus.CREATED)
  logaut(
    @GetCurrentUserId() userId: number,
    @Res({ passthrough: true }) res,
  ): Promise<boolean> {
    res.clearCookie('refresh_token');
    return this.authService.logout(userId);
  }
}
