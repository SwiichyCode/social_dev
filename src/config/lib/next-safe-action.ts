"server-only";

import { createSafeActionClient } from "next-safe-action";
import { getServerAuthSession } from "@/config/server/auth";

export const authAction = createSafeActionClient({
  async middleware() {
    const session = await getServerAuthSession();

    if (!session) throw new Error("Unauthorized");

    return { session };
  },
});
