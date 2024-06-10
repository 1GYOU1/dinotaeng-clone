import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"

// about page

function Page() {
  return (
    <div className={styled.sub_wrap}>

        <Header/>
        
        <div className={styled.about_area}>
          <div className={styled.cont01}>
            <div className={styled.img_box}>
              <img src="/images/cont_about.png" alt="about 이미지"/>
            </div>
            <div className={styled.text_box}>
              <p>
                ‘마쉬빌’이라는 작은 마을에서 벌어지는 주민들의 이야기를 그리고 있습니다.
                  늘 장난과 즐거움으로 가득한 우리 마을 식구들의 유일한 목적은 최고의 마쉬멜로우를 찾는 것! 
                  항상 명랑하고 때로는 서툴지만, 문제가 생겨도 유머와 기발한 생각으로 해결하며 가족의 사랑, 친구와의 우정과 같은 따뜻함과 행복을 배웁니다 . 
                  모든것이 완벽해야하는 이 세상에서 생김새도, 행동도 엉성한 이 친구들을 보며 행복한 기운이 함께했으면 합니다.
              </p>
              <p>
                  Dinotaeng depicts the story of tiny village named 'Marshville.
                  The mischievous residents, who are full of energy, have one life goal - to find the best marshmallow!  
                  Always joyful and sometimes clumsy, our villagers resolves obstacles with humour and originality, treating every occasion as gleeful experiments of life’s possibilities.
                Join Quokka, Bobo and Marsh in their search and share some of their positive energy along the way .
              </p>
            </div>
          </div>

          <div className={styled.cont02}>
            <h3>Contact</h3>
            <p>
              다이노탱은 다양한 브랜드, 기업과의 즐거운 협업을 기다립니다.
              <br/>
              협업 및 프로젝트 관련 내용은 이메일을 통해 문의 주세요. 
              <br/>
              <br/>
              dinotaeng@dinotaeng.com
              <br/>
              <br/>
              <br/>
              도매 및 협찬, 홀세일 문의는 아래의 메일을 통해 문의주세요. 
              <br/>
              <br/>
              office_dinotaeng@dinotaeng.com
            </p>
          </div>

          <div className={styled.cont03}>
            <h3>Studio</h3>
            <p>
              서울특별시 강남구 도산대로27길 43 4층
              <br/>
              43, Dosan-daero 27-gil, Gangnam-gu, Seoul, Republic of Korea 06032
              <br/>
              +82-70-8065-3455
              <br/>
              <br/>
              <br/>
              Dinotaeng 2018-2023
            </p>
          </div>
        </div>

        <Footer/>

    </div>
  )
}

export default Page