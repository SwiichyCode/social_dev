import { SignupProtectedLayout } from "@/routes/signup-protected-layout";
import type { PropsWithChildren } from "react";

export default async function SignupLayout({ children }: PropsWithChildren) {
  return (
    <SignupProtectedLayout>
      <div className="">{children}</div>
    </SignupProtectedLayout>
  );
}
