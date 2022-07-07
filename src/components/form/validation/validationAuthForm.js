import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter correct email')
    .min(2, 'Please enter more than 2 character')
    .max(100, 'Max 100')
    .matches(
      /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,100})$/i,
      'Please enter correct email',
    )
    .required('this field is required'),
  phone: Yup.number().required('this field is required'),
  address: Yup.string().required('this field is required'),
  username: Yup.string()
    .min(2, 'Please enter more than 1 character')
    .max(30, 'Please enter not more than 30 character')
    .required('this field is required'),
});
