import { ProfileStepForm } from "@/modules/profile/components/profile-step-form/_index";
import { Suspense } from "react";

export default function SignupPage() {
  return (
    <main className="flex min-h-screen flex-1 items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <Suspense>
        <ProfileStepForm />
      </Suspense>
    </main>
  );
}
