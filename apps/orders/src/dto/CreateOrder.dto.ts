import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNumber, IsString, MinLength, ValidateNested } from "class-validator";
import { OrderDetailsDto } from "./OrderDetails.dto";

export class CreateOrderDto {


    @Type(() => OrderDetailsDto)
    @ValidateNested()
    readonly order_details: OrderDetailsDto

    @IsNotEmpty()
    readonly billing_address_id: number;
    
    @IsNotEmpty()
    readonly branch_id: number;

    @IsNotEmpty()
    readonly discount: number;

    @IsNotEmpty()
    readonly notes: string;

    @IsNotEmpty()
    readonly offer_discount: number;

    @IsNotEmpty()
    readonly offer_id: number;
    
    @IsNotEmpty()
    readonly paymenttype_id: number;
    
    @IsNotEmpty()
    readonly taxes: number;
    
    @IsNotEmpty()
    readonly total: number;
   
    @IsNotEmpty()
    readonly user_id: number;
   

    @IsNotEmpty()
    readonly wallet_discount: number;

    @IsNotEmpty()
    readonly wallets_id: number;

     created:Date

     commission:number
}