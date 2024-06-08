'use client'
import Link from "next/link"
import "./globals.css";

function Footer() {
	
	return (
		<div className="footer_area mt-[100px] w-full bg-[#D8CFBF]">

			<div className="go_top relative">
				<Link href={'/'} className="absolute bottom-0 right-0 p-6 flex flex-col">
					<div className="w-[45px] h-[30px]">
						<span className="absolute top-[25px] right-[35px] bg-[#B13F35] rounded-lg w-5 h-2 transform rotate-45"></span>
						<span className="absolute top-[25px] right-[44px] bg-[#B13F35] rounded-lg w-5 h-2 transform -rotate-45"></span>
					</div>
					<span className="text-[26px] leading-3 text-[#B13F35] font-['AmericusSansAged']">Top</span>
				</Link>
			</div>

			<div className="p-8 flex text-[white] text-[14px] gap-8 font-['NanumSquare']">

				<div className="section1 w-[20%]">
					CS : <span className="M_tel">070-8065-3455</span>
					<br/><span className="M_runtime_1">Mon -Fri 10am - 6pm</span>
					<br/><span className="M_runtime_2">[1-2pm Lunchtime]</span>
					<br/><span className="M_runtime_3">Sat / Sun / Holiday OFF</span>
				</div>

				<div className="section2 w-[40%]">
					<span className="M_Addr">06032 4F, 43, Dosan-daero 27-gil, Gangnam-gu, Seoul, 
					<br/>Republic of Korea</span>
				</div>

				<div className="section3 w-[20%]">
					<span className="M_mall_name">Dinotaeng.</span>
					<br/><span className="M_ceo">Taeeun Kim</span>
					<br/><span className="M_email mun-lowercase">dinotaeng@dinotaeng.com</span>
					<br/><span className="M_regno_2">2021-Seoulgangnam-04747</span>
					<br/><Link href={'/'} className="M_regno_1" target="_blank">180-54-00314</Link>
				</div>

				<div className="section4 w-[20%]">
					<a href="/member/agreement.html">Terms &amp; Conditions</a>
					<br/><a href="/shopinfo/guide.html">Guide</a>
					<br/><a href="/member/privacy.html">Policy Privacy</a>
					<div className="made pt-6 text-[12px] text-[#efefef]">
							©<span className="M_mall_name">Dinotaeng. </span>  
						<Link href={'/'} target="_blank">clone coding ♡</Link>
					</div>
				</div>

			</div>
		</div>
	)
}
  
export default Footer