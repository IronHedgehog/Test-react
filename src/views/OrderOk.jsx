import { NavLink } from 'react-router-dom';
import s from './OrderOk.module.scss';
const OrderOk = () => {
  return (
    <>
      <h2>Your order is in progress</h2>
      <p>our managers will contact you</p>
      <NavLink to={'/shop'} className={s.link}>
        Buy something else
      </NavLink>
    </>
  );
};

export default OrderOk;
