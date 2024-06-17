'use client'

import Header from "../../header"
import Footer from "../../footer"
import styled from "../../subpage.module.scss"

import { fetchGallery } from "@/fetch/fetchGallery"
import { useEffect, useState } from "react"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';

interface Props {
  params: {
    id: string
  }
  data: Gallery[]
}

// gallery detail page
function Page({params}: Props) {
  
  const [galleryData, setGalleryData] = useState<Gallery>()

  useEffect(() => {

    const init = async () => {
      const { data } = await fetchGallery({
        id: params.id
      })
      setGalleryData(data)
      // console.log(data)
    }
    init()

  }, [])

  return (
    <div className={styled.sub_wrap}>
      <Header/>
      <div className={styled.gallery_area}>
        {galleryData && (
          <>
            <Swiper className={styled.gallery_slide}
              spaceBetween={40}
              autoplay={{ delay: 2500, disableOnInteraction: false }}
              loop={true}
              speed={1000}
              loopAdditionalSlides={1}
              modules={[Autoplay, Navigation]}
              slidesPerView={3}
              navigation={{ prevEl: ".swiper-arrow-prev", nextEl: ".swiper-arrow-next" }}>
              {galleryData.images.map((item:any, index:number) => (
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