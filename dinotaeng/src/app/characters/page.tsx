'use client'

import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"
import { useEffect, useState } from "react"
import { fetchCharactersList } from "@/fetch/fetchCharacters"

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, EffectFade } from 'swiper/modules';
import SwiperCore from 'swiper'; // Swiper 핵심 기능 제어 클래스
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

interface Props {
  data: Characters[]
}

//characters
function Page() {

  const [charactersData, setCharactersData] = useState<Characters[]>()
  const [characterPopShow, setCharacterPopShow] = useState(false);
  const [swiper, setSwiper] = useState<SwiperCore>(); // sliderTo

  useEffect(() => {

    const init = async () => {
      const { data } = await fetchCharactersList({});
      setCharactersData(data)
      console.log(data)
    }
    init()

  }, [])

  // 슬라이드 팝업 열고 닫기
  const popShowEvt = (e?: number) => {
    if (characterPopShow) {
      setCharacterPopShow(false); // 팝업 닫기
      document.body.style.overflow = 'auto'; // 스크롤 복원
    } else {
      setCharacterPopShow(true); // 팝업 열기
      if (swiper && e) {
        swiper.slideTo(e); // 슬라이드 idx 이동
      }
      document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
  };

  return (
    <>
    <div className={styled.sub_wrap}>
      <Header/>

      <div className={styled.characters_area}>
        <div className={styled.cont01}>
          <img src="/images/Villagers_img.jpg" alt="characters 메인 이미지"/>
        </div>
        <div className={styled.cont02}>
          <h4>Meet our villagers</h4>
          <div className={styled.img_box}>
            <ul>
            {charactersData && charactersData.map((item: Characters, idx: number) => (
              <li key={item._id}>
                <div className={styled.s_btn} onClick={() => popShowEvt(idx)}>
                  <img src={item.thumbnail} alt={item.name}/>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </div>
        
        {/* 팝업 */}
        <div className={`${styled.characters_pop_layer} ${characterPopShow ? styled.on : ''}`}>
            <>
							<Swiper className={`${styled.event_slide} event_slide fade`}
                modules={[Navigation, EffectFade]}
								loop={false}
								speed={500}
                effect='fade'
								slidesPerView={1}
                onSwiper={setSwiper} // state 업뎃
                observer={true} // 부모 요소 변화 감지
								navigation={{ prevEl: ".swiper-arrow-prev", nextEl: ".swiper-arrow-next" }}>
                  {charactersData && charactersData.map((item: Characters) => (
                    <SwiperSlide key={item._id}>
                      <li>
                        <div className={styled.thumb}>
                          <img src={item.thumbnail} alt={item.name}/>
                        </div>
                        <div className={styled.name}><span>{item.name}</span></div>
                        <div className={styled.desc}>{item.description}</div>
                      </li>
                    </SwiperSlide>
                  ))}
								</Swiper>
								<div className={`${styled.slideArrowPrev} swiper-arrow-prev`}></div>
								<div className={`${styled.slideArrowNext} swiper-arrow-next`}></div>
							</>
        </div>
        <div className={`${styled.characters_pop_bg} ${characterPopShow ? styled.on : ''}`} onClick={() => popShowEvt()}></div>

      </div>

      <Footer/>
    </div>
    </>
  )
}

export default Page