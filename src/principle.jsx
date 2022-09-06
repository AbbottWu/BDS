import ReactDOM from 'react-dom/client'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
        <p className={passage_style}>短报文功能的由来：这要从最初双星定位也就是北斗一号说起，该定位系统由两颗地球静止卫星、一颗在轨备份卫星、中心控制系统、标校系统和各类用户机等部分组成的，能实现一定区域的导航定位、通讯等多种用途，但存在定位慢，精度低、卫星用户资源有限，只能二维主动式定位。也就是在定位时需要给卫星发信号。这样，北斗就可以与国际通信卫星一样完成通信任务，于是定位与通信兼备成为其一大特点，这就是北斗短报文的由来。在应用实践中短报文功能在各方面发挥了极大的作用，所以该功能在北斗系列的研发历程中保留了下来，最终称为北斗卫星定位系统的最大特点。</p>
        <p className={passage_style}>短报文功能的作用：北斗短报文具有十分重要的作用，在普通移动通讯信号不能覆盖的地区（如无人区，荒漠，海洋，极地等）或通讯基站遭受破坏的情况（如地震，洪水，台风等），装有北斗短报文模块的北斗终端就可以通过短报文进行紧急通讯，不仅能让用户知道自己“在哪儿”，也能告诉别人“发生了什么”</p>
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