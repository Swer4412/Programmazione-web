import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout/>} />
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
