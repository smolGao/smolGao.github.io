import React from 'react'
import {Route, Routes} from "react-router-dom"
import '../styles/Content.css'
import Home from './Home'
import Resume from './Resume'
import Inventory from './Inventory'


const Content = () => {
  return (
    <section id="content">
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/resume" element={<Resume/>}/>
            <Route path="/inventory" element={<Inventory/>}/>
        </Routes> 
    </section>
  )
}

export default Content