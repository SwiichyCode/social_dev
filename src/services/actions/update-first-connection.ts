"use server";

import { authAction } from "@/config/lib/next-safe-action";
import authService from "../auth.service";
import * as z from "zod";

const schema = z.object({});

export const updateFirstConnection = authAction(schema, async (_, ctx) => {
  await authService.updateFirstConnection({
    userId: ctx.session.user.id,
    firstConnection: false,
  });
});
