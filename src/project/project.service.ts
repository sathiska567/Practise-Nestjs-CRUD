import { Injectable } from '@nestjs/common';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectDto } from './dto/update-project.dto';
import { InjectModel } from '@nestjs/mongoose';
import { project, ProjectDocument,projectSchema } from './schemas/project.schema';
import {Model} from 'mongoose';

@Injectable()
export class ProjectService {
    constructor(
       @InjectModel(project.name) 
       private projectModel:Model<ProjectDocument>
    ){}


    async findAll():Promise<project>{
       const books = await this.projectModel.find();
       return books;
    }

}
