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
        <div className="header_area">
            <div className="header_notice"> 
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
            <div className="header">
                <div className="header-left">
                    <ul>
                        <li className="pb20"><Link href={'/'}>SHOP</Link></li>
                        <li><Link href={'/'}>ABOUT</Link></li>
                        <li><Link href={'/'}>CHARACTERS</Link></li>
                        <li><Link href={'/'}>STORIES</Link></li>
                        <li className="pb20"><Link href={'/'}>ARCHIVE</Link></li>
                        <li><Link href={'/'}>CART</Link></li>
                    </ul>
                </div>
                <div className="header-center">
                    <Link href={'/'}>
                        <img src="/images/main_logo.png"/>
                    </Link>
                </div>
                <div className="header-right">
                    <Link href={'/'} className="mobile-btn">
                        <span></span>
                        <span></span>
                        <span></span>
                    </Link>
                </div>
            </div>
        </div>
    )
  }
  
  export default Header