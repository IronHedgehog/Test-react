import OneCard from './oneCard/oneCard';

const CardList = ({ filteredProducts }) => {
  return (
    <ul>
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
                name={name}
                price={price}
                productInfo={productInfo}
                image={image}
              />
            ),
          )
        : null}
    </ul>
  );
};

export default CardList;
