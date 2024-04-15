"use client";
import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { useProfileStepForm } from "@/modules/profile/components/profile-step-form/useProfileStepForm";
import { updateLocalStorageAndNavigate } from "./updateLocalStorageAndNavigate";
import { stepsShape } from "./_shape";
import type { UseFormTrigger } from "react-hook-form";
import type { Inputs } from "./_index";
import { LOCAL_STORAGE } from "@/config/constants";

interface Props {
  trigger: UseFormTrigger<Inputs>;
}

type FieldName = keyof Inputs;

export const useStepNavigation = ({ trigger }: Props) => {
  const { currentStep, setCurrentStep, prevStep, nextStep } =
    useProfileStepForm();

  const router = useRouter();
  const searchParams = useSearchParams();
  const step = Number(searchParams.get("step")) || 0;

  useEffect(() => {
    const localeMaxStep =
      Number(localStorage.getItem(LOCAL_STORAGE.MAX_STEP)) || 0;

    if (step > localeMaxStep) router.push(`?step=${localeMaxStep}`);

    setCurrentStep(Number(step) || 0);
  }, [step]);

  const handlePrevStep = () => {
    prevStep();

    updateLocalStorageAndNavigate({
      currentStep,
      direction: "prev",
      router,
    });
  };

  const handleNextStep = async () => {
    const fields = stepsShape[currentStep]!.fields;
    const output = await trigger(fields as FieldName[], {
      shouldFocus: true,
    });

    if (!output) return;

    nextStep();

    updateLocalStorageAndNavigate({
      currentStep,
      direction: "next",
      router,
    });
  };

  return { handlePrevStep, handleNextStep };
};
