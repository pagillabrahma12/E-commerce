import { MdClose } from "react-icons/md";
import { BsCartX } from "react-icons/bs";
import CardItem from "./CartItem/CartItem";
import "./Cart.scss";
import { useContext } from "react";
import { Context } from "../../utils/context";
import { makePaymentRequest } from "../../utils/api";
import { loadStripe } from "@stripe/stripe-js";

const Cart = ({ setShowCart }) => {
  const { cartItems, cartSubTotal } = useContext(Context);
  
  const stripePromise = loadStripe(process.env.REACT_APP_STRIPE_PUBLISHABLE_KEY);

  const handlePayment = async () => {
    try {
      const stripe = await stripePromise;
      const res = await makePaymentRequest.post("/api/orders", {
        products: cartItems
      });
      
      await stripe.redirectToCheckout({
        sessionId: res.data.stripeSession.id
      });
    } catch (error) {
      console.error("Error during payment:", error);
      // Handle specific error cases here and provide feedback to the user
    }
  };

  return (
    <div className="cart-panel">
      <div className="opac-layer"></div>
      <div className="cart-content">
        <div className="cart-header">
          <span className="heading">Shopping Cart</span>
          <span className="close-btn" onClick={() => setShowCart(false)}>
            <MdClose />
            <span className="text">Close</span>
          </span>
        </div>
        {!cartItems?.length && (
          <div className="empty-cart">
            <BsCartX />
            <span>No Products in the cart</span>
            <button className="return-cta">Return To Shop</button>
          </div>
        )}
        {!!cartItems?.length && (
          <>
            <CardItem />
            <div className="cart-footer">
              <div className="subtotal">
                <span className="text">Subtotal</span>
                <span className="text total">&#8377; {cartSubTotal}</span>
              </div>
              <div className="button">
                <button className="checkout-cta" onClick={handlePayment}>Checkout</button>
              </div>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;
