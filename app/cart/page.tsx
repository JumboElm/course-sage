"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { coursesData } from "@/data/data";
import Button from "@/components/Home/Button/Button";

export default function CartPage() {
  const [cart, setCart] = useState<string[]>([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
    setCart(storedCart);
  }, []);

  useEffect(() => {
    const totalPrice = cart
      .map((id) => coursesData.find((c) => c.id === id))
      .filter(Boolean)
      .reduce((acc, c) => acc + (c?.payment.final || 0), 0);
    setTotal(totalPrice);
  }, [cart]);

  const removeFromCart = (id: string) => {
    const updatedCart = cart.filter((itemId) => itemId !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const handlePurchase = () => {
    alert("✅ Purchase successful! Enjoy your courses.");
    localStorage.removeItem("cart");
    setCart([]);
  };

  const coursesInCart = cart
    .map((id) => coursesData.find((c) => c.id === id))
    .filter(Boolean);

  return (
    <div className="min-h-screen py-8 px-6 max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-6 text-emerald-700 text-center">
        Your Cart
      </h1>

      {coursesInCart.length === 0 ? (
        <p className="text-center text-gray-500">Your cart is empty.</p>
      ) : (
        <div className="space-y-6">
          {coursesInCart.map((course) => (
            <div
              key={course?.id}
              className="flex flex-col md:flex-row justify-between items-center bg-white p-4 rounded shadow"
            >
              <div>
                <h2 className="text-xl font-semibold text-emerald-600">
                  {course?.title}
                </h2>
                <p className="text-sm text-gray-600">By {course?.author}</p>
                <p className="text-md text-gray-800 mt-1">
                  Price: ₽{course?.payment.final}
                </p>
              </div>
              <Button
                onClick={() => removeFromCart(course!.id)}
                className="mt-4 md:mt-0 bg-red-500 hover:bg-red-600"
              >
                Remove
              </Button>
            </div>
          ))}

          <div className="text-right text-xl font-bold text-emerald-800">
            Total: ₽{total.toFixed(2)}
          </div>

          <div className="text-right">
            <Button
              onClick={handlePurchase}
              className="bg-emerald-600 hover:bg-emerald-700"
            >
              Complete Purchase
            </Button>
          </div>
        </div>
      )}

      <div className="mt-8 text-center">
        <Link href="/" className="text-blue-600 hover:underline">
          ← Back to Courses
        </Link>
      </div>
    </div>
  );
}
