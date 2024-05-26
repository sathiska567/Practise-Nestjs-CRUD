import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export enum Category{
   ADVENTURE='adventure',
   CLASSICS = 'Classics',
   CRIME = 'crime',
   FANTASY = 'fantasy',
}

export type ProjectDocument = project & Document;


@Schema()
export class project {
    @Prop({ required: true }) 
    title: string;

    @Prop()  
    description: string;

    @Prop()  
    author: string;

    @Prop()  
    price: number;
    
    @Prop()
    category: Category;

}


export const projectSchema = SchemaFactory.createForClass(project);