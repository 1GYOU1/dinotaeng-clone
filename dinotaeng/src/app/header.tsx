'use client'
import Link from "next/link"
import "./globals.css";
import { useState } from "react";
import SideBar from "@/components/sidebar";

// swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

function Header() {

	// header
	const [headerNoticeShow, setHeaderNoticeShow] = useState(false);
	const [rightMenuShow, setRightMenuShow] = useState(false);
	const [backgroundBlock, setBackgroundBlock] = useState(false);

	// header_notice 닫기
	const headerNoticeClose = () => {
		setHeaderNoticeShow(true);
  };

	// right menu
	const headerRightMenu = () => {
		if (rightMenuShow) {
			// 메뉴 닫기
			setRightMenuShow(false);
			setTimeout(() => setBackgroundBlock(false), 300); // display:none
			document.body.style.overflow = 'auto'; // 스크롤 가능
    } else {
			// 메뉴 열기
			setBackgroundBlock(true);// display:block
			setTimeout(() => setRightMenuShow(true), 300); // opacity: 0.5
			document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
  };

	return (
		<div className="header_area w-full fixed top-0 left-0 z-10">

			<div className={`header_notice h-[30px] leading-[30px] bg-[#e5dfd3] ${headerNoticeShow ? 'hidden' : ''}`}> 
				<Swiper
					className="header_top_slide"
					direction={'vertical'}
					autoplay={{
						delay: 3000,
						disableOnInteraction: false,
					}}
					loop={true}
					modules={[Autoplay]}
				>
					<SwiperSlide>
						<Link href={'/product'} className="block size-full text-[12px] font-normal text-[#111111] text-center">
							NEW IN ! DINOTAENG X VICTORIA!
						</Link>
					</SwiperSlide>
					<SwiperSlide>
						<Link href={'/product'} className="block size-full text-[12px] font-normal text-[#111111] text-center">
							NEW IN ! DINOTAENG X VICTORIA!
						</Link>
					</SwiperSlide>
				</Swiper>
				<div 
					className="close_btn absolute top-1/2 right-0 z-10 -translate-y-1/2 w-[30px] h-[30px] hover:cursor-pointer"
					onClick={headerNoticeClose}
				>
					<span className="block absolute top-1/2 left-1/2 w-[15px] h-[1px] bg-white -translate-x-1/2 -translate-y-1/2 rotate-45deg"></span>
					<span className="block absolute top-1/2 left-1/2 w-[15px] h-[1px] bg-white -translate-x-1/2 -translate-y-1/2 -rotate-45deg"></span>
				</div>
			</div>

			<div className="header relative">

				<div className="header-left absolute top-[30px] left-[30px] text-[26px] leading-[30px] font-['AmericusSansAged'] text-[#B13F35]">
					<ul>
						<li className="pb-[20px]"><Link href={'/product'}>SHOP</Link></li>
						<li><Link href={'/about'}>ABOUT</Link></li>
						<li><Link href={'/characters'}>CHARACTERS</Link></li>
						<li><Link href={'/stories'}>STORIES</Link></li>
						<li className="pb-[20px]"><Link href={'/archive'}>ARCHIVE</Link></li>
						<li><Link href={'/order/cart'}>CART</Link></li>
					</ul>
				</div>

				<div className="header-center absolute top-[30px] left-1/2 -translate-x-1/2">
					<Link href={'/'}>
						<img className="min-h-[20px] h-[72px] mx-auto block" src="/images/main_logo.png"/>
					</Link>
				</div>
					
				<div className="header-right absolute top-[0px] right-0">
					<div 
						className="mobile-btn flex flex-col justify-between p-[30px] absolute top-0 right-0 hover:cursor-pointer"
						onClick={headerRightMenu}
						>
						<span className="w-[45px] h-[5px] mb-[5px] bg-[#B13F35] rounded-[5px]"></span>
						<span className="w-[45px] h-[5px] mb-[5px] bg-[#B13F35] rounded-[5px]"></span>
						<span className="w-[45px] h-[5px] mb-0 bg-[#B13F35] rounded-[5px]"></span>
					</div>
				</div>

			</div>

			<SideBar
				rightMenuShow={rightMenuShow}
				setRightMenuShow={setRightMenuShow}
				backgroundBlock={backgroundBlock}
				setBackgroundBlock={setBackgroundBlock}
			/>

		</div>
	)
}
  
export default Header