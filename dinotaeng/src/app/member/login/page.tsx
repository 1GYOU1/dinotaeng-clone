import Link from "next/link"

// Login page
function Page() {
  return (
    <div className="member_wrap">
      <div className="topNav">
          <div className="backBtn"></div>
          <div className="homeBtn"><Link href={'/'}></Link></div>
      </div>

      <h1 className="shopName">
        <Link href={'/'}>
          <img src="https://storage.keepgrow.com/6677628d27174ca4a68117f825daf9df/processes/1708495361479.png"/>
        </Link>
      </h1>

      <div id="KG_section">
        <div id="kakaoLogin" className="contents">
          <h2 className="title">로그인</h2>
          <p className="text">아이디와 비밀번호 입력하기 귀찮으시죠?<br/>1초 회원가입으로 입력없이 간편하게 로그인 하세요.</p><div className="basicBtn"><a className="btn btnKakao">카카오 1초 로그인/회원가입</a>
          <a className="btn btnNaver">네이버 1초 로그인/회원가입</a>
        </div>
      </div>

      <div id="bannerSec">
        <img src="https://storage.keepgrow.com/6677628d27174ca4a68117f825daf9df/processes/1708495285442.png" alt="banner"/>
      </div>

      <div id="memberLogin" className="contents"> 
        <ul id="tabMenu">
          <li className="active"><a href="/member/login.html">기존 회원이세요?</a></li>
          <li className="">
            <a href="/member/login.html?noMemberOrder&amp;returnUrl=%2Fmyshop%2Forder%2Flist.html#noMember">비회원 배송조회</a>
          </li>
        </ul>
        <div id="formWrap">
          <div id="normalLogin_id">
            <div className="inputBox">
      <input id="member_id" name="member_id" fw-filter="isFill" fw-label="아이디" fw-msg="" className="inputTypeText" placeholder="아이디" value="" type="text"/>
        <div className="inputBox_orderno">
        </div>
        <div className="inputBox_passwd">
          <div className="chk_passwd">
            </div>
            <input id="member_passwd" name="member_passwd" type="password" placeholder="비밀번호"/>
            </div>
            </div>
            <div className="loginCheckBox">
              <li>
                <input id="check_save_id" type="checkbox"/>
                <label htmlFor="check_save_id">아이디저장</label>
              </li>
            </div>
            <button className="btn loginBtn">기존 회원 로그인</button>
            <a href="/order/orderform.html?basket_type=A0000&amp;delvtype=B" className="btn nomemberBuyBtn">비회원 구매</a>
            <div className="utilMenu">
                <a href="/member/id/find_id.html">아이디 찾기</a>
                <a href="/member/passwd/find_passwd_info.html">비밀번호 찾기</a>
                <a href="/member/join.html" className="right">회원가입</a>
            </div>
          </div>
        </div>
      </div>

    </div>

  </div>
  )
}

export default Page