import ReactDOM from 'react-dom/client'
import { HashRouter, Outlet, Route, Routes } from 'react-router-dom'
import 'virtual:windi.css'
import { useNavigate } from 'react-router-dom'
import { HistoryPage } from './HistoryPage'
import React from 'react'
import { Application } from './application.jsx'
import { PrinciplePage } from './principle.jsx'

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
    <div className='w-full h-full bg-texture bg-cover bg-right-top flex items-center justify-center animated animate-fadeIn'>
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

function Overall(props) {
  let content_style='text-lg md:(text-xl)'
  let navigate = useNavigate();
  return (
    <div className='w-full h-full bg-overall bg-cover bg-right-top flex items-center justify-center animated animate-fadeIn'>
      <div className='w-10/13 h-4/5 rounded-xl backdrop-filter backdrop-blur-xl bg-white/70 flex flex-col  gap-3 p-5 md:p-10 overflow-auto'>
        <h1 className='md:text-3xl text-2xl text-gray-800 font-bold'>前路浩渺，北斗高悬</h1>
        <hr className='w-full bg-black border-black  '></hr>
        <p className={content_style}> 作为我国独立自主研制的全球卫星定位系统，北斗走过了30逾年的发展历程。 </p>
        <p className={content_style}> 诞生于国家安全需要，面对着科研经验不足、专业水平落后、国际势力排挤等众多困难，北斗系统研发人员不惧困苦，发扬创新精神，一步步的将北斗系统打造成我国的科技名片，让北斗系统成为21世纪一流的国际卫星定位系统。 </p>
        <p className={content_style}> 如今，北斗系统正以面向世界，面向未来的姿态向全球传达着中国声音，展现着中国实力。同时，北斗系统以其服务全球用户的态度，传达着中国合作共赢，互惠共享的发展理念，是中国积极推动构建人类命运共同体建设的生动案例。</p>
        <p className={content_style}> 作为当代大学生，我们也将继承和发扬北斗精神，以昂扬积极的态度面对未来的挑战。</p>
        <p className='text-2xl text-blue-700 mt-4'> 希望我们每个人都能“有一份热，发一份光”，都能以微光汇聚，照亮北斗群星璀璨！!</p>
        <div className='flex flex-col gap-2'>
          <button className='py-2 px-6 bg-gradient-to-r from-orange-500 to-red-500 rounded-lg shadow-xl'
            onClick={()=>{
              navigate('/history')
            }}> 发展历史 </button>
          <button className='py-2 px-6 bg-gradient-to-r from-lime-300 to-green-500 rounded-lg shadow-xl'
          onClick={()=>{
              navigate('/principle')
            }}> 原理与特色 </button>
          <button className='py-2 px-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg shadow-xl'
          onClick={()=>{
              navigate('/application')
            }}> 北斗应用 </button>
        </div>
      </div>
    </div>
  );
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