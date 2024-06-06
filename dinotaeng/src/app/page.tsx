'use client'
import Link from "next/link"
import Header from "./header"
import { useEffect } from 'react';

import "./style/main.css";

//aos
import 'aos/dist/aos.css'
import AOS from 'aos';

// swiper
import { Swiper, SwiperSlide, Navigation } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

// 메인 페이지
function Page() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full">
      <Header/>
      <div className="main_area">
        <div className="main_1">
          <img src="/images/main_img.gif"/>
        </div>
        <div className="main_2">
          <h3 data-aos="fade-up" data-aos-once="true">Life in Marshville</h3>
          <div className="movie_box">
            <video src="https://player.vimeo.com/progressive_redirect/playback/913155636/rendition/1080p/file.mp4?loc=external&amp;signature=4fde946188b7e20322b8159688bffb0ed6f3087b429b0132d988b1ff22b8ba4f" autoPlay={true} loop={true} muted={true} playsInline={true}></video>
          </div>
          <div className="small_txt">Dinotaeng ® Since 2018</div>
        </div>
        <div className="main_3">
          <h3 data-aos="fade-up" data-aos-once="true">Meet our villagers</h3>
          <div className="img_box">
            <Link href={'/'}>
              <img src="/images/main_3.png" alt="메인 이미지 2"/>
            </Link>
          </div>
        </div>
        <div className="main_4">
          <p className="event_txt">
            Peak our Stories!
            <br/>마쉬빌 구석구석에서 벌어지는 즐거운 소식들을 찾아보세요
          </p>
          <div className="event_slide_area">
            <Swiper
            direction={'horizontal'}
            spaceBetween={20}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            speed={1000}
            modules={[Autoplay]}
            className="event_slide"
            slidesPerView={2} 
            navigation={true}
            >
              <SwiperSlide>
                <a href="">
                  <img src="/images/stories_2.jpg" alt="이벤트 이미지1" />
                  </a>
                </SwiperSlide>       
              <SwiperSlide>
                <a href="">
                  <img src="/images/cfe23f6a4e9873da8ef18f6f14a0463e.jpg" alt="이벤트 이미지2" />
                </a>
              </SwiperSlide>
              <SwiperSlide>
                <a href="">
                  <img src="/images/stories_2.jpg" alt="이벤트 이미지1" />
                  </a>
                </SwiperSlide>       
              <SwiperSlide>
                <a href="">
                  <img src="/images/cfe23f6a4e9873da8ef18f6f14a0463e.jpg" alt="이벤트 이미지2" />
                </a>
              </SwiperSlide>
            </Swiper>
          </div>
        </div>
      </div>
      <p>Main</p>
      <Link href={`https://dinotaeng.com`} target="_blank">https://dinotaeng.com</Link>
    </div>
  )
}

export default Page