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
} from "tsoa";

@Route("users")
export class UsersController extends Controller {
  @Get("{id}")
  public async getUserById(id: string): Promise<any> {
    return { id };
  }

  @Get()
  public async getUsers(
    @Query() page: number,
    @Query() limit: number,
    @Query() sort: string
  ): Promise<any> {
    return { page, limit, sort };
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
    return;
  }
}
