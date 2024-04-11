"use client";
import { signIn } from "next-auth/react";
import { Google, Github } from "@/components/icons";
import { URL } from "@/config/constants";

type AuthProvider = {
  provider: "google" | "github";
};

type Props = {
  provider: AuthProvider["provider"];
};

const OauthButtonIcon = ({ provider }: AuthProvider) => {
  switch (provider) {
    case "google":
      return <Google className="h-5 w-5" />;
    case "github":
      return <Github className="h-5 w-5 fill-[#24292F]" />;
  }
};

export const OauthButton = ({ provider, ...props }: Props) => {
  return (
    <button
      className="flex w-full items-center justify-center gap-3 rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus-visible:ring-transparent"
      onClick={async () => await signIn(provider, { callbackUrl: URL.HOME })}
      {...props}
    >
      <OauthButtonIcon provider={provider} />
      <span className="text-sm font-semibold capitalize leading-6">
        {provider}
      </span>
    </button>
  );
};
