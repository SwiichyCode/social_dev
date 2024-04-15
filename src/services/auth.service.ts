import { db } from "@/config/server/db";
import { updateFirstConnectionType } from "./types/auth.service.type";

class AuthService {
  async updateFirstConnection({
    userId,
    firstConnection,
  }: updateFirstConnectionType) {
    try {
      await db.user.update({
        where: { id: userId },
        data: { firstConnection },
      });
    } catch (error) {
      console.log(error);
    }
  }
}

const authService = new AuthService();
export default authService;
