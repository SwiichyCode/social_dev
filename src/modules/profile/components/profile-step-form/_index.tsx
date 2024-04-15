"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useProfileStepForm } from "@/modules/profile/components/profile-step-form/useProfileStepForm";
import { ProfileStepFormNavigation } from "./profile-step-form-navigation";
import { Form } from "@/components/ui/form";
import { formSchema } from "./_schema";
import { renderStepFields } from "./profile-step-form-render-step-fields";
import { usePersistedFormData } from "./useFormData";
import { useWatchFormData } from "./useWatch";
import { LOCAL_STORAGE } from "@/config/constants";
import { updateFirstConnection } from "@/services/actions/update-first-connection";
import * as z from "zod";

export type Inputs = z.infer<typeof formSchema>;

export const ProfileStepForm = () => {
  const { currentStep } = useProfileStepForm();
  const { formData } = usePersistedFormData();

  const form = useForm<Inputs>({
    resolver: zodResolver(formSchema),
    values: {
      firstName: formData.firstName ?? "",
      lastName: formData.lastName ?? "",
    },
  });

  const { watch } = form;
  useWatchFormData({ watch });

  const handleSubmit: SubmitHandler<Inputs> = async (data) => {
    await updateFirstConnection({});

    form.reset({
      firstName: "",
      lastName: "",
    });

    // Remove the maxStep from localStorage
    localStorage.removeItem(LOCAL_STORAGE.MAX_STEP);
    localStorage.removeItem(LOCAL_STORAGE.FORM_DATA);
  };

  return (
    <Form {...form}>
      <section className="absolute inset-0 flex flex-col justify-between p-24">
        <form className="mt-12 py-12">
          {renderStepFields({ currentStep, control: form.control, formData })}
        </form>

        {/* Navigation */}
        <ProfileStepFormNavigation
          onSubmit={form.handleSubmit(handleSubmit)}
          trigger={form.trigger}
        />
      </section>
    </Form>
  );
};
