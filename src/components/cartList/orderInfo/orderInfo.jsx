import { useSelector } from 'react-redux';
import { getCart } from '../../../redux/products/selector';
import OneItemOfOrder from './oneItemOfOrder/oneItemOfOrder';
import { v4 as uuidv4 } from 'uuid';
const OrderInfo = () => {
  const cart = useSelector(getCart);
  let timeInMs = Date.now();
  console.log('first', timeInMs);
  console.log('cart', cart);
  return (
    <ul>
      {cart.length
        ? cart.map(({ id, name, price, image }) => (
            <OneItemOfOrder
              key={uuidv4()}
              id={id}
              name={name}
              price={price}
              image={image}
            />
          ))
        : null}
    </ul>
  );
};

export default OrderInfo;
