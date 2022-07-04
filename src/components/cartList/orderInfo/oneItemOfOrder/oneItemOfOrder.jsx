import { useDispatch } from 'react-redux';
import { deleteFromCart } from '../../../../redux/products/action';

import s from './oneItemOfOrder.module.scss';

const OneItemOfOrder = product => {
  const dispatch = useDispatch();
  const backPath = 'https://testbackk.herokuapp.com/';
  return (
    <li className={s.item}>
      <img src={backPath + product.image} alt="product" />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <button
        type="button"
        onClick={() => dispatch(deleteFromCart(product.id))}
      >
        delete
      </button>
    </li>
  );
};

export default OneItemOfOrder;
