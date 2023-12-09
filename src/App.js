import Home from "./pages/Home";
import { createBrowserRouter, Outlet, RouterProvider, ScrollRestoration } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Introduction from "./pages/Introduction";
import OrganizationalStructure from "./pages/OrganizationalStructure"
import AdvisorBoard from "./pages/AdvisorBoard"



const Layout = () => {
  return (
    <div>
      <Header />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </div>
  )
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/introduction",
        element: <Introduction />
      },
      {
        path: "/organizationalStructure",
        element: <OrganizationalStructure/>
      }, {
        path: "/advisorboard",
        element: <AdvisorBoard/>
      }
      
    ]
  }
])


function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
