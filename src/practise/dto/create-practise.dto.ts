import { IsEnum, MinLength } from 'class-validator'


export class CreatePractiseDto {
        @MinLength(3)
        name:string;

        // @IsEnum(['stars','nunchucks'],{message:'Use correct weapon'})
        weapon:'stars' | 'nunchucks'    
}
