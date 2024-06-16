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

          <div className={styled.flex_wrap}>
            <ul>
              <li>
                <Link href="">
                  <div className={styled.img_box}>
                    <img className={styled.image} src="/images/shop_img_1.png" alt="상품 이미지1" />
                    <img className={styled.image_hover} src="/images/shop_hover_img_1.png" alt="상품 이미지1" />
                  </div>
                  <p>SHHH! Don't move BOBO Mini Figure</p>
                </Link>
                <span>₩16,000</span>
              </li>
              <li>
                <Link href="">
                  <div className={styled.img_box}>
                    <img className={styled.image} src="/images/shop_img_2.png" alt="상품 이미지2" />
                    <img className={styled.image_hover} src="/images/shop_hover_img_2.png" alt="상품 이미지2" />
                  </div>
                  <p>BOBO in the Woods MINI LAMP</p>
                </Link>
                <span>₩29,000</span>
              </li>
              <li>
                <Link href="">
                  <div className={styled.img_box}>
                    <img className={styled.image} src="/images/shop_img_3.png" alt="상품 이미지3" />
                    <img className={styled.image_hover} src="/images/shop_hover_img_3.png" alt="상품 이미지3" />
                  </div>
                  <p>APPLE PICKING WATCH CHARGER STAND</p>
                </Link>
                <span>₩29,000</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      <Footer/>
    </div>
  )
}

export default Page