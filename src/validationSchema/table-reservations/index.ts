import * as yup from 'yup';

export const tableReservationValidationSchema = yup.object().shape({
  reservation_date: yup.date().required(),
  number_of_people: yup.number().integer().required(),
  table_number: yup.number().integer().required(),
  user_id: yup.string().nullable().required(),
  restaurant_id: yup.string().nullable().required(),
});
