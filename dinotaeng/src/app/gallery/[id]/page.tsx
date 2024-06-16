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
  const [galleryImages, setGalleryImagesData] = useState<any[]>()
  useEffect(() => {

    const init = async () => {
      const { data } = await fetchGallery({
        id: params.id
      })
      setGalleryData(data)
      setGalleryImagesData(data.images)
      console.log(data)
    }
    init()
  }, [])

  return (
    <div className={styled.sub_wrap}>
      <Header/>
      <div className={styled.gallery_area}>
        {galleryImages && (
          <>
            <Swiper className="event_slide"
              spaceBetween={20}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              speed={1000}
              modules={[Autoplay, Navigation]}
              slidesPerView={3}
              navigation={{ prevEl: ".swiper-arrow-prev", nextEl: ".swiper-arrow-next" }}>
              {galleryImages.map((item:any, index:number) => (
                <SwiperSlide key={index}>
                  <img src={item} alt={`image_${index}`} />
                </SwiperSlide>
              ))}
            </Swiper>
            <div className="swiper-arrow-prev"></div>
            <div className="swiper-arrow-next"></div>
          </>
        )}
        {galleryData && (
          <div className={styled.detail_txt}>
            <h4 className={styled.name}>{galleryData.name}</h4>
            <h4 className={styled.summary}>{galleryData.summary}</h4>
            <div className={styled.simple} dangerouslySetInnerHTML={{ __html: galleryData.simple }} />
          </div>
        )}
      </div>

      <Footer/>
    </div>
  )
}

export default Page