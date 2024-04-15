import { InputForm } from "@/components/ui/input-form";
import { StepTransitionAnimation } from "./_animations";
import type { Control } from "react-hook-form";
import type { Inputs } from "./_index";

type Props = {
  currentStep: number;
  control: Control<Inputs>;
  formData: Inputs;
};

export const renderStepFields = ({ currentStep, control, formData }: Props) => {
  return (
    <>
      {currentStep === 0 && (
        <StepTransitionAnimation>
          <InputForm control={control} name="firstName" label="First Name" />
        </StepTransitionAnimation>
      )}

      {currentStep === 1 && (
        <StepTransitionAnimation>
          <InputForm control={control} name="lastName" label="Last Name" />
        </StepTransitionAnimation>
      )}

      {currentStep === 2 && (
        <StepTransitionAnimation>
          <p className="text-lg font-semibold text-sky-900">
            Thank you for submitting your information.
          </p>

          <pre>
            <code>{JSON.stringify(formData, null, 2)}</code>
          </pre>
        </StepTransitionAnimation>
      )}
    </>
  );
};
