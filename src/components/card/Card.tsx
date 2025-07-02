'use client'
import type { IBook } from "@/type";
import { useGetBooksQuery } from "@/redux/api/baseApi";
import {
  Card as UICard,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Card() {
  const { data: response, isLoading, isError } = useGetBooksQuery(undefined);

   const books = response?.data;
  if (isLoading) {
    return <p>Loading books </p>;
  }
  if (isError) {
    return <p>Something went wrong while fetching books.</p>;
  }

  if (!books || !Array.isArray(books)||books.length === 0) {
    return <p>No books found</p>;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {books.map((book: IBook) => (
        <UICard key={book._id} className="flex flex-col justify-between">
          <CardHeader>
            <CardTitle>{book.title}</CardTitle>
            <CardDescription>by {book.author}</CardDescription>
            <CardAction>Card Action</CardAction>
          </CardHeader>
          <CardContent>
            <p>{book.description}</p>
            <p className="text-sm mt-2 text-gray-500">Genre:{book.genre}</p>
            <p className="text-sm mt-2 text-gray-500">ISBN:{book.isbn}</p>
          </CardContent>
          <CardFooter className="flex justify-between items-center">
            <span className="text-xs">
                Copies: {book.copies}
            </span>
            <span className={
                book.available 
                ? "text-green-600 text-xs font-medium"
                : "text-red-600 text-xs font-medium"
            }  >
            {book.available ? "Available": "Unavailable" }
            </span>
          </CardFooter>
        </UICard>
      ))}
    </div>
  );
}
