import { LOCAL_STORAGE } from "@/config/constants";
import type { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

type Props = {
  currentStep: number;
  direction: "next" | "prev";
  router: AppRouterInstance;
};

export function updateLocalStorageAndNavigate({
  currentStep,
  direction,
  router,
}: Props) {
  const newStep = direction === "next" ? currentStep + 1 : currentStep - 1;
  localStorage.setItem(LOCAL_STORAGE.MAX_STEP, String(newStep));
  router.push(`?step=${newStep}`);
}
