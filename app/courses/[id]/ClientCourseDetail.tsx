"use client";

import { useState } from "react";

type Course = {
  id: string;
  image: string;
  title: string;
  price: number;
  author: string;
  reviewNumber: number;
  lessons: number;
  students: number;
  category: string;
  video: string;
  description: string;
  payment: {
    base: number;
    discount: number;
    final: number;
  };
};

export default function ClientCourseDetail({ course }: { course: Course }) {
  const [isPaid, setIsPaid] = useState(false);
  const [message, setMessage] = useState("");

  const handleEnroll = () => {
    if (!isPaid) {
      setMessage("❌ Please complete the payment first.");
    } else {
      const storedCart = JSON.parse(localStorage.getItem("cart") || "[]");
      if (!storedCart.includes(course.id)) {
        storedCart.push(course.id);
        localStorage.setItem("cart", JSON.stringify(storedCart));
      }
      setMessage("✅ Course added to cart!");
    }
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-emerald-700">
        {course.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
        <div className="shadow-lg rounded overflow-hidden">
          <iframe
            className="w-full h-[300px] md:h-[400px]"
            src={course.video}
            title="Course video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="space-y-6 bg-white rounded p-6 shadow-xl">
          <p className="text-gray-600 text-sm">
            Автор: <strong>{course.author}</strong>
          </p>
          <p className="text-gray-700 text-base leading-relaxed">
            {course.description}
          </p>

          <div className="bg-green-50 border border-green-300 p-4 rounded">
            <p className="text-xl font-bold text-green-700">
              Цена:{" "}
              <span className="line-through text-red-500">
                ₽{course.payment.base}
              </span>{" "}
              <span className="text-green-600">₽{course.payment.final}</span>
            </p>
            <p className="text-sm text-green-800">
              Скидка: {course.payment.discount}%
            </p>
          </div>

          {message && (
            <p className="text-center text-sm text-red-600">{message}</p>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <button
              onClick={handleEnroll}
              className={`w-full sm:w-auto px-6 py-2 rounded text-white transition text-center ${
                isPaid
                  ? "bg-emerald-600 hover:bg-emerald-700"
                  : "bg-gray-400 cursor-not-allowed"
              }`}
              disabled={!isPaid}
            >
              Записаться
            </button>

            {!isPaid && (
              <button
                onClick={() => {
                  setIsPaid(true);
                  setMessage(
                    "✅ Оплата прошла успешно. Теперь вы можете записаться!"
                  );
                }}
                className="w-full sm:w-auto px-6 py-2 rounded bg-blue-600 hover:bg-blue-700 text-white transition"
              >
                Оплатить
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
