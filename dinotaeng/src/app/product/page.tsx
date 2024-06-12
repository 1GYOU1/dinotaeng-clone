import Link from "next/link"

import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"


function Page() {
  return (
    <div className="w-full">

      <Header/>
      {/* <Link href={`https://dinotaeng.com/product/list.html?cate_no=42`} target="_blank">https://dinotaeng.com/product/list.html?cate_no=42</Link> */}

      <div className={styled.product_area}>
        <div className={styled.cont_wrap}>
          <ul className={styled.category}>
            <li><Link href="">NEW</Link></li>
            <li><Link href="">BEST</Link></li>
            <li><Link href="">STATIONERY</Link></li>
            <li><Link href="">MOBILE</Link></li>
            <li><Link href="">LIVING</Link></li>
            <li><Link href="">OTHERS</Link></li>
            <li><Link href="">SALE</Link></li>
          </ul>
        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Page