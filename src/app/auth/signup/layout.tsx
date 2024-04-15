import { redirect } from "next/navigation";
import { getUser } from "@/services/actions/get-user";
import type { PropsWithChildren } from "react";

export default async function SignupLayout({ children }: PropsWithChildren) {
  const { data } = await getUser({});

  if (!data?.firstConnection) {
    redirect("/");
  }

  return <div>{children}</div>;
}
