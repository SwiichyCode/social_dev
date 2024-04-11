import { AuthCardHeader } from "./AuthCardHeader";
import { AuthCardSeparator } from "./AuthCardSeparator";
import { OauthGroup } from "@/modules/auth/components/OauthGroup";

export const AuthCard = () => {
  return (
    <div className="mx-auto w-full max-w-sm lg:w-96">
      <AuthCardHeader />

      <div className="mt-10">
        <AuthCardSeparator />
        <OauthGroup />
      </div>
    </div>
  );
};
