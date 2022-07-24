import React, { useRef, useState } from 'react'
import ReactDOM from 'react-dom/client'
import 'virtual:windi.css'
import { Parallax, ParallaxLayer } from '@react-spring/parallax'
import plain_location_1 from '../assets/plain-location-1.png'
import plain_location_2 from '../assets/plain-location-2.png'
import plain_location_3 from '../assets/plain-location-3.png'
import threed_location from '../assets/3d-location.png'
import earth_img from '../assets/earth.png'
import laser_img from '../assets/laser.png'
import phone_img from '../assets/phone.png'
import satellite_img from '../assets/satellite-plain.png'



const root = ReactDOM.createRoot(document.getElementById('root'))

class Parallax_home extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
  }
  /*滚动事件监听部分
  componentDidMount() {
  //   this.ref.current.container.current.addEventListener('scroll', this.handleScroll.bind(this));
  // }
  // componentWillUnmount() {
  //   this.ref.current.container.current.removeEventListener('scroll', this.handleScroll.bind(this));
  // }
  // handleScroll(e) {
  //   console.log(this.ref.current.content.current);
  */
  render() {
    return (
      <Parallax pages={4} enabled={true} className="top-0 left-0" ref={this.ref}>
        <Page1 />
        <Page2 />
        <Page3 />
        <Page4 />
      </Parallax>
    )
  }
}

// 第一页
function Page1(props) {
  return (
    <div>
      <ParallaxLayer
        offset={0}
        speed={0}
        className="flex"
      >
        <div className='bg-texture bg-cover w-full h-full'>
          <div className='bg-gradient-to-b from-black/50 via-black/80 to-sky-700  h-full w-full' id='hi'></div>
        </div>
      </ParallaxLayer>
      <ParallaxLayer
        offset={0}
        speed={-0.4}
        className="flex justify-center items-center">
        <div className='flex flex-col gap-1 items-center'>
          <h1 className='text-white text-5xl'>你好，北斗</h1>
          <h2 className='text-gray-400 text-bg mt-3'>仪心仪意仪家人实践团</h2>
          <h2 className='text-gray-400 text-bg'>“前路浩渺，北斗高悬”社会实践项目</h2>
        </div>
      </ParallaxLayer>
    </div>
  )
}

// 第二页
class Page2 extends React.Component {
  constructor(props) {
    super(props);

    let init = this.make_content(0);  // 初始获取渲染数据
    this.state = { 'img': init[0], 'intro': init[1], 'state': 0, 'clicked': null }

  }

  // 演示数据存储
  make_content = function (t = 0) {
    let images = [
      plain_location_1,
      plain_location_2,
      plain_location_3,
      threed_location,
    ]
    let intros = [
      "卫星定位本质上是通过测量距离来确定位置的，所以，让我们从平面上通过距离定位说起。在平面上，如果待测点 P 到一个定点的距离 r 已知，则可以知晓其一定在以该定点为圆心以 r 为半径的圆周上",
      "如果知道其到两个定点的距离，则可以确定其在两个圆周的交点上；",
      "更进一步，如果知道其到三个定点的距离，则可以确定其位于三个圆周的共同交点上。",
      "在三维空间中，上述的圆周会变为球面。则如果已知待测点 P 到三个定点的距离则有两个可能位置。根据该待定位点一定位于地球表面，则原则上可以确认其的位置。不过在工程实践中，为了处理由于设备、地球大气层等因素产生的误差，实际上需要四颗卫星才能完成较为准确的定位。",
    ]
    return [images[t], intros[t]];
  }

  transation = function () {
    console.log('try');
    this.setState({ 'clicked': false });
  }

