'use client'

import Link from "next/link"
import styled from "../../member.module.scss"
import { useState } from "react"

// Login page
function Page() {

  const [passWdShow, setPassWdShow] = useState<any>();

  const passWdShowClick = () => {
    setPassWdShow(!passWdShow);
  }

  return (
    <div className={styled.member_wrap}>
      <div className={styled.login_area}>
        <div className={styled.top_nav}>
          <Link href={'/'}><div className={styled.back_btn}></div></Link>
          <Link href={'/'}><div className={styled.home_btn}></div></Link>
        </div>

        <h1 className={styled.logo}>
          <Link href={'/'}>
            <img src="/images/login_logo.png" alt="로고"/>
          </Link>
        </h1>

        <div className={styled.inner}>
          
          <div className={styled.login_cont01}>
            <h2 className={styled.title}>로그인</h2>
            <p className={styled.text}>아이디와 비밀번호 입력하기 귀찮으시죠?<br/>1초 회원가입으로 입력없이 간편하게 로그인 하세요.</p>
            <div className={styled.basic_btn}>
              <a className={styled.btn_kakao}>카카오 1초 로그인/회원가입</a>
              <a className={styled.btn_naver}>네이버 1초 로그인/회원가입</a>
            </div>
          </div>

          
          <div className={styled.cont_banner}>
            <img src="/images/login_banner.png" alt="banner"/>
          </div>

          <div className={styled.login_cont02}> 
            <ul className={styled.tab_menu}>
              <li className={styled.active}>
								<Link href={'/'}>기존 회원이세요?</Link>
							</li>
              <li>
                <Link href={'/'}>비회원 배송조회</Link>
              </li>
            </ul>

            <div className={styled.cont_member}>
          
              <div className={styled.mamber_id_box}>
                <input placeholder="아이디" type="text"/>
              </div>

              <div className={styled.passwd_box}>
                <div 
                className={`${styled.chk_passwd} ${passWdShow ? styled.active : ''}`}
                onClick={passWdShowClick}
                ></div>
                <input type="password" placeholder="비밀번호"/>
              </div>

              <div className={styled.login_chk_box}>
                <li>
                  <input id="check_save_id" type="checkbox"/>
                  <label htmlFor="check_save_id">아이디저장</label>
                </li>
              </div>

              <button className={styled.login_btn}>기존 회원 로그인</button>

              <div className={styled.find_join_area}>
                <Link href={'/'}>아이디 찾기</Link>
                <Link href={'/'}>비밀번호 찾기</Link>
                <Link href={'/'} className={styled.right}>회원가입</Link>
              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Page