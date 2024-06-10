import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { BrowsClassService } from './brows-class.service';
import { CreateBrowsClassDto } from './dto/create-brows-class.dto';
import { UpdateBrowsClassDto } from './dto/update-brows-class.dto';
import { SearchDetailsDTO } from 'src/brows-class/dto/search-detail.dto';

@Controller('brows-class')
export class BrowsClassController {
  constructor(private readonly browsClassService: BrowsClassService) {}


  @Post('filter-data')
  async getData(@Body() searchData:SearchDetailsDTO){
    //  console.log(searchData);
     return this.browsClassService.getSearchData(searchData)
     
  }

  
}
