interface IStepShape {
  id: string;
  step: number;
  fields: string[];
}

export const stepsShape: IStepShape[] = [
  {
    id: "Step 1",
    step: 0,
    fields: ["firstName"],
  },
  {
    id: "Step 2",
    step: 1,
    fields: ["lastName"],
  },
  { id: "Step 3", step: 2, fields: [] },
];
