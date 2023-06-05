import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import SideBar from "./Layouts/SideBar"
import Home from "./Pages/Home"
import SavedNews from "./Pages/SavedNews"
import Welcome from './Components/Welcome'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route element={<SideBar />}>
        <Route path="/" element={<Welcome/>}/>
        <Route path="home" element={<Home />} />
        <Route path="saved" element={<SavedNews />} />
      </Route>
    </Route >
  )
)


function App() {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
