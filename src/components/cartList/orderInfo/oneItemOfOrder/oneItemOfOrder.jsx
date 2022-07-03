const OneItemOfOrder = (id, name, price, image) => {
  const backPath = 'https://testbackk.herokuapp.com/';
  console.log('image', image);
  return (
    <li>
      <img src={backPath + image} alt="product" />
      <p>{name}</p>
      <p>{price}</p>
    </li>
  );
};

export default OneItemOfOrder;
