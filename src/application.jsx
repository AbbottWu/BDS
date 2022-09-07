import React from 'react';
import ReactDOM from 'react-dom/client'
import { NavLink } from 'react-router-dom'
import 'virtual:windi.css'

export class Application extends React.Component {
    constructor(props) {
        super(props);
        this.introduction = {
            '交通运输': '　　在交通运输方面，北斗系统广泛应用于重点运输过程监控、公路基础设施安全监控、港口高精度实时定位调度监控等领域。截至目前，中国境内有超过700万辆营运车辆、3万辆邮政和快递车辆，36个城市的约8万辆公交车、3200余座内河导航设施、2900余座海上导航设施已应用北斗系统，建成全球最大的营运车辆动态监管系统，有效提升了监控管理效率和道路运输安全水平。',
            '公安消防': '　　在公安方面，由于高度敏感性和保密性的需求，推行应用北斗系统势在必行。基于北斗的公安信息化系统，主要应用于公安车辆指挥调度、民警现场执法、应急事件信息传输、公安授时服务等，实现了警力资源动态调度、一体化指挥，提高了相应速度和执行效率。',
            '特殊关爱': '　　在特殊关爱方面，利用北斗系统导航、定位以及短报文等功能，电子围栏实现了相关人群走出设定的电子围栏范围，设置人手机就能收到及时提醒。为老人、儿童、残疾人等保障了安全。',
            '减灾救灾': '　在减灾救灾方面，目前已推广北斗终端超过4.5万台。受灾地区可以利用北斗短报文功能及时上报位置信息、突发灾害信息和灾区救助信息等信息；各级民政部门通过北斗终端可以进行救灾物资的查询管理和监控，大幅提升了全国救灾物资管理与调运水平。'
        }
        this.defult_intro = {
            'title': '北斗系统的应用',
            'introduction': '　　北斗卫星导航系统作为新时代基础设施之一，其在交通、农业、林业、渔业、公安、防灾减灾、特殊关爱、大众应用等众多领域都有广阔的应用前景。现在北斗系统已广泛应用于交通运输、公共安全、农林渔业、水文监测、气象预报、通信时统、电力调度、救灾减灾等众多领域。同时，基于北斗的导航服务已被电子商务、移动智能终端制造、位置服务等厂商采用，广泛进入大众消费、共享经济和民生领域，深刻改变着人们的生产生活方式。 ',
            'showing': null,
        }
        this.items = Object.keys(this.introduction);
        this.state = {
            'title': '北斗系统的应用',
            'introduction': '　　北斗卫星导航系统作为新时代基础设施之一，其在交通、农业、林业、渔业、公安、防灾减灾、特殊关爱、大众应用等众多领域都有广阔的应用前景。现在北斗系统已广泛应用于交通运输、公共安全、农林渔业、水文监测、气象预报、通信时统、电力调度、救灾减灾等众多领域。同时，基于北斗的导航服务已被电子商务、移动智能终端制造、位置服务等厂商采用，广泛进入大众消费、共享经济和民生领域，深刻改变着人们的生产生活方式。',
            'showing': null,
            'clicked': null,
        };
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
            <div className={'hover:(bg-gray-300) md:(h-12) flex items-center justify-center text-gray-600 px-4 text-sm md:(text-lg) cursor-pointer h-full' + (this.state.showing == text ? "bg-gray-300" : "bg-gray-200")}
                onClick={this.click.bind(this, text)}
                key={text}>
                <div>{text}</div>
            </div>
        );
    }

    render() {
        let items = this.items.map(this.wrap.bind(this))

        let holder = (
            <div className='relative w-10/13 h-4/5 backdrop-filter backdrop-blur-xl bg-white/90 shadow-lg shadow-blue-400 rounded-xl flex md:(flex-row) flex-col'>
                <div className="w-full bg-gray-100 rounded-t-lg md:rounded-l-lg shadow-inner flex flex-row md:(flex-col w-1/4) flex-shrink-0">
                    <div className='bg-gray-200 h-18 text-gray-800 rounded-tl-xl flex justify-center items-center text-lg cursor-pointer px-3'
                        onClick={() => {
                            this.setState(this.defult_intro);
                            this.setState({ 'clicked': true, });
                            window.setTimeout(() => { this.setState({ 'clicked': false }) }, 500);
                        }}>
                        <div className='text-md md:text-xl'>北斗系统的应用</div>
                    </div>
                    {items}
                </div>
                <div className='p-5 flex flex-col w-full overflow-auto h-9/10 '>
                    <h1 className={'text-2xl text-gray-900 self-center ' + (this.state.clicked ? 'animated animate-fadeIn' : '')}>{this.state.title}</h1>
                    <hr className='my-3'></hr>
                    <p className={'text-gray-800 text-lg p-3 ' + (this.state.clicked ? 'animated animate-fadeIn' : '')}>{this.state.introduction}</p>
                </div>
            </div>
        )
        return (
            <div className='h-full w-full flex flex-col justify-center items-center bg-gradient-to-r from-indigo-500 to-purple-500 animated animate-fadeIn animate-slow'>
                {holder}
                <NavLink to={'/overall'}>
                    <button className='bg-white rounded-lg py-3 px-3 mt-4 bg-pink-600 text-white shadow-lg shadow-pink-800 md:text-2xl text-md'>最后，一起来总结一下“北斗”之旅</button>
                </NavLink>
            </div>
        );
    }
}
