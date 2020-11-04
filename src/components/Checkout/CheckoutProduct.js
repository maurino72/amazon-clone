import React from "react";
import { useStateValue } from "../../config/StateProvider";
import "./CheckoutProduct.css";

function CheckoutProduct({ id, title, rating, price, image }) {
  const [{ basket }, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_BASKET",
      id: id
    });
  };

  return (
    <div className="checkoutProduct">
      <img src={image} alt="" className="checkoutProduct__image" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="productCheckout__price">
          <small>$</small>
          <strong>{price}</strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => {
              return <p> ⭐️ </p>;
            })}
        </div>
        <button onClick={removeFromBasket}> Remove from cart </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
