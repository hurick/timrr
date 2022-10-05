import * as zod from 'zod'

export const newCycleFormValidationSchema = zod.object({
  task: zod
    .string()
    .min(1, 'Task name shouldn\'t be blank'),
  timeAmount: zod
    .number()
    .min(5, 'The cycle should have at least 5 minutes')
    .max(60, 'The cycle shouldn\'t have more than 60 minutes')
})
