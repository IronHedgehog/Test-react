import s from './form.module.css';
import { Formik } from 'formik';
import { validationSchema } from './validation/validationAuthForm';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';

import classNames from 'classnames';
import { getCart, getTotal } from '../../redux/products/selector';

export const Formm = () => {
  const totalPrice = useSelector(getTotal);
  const cart = useSelector(getCart);
  console.log('cart', cart);
  const dispatch = useDispatch();
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        phone: '',
        address: '',
        cart,
      }}
      validationSchema={validationSchema}
      validateOnBlur
      onSubmit={values => {
        // dispatch(register(values));
        console.log('values', values);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
      }) => (
        <form onSubmit={handleSubmit}>
          <>
            <TextField
              className={s.input}
              id="email"
              name="email"
              label="E-mail"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.email && Boolean(errors.email)}
              helperText={touched.email && errors.email}
            />
            <br />

            <TextField
              className={s.input}
              id="username"
              name="username"
              label="username"
              type="username"
              value={values.username}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.username && Boolean(errors.username)}
              helperText={touched.username && errors.username}
            />
            <br />

            <TextField
              className={s.input}
              id="phone"
              name="phone"
              label="phone"
              type="phone"
              value={values.phone}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.phone && Boolean(errors.phone)}
              helperText={touched.phone && errors.phone}
            />
            <br />
            <TextField
              className={s.input}
              id="address"
              name="address"
              label="address"
              type="address"
              value={values.address}
              onChange={handleChange}
              onBlur={handleBlur}
              error={touched.address && Boolean(errors.address)}
              helperText={touched.address && errors.address}
            />

            <div className={s.loginFormBtnContainer}>
              <p>Total price = {totalPrice}</p>
              <Button
                className={classNames(s.btnForm, s.current)}
                type="submit"
              >
                Send
              </Button>
            </div>
          </>
        </form>
      )}
    </Formik>
  );
};

export default Formm;
