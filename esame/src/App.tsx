import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SideBar from "./Layouts/SideBar"
import Home from "./Pages/Home"
import SavedNews from "./Pages/SavedNews"

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<SideBar/>} />
        <Route index element={<Home/>}/>
        <Route path="/saved" element={<SavedNews/>} />
    </Route>
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router}/>
    </>
  )
}

export default App
