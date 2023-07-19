import { IsNumber,MinLength, IsPositive,IsString, minLength, IsInt, Min } from "class-validator";

export class CreatePokemonDto {


    @MinLength(1)
    @IsString()
    name : string;

    @IsInt()
    @IsPositive()
    @Min(1)
    no : number;

}
