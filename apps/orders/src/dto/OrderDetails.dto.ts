import { ArrayMinSize, IsArray, IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, ValidateNested } from "class-validator";


export class OrderDetailsDto {

    readonly amount: number;

    readonly numbmenu_categories_itemIder: number;

    readonly notes: number;

    @IsArray()
    @IsString({ each: true })
    @ArrayMinSize(1)
    recipients: string[];
    readonly order_details_options: string[]
    readonly total:number
}