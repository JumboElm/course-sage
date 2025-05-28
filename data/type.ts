export interface Course {
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
}
