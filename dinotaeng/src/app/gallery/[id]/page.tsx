'use client'

import Header from "../../header"
import Footer from "../../footer"
import styled from "../../subpage.module.scss"

import { fetchGallery } from "@/fetch/fetchGallery"
import Link from "next/link"
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  params: {
    id: string
  }
}

// gallery detail page
function Page({params}: Props) {
  const [galleryData, setGalleryData] = useState<any[]>()

  useEffect(() => {
    const init = async () => {
      const { data } = await fetchGallery({
        id: params.id
      })
      setGalleryData(data)
    }
    init()
  }, [])

  return (
    <div className={styled.sub_wrap}>
      <Header/>

      {/* {galleryData && (
        <>
          <Swiper className="event_slide"
            spaceBetween={20}
            autoplay={{ delay: 2500, disableOnInteraction: false }}
            loop={true}
            speed={1000}
            modules={[Autoplay, Navigation]}
            slidesPerView={2}
            navigation={{ prevEl: ".swiper-arrow-prev", nextEl: ".swiper-arrow-next" }}>
            {galleryData.map((item:Story) => (
              <SwiperSlide>
                <p>test</p>
              </SwiperSlide>
            ))}
          </Swiper>
          <div className="swiper-arrow-prev"></div>
          <div className="swiper-arrow-next"></div>
        </>
      )} */}

      <Footer/>
    </div>
  )
}

export default Page