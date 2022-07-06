import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../../redux/auth/auth-operation';
import { getUserName } from '../../redux/auth/auth-selectors';
import ShoppingBagOutlinedIcon from '@mui/icons-material/ShoppingBagOutlined';
import { NavLink } from 'react-router-dom';
import { getCart, getTotal } from '../../redux/products/selector';

import s from './user-menu.module.scss';

const styles = {
  // container: {
  //   display: 'flex',
  //   alignItems: 'center',
  // },
  avatar: {
    marginRight: 4,
  },
  name: {
    fontWeight: 700,
    marginRight: 12,
  },
};

export default function UserMenu() {
  const dispatch = useDispatch();
  const name = useSelector(getUserName);
  const total = useSelector(getTotal);
  const products = useSelector(getCart);

  return (
    <div style={styles.container}>
      <span style={styles.name}>Ласкаво просимо, {name}</span>
      <button type="button" onClick={() => dispatch(logOut())}>
        Выйти
      </button>
      <div className={s.div}>
        <NavLink to={'/cart'} className={s.link}>
          <ShoppingBagOutlinedIcon className={s.cart} />
          <span className={s.quantity}>{products.length}</span>
        </NavLink>
        <span className={s.price}>{total} ГРН</span>
      </div>
    </div>
  );
}
