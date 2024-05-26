import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put, Query, UseGuards, ValidationPipe } from '@nestjs/common';
import { CreatePractiseDto } from './dto/create-practise.dto';
import { UpdatePractiseDto } from './dto/update-practise.dto';
import { PractiseService } from './practise.service';
import { BeltGuard } from 'src/belt/belt.guard';

@Controller('practise')     // ->  /practise/...
// @UseGuards(BeltGuard)
export class PractiseController {
   constructor(private readonly practiseService:PractiseService){}

// GET  /practise?weapon=fast --> []
@Get()
 getPractise(@Query('weapon') weapon:'stars' | 'nunchucks'){
   // const service = new PractiseService();
   //  return service.getPractise(weapon);

   return this.practiseService.getPractise(weapon);
 }

// GET  /practise/:id --> {...}

@Get(":id")
// getOnePractise(@Param('id' , ParseIntPipe) id:string){
getOnePractise(@Param('id' , ParseIntPipe) id:number){
   //   return {
   //    //   userId:id      
   //   }  
   
   // return this.practiseService.getPractiseById(+id);   //  + <- add this plus icon to convert string to number  
   try {
      return this.practiseService.getPractiseById(id); 
   } catch (error) {
      throw new NotFoundException();
   }
}

// POST /practise 
@Post()
@UseGuards(BeltGuard)
createPractise(@Body(new ValidationPipe()) createPractiseDto:CreatePractiseDto){            // CreatePractiseDto -> same as model (req.body)
   //  return {
   //      userName:createPractiseDto.name,  
   //  }    
   return this.practiseService.createPractise(createPractiseDto);
}

// PUT  /practise/:id --> {...}
@Put(':id')
updatePractise(@Param('id') id:string , @Body() updatePractiseDto:UpdatePractiseDto){     // UpdatePractiseDto -> same as model (req.body)
   //   return {
   //      userId:id,
   //      userName:updatePractiseDto.name,
   //   } 
   
   return this.practiseService.updatePractise(+id,updatePractiseDto);
}

// DELETE /practise/:id
@Delete(":id")
removePractise(@Param('id') id:string){
   // return {
   //      userId:id
   // }

   return this.practiseService.removePractise(+id);

}


}

