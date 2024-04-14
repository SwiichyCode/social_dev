import { motion } from "framer-motion";
import { useProfileStepForm } from "@/modules/profile/stores/useProfileStepForm";

type Props = {
  children: React.ReactNode;
};

export const StepTransitionAnimation = ({ children }: Props) => {
  const { currentStep, previousStep } = useProfileStepForm();

  return (
    <motion.div
      initial={{
        x: currentStep > previousStep - 2 ? "50%" : "-50%",
        opacity: 0,
      }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      {children}
    </motion.div>
  );
};
