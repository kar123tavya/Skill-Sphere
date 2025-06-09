import react from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import pro1 from "./assets/pro1.png";
import pro2 from "./assets/pro2.png";
import pro3 from "./assets/pro3.png";
import pro4 from "./assets/pro4.png";
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { EffectCoverflow, Pagination, Navigation } from 'swiper';
import ImageSlider from './utils/ImageSlider';
import "./styles/home.css";
import Header from "./utils/Header";
import education from "./assets/education.svg";
import Footer from "./utils/Footer"
import HomeCourseGrid from './utils/HomeCourseGrid'
function Home(){
    return <div>
        <Header/>

        <div className={"homecont grid-home"}>
            <div className="g1-item1"><ImageSlider /></div>
            <div className="g1-item2">
                <h1>Invest In Your<br/>Education  <img src={education}></img>
                </h1>
            </div>
            <div className="g1-item3">Virtual Vocation provides you the hands-on industrial experience and give you exposure how to work in real project and more ...</div>
        </div>
        <div className={"homecont"}>
            <div className={"homelist"} style={{padding:"60px 100px 60px 100px"}} >
                <div><img src={pro1} alt={"virtual"}/><h6>Virtual<br/>Lab</h6></div>
                <div><img src={pro2} alt={"learning"}/><h6>Flexible<br/>Learning</h6></div>
                <div><img src={pro3} alt={"certifications"}/><h6>Online<br/>Certifications</h6></div>
                <div><img src={pro4} alt={"projects"}/><h6>Build<br/>Projects</h6></div>
            </div>
        </div>
       
        <HomeCourseGrid/>
        <Footer/>
    </div>
}
export default Home;