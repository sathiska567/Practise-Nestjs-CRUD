import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { ProjectService } from './project.service';
import { CreateProjectDto } from './dto/create-project.dto';
import { UpdateProjectStatusDto } from './dto/update-project.dto';
import { User } from './schemas/project.schema';

@Controller('project')
export class ProjectController {
        
  constructor(private readonly ProjectService: ProjectService) {}
  
  @Post('create')
  async createUser(@Body() createProjectDto: User){
     return this.ProjectService.createUser(createProjectDto)  
  }

  @Get('readData')
   readUser(){
        return this.ProjectService.readUser()  
  }

  @Put(':id')
  async updateUser(@Param('id') id:string , @Body() updateProjectDto: UpdateProjectStatusDto) : Promise<User>{
      return this.ProjectService.updatUser(id,updateProjectDto)
  }

  @Delete(':id')
  async deleteUser(@Param('id') id:string){
          
      return this.ProjectService.deleteUser(id)
  }

}