  render() {
    // 背景层
    let background = (
      <ParallaxLayer
        offset={1}
        speed={0}
        className="bg-gradient-to-b from-sky-700 to-blue-600">
      </ParallaxLayer>
    );

    // card 内渲染部分（图片+介绍）
    let in_card = (
      <div className="container flex items-center">
        {/* 上一页按钮 */}
        <div className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded flex items-center justify-center h-60 w-8 flex-shrink-0 flex-grow-0"
          onClick={() => {
            let new_state = ((this.state['state'] - 1 > 0) ? this.state['state'] - 1 : 0);
            let new_item = this.make_content(new_state);
            if (new_state != this.state.state) {
              this.setState({ 'img': new_item[0], 'intro': new_item[1], 'state': new_state, 'clicked': true });
              window.setTimeout(() => { this.setState({ 'clicked': false }) }, 1000);
            }
          }}>
          <i className="icon-chevron-left"></i>
        </div>

        {/* 图片与介绍容器 */}
        <img src={this.state.img} className={'m-5 lg:(m-10 w-40) ' + (this.state.clicked ? 'animated animate-fadeIn animate-slow' : '')}></img>
        <p className={'m-10 ' + (this.state.clicked ? 'animated animate-fadeIn animate-slow' : '')}>
          {this.state.intro}
        </p>

        {/* 下一页按钮 */}
        <div className="bg-gray-200 text-gray-800 hover:bg-gray-300 rounded flex items-center justify-center h-60 w-8 flex-shrink-0 flex-grow-0"
          onClick={() => {
            let new_state = ((this.state['state'] + 1 < 4) ? this.state['state'] + 1 : 3);
            let new_item = this.make_content(new_state);
            console.log(new_state);
            if (new_state != this.state.state) {
              this.setState({ 'img': new_item[0], 'intro': new_item[1], 'state': new_state, 'clicked': true });
              window.setTimeout(() => { this.setState({ 'clicked': false }) }, 1000);
            }
          }}>
          <i className="icon-chevron-right"></i>
        </div>
      </div>
    );

    // card 层
    let center_box = (
      <ParallaxLayer
        offset={1}
        speed={0.5}
        className="flex justify-center items-center">
        <div className='container flex flex-col p-5 bg-white w-3/5 rounded-xl shadow-lg shadow-blue-400'>
          <h1 className='self-center text-3xl p-3 bg-blue-200 rounded-md text-sky-700'>卫星定位的原理</h1>
          <hr className='mt-5' />
          {in_card}
        </div>
      </ParallaxLayer>
    );

    return (
      <div>
        {background}
        {center_box}
      </div>
    )
  }
}

