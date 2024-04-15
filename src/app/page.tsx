import { getServerAuthSession } from "@/config/server/auth";
import { AuthButton } from "@/modules/auth/components/AuthButton";

export default async function LandingPage() {
  const session = await getServerAuthSession();

  return (
    <main>
      <AuthButton session={session} />
    </main>
  );
}
