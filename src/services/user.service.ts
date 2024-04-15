import { db } from "@/config/server/db";

class UserService {
  async getUser(userId: string) {
    try {
      const user = await db.user.findFirst({
        where: { id: userId },
      });
      return user;
    } catch (error) {
      console.log(error);
    }
  }
}

const userService = new UserService();
export default userService;
