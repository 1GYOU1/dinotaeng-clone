'use client'

import Header from "../../header"
import Footer from "../../footer"
import styled from "../../subpage.module.scss"

import Link from "next/link"

// 장바구니 page
function Page() {
  return (
    <div className={styled.sub_wrap}>
      <Header/>
      <div className={styled.cart_area}>
        <div className={styled.menu}>
          <ul>
            <li className={styled.selected}><a href="/order/basket.html">국내배송상품 (0)</a></li>
            <li><Link href="/order/basket.html?delvtype=B">해외배송상품 (0)</Link></li>
          </ul>
        </div>

        <div className={styled.empty_cart_area}>
          <p>장바구니가 비어 있습니다.</p>
        </div>

        <div className={styled.btn_area}>
          <Link className={styled.order_btn} href={'/'}>order</Link>
        </div>
      </div>
      
      <Footer/>
    </div>
  )
}

export default Page