import { redirect } from "next/navigation";
import { getServerAuthSession } from "@/config/server/auth";
import userService from "@/services/user.service";
import { URL } from "@/config/constants";
import type { PropsWithChildren } from "react";

export const SignupProtectedLayout = async ({
  children,
}: PropsWithChildren) => {
  const session = await getServerAuthSession();

  if (!session) {
    redirect(URL.AUTH);
  }

  const user = await userService.getUser(session.user.id);

  if (!user?.firstConnection) {
    redirect(URL.MEMBERS);
  }

  return <>{children}</>;
};
