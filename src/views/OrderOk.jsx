import { NavLink } from 'react-router-dom';
import s from './OrderOk.module.scss';
const OrderOk = () => {
  return (
    <>
      <h2>Ваше замовлення в роботі</h2>
      <p>наші менеджери зв'яжуться з вами</p>
      <NavLink to={'/shop'} className={s.link}>
        Купити щось ще
      </NavLink>
    </>
  );
};

export default OrderOk;
