import { LOCAL_STORAGE } from "@/config/constants";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

interface FormDataState {
  formData: {
    firstName: string;
    lastName: string;
  };
  setFormData: (data: { firstName: string; lastName: string }) => void;
}

export const usePersistedFormData = create<FormDataState>()(
  persist(
    (set, _) => ({
      formData: {
        firstName: "",
        lastName: "",
      },

      setFormData: (data) => set({ formData: data }),
    }),
    {
      name: LOCAL_STORAGE.FORM_DATA, // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => localStorage), // (optional) by default, 'localStorage' is used
    },
  ),
);
