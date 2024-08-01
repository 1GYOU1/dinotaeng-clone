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
    //[폴더명]: any
  }
  data: ProductDetail[]
}

function Page({ params }: Props) {
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
      console.log("1.")
      console.log(params)
      const { data } = await fetchProductDetail({
        productId: params.id,
        //아무이름 : params.[폴더명]
      })
      setProductDetail(data)
      console.log(data)
    }
    init()
  }, []);

  return (
    <div className={styled.product_detail_area}>
      <Header />
      {productDetail && (
        <div className={styled.cont_top}>

          <div className={styled.left_area}>
            <div className={styled.slide_box}>
              {/* 슬라이드 영역 */}
              {productDetail.productImages.length > 0 ? ( // 이미지가 존재할떄
              productDetail.productImages.map((image, idx) => (
                <img key={idx} src={image} alt={`${productDetail.productName} slide ${idx + 1}`} />
              ))
            ) : (
              <p>No image</p>
            )}
            </div>
            <div className={styled.detail_box}>
            {productDetail.detailImages.length > 0 ? (
              productDetail.detailImages.map((image, idx) => (
                <img key={idx} src={image} alt={`${productDetail.productName} detail image ${idx + 1}`} />
              ))
            ) : (
              <p>No image</p>
            )}
            </div>
          </div>

          <div className={styled.right_area}>
            <div>
              <div className={styled.title}>{productDetail.productName}</div>
              <div className={styled.price}>
                <strong>₩{productDetail.productSalePrice}</strong>
              </div>
              <div className={styled.delivery_price}>
                <span>₩2,500 (₩50,000 이상 구매 시 무료)</span>
              </div>
              <div className={styled.total_products}>
                <ul>
                  <li className={styled.t_tit}>{productDetail.productName}</li>
                  <li className={styled.cal_box}>
                    <input type="text" />
                    <span className={styled.plus}>+</span>
                    <span className={styled.minus}>-</span>
                  </li>
                  <li><strong className={styled.t_price}>₩{productDetail.productSalePrice}</strong></li>
                </ul>
              </div>
              <div className={styled.toggle_area}>
                <ul>
                  <li>
                    <p>상품소개</p>
                    <div className={styled.tg_txt} dangerouslySetInnerHTML={{ __html: productDetail.productIntro }} />
                  </li>
                  <li>상세정보</li>
                  <li>교환 및 환불</li>
                  <li>배송안내</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
      )}

      <div className={styled.bottom_area}></div>

      {/* <p>Product Detail {params.idx}</p>
      <Link href={`https://dinotaeng.com/product/detail.html?product_no=373&cate_no=42&display_group=1`} target="_blank">https://dinotaeng.com/product/detail.html?product_no=373&cate_no=42&display_group=1</Link> */}
      <Footer />
    </div>
  )
}

export default Page