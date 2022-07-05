import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  getProducts,
  getIsLoading,
  getCart,
} from '../../redux/products/selector';
import { fetchProducts } from '../../redux/products/action';
import CardList from './cardList/cardList';

import s from './shopsList.module.scss';

const ShopsList = () => {
  const [filter, setFilter] = useState([]);
  const [buttonName, setButtonName] = useState('');
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const cart = useSelector(getCart);
  const loading = useSelector(getIsLoading);

  const boll = cart.some(el => el.shop === buttonName);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const shops = [...new Set(products.map(({ shop }) => shop))];

  const onClickHendler = e => {
    e.preventDefault();
    const { name } = e.target;
    setButtonName(name);
    setFilter(products.filter(({ shop }) => shop === name));
  };

  return loading ? (
    <h1>загрузка</h1>
  ) : (
    <div>
      <nav className={s.nav}>
        {shops.map(shop => (
          <button
            key={shop}
            className={s.button}
            name={shop}
            onClick={onClickHendler}
            disabled={boll && buttonName !== shop}
          >
            {shop}
          </button>
        ))}
      </nav>
      <CardList filteredProducts={filter} />
    </div>
  );
};

export default ShopsList;
