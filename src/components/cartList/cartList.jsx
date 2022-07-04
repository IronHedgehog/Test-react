import Form from '../form/Form';
import OrderInfo from './orderInfo/orderInfo';
import s from './cartList.module.scss';
import { getTotal } from '../../redux/products/selector';
import { useSelector } from 'react-redux';
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
