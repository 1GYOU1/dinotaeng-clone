'use client'

import Link from "next/link";
import Header from "../header";
import Footer from "../footer";
import styled from "../subpage.module.scss";

import { useEffect, useState } from "react";
import { fetchShopList } from "@/fetch/fetchShop";

interface Shop {
  productId: number;
  productName: string;
  productThumbnail: string;
  productPrice: number;
  productSalePrice?: number;
}

function Page() {
  const [shopData, setShopData] = useState<Shop[] | null>(null);

  useEffect(() => {
    const init = async () => {
      const data = await fetchShopList({});
      if (data.result && data.data) {
        setShopData(data.data);
      } else {
        console.error(data.message);
      }
    };
    init();
  }, []);

  return (
    <div className="w-full">
      <Header />

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
              {shopData ? (
                shopData.map((item) => (
                  <li key={item.productId}>
                    <Link href={`/product/${item.productId}`}>
                      <div className={styled.img_box}>
                        <img className={styled.image} src={item.productThumbnail} alt={`상품 이미지 ${item.productName}`} />
                        <img className={styled.image_hover} src={item.productThumbnail} alt={`상품 이미지 ${item.productName}`} />
                      </div>
                      <p>{item.productName}</p>
                    </Link>
                    <span>₩{item.productPrice.toLocaleString()}</span>
                  </li>
                ))
              ) : (
                <p>상품을 불러오는 중입니다...</p>
              )}
            </ul>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
