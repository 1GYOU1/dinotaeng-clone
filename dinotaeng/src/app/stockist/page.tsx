'use client'

import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"

import Link from "next/link"

//stockist page
function Page() {
  return (
    <div className={styled.sub_wrap}>
      <Header/>

      <div className={styled.stockist_area}>
        <div className={styled.cont01}>
          <h4>Official</h4>
          <ul>
            <li>
              Phone
              <br/>070-8065-3455
            </li>
            <li>
              E-Mail
              <br/>dinotaeng@dinotaeng.com
            </li>
            <li>
              Address
              <br/>06032 4F, 43, Dosan-daero 27-gil, Gangnam-gu, Seoul, Republic of Korea
            </li>
            <li>
              Opening Hours
              <br/>Mon -Fri 10am - 6pm
              <br/>[1-2pm Lunchtime]
              <br/>Sat / Sun / Holiday OFF
            </li>
          </ul>
        </div>

        <div className={styled.cont02}>
          <div className={styled.f_box}>
            <h4>Online Store</h4>
            <ul>
            <li>
              official
              <br/><Link href="http://studiomundane.kr" target="_blank">www.dinotaeng.com</Link>
            </li>
            <li>
              object
              <br/><Link href="https://insideobject.com/product/search.html?banner_action=&amp;keyword=%EB%8B%A4%EC%9D%B4%EB%85%B8%ED%83%B1">www.insideobject.com</Link>
            </li>
            <li>
              onemorebag
              <br/><Link href="https://onemorebag.kr/category/%EB%8B%A4%EC%9D%B4%EB%85%B8%ED%83%B1/555/" target="_blank">www.onemorebag.kr</Link>
            </li>
            <li>
              29cm
              <br/><Link href="https://shop.29cm.co.kr/brand/15235" target="_blank">www.29cm.co.kr</Link>
            </li>
          </ul>
          </div>
          <div className={styled.f_box}>
            <h4>Offline Store</h4>
            <ul>
              <li>
                오브젝트 / object 서교점
                <br/>서울특별시 마포구 와우산로 35길 13
                <br/>02-3144-7738
              </li>
              <li>
                오브젝트 / object 성수점
                <br/>서울특별시 성동구 서울숲길 36
                <br/>현대아파트 상가 2층
                <br/>02-464-0080
              </li>
              <li>
                오브젝트 / object 삼청점
                <br/>서울특별시 종로구 재동11
                <br/>070-4829-9008
              </li>
              <li>
                오브젝트 / object 부산 서면점
                <br/>부산특별시 부산진구 전포대로 209번길 11
                <br/>051-808-7747
              </li>
              <li>
                오브젝트 / object 대구 삼덕점
                <br/>대구광역시 중구 달구벌대로 447길 62-3
                <br/>070-5124-7778
              </li>
              <li>
                오브젝트 / object 전주점
                <br/>전주시 완산구 전주객사 3길 74-36
                <br/>063-288-1002
              </li>
              <li>
                오브젝트 / object 제주 선흘점
                <br/>제주시 조천읍 중산간동로 1175-1
                <br/>064-783-0745
              </li>
              <li>
                원모어백 One More bag
                <br/>서울특별시 종로구 필운대로 6-1,2층
                <br/>070-7768-8990
              </li>
              <li>
                당인리 책발전소
                <br/>서울특별시 마포구 월드컵로14길 10-8
                <br/>070-7768-8990      
              </li>
              <li>
                책발전소 광교
                <br/>경기도 수원시 영통구 광교호수공원로 80
                <br/>070-4175-7183
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