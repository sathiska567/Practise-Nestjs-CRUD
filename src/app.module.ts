import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PractiseModule } from './practise/practise.module';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { ProjectModule } from './project/project.module';
// import config from './config/keys';
import { ConfigModule } from '@nestjs/config';
import { RegisterUserModule } from './register-user/register-user.module';
import { JwtModule } from '@nestjs/jwt';
import { AddCreateDetailsModule } from './add-create-details/add-create-details.module';


@Module({
  // imports: [
  //   MongooseModule.forRoot(config.mongoURL), //for root is used for connecting to mongodb
  //   PractiseModule, 
  //   UsersModule, ProjectModule,
  // ],

  imports: [
    ConfigModule.forRoot({
      envFilePath:'.env',
      isGlobal:true
    }),

    MongooseModule.forRoot(process.env.MONGO_URL),
  
    // register the jwt service
    JwtModule.registerAsync({
      useFactory: async() => ({
        secret: process.env.JWT_SECRET,
        signOptions: {
          expiresIn: '60s',
        },
      }),
    }),

    // ProjectModule,
    RegisterUserModule,

    AddCreateDetailsModule,
  ],
  
  controllers: [AppController],
  providers: [AppService],
})


export class AppModule {}
