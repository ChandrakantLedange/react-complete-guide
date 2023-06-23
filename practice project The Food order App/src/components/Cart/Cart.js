import classes from "./Cart.module.css";

const Cart = () => {
  const cartItems = (
    <ul>
      {[
        {
          id: 1,
          name: "Sushi",
          price: 12.99,
        },
      ].map((cart) => {
        <li>{cart.name}</li>;
      })}
    </ul>
  );
  return (
    <div>
      {cartItems}
      <div className={classes.total}>
        <span>Total Ammput</span>
        <span>35.62</span>
      </div>
      <div className={classes.actions}>
        <button className={classes["button--alt"]}>Close</button>
        <button className={classes.button}>Order</button>
      </div>
    </div>
  );
};

export default Cart;
