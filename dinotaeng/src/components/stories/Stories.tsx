import Link from "next/link";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useEffect, useState } from "react";
import { fetchStories } from "@/fetch/fetchStories";

interface Props {
    data: Story[]
}

/**
 * Stories Swiper 컴포넌트화
 * @returns 
 */
export function StoriesSwiperList () {
    const [storiesList, setStoriesList] = useState<Story[]>()

    useEffect(() => {
      // useEffect를 이용하여 데이터를 1회 호출한다
      const init = async () => {
          const { data } = await fetchStories()
          setStoriesList(data)
      }
      init()
    }, []);
  
    return (
        <>
            <p className="event_txt text-center text-[#111] text-[24px] leading-[34px] pb-[100px] font-['NanumSquare']" data-aos="fade-in" data-aos-once="true">
                Peak our Stories!
                <br/>마쉬빌 구석구석에서 벌어지는 즐거운 소식들을 찾아보세요
            </p>
            <div className="event_slide_area w-[80%] mx-auto relative">
                {storiesList && (
                    <>
                        <Swiper className="event_slide"
                            spaceBetween={20}
                            autoplay={{ delay: 2500, disableOnInteraction: false }}
                            loop={true}
                            speed={1000}
                            modules={[Autoplay, Navigation]}
                            slidesPerView={2}
                            navigation={{ prevEl: ".swiper-arrow-prev", nextEl: ".swiper-arrow-next" }}>
                            {storiesList.map((item:Story) => (
                                <SwiperSlide key={`stories${item._id}`}>
                                    <Link href={'/'}>
                                    <img src={item.image} />
                                    </Link>
                                    <p className="text-left pt-[20px] text-[20px]">{item.title}</p>
                                </SwiperSlide>
                            ))}
                        </Swiper>
                        <div className="swiper-arrow-prev"></div>
                        <div className="swiper-arrow-next"></div>
                    </>
                )}
            </div>
        </>
    )
}
