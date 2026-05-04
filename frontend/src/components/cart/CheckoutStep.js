import { Link } from "react-router-dom";

export default function CheckoutStep({ shipping, confirmOrder, payment }) {
  return (
    <div className="checkout-progress d-flex justify-content-center mt-5">
      {shipping ? (
        <Link to="/shipping" className="d-flex">
          <div className="triangle2-active"></div>
          <div className="step active-step">Shipping Info</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="/shipping" className="d-flex">
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Shipping Info</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}

      {confirmOrder ? (
        <Link to="/order/confirm" className="d-flex">
          <div className="triangle2-active"></div>
          <div className="step active-step">Confirm Order</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="/order/confirm" className="d-flex">
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Confirm Order</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}

      {payment ? (
        <Link to="/payment" className="d-flex">
          <div className="triangle2-active"></div>
          <div className="step active-step">Payment</div>
          <div className="triangle-active"></div>
        </Link>
      ) : (
        <Link to="/payment" className="d-flex">
          <div className="triangle2-incomplete"></div>
          <div className="step incomplete">Payment</div>
          <div className="triangle-incomplete"></div>
        </Link>
      )}
    </div>
  );
}
