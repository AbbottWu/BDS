import ReactDOM from 'react-dom/client'
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react'
import { useSpring, animated } from 'react-spring'
import 'virtual:windi.css'

import close_icon from '/assets/close.svg'


function ReactDot(props) {
    const dot_style = { width: '0.5rem', height: '0.5rem', 'borderRadius': '100px', 'backgroundColor': 'rgba(255, 255, 255, 0.7)' };
    const board_style = { width: '22 rem', 'borderRadius': '10px', height: '30rem', 'backgroundColor': 'rgba(255, 255, 255, 1)', 'position': 'relative' };
    const hidden_style = { display: 'none', "opacity": 0 };
    const show_style = { delay: 500, display: true, opacity: 1 };
    const [clicked, useClick] = useState(false);
    const styles = useSpring(clicked ? board_style : dot_style);
    const content_styles = useSpring(clicked ? show_style : hidden_style);
    function update(params) {
        setTimeout(() => {
            useClick(params)
        }, 100);
    }
    useEffect(() => {
        useClick(props.clicked);
    }, [props.clicked])
    return (
        <animated.div style={styles}
            onClick={() => {
                //props.set()
                useClick(true)
            }}
        >
            <animated.div className="relative h-full" style={content_styles}>
                <button className="absolute right-3 top-3 bg-gray-200 rounded-full hover:(bg-gray-400) transition ease-out"
                    onClick={() => {
                        props.recover()
                        update(false);
                    }}>
                    <img src={close_icon} className="w-8" ></img>
                </button>
                <div className='flex flex-col h-full items-center gap-y-3'>
                    <h1 className='mt-4 text-xl'>{props.title}</h1>
                    <hr className='w-5/6'></hr>
                    {props.content}
                </div>
            </animated.div>
        </animated.div>
    )
}

