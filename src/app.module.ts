import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { PostController } from './post.controller';
import { UserService } from './user.service';
import { PrismaService } from './prisma.service';
import { DrumService } from './drum/drum.service';
import { DrumController } from './drum/drum.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, PostController, DrumController],
  providers: [AppService, UserService, PrismaService, DrumService],
})
export class AppModule {}
