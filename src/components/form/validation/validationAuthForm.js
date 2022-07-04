import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email('Please enter correct email')
    .min(2, 'Please enter more than 2 character')
    .max(100, 'Max 100')
    .matches(
      /^(|(([A-Za-z0-9]+_+)|([A-Za-z0-9]+\-+)|([A-Za-z0-9]+\.+)|([A-Za-z0-9]+\++))*[A-Za-z0-9]+@((\w+\-+)|(\w+\.))*\w{1,63}\.[a-zA-Z]{2,100})$/i,
      'Please enter correct email',
    )
    .required('this field is required'),
  phone: Yup.string()
    .min(6, 'Please enter more than 5 character')
    .max(12, 'Please enter not more than 12 character')
    .matches(
      /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,
      'please enter correct phone',
    )
    .required('this field is required'),
  address: Yup.string().required('this field is required'),
  username: Yup.string()
    .min(2, 'Please enter more than 1 character')
    .max(12, 'Please enter not more than 12 character')
    .matches(
      /^(?!.*\.\.)(?!\.)(?!.*\.$)(?!\d+$)[a-zA-Z0-9.]{2,12}$/,
      'Name is invalid',
    )
    .required('this field is required'),
});
