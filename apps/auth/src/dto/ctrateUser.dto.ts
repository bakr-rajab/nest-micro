import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
// enum Gender {
//     MALE = 'male',
//     FEMALE = 'female',
// }

export class CreateUserDto {

    @IsNotEmpty()
    @IsString()
    readonly mobile: string;

    @IsNotEmpty()
    readonly code: number;
    
    @IsNotEmpty()
    readonly verify_code: number;

    @IsNotEmpty()
    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    readonly username: string;

    @IsNotEmpty()
    @MinLength(6)
    readonly password: string;
}