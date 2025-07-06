import App from "@/MainLayout";
import { createBrowserRouter } from "react-router";
import AllBooks from "@/pages/Book/AllBooks";
import AddBooks from "@/pages/Book/AddBooks";
import BorrowSummary from "@/pages/BorrowSummary/BorrowSummary";
import Home from "@/pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    // another option
    // Component: App,
    children: [
      {
        // path: "/tasks",
        index: true,
        Component: Home
      },
      {
        path: "/books",
        Component: AllBooks,
      },
      {
        path: "/create-book",
        Component: AddBooks,
      },
      {
        path: "/borrow-summary",
        Component: BorrowSummary,
      },
    ],
  },
]);
export default router;
