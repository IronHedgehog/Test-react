import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/products/action';

const OneCard = ({ name, price, productInfo, image }) => {
  const dispatch = useDispatch();

  const backPath = 'https://testbackk.herokuapp.com/';
  return (
    <li>
      <img src={backPath + image} alt="product" />
      <p>{name}</p>
      <p>{price}</p>
      <p>{productInfo}</p>
      <button onClick={() => dispatch(addToCart)}>add to card</button>
    </li>
  );
};

export default OneCard;
