import ReactDOM from 'react-dom/client'
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom'
import 'virtual:windi.css'
import { useNavigate } from 'react-router-dom'
import { HistoryPage } from './HistoryPage'
const root = ReactDOM.createRoot(document.getElementById('root'))

function App(props) {
  return (
    <div className='flex justify-center items-center h-screen w-screen'>
      <Outlet />
    </div>
  )
}



function HomePage(props) {
  let navigate = useNavigate();
  return (
    <div className='w-full h-full bg-texture bg-cover bg-right-top flex items-center justify-center'>
      <div className='w-10/13 h-4/5 rounded-xl backdrop-filter backdrop-blur-md bg-white/30 flex flex-col items-center justify-center gap-3'>
        <h1 className='text-2xl text-blue-700 font-bold sm:(text-5xl)'>前路浩渺，北斗高悬</h1>
        <h2 className='text-md text-white font-serif sm:(text-2xl)'>仪心仪意仪家人实践团</h2>
        <button className='w-4/5 bg-sky-500/80 rounded-lg py-5 shadow-lg shadow-sky-300 text-white mt-20 text-lg sm:(text-2xl w-3/5) hover:(bg-sky-600/80) transition ease-out'
          onClick={() => {
            navigate("/history");
          }}> 让我们一起走进北斗</button>
      </div>
    </div>
  )
}



root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="" element={<HomePage />}></Route>
        <Route path="history" element={<HistoryPage />}></Route>
      </Route>
    </Routes>
  </BrowserRouter>
)