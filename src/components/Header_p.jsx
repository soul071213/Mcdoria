import '../App.css'
import arrow from '../assets/1.png'
import arrow_harf from '../assets/2.png'
import top from '../assets/12.png'
import search from '../assets/Button.png'
import Container_1 from '../assets/Container-1.png'
import Container from '../assets/Container.png'
import logo from '../assets/logo.png'
import i_1 from '../assets/i1.png'
import i_2 from '../assets/i2.png'
import i_3 from '../assets/i3.png'
import i_4 from '../assets/i4.png'
import i_5 from '../assets/i5.png'
import i_6 from '../assets/i6.png'
import insta from '../assets/insta.png'
import ddaum from '../assets/ddaum.png'
import facebook from '../assets/facebook.png'
import youtube from '../assets/youtube.png'
import Mcdelivery from '../assets/Mcdelivery.png'
import web from '../assets/web.png'
import plus from '../assets/plus.png'
import long from '../assets/long.jpg'
import india from '../assets/india.jpg'
import fire from '../assets/fire.jpg'

import { useState } from 'react'
export default function Header_p(){
    var [arrow_img,arrow_imgset] = useState(Container_1);
    const switchImage = () => {
      const image1 = long;
      const image2 =fire;
      const image3 = india;
  
      if(arrow_img == Container_1){
        arrow_imgset(image1);
      }
      else if(arrow_img == image1){
        arrow_imgset(image2);
      }
      
      else if(arrow_img == image2){
        arrow_imgset(image3);
      }
      
      else if(arrow_img == image3){
        arrow_imgset(Container_1);
      }
      
    }
  
    const gotop = () => {
      window.scrollTo(0,0)
    }
    return(
        <div id="header">
            <div  id="logo" onClick={gotop}>
                <img src={logo}/>
            </div>
            <div id="menubar">
                <a href="https://www.mcdonalds.co.kr/kor/menu/list.do">Menu</a>
                <a href="https://www.mcdonalds.co.kr/kor/store/main.do">Store</a>
                <a href="https://www.mcdonalds.co.kr/kor/promotion/list.do">What's New</a>
                <a href="https://www.mcdonalds.co.kr/kor/story/main.do">Story</a>
            </div>
            <div id="setting">
                <button id="im"><a id="no_a" href="https://www.mcdonalds.co.kr/kor/store/rental.do">임차문의</a></button>
                <button id="recruit"><a id="no_a" href="https://www.mcdonalds.co.kr/kor/story/people/recruit.do">RECRUIT</a></button>
                <button id="eng"><a id="no_a" href="https://www.mcdonalds.co.kr/eng/main.do">ENG</a></button>
            </div>
            <div id="search">
                <button id="bu1"> <img src={search} /></button>
            </div>
        </div>
    )
}