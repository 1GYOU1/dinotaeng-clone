'use client'
import Link from "next/link"
import Header from "./header"
import { useEffect } from 'react';

// aos
import 'aos/dist/aos.css'
import AOS from 'aos';

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
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
      <div className="main_area pb-[5vw] bg-[#EFEDE6]">

        <div className="main_1 bg-[url('/images/main_bg.png')] bg-top bg-[length:100%_auto]">
          <img src="/images/main_img.gif"/>
        </div>

        <div className="main_2 my-28">
          <h3 className="text-[65px] text-center font-['AmericusSansAged'] text-[#B13F35] font-bold" 
          data-aos="fade-up" data-aos-once="true">Life in Marshville</h3>
          <div className="movie_box w-[35%] my-8 mx-auto">
            <video src="https://player.vimeo.com/progressive_redirect/playback/913155636/rendition/1080p/file.mp4?loc=external&amp;signature=4fde946188b7e20322b8159688bffb0ed6f3087b429b0132d988b1ff22b8ba4f" autoPlay={true} loop={true} muted={true} playsInline={true}></video>
          </div>
          <div className="small_txt text-[18px] text-center text-[#B13F35]">Dinotaeng ® Since 2018</div>
        </div>

        <div className="main_3 py-44">
          <h3 className="text-[65px] text-center font-['AmericusSansAged'] text-[#B13F35] font-bold" 
          data-aos="fade-up" data-aos-once="true">Meet our villagers</h3>
          <div className="img_box w-[55%] max-w-[900px] my-24 mx-auto">
            <Link href={'/'}>
              <img src="/images/main_3.png" alt="메인 이미지 2"/>
            </Link>
          </div>
        </div>

        <div className="main_4 my-44">
          <p className="event_txt text-center text-[#111] text-[24px] leading-[34px] pb-[100px] font-['NanumSquare']" 
          data-aos="fade-in" data-aos-once="true">
            Peak our Stories!
            <br/>마쉬빌 구석구석에서 벌어지는 즐거운 소식들을 찾아보세요
          </p>
          <div className="event_slide_area w-[80%] mx-auto relative">
            <Swiper
            className="event_slide"
            spaceBetween={20}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={1000}
            modules={[Autoplay, Navigation]}
            slidesPerView={2} 
            navigation={
              {
                prevEl: ".swiper-arrow-prev",
                nextEl: ".swiper-arrow-next",
              }
            }
            >
              <SwiperSlide>
                <Link href={'/'}>
                  <img src="/images/stories_2.jpg" alt="이벤트 이미지1" />
                </Link>
                <p className="text-left pt-[20px] text-[20px]">1. Sunshine in Marshville</p>
              </SwiperSlide>       
              <SwiperSlide>
                <Link href={'/'}>
                  <img src="/images/cfe23f6a4e9873da8ef18f6f14a0463e.jpg" alt="이벤트 이미지2" />
                </Link>
                <p className="text-left pt-[20px] text-[20px]">2. Snow in Marshville</p>
              </SwiperSlide>
              <SwiperSlide>
                <Link href={'/'}>
                  <img src="/images/stories_2.jpg" alt="이벤트 이미지1" />
                </Link>
                <p className="text-left pt-[20px] text-[20px]">1. Sunshine in Marshville</p>
                </SwiperSlide>       
              <SwiperSlide>
                <Link href={'/'}>
                  <img src="/images/cfe23f6a4e9873da8ef18f6f14a0463e.jpg" alt="이벤트 이미지2" />
                </Link>
                <p className="text-left pt-[20px] text-[20px]">2. Snow in Marshville</p>
              </SwiperSlide>
            </Swiper>
            <div className="swiper-arrow-prev"></div>
            <div className="swiper-arrow-next"></div>
          </div>
        </div>

        <div className="main_5">
            <ul className="flex flex-wrap">
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_1.png" alt="메인 갤러리 리스트 1"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_2.jpeg" alt="메인 갤러리 리스트 2"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_3.png" alt="메인 갤러리 리스트 3"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_4.jpeg" alt="메인 갤러리 리스트 4"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_5.jpeg" alt="메인 갤러리 리스트 5"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_6.jpeg" alt="메인 갤러리 리스트 6"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_7.png" alt="메인 갤러리 리스트 7"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_8.png" alt="메인 갤러리 리스트 8"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_9.png" alt="메인 갤러리 리스트 9"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_10.png" alt="메인 갤러리 리스트 10"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_11.png" alt="메인 갤러리 리스트 11"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_12.png" alt="메인 갤러리 리스트 12"/>
                </Link>
              </li>
              <li className="w-1/4">
                <Link href={'/'}>
                  <img src="/images/main_5_list_13.png" alt="메인 갤러리 리스트 13"/>
                </Link>
              </li>
            </ul>
        </div>
      </div>

    </div>
  )
}

export default Page