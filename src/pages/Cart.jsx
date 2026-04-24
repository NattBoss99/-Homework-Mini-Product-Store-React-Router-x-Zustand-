import useCartStore from "../store/cartStore";

const Cart = () => {

  const cart = useCartStore((state) => state.cart);

  const removeFromCart = useCartStore((state)=>state.removeFromCart)

  return (
    <div>
      <h1>Cart Page</h1>

      {cart.length === 0 && <p>Your cart is empty</p>}

      {cart.map((item) => (
        <div key={item.id}>
          <h3>{item.title}</h3>
          <p>{item.price} $</p>
          <button onClick={()=>removeFromCart(item.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;