class Page3 extends React.Component {
  constructor(props) {
    super(props);
    this.introduction = {
      "onland": '地面控制部分由主控站、监测站、地面天线和通讯辅助系统(数据传输)组成。主控站负责收集各个监测站的跟踪数据并计算卫星轨道和时钟参数，将计算结果通过地面天线发送给卫星。同时，主控站还负责管理、协调整个地面控制系统的工作。在监测站的同址上安置有专用的地面天线。地面天线配置了将命令和数据发送到卫星并接收卫星的遥测数据和测距数据的设备。地面天线的所有操作都在主控站的控制下进行。',
      "satellite": '全球定位卫星系统的空间卫星一般运行在距离地面20000千米左右的太空，24~30颗卫星组成星座，依据其结构设计分布在3个或6个轨道平面上，相邻轨道间的夹角相同。为保证系统的连续运行，一般在每个轨道上还部署一颗备份卫星，一旦有卫星发生故障则可以立即替代。',
      "receiver": '用户设备部分即导航信号接收机。其主要功能是能够捕获到卫星,并跟踪这些卫星的运行。当接收机捕获到跟踪的卫星信号后,即可测量出接收天线至卫星的伪距离和距离的变化率,解调出卫星轨道参数等数据。根据这些数据,接收机中的微处理计算机就可按定位解算方法进行定位计算,计算出用户所在地理位置的经纬度、高度、速度、时间等信息。',
    }
    this.title = {
      "onland": "地面控制系统",
      "satellite": "空间卫星",
      "receiver": "接收机",
    }
    this.state = {
      'clicked': [false, false, false],
      'showing': null,
      'title': null,
      'introduction': null,
      'color': null,
    }
  }
  click_img = function (i) {
    console.log('clicked')
    let reflect = {
      0: "onland",
      1: "satellite",
      2: "receiver"
    }
    let color_reflect = {
      0: "red",
      1: "cyan",
      2: "yellow"
    }
    let new_clicked = this.state.clicked;
    new_clicked[i] = true;
    this.setState({
      'clicked': new_clicked,
      'showing': true,
      'title': this.title[reflect[i]],
      'introduction': this.introduction[reflect[i]],
      'color': color_reflect[i],
    })
  }
  render() {
    let background = (
      <ParallaxLayer
        offset={2}
        speed={0}
        className="bg-gradient-to-b from-blue-600 w-view via-blue-800 to-black">
      </ParallaxLayer>
    );

    let earth = (
      <ParallaxLayer
        offset={2}
        speed={0.3}
        className="bg-transparent w-full justify-center items-center flex"
      >
        <img src={earth_img} className='h-120 mt-80'></img>
      </ParallaxLayer>
    );
    let introduction = (
      <div className={'absolute h-2/3 w-2/5 bg-white shadow-xl border-2 border-' + this.state.color + '-500 shadow-' + this.state.color + '-400 rounded-xl flex flex-col items-center p-10 animated ' + (this.state.showing ? 'animate-fadeIn z-50' : 'animate-fadeOut animate-faster z-0')}>
        <div className='absolute h-8 w-8 rounded-full bg-gray-300 hover:(bg-gray-400) flex justify-center items-center right-5 top-5 cursor-pointer'
          onClick={() => {
            this.setState({
              'showing': false,
              'title': null,
              'introduction': null,
              'color': null,
            })
          }}>
          <i className="icon-close"></i>
        </div>
        <div className='border-cyan-500 shadow-cyan-400 border-red-500 shadow-red-400 border-yellow-500 shadow-yellow-400 h-0 w-0'></div>
        <h1 className='text-2xl text-gray-900/80'> {this.state.title} </h1>
        <hr className='my-4' />
        <p className='text-gray-900/80 self-start'>{this.state.introduction}</p>
      </div>
    );
    let click_able = (
      <ParallaxLayer
        offset={2}
        speed={0.7}
        className="bg-transparent justify-center items-center flex"
      >
        {introduction}
        <div className='absolute mb-20'>
          <span className="flex cursor-pointer"
            onClick={() => { this.click_img(0) }}>
            <span className={"animate-ping absolute inline-flex rounded-full h-15 w-15 bg-red-500 mt-4 z-0 " + (this.state.clicked[0] ? 'hidden' : '')}></span>
            <img src={laser_img} className='h-20 z-40'></img>
          </span>
        </div>

        <div className='absolute mr-150 mb-150'>
          <span className='flex cursor-pointer'
            onClick={() => { this.click_img(1) }}>
            <span className={"animate-ping absolute inline-flex rounded-full h-20 w-20 bg-cyan-500 ml-32 mt-4 z-0 " + (this.state.clicked[1] ? 'hidden' : '')}></span>
            <img src={satellite_img} className='h-20 transform -rotate-37 z-40'></img>
          </span>
        </div>

        <div className='absolute mt-80 mr-20'>
          <span className='flex cursor-pointer'
            onClick={() => { this.click_img(2) }}>
            <span className={"animate-ping absolute inline-flex rounded-full h-10 w-10 bg-yellow-500 -ml-2 z-0 " + (this.state.clicked[2] ? 'hidden' : '')}></span>
            <img src={phone_img} className='transform rotate-20 h-10 z-40'></img>
          </span>
        </div>

      </ParallaxLayer>
    )

    return (
      <div>
        {background}
        {earth}
        {click_able}
      </div>
    );
  }
}

