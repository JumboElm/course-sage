import CourseDetail from "../courses/[id]/page";
import { coursesData } from "@/data/data";

export default function CourseDetail({ params }: { params: { id: string } }) {
  const course = coursesData.find((c) => c.id === params.id);
  if (!course) return notFound();

  return <CourseDetail course={course} />;
}
