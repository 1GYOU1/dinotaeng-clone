import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"
import Link from "next/link"

function Page() {
  return (
    <div className={styled.sub_wrap}>
      <Header/>

      <div className={styled.characters_area}>
        <div className={styled.cont01}>
          <img src="/images/Villagers_img.jpg" alt="characters 메인 이미지"/>
        </div>
        <div className={styled.cont02}>
          <h4>Meet our villagers</h4>
          <div className={styled.img_box}>
            <ul>
              <li>
                <div className={styled.s_btn} /* onClick={} */>
                  <img src="/images/characters_img_1.gif" alt="characters 이미지 1"/>
                </div>
              </li>
              <li>
                <div className={styled.s_btn} /* onClick={} */>
                  <img src="/images/characters_img_2.gif" alt="characters 이미지 2"/>
                </div>
              </li>
              <li>
                <div className={styled.s_btn} /* onClick={} */>
                  <img src="/images/characters_img_3.gif" alt="characters 이미지 3"/>
                </div>
              </li>
              <li>
                <div className={styled.s_btn} /* onClick={} */>
                  <img src="/images/characters_img_4.gif" alt="characters 이미지 4"/>
                </div>
              </li>
              <li>
                <div className={styled.s_btn} /* onClick={} */>
                  <img src="/images/characters_img_5.gif" alt="characters 이미지 5"/>
                </div>
              </li>
              <li>
                <div className={styled.s_btn} /* onClick={} */>
                  <img src="/images/characters_img_6.gif" alt="characters 이미지 6"/>
                </div>
              </li>
              <li>
                <div className={styled.s_btn} /* onClick={} */>
                  <img src="/images/characters_img_7.gif" alt="characters 이미지 7"/>
                </div>
              </li>
              <li>
                <div className={styled.s_btn} /* onClick={} */>
                  <img src="/images/characters_img_8.jpeg" alt="characters 이미지 8"/>
                </div>
              </li>
              <li>
                <div className={styled.s_btn} /* onClick={} */>
                  <img src="/images/characters_img_9.gif" alt="characters 이미지 9"/>
                </div>
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