import {ApiProperty} from '@nestjs/swagger';
import { IsEmail, IsString } from 'class-validator';
import {AUTH_USER_EMAIL_NOT_VALID} from '../auth.constant';

export class CreateUserDto {
  @ApiProperty({
    description: 'User unique address',
    example: 'user@user.ru',
  })
  @IsEmail(
    {},
    {message: AUTH_USER_EMAIL_NOT_VALID},
  )
  public email: string;

  @ApiProperty({
    description: 'User name',
    example: 'Keks',
  })
  @IsString()
  public userName: string;

  @ApiProperty({
    description: 'User password',
    example: '123456'
  })
  @IsString()
  public password: string;
}
