import { useEffect } from "react";
import { usePersistedFormData } from "./useFormData";
import type { Inputs } from "./_index";
import type { UseFormWatch } from "react-hook-form";

type Props = {
  watch: UseFormWatch<Inputs>;
};

export const useWatchFormData = ({ watch }: Props) => {
  const { setFormData } = usePersistedFormData();

  useEffect(() => {
    const subscription = watch((data) => {
      setFormData({
        firstName: data.firstName ?? "",
        lastName: data.lastName ?? "",
      });
    });

    return () => subscription.unsubscribe();
  }, [watch]);
};
