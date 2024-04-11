import { OauthButton } from "@/modules/auth/components/OauthButton";

export const OauthGroup = () => {
  return (
    <div className="mt-6 grid grid-cols-2 gap-4">
      <OauthButton provider="google" />
      <OauthButton provider="github" />
    </div>
  );
};
