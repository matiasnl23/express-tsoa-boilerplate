import {
  Controller,
  Route,
  Get,
  Post,
  Patch,
  Put,
  Delete,
  Query,
  Body,
  Path,
} from "tsoa";
import { User } from "../models/User";

@Route("users")
export class UsersController extends Controller {
  @Get("{id}")
  public async getUserById(@Path() id: string) {
    const user = await User.findByPk(id);
    return user?.toJSON();
  }

  @Get()
  public async getUsers(
    @Query() page: number = 1,
    @Query() limit: number = 10
  ) {
    const users = await User.findAll({
      limit: limit,
      offset: (page - 1) * limit,
      order: [
        ["lastName", "ASC"],
        ["firstName", "ASC"],
      ],
    });
    return users.map((user) => user.toJSON());
  }

  @Post()
  public async createUser(@Body() user: any): Promise<any> {
    return user;
  }

  @Put("{userId}")
  public async updateUser(userId: string, @Body() user: any): Promise<any> {
    return { userId, ...user };
  }

  @Patch("{userId}")
  public async patchUser(userId: string, @Body() user: any): Promise<any> {
    return { userId, ...user };
  }

  @Delete("{userId}")
  public async deleteUser(userId: string): Promise<void> {
    await User.destroy({ where: { id: userId } });
  }
}
