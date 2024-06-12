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
export default function Footer_p(){
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
        
<div id="footer">
<div id="f_p">
  <a href="https://www.mcdonalds.co.kr/kor/etc/private.do"><p id="p_y">개인정보 처리방침</p></a>
  <a href="https://www.mcdonalds.co.kr/kor/etc/location.do"><p id="p_b">위치정보 이용약관</p></a>
  <a href="https://www.mcdonalds.co.kr/kor/etc/sitemap.do"><p id="p_b">사이트맵</p></a>
  <a href="https://www.mcdonalds.co.kr/kor/store/rental.do"><p id="p_b">임차문의</p></a>
  <a href="https://voc.mcd.co.kr/MC/HOM/faqMain.jsp" target='_blank'><p id="p_b">고객문의</p></a>
  <a href="https://www.mcdonalds.co.kr/kor/story/people/recruit.do"><p id="p_b">인재채용</p></a>
</div>
<div id="f_g">
    <p id="p_g">한국맥도날드(유)</p>
    <p id="p_g">대표이사: 김기원</p>
    <p id="p_g">사업자등록번호 :101-81-26409</p>
    <p id="p_g">전화번호 :1600-5252</p>
    <p id="p_g">COPYRIGHT © 2019 ALL RIGHTS RESERVED BY McDonald's.</p>
</div>
<div id="logos">
    <div>
    
      <a href="https://www.facebook.com/McDonaldsKorea" target="_blank"><img src={facebook} /></a>
    </div>
    <div>
      <a href="https://www.instagram.com/mcdonalds_kr/" target="_blank"><img src={insta} /></a>
        
    </div>
    <div>
        <a href="https://www.youtube.com/user/McDonaldsKor" target="_blank"><img src={youtube} /></a>
    </div>
    <div>
        <a href="https://story.kakao.com/ch/mcdonalds/feed" target='_blank'><img src={ddaum} /></a>
    </div>
    <div>
        <a href="http://kdaa.or.kr/CertificationSite/WA/1920/Detail" target='_blank'><img src={web} /></a>
    </div>
</div>
</div>
    )
    
}
