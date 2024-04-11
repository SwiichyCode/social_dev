"use client";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { URL } from "@/config/constants";
import type { Session } from "next-auth";

type Props = {
  session: Session | null;
};

export const AuthButton = ({ session }: Props) => {
  const router = useRouter();

  const handleClick = async () => {
    session ? await signOut() : router.push(URL.AUTH);
  };

  return (
    <Button onClick={() => handleClick()}>
      {session ? "Logout" : "Login"}
    </Button>
  );
};
