'use client'

import Link from "next/link";
import Header from "../../header";
import Footer from "../../footer";
import styled from "../../subpage.module.scss";
// import { useParams } from "next/navigation"
import { useEffect, useState } from "react";
import { fetchProductDetail } from "@/fetch/fetchProductDetail";

interface Props {
  params: {
    id: any,
    productId: any,
  }
  data: ProductDetail[]
}

function Page({params}: Props) {
  /**
   * 현재 URL의 route에 있는 동적 매개변수 컴포넌트 hook
   * /product/[idx] 의 route인 경우
   * /product/1 으로 접속시
   * idx의 값은 1을 갖게 된다.
   */
  // const params = useParams()

    // api 한번에 호출
    const [productDetail, setProductDetail] = useState<ProductDetail>()
  
    useEffect(() => {
      const init = async () => {
        const { data } = await fetchProductDetail({
          id: params.id,
          productId: params.productId,
        })
        setProductDetail(data)
        console.log(data)
      }
      init()
    }, []);

  return (
    <div className={styled.product_detail_area}>
      <Header />

      <div className={styled.cont_top}>

        <div className={styled.left_area}></div>
        <div className={styled.left_area}>
          
        </div>

        <div className={styled.right_area}>
          <div>
            <div className={styled.title}>Quokkacap Cable Protector</div>
            <div className={styled.price}>
              <strong>₩7,000</strong>
            </div>
            <div className={styled.delivery_price}>
              <span>₩2,500 (₩50,000 이상 구매 시 무료)</span>
            </div>
            <div className={styled.total_products}>
              <ul>
                <li className={styled.t_tit}>Quokkacap Cable Protector</li>
                <li className={styled.cal_box}>
                  <input type="text"/>
                  <span className={styled.plus}>+</span>
                  <span className={styled.minus}>-</span>
                </li>
                <li><strong className={styled.t_price}>₩21,000</strong></li>
              </ul>
            </div>
          </div>
        </div>

        <div>

        </div>

      </div>
      
      <div className={styled.bottom_area}></div>

      {/* <p>Product Detail {params.idx}</p>
      <Link href={`https://dinotaeng.com/product/detail.html?product_no=373&cate_no=42&display_group=1`} target="_blank">https://dinotaeng.com/product/detail.html?product_no=373&cate_no=42&display_group=1</Link> */}
      <Footer />
    </div>
  )
}

export default Page