import ReactDOM from 'react-dom/client'
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import 'virtual:windi.css'

import GNSS_ICON from '/assets/gps-svgrepo-com.svg'
import MESSAGE_ICON from '/assets/message-svgrepo-com.svg'
import close_icon from '/assets/close.svg'

export function PrinciplePage(props) {
    let base_style = 'absolute w-10/13 h-4/5 rounded-xl flex flex-col md:(flex-row justify-center) items-center gap-8 py-10 px-5 animated ';
    const [show, useShow] = useState(0);
    let content = [<div></div>, <div></div>, <div></div>, <div></div>];
    let navigate = useNavigate();
    let passage_style='text-md md:(text-xl)'
    content[1] = (
      <div className='flex flex-col gap-4 overflow-auto md:(p-4 w-2/3)'>
        <h1 className='text-xl md:(text-3xl)'>北斗导航定位原理</h1>
        <hr></hr>
        <p className={passage_style}>卫星定位本质上是通过测量距离来确定位置的，所以，让我们从平面上通过距离定位说起。在平面上，如果待测点 P 到一个定点的距离 r 已知，则可以知晓其一定在以该定点为圆心以 r 为半径的圆周上</p>
        <p className={passage_style}>如果知道其到两个定点的距离，则可以确定其在两个圆周的交点上。更进一步，如果知道其到三个定点的距离，则可以确定其位于三个圆周的共同交点上。</p>
        <p className={passage_style}>在三维空间中，上述的圆周会变为球面。则如果已知待测点 P 到三个定点的距离则有两个可能位置。根据该待定位点一定位于地球表面，则原则上可以确认其的位置。不过在工程实践中，为了处理由于设备、地球大气层等因素产生的误差，实际上需要四颗卫星才能完成较为准确的定位。</p>
      </div>
    );
    content[2] = (
      <div className='flex flex-col gap-4 overflow-auto md:(p-4 w-2/3)'>
        <h1 className='text-xl md:(text-3xl)'>北斗短报文功能</h1>
        <hr></hr>
        <p className={passage_style}>短报文功能的由来：北斗一号导航系统作为主动定位系统，需要定位终端首先向北斗卫星发送数据，然后北斗卫星返回数据才能够实现定位。然而，考虑到主动定位系统对地面控制中心的依赖性比较大、时间延迟比较大、容量比较小、用户隐蔽性比较差，在国防上的应用受到一定的限制，自北斗二号起，北斗系统便效仿 GPS、GALILEO、GLONASS，采用了被动定位的定位方式，由终端机直接接受卫星信号进行定位。但是，北斗一号的发展成果并没有白费，北斗系统将“终端机向卫星发送信号”这一功能创新性的保留了下来，其也成为北斗卫星定位系统中最特殊的“短报文”功能。
        </p>
        <p className={passage_style}>短报文功能的作用：
          北斗短报文具有十分重要的作用，在普通移动通讯信号不能覆盖的地区
          （如无人区，荒漠，海洋，极地等）或通讯基站遭受破坏的情况下
          （如地震，洪水，台风等），装有北斗短报文模块的终端可以通过短报文进行紧急通讯，让信息安全，快速的抵达最需要它的人的手中。
        </p>
      </div>
    );
    return (
      <div className='relative h-full w-full flex flex-col justify-center items-center bg-gradient-to-r from-lime-300 to-green-500 animated animate-fadeIn animate-slow'>
        <div className={base_style + (show != 0 ? 'z-20 animate-fadeIn ' : 'hidden z-0 ') + (show == 1 ? "bg-lime-100" : "") + (show == 2 ? "bg-green-100" : "") + (show == 3 ? "bg-white animate-fadeOut" : "")}>
          <button className="absolute right-3 top-3 md:(right-10 top-10) bg-gray-200 rounded-full hover:(bg-gray-400) transition ease-out"
            onClick={() => {
              useShow(3);
              setTimeout(
                () => useShow(0), 1000)
            }}><img src={close_icon} className="w-8" ></img></button>
          {content[show]}
        </div>
        <div className='w-10/13 h-4/5 rounded-xl backdrop-filter backdrop-blur-xl bg-white/80 flex flex-col md:(flex-row) items-center gap-8 justify-center z-10'>
          <div className='h-0 w-0 bg-lime-100 bg-green-100'></div>
          <div className='w-4/5 h-2/5 bg-lime-300 rounded-lg p-3 flex items-center justify-center flex-col md:(w-2/5 h-3/5) cursor-pointer'
            onClick={() => {
              useShow(1);
            }}>
            <img src={GNSS_ICON} className="h-3/5 w-3/5"></img>
            <h1 className='text-lg mt-4 md:(text-2xl)'>定位原理</h1>
          </div>
          <div className='w-4/5 h-2/5 bg-green-300  rounded-lg p-3 flex items-center justify-center flex-col md:(w-2/5 h-3/5) cursor-pointer'
            onClick={() => {
              useShow(2);
            }}>
            <div className='h-3/5 w-3/5 flex items-center justify-center'>
              <img src={MESSAGE_ICON} className="h-5/7 w-5/7"></img>
            </div>
            <h1 className='text-lg mt-4 md:(text-2xl)'>北斗特色——短报文</h1>
          </div>
          <button className=' bg-purple-400 shadow shadow-purple-600 rounded-md md:(-mr-4)' onClick={() => {
            navigate('/application');
          }}>
            <div className='py-2 px-6 text-lg md:(write-vertical-left px-5 py-10 text-md)'>
              然后，我们来看看北斗系统的应用吧！
            </div>
          </button>
        </div>
      </div>
    );
  }