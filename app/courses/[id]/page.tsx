import { coursesData } from "@/data/data";
import { notFound } from "next/navigation";

export default function CourseDetail({ params }: { params: { id: string } }) {
  const course = coursesData.find((c) => c.id === params.id);
  if (!course) return notFound();

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-4 text-emerald-700">
        {course.title}
      </h1>
      <p className="text-gray-600 mb-4">Автор: {course.author}</p>
      <iframe
        className="w-full h-[400px] mb-6 rounded"
        src={course.video}
        title="Course video"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
      <p className="mb-6 text-gray-700 text-lg">{course.description}</p>
      <div className="bg-green-100 p-4 rounded mb-6 shadow">
        <p className="text-lg font-semibold text-green-800">
          Цена:{" "}
          <span className="line-through text-red-500">
            ₽{course.payment.base}
          </span>{" "}
          <span className="text-green-600">₽{course.payment.final}</span>
        </p>
        <p className="text-sm text-green-700">
          Скидка: {course.payment.discount}%
        </p>
      </div>
      <button className="bg-emerald-600 text-white px-6 py-2 rounded hover:bg-emerald-700 transition">
        Записаться на курс
      </button>
    </div>
  );
}
