import * as yup from 'yup';

export const guestValidationSchema = yup.object().shape({
  name: yup.string().required(),
  phone_number: yup.string().required(),
  address: yup.string().required(),
  user_id: yup.string().nullable().required(),
});
