import { Logo } from "@/components/ui/logo";

export const AuthCardHeader = () => {
  return (
    <div className="flex flex-col items-center">
      <Logo />
      <h1 className="mt-8 text-2xl font-bold leading-9 tracking-tight text-gray-900">
        Sign in to your account
      </h1>
    </div>
  );
};
