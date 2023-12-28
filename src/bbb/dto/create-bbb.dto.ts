import { Optional } from "@nestjs/common";
import { IsInt,IsString,IsNotEmpty } from "class-validator";

export class CreateBbbDto {
    @IsInt()
    json:number
    @IsString()
    @IsNotEmpty()
    age:string
    @IsString()
    @IsNotEmpty({
        message(args){
            return args.property+'参数不能为空'
        }
    })
    fox:string
}
