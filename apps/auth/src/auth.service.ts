import { Injectable } from '@nestjs/common';
import {generateCode, UsersModel} from "@app/common";
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { CreateUserDto } from './dto/ctrateUser.dto';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService
  ) { }
  async getAllUsers(): Promise<any> {
    try {
      const users = await UsersModel.query()
      return users
    } catch (error) {
      console.log("error", error);

    }

  }

  //login  by username and password
  async signin(req: any) {
    const user = await UsersModel.query().findOne('users.username', req.username)
    console.log("user", user);

    if (user == null) return { msg: "User does not exist!", user: user }

    if (await bcrypt.compare(req.password, user.password)) {
      const accessToken = await this.generateToken({ user: user.id })
      return { token: accessToken, user: user }
    }
    else {
      return ("Password Incorrect!")
    }
  }

  async createUser(request: CreateUserDto) {
    const users = await UsersModel.query().findOne('users.username', request.username)
    if (users != null) return { msg: "User  exist!", user: users }

    // async function generateOTP() {
    const hashedPassword = await bcrypt.hash(request.password, 10)
    // request.verify_code = rndInt;
    const newUser ={
      username: request.username,
      email: request.email,
      password: hashedPassword,
      mobile:request.mobile,
      verify_code:generateCode(),//
      code:request.code
    }
    const user = await UsersModel.query().insert(newUser)

    // const body = (request)
    const accessToken = await this.generateToken({ user: request.username })
    console.log(request.email)

    if (user) {
      // await createAndSendConfirmationCodeMail(request.email, rndInt, "register-confirmation");
    }
    //console.log("user",user)
    //console.log({ "user": user, "password": hashedPassword })
    return { "user": user, "token": accessToken }
  }

  private async generateToken(user :any) {
    const token = await this.jwtService.signAsync(user, { secret: process.env.JWT_KEY });
    return token;
  }
}
