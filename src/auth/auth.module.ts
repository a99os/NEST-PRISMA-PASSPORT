import { forwardRef, Module } from '@nestjs/common';
import { APP_GUARD } from '@nestjs/core';
import { JwtModule } from '@nestjs/jwt';
import { PrismaModule } from 'src/prisma/prisma.module';
import { AccessTokenGuard } from '../common/guards';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import {
  AccessTokenStrategy,
  RefreshTokenFromCookieStrategy,
  RefreshTokenStrategy,
} from './strategies';

@Module({
  imports: [JwtModule.register({}), forwardRef(() => PrismaModule)],
  controllers: [AuthController],
  providers: [
    AuthService,
    AccessTokenStrategy,
    RefreshTokenFromCookieStrategy,
    RefreshTokenStrategy,
    {
      provide: APP_GUARD,
      useClass: AccessTokenGuard,
    },
  ],
})
export class AuthModule {}
