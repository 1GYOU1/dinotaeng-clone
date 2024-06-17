'use client'
import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"
import Link from "next/link"
import { useEffect, useState } from "react"

// aos
import 'aos/dist/aos.css'
import AOS from 'aos';
import { fetchGalleryList } from "@/fetch/fetchGalleryList"

// archive page
function Page() {
  
  const [galleryList, setGalleryList] = useState<any[]>()


  useEffect(() => {
    AOS.init({ duration: 2000 });

    const init = async () => {
      const { data } = await fetchGalleryList()
      setGalleryList(data.reverse())
      console.log(data)
    }
    init();

  }, []);

  return (
    <div className={styled.sub_wrap}>

      <Header/>
      
      <div className={styled.archive_area}>
        <div className={styled.f_box}>
          <ul>
          {galleryList && galleryList.map((item:any) => (
            <li key={item._id}>
              <Link href={`/archive/${item._id}`}>
                <img src={item.thumbnail} alt={item.name} data-aos="fade-in" data-aos-once="true"/>
                <p data-aos="fade-in" data-aos-once="true">{item.name}</p>
              </Link>
            </li>
          ))}
          </ul>
        </div>
      </div>

      <Footer/>

    </div>
  )
}

export default Page