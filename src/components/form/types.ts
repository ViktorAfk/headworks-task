import * as yup from 'yup';

export const schema = yup
  .object({
    name: yup.string().trim().required(),
    description: yup.string().trim().required(),
    date: yup.string().required(),
    category: yup
      .string()
      .oneOf(['show', 'concert', 'exhibition', 'performance', 'other'])
      .required(),
    additionalInformation: yup.object({
      organizer: yup.string().trim().required(),
      place: yup.string().trim().required(),
      seats: yup.number().positive().integer().required(),
      address: yup.string().trim().required(),
    }),
    totalAvailableTickets: yup.number().positive().integer().required(),
    tickets: yup.array(
      yup.object({
        type: yup
          .string()
          .oneOf(['VIP', 'normal', 'cheap', 'other'])
          .required(),
        quantity: yup.number().positive().integer().required(),
        availableSeats: yup.number().positive().integer().required(),
        price: yup.number().positive().integer().required(),
      }),
    ),
  })
  .required();

export type FormFields = yup.InferType<typeof schema>;
