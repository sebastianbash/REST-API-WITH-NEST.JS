import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Res,
  HttpStatus,
  Body,
  Param,
  NotFoundException,
  Query,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/user.dto';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}
  @Post('/create')
  async createPost(@Res() res, @Body() createUserDTO: CreateUserDTO) {
    // this is for looking the new user in the console, delete after dev
    // console.log(createUserDTO);
    const user = await this.userService.createUser(createUserDTO);
    return res.status(HttpStatus.OK).json({
      message: 'User created successfully!',
      user,
    });
  }

  @Get('/')
  async getUser(@Res() res) {
    const users = await this.userService.getUsers();
    res.status(HttpStatus.OK).json({
      message: 'Users fetched successfully!',
      users,
    });
  }

  @Get('/:userID')
  async getUserByID(@Res() res, @Param('userID') userID) {
    const user = await this.userService.getUser(userID);
    if (!user) throw new NotFoundException('User does not exist!');
    res.status(HttpStatus.OK).json({
      message: 'User fetched successfully!',
      user,
    });
  }

  @Delete('/delete')
  async deleteUser(@Res() res, @Query('userID') userID) {
    const userDeleted = await this.userService.deleteUser(userID);
    if (!userDeleted) throw new NotFoundException('User does not exist!');
    res.status(HttpStatus.OK).json({
      message: 'User deleted successfully!',
      userDeleted,
    });
  }

  @Put('/update')
  async updateUser(@Res() res, @Body() createUserDTO: CreateUserDTO, @Query('userID') userID) {
    const updatedUser = await this.userService.updateUser(userID, createUserDTO);
    if (!updatedUser) throw new NotFoundException('User does not exist!');
    res.status(HttpStatus.OK).json({
      message: 'User updated successfully!',
      updatedUser,
    });
  }
}
