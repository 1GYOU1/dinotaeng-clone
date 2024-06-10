'use client'
import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"
import Link from "next/link"
import { useEffect } from "react"

// aos
import 'aos/dist/aos.css'
import AOS from 'aos';

function Page() {
  
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);

  return (
    <div className={styled.sub_wrap}>

      <Header/>
      
      <div className={styled.archive_area}>
        <div className={styled.f_box}>
          <ul>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_1.png" alt="archive 이미지 1" data-aos="fade-in" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true">Spring Breeze</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_2.png" alt="archive 이미지 2" data-aos="fade-in" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true">Quokka in School _ Fatty and BOBO</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_3.png" alt="archive 이미지 3" data-aos="fade-in" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true">Quokka in School _ Fatty's Ice cream</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_4.png" alt="archive 이미지 4" data-aos="fade-in" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true">Quokka in School _ Quokka and BOBO</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_5.png" alt="archive 이미지 5" data-aos="fade-up" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="300">First snow in Marshville!</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_6.png" alt="archive 이미지 6" data-aos="fade-up" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="300">Move Move!</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_7.png" alt="archive 이미지 7" data-aos="fade-up" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="300">Q&B Together</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_8.jpeg" alt="archive 이미지 8" data-aos="fade-up" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="300">Marshville Baseball Game</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_9.jpeg" alt="archive 이미지 9" data-aos="fade-up" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="300">Anybody There?</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_10.jpeg" alt="archive 이미지 10" data-aos="fade-up" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="300">Quokka Statue</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_11.png" alt="archive 이미지 11" data-aos="fade-up" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="300">Cherry Picker!</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_12.jpeg" alt="archive 이미지 12" data-aos="fade-up" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="300">Splash!</p>
              </Link>
            </li>
            <li>
              <Link href={'/'}>
                <img src="/images/archive_img_13.png" alt="archive 이미지 13" data-aos="fade-up" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true" data-aos-delay="300">Happy Quokka!</p>
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