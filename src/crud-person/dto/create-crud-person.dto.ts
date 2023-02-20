import { IsString, IsInt, Min, IsEmail } from "class-validator";

export class CreateCrudPersonDto {
    @IsString()
     name: string;

    @IsInt()
    @Min(1)
     age: number;

    @IsString({each: true})
    @IsEmail()
     email: string;
}
