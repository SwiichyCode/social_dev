# Multi-Step Form

## Features

- Navigation between form steps
- Form data persistence across steps
- Validation of form data at each step
- Saving of form data to local storage to prevent data loss on page refresh

# useProfileStepForm

`useProfileStepForm` is a Zustand store that manages the state of a multi-step form.

## State

- `start`: The index of the first step of the form.
- `end`: The index of the last step of the form.
- `currentStep`: The index of the current step.
- `previousStep`: The index of the previous step.
- `canGoBack`: A boolean indicating whether the user can navigate to the previous step.
- `canGoNext`: A boolean indicating whether the user can navigate to the next step.
- `progress`: The progress of the form as a percentage.
- `isFinished`: A boolean indicating whether the user has reached the end of the form.

## Actions

- `setCurrentStep(step: number)`: Sets the current step to the given step.
- `prevStep()`: Navigates to the previous step.
- `nextStep()`: Navigates to the next step.

## Helper Functions

- `calculateNavigation(currentStep: number, start: number, end: number)`: Calculates the `canGoBack`, `canGoNext`, and `progress` values based on the current, start, and end steps.

## Usage

```tsx
import { useProfileStepForm } from "./useProfileStepForm";

function MyForm() {
  const { currentStep, prevStep, nextStep } = useProfileStepForm();

  // ...
}
```

# useStepNavigation

`useStepNavigation` is a custom hook that manages the navigation of a multi-step form.

## Props

- `trigger`: A function from `react-hook-form` that triggers form validation.

## Return Values

- `handlePrevStep`: A function that navigates to the previous step of the form.
- `handleNextStep`: A function that validates the current form data and, if valid, navigates to the next step of the form.

## Behavior

On initial render and whenever the `step` query parameter changes, the hook checks if the current step is greater than the maximum step stored in local storage. If it is, it navigates to the maximum step. Otherwise, it sets the current step to the value of the `step` query parameter.

When `handlePrevStep` is called, it navigates to the previous step and updates the maximum step in local storage.

When `handleNextStep` is called, it validates the current form data. If the data is valid, it navigates to the next step and updates the maximum step in local storage.

## Usage

```tsx
import { useStepNavigation } from "./useStepNavigation";

function MyForm({ trigger }) {
  const { handlePrevStep, handleNextStep } = useStepNavigation({ trigger });

  // ...
}
```
