import React from 'react'
import Header from './Header/Header'
import Welcome from '../pages/Welcome/Welcome'
import Footer from './Footer/Footer'
import { Route, Routes } from 'react-router-dom'
import Layout from './layout/Layout'
import Resume from '../pages/Resume/Resume'
import Projects from '../pages/Projects/Projects'
import Contact from '../pages/Contact/Contact'


const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout/>} >
        <Route index element={<Welcome/>}/>
        <Route path='resume' element={<Resume/>} />
        <Route path='projects' element={<Projects/>}/>
        <Route path='contact' element={<Contact/>} />
      </Route>
    </Routes>
  )
}

export default App
