import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root from "./pages/Root";
import { ConfigProvider } from "antd";
import Teachers from "./pages/Teachers";
import Classes from "./pages/Classes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children:[
      {
        path:"teachers",
        element:<Teachers/>

      },
      {
        path:"classes",
        element:<Classes/>
      }
    ]
  },
]);

function App() {
  return (
    <>
      <ConfigProvider theme={{
        token:{
          colorPrimary:"#BC8E5B",
          fontSize:16
        }
      }}>
        <RouterProvider router={router}>
          <Root />
        </RouterProvider>
      </ConfigProvider>
    </>
  );
}

export default App;
