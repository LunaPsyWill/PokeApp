import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Main from "./main"
import Character from "./character"

export default function Rutas() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Main/>}/>
            <Route path="/character/:id" element={<Character/>}/>
        </Routes>    
    </BrowserRouter>    
  )
}
