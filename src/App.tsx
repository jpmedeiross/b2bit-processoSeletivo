import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Login } from "./pages/Login";
import { Error404 } from "./pages/Error404";
import { AuthenticatedRoute } from "./components/AuthenticatedRoute";
import { Profile } from "./pages/Profile";
import { AuthProvider } from "./context/AuthContext";
import { Toaster } from "./components/feats/toaster";
import { LoginRoute } from "./components/LoginRoute";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginRoute Component={Login} />,
    errorElement: <Error404 />,
  },
  { path: "/profile", element: <AuthenticatedRoute Component={Profile} /> },
]);

function App() {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
      <Toaster />
    </AuthProvider>
  );
}

export default App;