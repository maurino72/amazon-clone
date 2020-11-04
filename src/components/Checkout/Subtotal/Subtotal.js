import React from "react";
import "./Subtotal.css";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../../config/StateProvider";
import { getBasketTotal } from "../../../config/reducer";

function Subtotal() {
  const [{ basket, user }, dispatch] = useStateValue();

  //   const getBasketTotal = (basket) => {
  //     var total = 0;
  //     basket.map((item, i) => {
  //       total += item.price;
  //     });

  //     return total;
  //   };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => {
          return (
            <>
              <p>
                Subtotal ({basket.length} items):
                <strong> {value}</strong>
              </p>
              <small className="subtotal__gift">
                <input type="checkbox" /> This order contains a gift
              </small>
            </>
          );
        }}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandGenerator={true}
        prefix={"$"}
      />
      <button>Proceed to checkout</button>
    </div>
  );
}

export default Subtotal;
