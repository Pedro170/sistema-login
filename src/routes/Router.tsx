import React from 'react'
import Home from '../pages/home/Home'
import { Routes, Route } from 'react-router-dom'
import Task from '../pages/task/Task'
import RequireAuth from 'contexts/auth/RequireAuth'

const Router = () => {
  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='task' element={ <RequireAuth><Task /></RequireAuth> } />
    </Routes>
  )
}

export default Router