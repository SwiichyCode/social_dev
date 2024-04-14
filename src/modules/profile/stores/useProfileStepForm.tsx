import { create } from "zustand";

interface ProfileStepFormState {
  start: number;
  end: number;
  currentStep: number;
  previousStep: number;
  canGoBack: boolean;
  canGoNext: boolean;
  progress: number;

  isFinished: boolean;

  setCurrentStep: (step: number) => void;
  prevStep: () => void;
  nextStep: () => void;
}

function calculateNavigation(currentStep: number, start: number, end: number) {
  return {
    canGoBack: currentStep > start,
    canGoNext: currentStep < end,
    progress: (currentStep / end) * 100,
  };
}

export const useProfileStepForm = create<ProfileStepFormState>((set) => ({
  start: 0,
  end: 2,
  isFinished: false,
  currentStep: 0,
  previousStep: 0,
  ...calculateNavigation(0, 0, 5),

  prevStep: () => {
    set((state) => {
      const newStep = state.currentStep - 1;

      return {
        currentStep: newStep,
        previousStep: state.currentStep,
        isFinished: newStep === state.end,
        ...calculateNavigation(newStep, state.start, state.end),
      };
    });
  },

  nextStep: () => {
    set((state) => {
      const newStep = state.currentStep + 1;

      return {
        currentStep: newStep,
        previousStep: state.currentStep,
        isFinished: newStep === state.end,
        ...calculateNavigation(newStep, state.start, state.end),
      };
    });
  },

  setCurrentStep: (step) => {
    set((state) => {
      return {
        currentStep: step,
        previousStep: state.currentStep,
        isFinished: step === state.end,
        ...calculateNavigation(step, state.start, state.end),
      };
    });
  },
}));
