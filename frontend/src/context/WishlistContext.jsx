import { createContext, useState, useEffect } from "react";
import { getWishlist, toggleWishlist } from "../services/wishlistService";
import { toast } from "react-toastify";

export const WishlistContext = createContext();

const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    fetchWishlist();
  }, []);

  const fetchWishlist = async () => {
    const res = await getWishlist();
    setWishlist(res.data);
  };

  const toggleItem = async (productId) => {
    const res = await toggleWishlist(productId);

    setWishlist(res.data); 

    toast.success("Wishlist updated ❤️");
  };

  return (
    <WishlistContext.Provider value={{ wishlist, toggleItem }}>
      {children}
    </WishlistContext.Provider>
  );
};

export default WishlistProvider;