import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/products/action';

import s from './oneCard.module.scss';

const OneCard = product => {
  const dispatch = useDispatch();
  const backPath = 'https://testbackk.herokuapp.com/';
  return (
    <li className={s.card}>
      <img src={backPath + product.image} alt="product" />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p className={s.productInfo}>{product.productInfo}</p>
      <button onClick={() => dispatch(addToCart(product))}>add to card</button>
    </li>
  );
};

export default OneCard;
