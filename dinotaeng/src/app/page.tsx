'use client'

import Link from "next/link"
import Header from "./header"
import Footer from "./footer"
import { useEffect } from 'react';
import styled from "./page.module.scss"

// aos
import 'aos/dist/aos.css'
import AOS from 'aos';

import { StoriesSwiperList } from "@/components/stories/Stories";

// 메인 페이지
function Page() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className="w-full bg-[#EFEDE6]">

      <Header/>

      <div className="main_area pb-[5vw]">

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
            <StoriesSwiperList />
        </div>

        <div className="main_5">
            <ul className={styled.mainGallery}>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_1.png" alt="메인 갤러리 리스트 1"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_2.jpeg" alt="메인 갤러리 리스트 2"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_3.png" alt="메인 갤러리 리스트 3"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_4.jpeg" alt="메인 갤러리 리스트 4"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_5.jpeg" alt="메인 갤러리 리스트 5"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_6.jpeg" alt="메인 갤러리 리스트 6"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_7.png" alt="메인 갤러리 리스트 7"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_8.png" alt="메인 갤러리 리스트 8"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_9.png" alt="메인 갤러리 리스트 9"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_10.png" alt="메인 갤러리 리스트 10"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_11.png" alt="메인 갤러리 리스트 11"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_12.png" alt="메인 갤러리 리스트 12"/>
                </Link>
              </li>
              <li>
                <Link href={'/'}>
                  <img src="/images/main_5_list_13.png" alt="메인 갤러리 리스트 13"/>
                </Link>
              </li>
            </ul>
        </div>

        <div className="main_6 mt-40">
          <ul className="flex flex-wrap w-[95%] mx-auto">
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                  <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                 <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                 <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                 <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
            <li className="w-1/4">
              <Link href={'/'} className="block mx-10 mb-10">
                <span className="relative">
                  <img src="/images/main_product_1_hover.png" alt="메인 제품 이미지 1-1" />
                 <img className="absolute top-0 left-0 transition ease-in-out hover:opacity-20 duration-300" src="/images/main_product_1.png" alt="메인 제품 이미지 1" />
                </span>
                <p className="name pt-4 text-center text-[16px]">Oreo BOBO PLUSH TAG</p>
                <p className="price text-center text-[14px]">₩16,000</p>
              </Link>
            </li>
          </ul>
        </div>

      </div>

      <Footer/>

    </div>
  )
}

export default Page