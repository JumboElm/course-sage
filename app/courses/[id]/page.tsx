import { coursesData } from "@/data/data";
import { notFound } from "next/navigation";

type Params = {
  params: {
    id: string;
  };
};

export default function CourseDetail({ params }: Params) {
  const course = coursesData.find((c) => c.id == params.id);
  if (!course) return notFound();

  return (
    <div className="max-w-6xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6 text-emerald-700 text-center">
        {course.title}
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        <div>
          <iframe
            className="w-full h-[250px] md:h-[350px] rounded-lg shadow"
            src={course.video}
            title="Course video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>

        <div className="space-y-4">
          <p className="text-gray-600">
            Автор: <strong>{course.author}</strong>
          </p>
          <p className="text-gray-700 text-base md:text-lg">
            {course.description}
          </p>

          <div className="bg-green-100 p-4 rounded shadow-md">
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
      </div>
    </div>
  );
}
