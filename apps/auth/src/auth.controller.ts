import { Body, Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateUserDto } from './dto/ctrateUser.dto';

@Controller()
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get("users")
  getْUsers(): any {

    return this.authService.getAllUsers();
  }


  @Post('login')
  async login(@Body() req: any) {
    console.log("user",req);
    return await this.authService.signin(req); 
  }

  @Post('createUser')
  async signUp(@Body() user: CreateUserDto) {

    return await this.authService.createUser(user);
  }






}
