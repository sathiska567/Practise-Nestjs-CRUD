import { Module } from '@nestjs/common';
import { ProjectService } from './project.service';
import { ProjectController } from './project.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { project, projectSchema } from './schemas/project.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: project.name, schema: projectSchema }])],
  controllers: [ProjectController],
  providers: [ProjectService],
})
export class ProjectModule {}
