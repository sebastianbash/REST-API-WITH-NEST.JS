import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose'

@Module({
  imports: [UserModule, MongooseModule.forRoot('mongodb+srv://mpgsebas:mpgsebas2609@cluster0.mrnsx.mongodb.net/mpgnotes?retryWrites=true&w=majority')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}