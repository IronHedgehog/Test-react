import { NavLink } from 'react-router-dom';
import s from './OrderOk.module.scss';
const OrderOk = () => {
  return (
    <>
      <h2>Order in work</h2>
      <p>our manager will contact you</p>
      <NavLink to={'/shop'} className={s.link}>
        buy something else
      </NavLink>
    </>
  );
};

export default OrderOk;
