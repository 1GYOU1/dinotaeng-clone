import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"
import Link from "next/link"

// stories page

function Page() {
  return (
    <div className={styled.sub_wrap}>

        <Header/>
        
        <div className={styled.stories_area}>
        <ul>
          <li>
            <Link href={'/'}>
              <img src="/images/stories_2.jpg" alt="stories 이미지 1"/>
              <p>1. Sunshine in Marshville</p>
            </Link>
          </li>
          <li>
            <Link href={'/'}>
              <img src="/images/cfe23f6a4e9873da8ef18f6f14a0463e.jpg" alt="stories 이미지 2"/>
              <p>2. Snow in Marshville</p>
            </Link>
          </li>
        </ul>
        </div>

        <Footer/>

    </div>
  )
}

export default Page