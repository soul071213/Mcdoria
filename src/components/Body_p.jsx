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
export default function Body_p(){
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
        
<div id="body">
        <div id="img_1">
            <button id="i_1" onClick={switchImage}><img src={arrow_harf} /></button>
            <button id="i_2" onClick={switchImage}><img src={arrow} /></button>
            <img src={arrow_img} />
        </div>
        <div id="top">
            <div id="mcm">
                <a href="https://www.mcdonalds.co.kr/kor/story/competition/farmToRestaurant.do"><img src={Container} /></a>
            </div>
            <div id="ham">
                <a href="https://www.mcdelivery.co.kr/kr/"><img src={Mcdelivery} /></a>
            </div>
            <div onClick={gotop}>
                <img src={top}  />
            </div>
        </div>
        <div id="img_2">
            <p>McDonald's LIVE</p>
            <div id="list">
                <div id="li_1">
                    <div id="tds">
                        <img src={i_1} />
                        <div>
                            <p>바오패밀리와 함께 해쉬브라운!</p>
                        </div>
                    </div>
                    <div id="tds">
                        <img src={i_2} /> 
                        <div>
                            <p>바오패밀리 투게더팩 출시!</p>
                        </div>
                    </div>
                    <div id="tds">
                        <img src={i_3} /> 
                        <div>
                            <p>함께 걷고 함께 지어요<br />2024 패밀리 워킹 페스티벌</p>
                        </div>
                    </div>
                </div>
                <div id="li_2">
                    <div id="tds">
                        <img src={i_4} />
                        <div>
                            <p>4주간 M오더 WEEK <br />매주 할인쿠폰 받으세요!</p>
                        </div>
                    </div>
                    <div id="tds">
                        <img src={i_5} />
                        <div>
                            <p>맥윙은 못참지!<br />오늘부터 1월 1맥윙</p>
                        </div>
                    </div>
                    <div id="tds">
                        <img src={i_6} />
                        <div>
                            <p>단짠촉촉 맥그리들로<br />따뜻하게 채우는 아침</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div id="plusbutton">
            <img src={plus}  />
        </div>
    </div>
    )
}
