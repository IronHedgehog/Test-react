import { useDispatch } from 'react-redux';
import { addToCart } from '../../../../redux/products/action';

const OneCard = product => {
  const dispatch = useDispatch();

  console.log('product', product);
  const backPath = 'https://testbackk.herokuapp.com/';
  return (
    <li>
      <img src={backPath + product.image} alt="product" />
      <p>{product.name}</p>
      <p>{product.price}</p>
      <p>{product.productInfo}</p>
      <button onClick={() => dispatch(addToCart(product))}>add to card</button>
    </li>
  );
};

export default OneCard;
