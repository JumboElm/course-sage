"use client";
import React, { createContext, useContext, useEffect, useState } from "react";

type Course = {
  id: string;
  title: string;
  price: number;
  payment: {
    final: number;
  };
};

type CartContextType = {
  cart: Course[];
  purchased: string[];
  addToCart: (course: Course) => void;
  removeFromCart: (courseId: string) => void;
  purchase: () => void;
  isPurchased: (courseId: string) => boolean;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cart, setCart] = useState<Course[]>([]);
  const [purchased, setPurchased] = useState<string[]>([]);

  useEffect(() => {
    const storedCart = localStorage.getItem("cart");
    const storedPurchased = localStorage.getItem("purchased");

    if (storedCart) setCart(JSON.parse(storedCart));
    if (storedPurchased) setPurchased(JSON.parse(storedPurchased));
  }, []);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem("purchased", JSON.stringify(purchased));
  }, [purchased]);

  const addToCart = (course: Course) => {
    if (!cart.find((c) => c.id === course.id)) {
      setCart([...cart, course]);
    }
  };

  const removeFromCart = (courseId: string) => {
    setCart(cart.filter((c) => c.id !== courseId));
  };

  const purchase = () => {
    setPurchased([...purchased, ...cart.map((c) => c.id)]);
    setCart([]);
  };

  const isPurchased = (courseId: string) => {
    return purchased.includes(courseId);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        purchase,
        isPurchased,
        purchased,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
