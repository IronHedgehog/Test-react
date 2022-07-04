import CartList from '../components/cartList/cartList';
import Container from '../components/container/Сontainer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { NavLink } from 'react-router-dom';

import s from './cart.module.scss';

const CartPage = () => {
  return (
    <Container>
      <NavLink to="/shop" className={s.link}>
        <ArrowBackIcon />
        <span>Вернуться к покупкам</span>
      </NavLink>
      <CartList />
    </Container>
  );
};

export default CartPage;
