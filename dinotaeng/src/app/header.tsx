'use client'
import Link from "next/link"
import "./globals.css";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

// header
function Header() {
	return (
		<div className="header_area w-full fixed top-0 left-0">
			<div className="header_notice h-[30px] text-center leading-[30px] text-[12px] font-normal text-[rgb(17, 17, 17)] bg-[rgb(229, 223, 211)]"> 
				<Swiper
					direction={'vertical'}
					autoplay={{
					delay: 2500,
					disableOnInteraction: false,
					}}
					modules={[Autoplay]}
					className="header_top_slide"
				>
					<SwiperSlide>NEW IN ! DINOTAENG X VICTORIA!</SwiperSlide>
					<SwiperSlide>NEW IN ! DINOTAENG X VICTORIA!</SwiperSlide>
				</Swiper>
			</div>
			<div className="header relative">
				<div className="header-left absolute top-[30px] left-[30px] text-[26px] leading-[30px] font-['AmericusSansAged'] text-[#B13F35]">
					<ul>
						<li className="pb-[20px]"><Link href={'/'}>SHOP</Link></li>
						<li><Link href={'/'}>ABOUT</Link></li>
						<li><Link href={'/'}>CHARACTERS</Link></li>
						<li><Link href={'/'}>STORIES</Link></li>
						<li className="pb-[20px]"><Link href={'/'}>ARCHIVE</Link></li>
						<li><Link href={'/'}>CART</Link></li>
					</ul>
				</div>
				<div className="header-center absolute top-[30px] left-1/2 transform -translate-x-1/2">
					<Link href={'/'}>
						<img className="min-h-[20px] h-[72px] mx-auto block" src="/images/main_logo.png"/>
					</Link>
				</div>
				<div className="header-right absolute top-[0px] right-0">
					<Link href={'/'} className="mobile-btn flex flex-col justify-between p-[30px] absolute top-0 right-0">
						<span className="w-[45px] h-[5px] mb-[5px] bg-[#B13F35] rounded-[5px]"></span>
						<span className="w-[45px] h-[5px] mb-[5px] bg-[#B13F35] rounded-[5px]"></span>
						<span className="w-[45px] h-[5px] mb-0 bg-[#B13F35] rounded-[5px]"></span>
					</Link>
				</div>
			</div>
		</div>
	)
}
  
export default Header