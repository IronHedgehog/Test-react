import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getProducts, getIsLoading } from '../../redux/products/selector';
import { fetchProducts } from '../../redux/products/action';
import CardList from './cardList/cardList';

import s from './shopsList.module.scss';

const ShopsList = () => {
  const [filter, setFilter] = useState([]);
  const [buttonName, setButtonName] = useState('');
  const [togleDisabled, setDisabled] = useState(false);
  const dispatch = useDispatch();
  const products = useSelector(getProducts);
  const loading = useSelector(getIsLoading);

  useEffect(() => {
    dispatch(fetchProducts());
  }, [dispatch]);

  const shops = [...new Set(products.map(({ shop }) => shop))];

  const onClickHendler = e => {
    e.preventDefault();
    const { name } = e.target;
    setButtonName(name);
    setDisabled(!togleDisabled);
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
            disabled={buttonName !== shop && togleDisabled}
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
