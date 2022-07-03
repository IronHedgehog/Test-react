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
                id={id}
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