export function HistoryPage(props) {
    const [dot_clicked, useClicked] = useState([false, false, false, false]);
    let content_style = "pl-5 pr-3 pb-5 overflow-auto"
    let content_1 = (
        <div className={content_style}>
            <p className='mb-4'>GPS 最早应用在军事领域，作为 GPS 系统的拥有者，美国作为提供方有能力、有手段随意更改编码及错乱定位。在 20 世纪 90 年代，美国利用对 GPS 系统掌握权，对多起国际事件进行直接干涉。</p>
            <p className='mb-4'>1993 年，“银河号”事件中，美国为牵制我国，擅自关闭了我国的导航服务，致使“银河号”迷失方向，被迫停留在海湾地区33天，使我国蒙受巨大损失。</p>
            <p className='mb-4'>1996年台湾的李登辉抛出“两国论”，台海局势紧张，解放军随后展开一次大规模军演，向距离台湾附近的东海海域发射了3枚导弹，以示警告。发射的第一枚导弹准确命中目标，美军这时却中断了GPS信号，第二枚和第三枚导弹突然无法追踪，最终导致导弹大大偏离了原定的落点范围。</p>
            <p className='mb-4'>1996 年台海危机期间，美国向台湾海峡派出了两支航母编队，中国无法对其进行有效跟踪，从而也就无法对其进行威慑。</p>
            <p>综合美国对 GPS 的掌握能力与其实际使用案例可以得出结论：如果我国不研发自己的全球卫星定位系统，我国就将永远受制于人。因此，北斗系统的研发势在必行。</p>
        </div>
    );
    let content_2 = (
        <div className={content_style}>
            <p className='mb-4'>改革开放不到20年，中国的经济基础十分薄弱，资金有限、人才匮乏、技术经验不足，还面临着美国和欧盟的技术封禁。不可能一下子就建成一个成熟卫星导航系统，这注定会是一个漫长的探索过程。于是整个北斗计划被调整为我们现在所看到的“三步走”。</p>
            <p className='mb-4'>自1994年至2007年，我国只发射了4颗试验卫星，仅覆盖国内，进行区域测试服务</p>
            <p className='mb-4'>其中 2000年发射的两颗静止卫星，实现了亚太区域性卫星导航服务；2003年和2007年各发射的一颗备份卫星，进一步增强了系统性能，至此实现覆盖国内区域性定位服务。</p>
            <p className='mb-4'>2007年北斗一号正式完工，这表明我国在军事领域(战术武器等）方面一定程度上已经摆脱了对GPS的依赖。</p>
            <p></p>
        </div>
    );
    let content_3 = (
        <div className={content_style}>
            <p className='mb-4'>由于自建卫星导航系统所需资金巨大，按照原计划，我国只需研发出北斗一号应用于亚太地区即可。在全球性应用方面寄希望于与欧盟共同推出GALILEO系统。相比于GPS而言，GALILEO是一个优先发展民用的系统，相较于GPS其面临的军事威胁大大降低，同时参与“GALILEO计划”还可以让我国学到更为先进的技术。</p>
            <p className='mb-4'>然而，GALILEO系统进展很不顺利，欧盟麾下各国明争暗斗，导致这个项目被不断推迟。虽然中国是投资方却被不断排挤,欧盟很多核心技术的研究都把中国排除在外。因此中国果断决定:自己干！于是北斗二号开始了紧锣密鼓的研发，中国正式踏上建设第二代北斗卫星导航系统（北斗二号）的征途。</p>
            <p className='mb-4'>在攻克了原子钟的核心技术难题之后，中国又在与欧盟GALILEO的频率之争中拔得头筹。有限的卫星导航系统的频率资源按照“先发先得”的原则进行分发。此时的北斗需要与GALILEO同擂竞争次优频率。在攻克了种种难关之后，我们最终先于GALILEO将卫星发射升空，保住了这来之不易的宝贵频率。</p>
            <p className='mb-4'>2012年，我们已经成功发射了16颗卫星，对亚太地区实施了全覆盖。2012年4月30日4时50分，我国更是突破了技术的限制，首次以“一箭双星”的方式发射了两颗卫星。相较于北斗一号，北斗二号不仅囊括了北斗一号原有的系统技术，还增加了许多如无源定位机制的新功能</p>
            <p></p>
        </div>
    );
    let content_4 = (
        <div className={content_style}>
            <p className='mb-4'>2009年在北斗二号第二颗卫星发射的同时，北斗三号正式启动建设。2017年11月5日北斗三号进行了首次发射，标志着BDS系统开始步入全球组网时代。</p>
            <p className='mb-4'>2018年12月27日，北斗三号系统基本建设完成，预备开始提供全球服务。2020年6月23日9时43分发射的最后一颗北斗组网卫星，是北斗三号第32颗卫星，同时也是第55颗北斗全球组网卫星。</p>
            <p className='mb-4'>至此，整个北斗系列共发射了59颗卫星，它们分别分布在地球静止轨道、倾斜地球同步轨道和中圆地球轨道。</p>
            <p className=''>北斗系统也从这里开始，以全新的面貌面向世界，向全球的人们提供精准、及时的定位服务，让全球人民都能看到中国正以开放、包容、向往和平的方式走向世界</p>
        </div>
    );
    let navigate = useNavigate();
    return (
        <div className='h-full w-full flex justify-center items-center bg-gradient-to-r from-orange-500 to-red-500 animated animate-fadeIn animate-slow'>
            <div className='absolute rounded-full bg-gray-500 flex justify-between items-center h-7/10 w-2 flex-col gap-y-3 md:(h-2 w-9/13 flex-row gap-x-5 mr-0) z-10 mr-2'>
                <ReactDot title='“危机”中诞生' content={content_1} clicked={dot_clicked[0]} recover={() => useClicked([false, false, false, false])} set={() => useClicked([true, false, false, false])}></ReactDot>
                <ReactDot title='困厄中起步' content={content_2} clicked={dot_clicked[1]} recover={() => useClicked([false, false, false, false])} set={() => useClicked([false, true, false, false])}></ReactDot>
                <ReactDot title='竞争中发展' content={content_3} clicked={dot_clicked[2]} recover={() => useClicked([false, false, false, false])} set={() => useClicked([false, false, true, false])}></ReactDot>
                <ReactDot title='奋斗中繁荣' content={content_4} clicked={dot_clicked[3]} recover={() => useClicked([false, false, false, false])} set={() => useClicked([false, false, false, true])}></ReactDot>
            </div>
            <div className='w-10/13 h-4/5 rounded-xl backdrop-filter backdrop-blur-xl bg-white/80 flex flex-row md:(flex-col) items-center gap-2'>
                <h1 className='pl-5 text-3xl text-gray-800 write-vertical-left md:(write-normal text-3xl pt-25) '>北斗系统发展史</h1>
                <h2 className='text-md text-gray-600 write-vertical-left md:(write-normal text-xl) '>——诞生于危机，繁荣于苦干，回馈于世界</h2>
                <div className='flex flex-col md:(pl-5 flex-row h-full w-16/17 items-center pt-7) items-end w-full h-7/8 justify-between'>
                    <div className='text-lg md:(text-2xl) cursor-pointer' onClick={() => useClicked([true, false, false, false])}>危机中诞生</div>
                    <div className='text-lg md:(text-2xl) cursor-pointer' onClick={() => useClicked([false, true, false, false])}>困厄中起步</div>
                    <div className='text-lg md:(text-2xl) cursor-pointer' onClick={() => useClicked([false, false, true, false])}>竞争中发展</div>
                    <div className='text-lg md:(text-2xl) cursor-pointer' onClick={() => useClicked([false, false, false, true])}>奋斗中繁荣</div>
                </div>
                <button className='bg-green-500 rounded-md shadow-md shadow-green-300 self-center px-2 py-5 -ml-3 mr-2 md:(py-3 px-12 m-5)'
                    onClick={()=>{
                        navigate('/principle')
                    }}>
                    <div className='write-vertical-left md:(write-normal text-2xl) text-gray-800'>下一站</div>
                </button>
            </div>
        </div>
    )
}