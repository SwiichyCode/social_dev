"use server";

import { authAction } from "@/config/lib/next-safe-action";
import userService from "@/services/user.service";
import * as z from "zod";

const schema = z.object({});

export const getUser = authAction(schema, async (_, ctx) => {
  const user = await userService.getUser(ctx.session.user.id);

  return user;
});
