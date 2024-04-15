import { SignupRedirectLayout } from "@/routes/signup-redirect-layout";
import type { PropsWithChildren } from "react";

export default function ApplicationLayout({ children }: PropsWithChildren) {
  return <SignupRedirectLayout>{children}</SignupRedirectLayout>;
}
