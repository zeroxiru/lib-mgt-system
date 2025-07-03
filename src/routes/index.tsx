import App from "@/MainLayout";
import { createBrowserRouter } from "react-router";
import AllBooks from "@/pages/AllBooks";
import AddBooks from "@/pages/AddBooks";
import BorrowSummary from "@/pages/BorrowSummary";
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
