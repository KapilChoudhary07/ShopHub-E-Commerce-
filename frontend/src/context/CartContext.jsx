import { createContext, useState, useEffect } from "react";
import {
  getCart,
  addToCart,
  updateCart,
  removeFromCart,
} from "../services/cartService";
import { toast } from "react-toastify";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  //  Fetch cart
  const fetchCart = async () => {
    setLoading(true);
    try {
      const res = await getCart();
      setCart(res.data);
    } catch (err) {
      console.log(err);
    } finally {
      setLoading(false);
    }
  };

  //  Add item
 const addItem = async (productId) => {
  try {
    const exists = cart.find(
      (item) => (item.productId?._id || item.productId) === productId
    );

    if (exists) {
      toast.info("Already in cart 🛒");
      return;
    }

    setLoading(true);

    const res = await addToCart({ productId, quantity: 1 });

    setCart(res.data); 

    toast.success("Added to cart ✅");
  } catch (err) {
    toast.error("Failed to add ❌");
    console.log(err);
  } finally {
    setLoading(false);
  }
};

  //  Update quantity
  const updateItem = async (id, qty) => {
  try {
    if (qty < 1) return;

    const res = await updateCart(id, qty);

    setCart(res.data); 
  } catch (err) {
    toast.error("Update failed ❌");
    console.log(err);
  }
};
  //  Remove item
 const removeItem = async (id) => {
  try {
    const res = await removeFromCart(id);

    setCart(res.data); 

    toast.success("Removed from cart ❌");
  } catch (err) {
    toast.error("Remove failed ❌");
    console.log(err);
  }
};

  useEffect(() => {
    fetchCart();
  }, []);

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        updateItem,
        removeItem,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;