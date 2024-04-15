"use client";

import { useProfileStepForm } from "@/modules/profile/components/profile-step-form/useProfileStepForm";
import { useStepNavigation } from "./useStepNavigation";
import type { UseFormTrigger } from "react-hook-form";
import type { Inputs } from "./_index";

interface Props {
  trigger: UseFormTrigger<Inputs>;
  onSubmit: () => void;
}

export const ProfileStepFormNavigation = ({ trigger, onSubmit }: Props) => {
  const { currentStep, canGoBack, canGoNext, end } = useProfileStepForm();
  const { handlePrevStep, handleNextStep } = useStepNavigation({ trigger });

  return (
    <div className="mt-8 pt-5">
      <div className="flex justify-between">
        <button
          type="button"
          onClick={handlePrevStep}
          disabled={!canGoBack}
          className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
        >
          Previous
        </button>

        {currentStep === end ? (
          <button
            type="submit"
            onClick={onSubmit}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Submit
          </button>
        ) : (
          <button
            type="button"
            onClick={handleNextStep}
            disabled={!canGoNext}
            className="rounded bg-white px-2 py-1 text-sm font-semibold text-sky-900 shadow-sm ring-1 ring-inset ring-sky-300 hover:bg-sky-50 disabled:cursor-not-allowed disabled:opacity-50"
          >
            Next
          </button>
        )}
      </div>
    </div>
  );
};
