import { Injectable } from '@nestjs/common';
import { CreatePractiseDto } from './dto/create-practise.dto';
import { UpdatePractiseDto } from './dto/update-practise.dto';

@Injectable()
export class PractiseService {
        private practise = [
            {id: 1, name: 'Practise 1' , weapon:'stars'},
            {id: 2, name: 'Practise 2' , weapon:'swords'},
        ];

        getPractise(weapon ?: 'stars' | 'nunchucks') {
           if(weapon){
             return this.practise.filter(practise => practise.weapon === weapon);
           }

           return this.practise;
        }

        getPractiseById(id: number) {
             const practise = this.practise.find(practise => practise.id === id);
             if(!practise){
                 throw new Error('Practise not found');
             }

             return practise;
        }

        createPractise(createPractiseDto: CreatePractiseDto){
           const newpractise = {
                ...createPractiseDto,
                id:Date.now()
           }

           this.practise.push(newpractise);

           return newpractise;
        }

        updatePractise(id: number, updatePractiseDto: UpdatePractiseDto) {
                // Ensure `this.getPractiseById(id)` is a valid method, if used.
               this.practise = this.practise.map((item) => {
                    if (item.id === id) {
                        return {
                            ...item,
                            ...updatePractiseDto
                        };
                    }
                    return item;
                });

                return this.getPractiseById(id);
            }
            
            

        removePractise(id: number){
           const toBeRemoved = this.getPractiseById(id);

           this.practise = this.practise.filter(practise => practise.id !== id);

           return toBeRemoved
        }


}

