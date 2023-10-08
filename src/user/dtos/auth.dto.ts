import { UserType } from "@prisma/client";
import { IsString ,IsNotEmpty, Matches, IsEmail, MinLength, IsEnum, IsOptional} from "class-validator";

  
  
export class SignupDto {
  @IsString() 
  @IsNotEmpty()
  name: string;

  @Matches(/^(?:(?:\+|00)33[\s.-]{0,3}(?:\(0\)[\s.-]{0,3})?|0)[1-9](?:(?:[\s.-]?\d{2}){4}|\d{2}(?:[\s.-]?\d{3}){2})$/, {message: 'telephone invalide'})
  phone: string;

  @IsEmail() 
  email: string;

  @IsString()
  @MinLength(5)
  password: string;

  @IsOptional() 
  @IsString() 
  @IsNotEmpty()
  productKey?: string
}

export class SigninDto {
  @IsEmail() 
  email: string;

  @IsString() 
  password: string;
}
export class generateProductKeyDto {
  @IsEmail() 
  email: string;

  @IsEnum(UserType)
  userType: UserType 
  
}