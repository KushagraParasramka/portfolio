import { useState, useEffect } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { motion } from "framer-motion"

import './App.css'

import Homebody from './homepage/Homebody.jsx';
import Projectbody from './projectpage/Projectbody.jsx';
import Aboutbody from './aboutpage/Aboutbody.jsx';
import Contactbody from './contactpage/Contactbody.jsx';
import Displaybody from './projectdisplay/Displaybody.jsx';


function App() {

    const [mousepos,setMousepos] = useState({
        x : null,
        y : null
    })
    const [cursorVariant, setCursorVariant] = useState("default");


    useEffect ( () => {

        const mousemove = (e) => {
            setMousepos({
                x : e.clientX,
                y : e.clientY
            })
        }

        window.addEventListener("mousemove",mousemove)

        return (() => {
            window.removeEventListener("mousemove",mousemove)
        })
    },[])

    const variants = {
        default: {
            width: "32px",
            height: "32px",
            x: mousepos.x - 16,
            y: mousepos.y - 16,
            backgroundColor: "rgba(0,0,0,0.5)"
        },
        text: {
            height: 50,
            width: 50,
            x: mousepos.x - 25,
            y: mousepos.y - 25,
            backgroundColor: "rgba(0,0,0,0.1)",
            border: "1px solid rgba(0,0,0,0.4)",
          }
    }

    const textEnter = () => setCursorVariant("text");
    const textLeave = () => setCursorVariant("default");

  return (
    <>
        <motion.div
        className='cursor'
        variants={variants}
        animate={cursorVariant}
        transition={{ type: "tween", ease: "backOut", duration:0.5}}
        />
        <div onMouseEnter={textEnter} onMouseLeave={textLeave} className='main-container'>
            <BrowserRouter>
            <Routes>
                <Route path='/' element={<Homebody />} />
                <Route path='/projects' element={<Projectbody />} />
                <Route path='/about' element={<Aboutbody />} />
                <Route path='/talk' element={<Contactbody />} />
                <Route path="/project/*" element={<Displaybody />} />
            </Routes>
            </BrowserRouter>
        </div>
    </>
  )
}

export default App
