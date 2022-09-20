import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DesignModule } from './design/design.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, DesignModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}