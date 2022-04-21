import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserController } from './user.controller';
import { PostController } from './post.controller';

@Module({
  imports: [],
  controllers: [AppController, UserController, PostController],
  providers: [AppService],
})
export class AppModule {}
