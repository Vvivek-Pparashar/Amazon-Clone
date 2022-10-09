import React from "react";
import { useStateValue } from "./StateProvider";
import "./Checkout.css";
import CheckOutProduct from "./CheckOutProduct";
import Subtotal from "./Subtotal";

const CheckOut = () => {
  const [{ basket }] = useStateValue();

  return (
    <>
      <div className="checkout">
        <img
          className="checkout__ad"
          src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
          alt="Ad_image"
        />
        {basket.length === 0 ? (
          <div>
            <h2>Your basket is empty</h2>
            <p>
              You have no items in your basked. To buy one or more items, click
              "Add to basket" next to the item.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Shoping basket</h2>
            {basket.map((item) => (
              <CheckOutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}

        {basket.length > 0 && <div className="checkout__right"><Subtotal/></div>}
      </div>
    </>
  );
};

export default CheckOut;
