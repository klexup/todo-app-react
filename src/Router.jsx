import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import MainPage from "./pages/MainPage";
import NewTodoPage from "./pages/NewTodoPage";

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
      <div className="font-inter mt-24 flex w-full flex-col items-center justify-center">
        {children}
        <Outlet />
      </div>
    </>
  );
}
