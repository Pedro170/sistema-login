import React from 'react'
import Home from '../pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Task from '../pages/task/Task'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='task' element={ <Task /> } />
    </Routes>
  )
}

export default Router