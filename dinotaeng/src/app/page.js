import Link from "next/link"
import Header from "./header"

import "./style/main.css";

// 메인 페이지
function Page() {
  return (
    <div className="w-full">
      <Header/>
      <div className="main_area">
        <div className="main_1">
          <img src="/images/main_img.gif"/>
        </div>
        <div className="main_2">
          <h3>Life in Marshville</h3>
          <div className="movie_box">
            <video src="https://player.vimeo.com/progressive_redirect/playback/913155636/rendition/1080p/file.mp4?loc=external&amp;signature=4fde946188b7e20322b8159688bffb0ed6f3087b429b0132d988b1ff22b8ba4f" autoplay="true" loop="true" muted="true" playsinline="true"></video>
          </div>
          <div className="small_txt">Dinotaeng ® Since 2018</div>
        </div>
        <div className="main_3">
          <h3>Meet our villagers</h3>
          <div className="img_box">
            <Link href={'/'}>
              <img src="/images/main_3.png" alt="메인 이미지 2"/>
            </Link>
          </div>
        </div>
      </div>
      <p>Main</p>
      <Link href={`https://dinotaeng.com`} target="_blank">https://dinotaeng.com</Link>
    </div>
  )
}

export default Page