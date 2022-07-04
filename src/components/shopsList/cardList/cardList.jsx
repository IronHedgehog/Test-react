import OneCard from './oneCard/oneCard';
import { v4 as uuidv4 } from 'uuid';

import s from './cardList.module.scss';

const CardList = ({ filteredProducts }) => {
  return (
    <ul className={s.list}>
      {filteredProducts.length
        ? filteredProducts.map(
            ({
              _id: id,
              name,
              price,
              shop,
              categories,
              favorite,
              productInfo,
              image,
            }) => (
              <OneCard
                key={id}
                id={uuidv4()}
                name={name}
                price={price}
                productInfo={productInfo}
                image={image}
                shop={shop}
                categories={categories}
                favorite={favorite}
              />
            ),
          )
        : null}
    </ul>
  );
};

export default CardList;
