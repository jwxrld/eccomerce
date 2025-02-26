import React from 'react';
import { Heart } from 'lucide-react';
import { useStore } from '../store/useStore.ts';
import { Product } from '../types'; // Ensure you import the Product type

interface FavoriteButtonProps {
  product: Product; // Now expecting the full Product object
  size: string;
  color: string;
}

export const FavoriteButton: React.FC<FavoriteButtonProps> = ({ product, size, color }) => {
  const { toggleFavorite, isFavorite, addToCart, removeFromCart, cart } = useStore();
  const favorite = isFavorite(product.id);

  // Check if the item is already in the cart
  const isInCart = cart.some(
    (item) =>
      item.id === product.id &&
      item.selectedSize === size &&
      item.selectedColor === color
  );

  const handleClick = () => {
    // Toggle the favorite status
    toggleFavorite(product.id);

    // Add or remove from the cart based on whether the item is in the cart or not
    if (isInCart) {
      removeFromCart(product.id);
    } else {
      addToCart(product, size, color);
    }
  };

  return (
    <button
      onClick={handleClick}
      className="absolute top-4 right-4 z-10 bg-white p-2 rounded-full transition-colors"
    >
      <Heart
        className={`w-5 h-5 ${favorite ? 'fill-pink-500 text-pink-500' : 'text-gray-600'}`}
      />
    </button>
  );
};
