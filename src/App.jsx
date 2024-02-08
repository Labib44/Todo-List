import { RouterProvider } from "react-router-dom"
import routers from "./routes/Router"


function App() {

  return (
    <>
     <RouterProvider router={routers}></RouterProvider>
    </>
  )
}

export default App
