import React from 'react'
import ReactDOM from 'react-dom/client'
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom'
import 'virtual:windi.css'

import { HomePage } from './home.jsx'
import { HistoryPage } from './history.jsx'
import { PrinciplePage } from './principle.jsx'
import { Application } from './application.jsx'
import { Overall } from './overall.jsx'

const root = ReactDOM.createRoot(document.getElementById('root'))

function App(props) {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Outlet />
    </div>
  )
}

root.render(
  <HashRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="history" element={<HistoryPage />}></Route>
        <Route path="principle" element={<PrinciplePage />}></Route>
        <Route path="application" element={<Application />}></Route>
        <Route path="overall" element={<Overall />}></Route>
      </Route>
    </Routes>
  </HashRouter>
)