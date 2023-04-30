import {createBrowserRouter, RouterProvider} from "react-router-dom";
import HomePage from "./routes/HomePage";
import SearchPage from "./routes/SearchPage";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    {
      path: "/search",
      element: <SearchPage />,
    },
  ]);
  return <RouterProvider router={router} />
}

export default App