class Page4 extends React.Component {
  constructor(props) {
    super(props);
    this.introduction = {
      '交通运输': '在交通方面，下到远洋运输、内河航运、船舶停泊入坞，上到航路导航、机场场面监控，以及在陆地上的车辆自主导航、车辆跟踪监控等等，都有北斗进行参与。作为农业林业渔业大国，北斗导航与遥感、地理信息技术相结合，让劳动生产效率得到提高，使得产业从传统产业向智慧产业转变。',
      '公安消防': '在公安方面，由于高度敏感性和保密性的需求，推行应用北斗系统势在必行。基于北斗的公安信息化系统，主要应用于公安车辆指挥调度、民警现场执法、应急事件信息传输、公安授时服务等，实现了警力资源动态调度、一体化指挥，提高了相应速度和执行效率。',
      '特殊关爱': '在特殊关爱方面，利用北斗系统导航、定位以及短报文等功能，电子围栏实现了相关人群走出设定的电子围栏范围，设置人手机就能收到及时提醒。为老人、儿童、残疾人等保障了安全。'
    }
    this.defult_intro = {
      'title': '北斗系统的应用',
      'introduction': '北斗卫星导航的应用很广，在交通、农业、林业、渔业、公安、防灾减灾、特殊关爱、大众应用等多个领域都有所涉及。',
      'showing': null,
    }
    this.items = Object.keys(this.introduction);
    this.state = {
      'title': '北斗系统的应用',
      'introduction': '北斗卫星导航的应用很广，在交通、农业、林业、渔业、公安、防灾减灾、特殊关爱、大众应用等多个领域都有所涉及。',
      'showing': null,
      'clicked': null,
    }
  }


  click = function (text) {
    this.setState({
      'title': text,
      'introduction': this.introduction[text],
      'showing': text,
      'clicked': true,
    })
    window.setTimeout(() => { this.setState({ 'clicked': false }) }, 500);
  }

  wrap = function (text) {
    return (
      <div className={'hover:(bg-gray-300) h-12 text-gray-600 pl-5 pt-3 text-md cursor-pointer ' + (this.state.showing == text ? "bg-gray-300" : "bg-gray-200")}
        onClick={this.click.bind(this, text)}
        key={text}>
        {text}
      </div>
    );
  }

  render() {
    let background = (
      <ParallaxLayer
        offset={3}
        speed={0}
        className="bg-gradient-to-b from-black w-view to-blue-800">
      </ParallaxLayer>
    );
    let items = this.items.map(this.wrap.bind(this))

    let holder = (
      <ParallaxLayer
        offset={3}
        speed={0.5}
        className="bg-transparent flex justify-center items-center"
      >
        <div className='h-3/4 w-1/2 bg-white shadow-lg shadow-blue-400 rounded-xl flex'>
          <div className="w-1/4 bg-gray-100 rounded-l-lg shadow-inner flex flex-col flex-shrink-0">
            <div className='bg-gray-200 h-18 text-gray-800 rounded-tl-xl pl-5 pt-4 text-lg cursor-pointer'
              onClick={() => {
                this.setState(this.defult_intro);
                this.setState({'clicked': true,});
                window.setTimeout(() => { this.setState({ 'clicked': false }) }, 500);
              }}>
              北斗系统的应用
            </div>
            {items}
          </div>
          <div className='p-5 flex flex-col w-full'>
            <h1 className={'text-2xl text-gray-900 self-center ' + (this.state.clicked ? 'animated animate-fadeIn' : '')}>{this.state.title}</h1>
            <hr className='my-3'></hr>
            <p className={'text-gray-800 text-lg p-3 ' + (this.state.clicked ? 'animated animate-fadeIn' : '')}>{this.state.introduction}</p>
          </div>
        </div>
      </ParallaxLayer>
    )
    return (
      <div>
        {background}
        {holder}
      </div>
    );
  }
}

root.render(<Parallax_home />)