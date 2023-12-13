import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewTodoPage from "./pages/NewTodoPage";
import EditTodoPage from "./pages/EditTodoPage";

export default function Router() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainContainer />,
      children: [
        {
          index: true,
          element: <MainPage />,
        },
        {
          path: "newTodo",
          element: <NewTodoPage />,
        },
        {
          path: `editTodo/:todoId`,
          element: <EditTodoPage />,
        },
      ],
    },
  ]);

  return (
    <>
      |<RouterProvider router={router} />
    </>
  );
}

function MainContainer({ children }) {
  return (
    <>
      <div className="mt-24 flex w-full flex-col items-center justify-center font-inter">
        {children}
        <Outlet />
      </div>
    </>
  );
}
