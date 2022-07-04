import OrderInfo from './orderInfo/orderInfo';
import s from './cartList.module.scss';
import Formm from '../form/Formm';

const CartList = () => {
  return (
    <div className={s.div}>
      <Formm />
      <OrderInfo />
    </div>
  );
};

export default CartList;
