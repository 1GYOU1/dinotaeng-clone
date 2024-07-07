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
  const [shopMenuNum, setShopMenuNum] = useState<number | null>(null);

  const cateNum = (e:number) => {
    console.log(e);
    setShopMenuNum(e);
  }

  useEffect(() => {
    const init = async () => {
      const data = await fetchShopList({
        categoryKey: 26,
          perPage: 11,
          page: 1,
      });
      if (data.result && data.data) {
        setShopData(data.data);
      } else {
        console.error(data.message);
      }
    };
    init();
  }, []);

  useEffect(() => {
    const init = async () => {
      const data = await fetchShopList({
        categoryKey: shopMenuNum,
          perPage: 11,
          page: 1,
      });
      if (data.result && data.data) {
        setShopData(data.data);
      } else {
        console.error(data.message);
      }
    };
    init();
  }, [shopMenuNum]);

  return (
    <div className="w-full">
      <Header />

      <div className={styled.product_area}>
        <div className={styled.cont_wrap}>
          <ul className={styled.category}>
            <li><Link href="">NEW</Link></li>
            <li><Link href="">BEST</Link></li>
            <li><div onClick={() => cateNum(26)}>STATIONERY</div></li>
            <li><div onClick={() => cateNum(25)}>MOBILE</div></li>
            <li><div onClick={() => cateNum(27)}>LIVING</div></li>
            <li><div onClick={() => cateNum(49)}>OTHERS</div></li>
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
