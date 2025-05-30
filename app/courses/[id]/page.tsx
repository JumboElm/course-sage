import { notFound } from "next/navigation";
import { coursesData } from "@/data/data";
import ClientCourseDetail from "./ClientCourseDetail";

export const metadata = {
  title: "Детали курса",
  description: "Подробности и доступ к видео и оплате курса.",
};

type Params = {
  params: {
    id: string;
  };
};

export default function CoursePage({ params }: Params) {
  const course = coursesData.find((c) => c.id === params.id);
  if (!course) return notFound();

  return <ClientCourseDetail course={course} />;
}
