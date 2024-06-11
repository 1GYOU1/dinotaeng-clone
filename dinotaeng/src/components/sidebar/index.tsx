import Link from "next/link"
import { useState } from "react";

interface SideBarProps {
  rightMenuShow: boolean;
  setRightMenuShow: React.Dispatch<React.SetStateAction<boolean>>;
  backgroundBlock: boolean;
  setBackgroundBlock: React.Dispatch<React.SetStateAction<boolean>>;
}

function SideBar({rightMenuShow, setRightMenuShow, backgroundBlock, setBackgroundBlock}: SideBarProps) {

  const [shopSubMenuShow, setShopSubMenuShow] = useState(false);
	const [communitySubMenuShow, setCommunitySubMenuShow] = useState(false);
	
  // right menu
	const headerRightMenu = () => {
		if (rightMenuShow) {
			// 메뉴 닫기
			setRightMenuShow(false);
      setTimeout(() => setBackgroundBlock(false), 300); // display:none
			document.body.style.overflow = 'auto'; // 스크롤 가능
    } else {
      // 메뉴 열기
      setBackgroundBlock(true);// display:block
      setTimeout(() => setRightMenuShow(true), 300); // opacity: 0.5
			document.body.style.overflow = 'hidden'; // 스크롤 방지
    }
  };

	// right menu - shop 메뉴
	const shopSubMenuToggle = () => {
		if(shopSubMenuShow){
			setShopSubMenuShow(false)
		}else{
			setShopSubMenuShow(true)
		}
	}

	// right menu - community 메뉴
	const communitySubMenuToggle = () => {
		if(communitySubMenuShow){
			setCommunitySubMenuShow(false)
		}else{
			setCommunitySubMenuShow(true)
		}
	}


  return (
    <div>
      {/* right menu bg */}
			<div 
				className={`bg-black w-[100vw] h-[100vh] absolute top-0 left-0 z-10 transition-all ease duration-300 cursor-pointer 
				${rightMenuShow ? 'opacity-50' : 'opacity-0'} 
				${backgroundBlock ? 'block' : 'hidden'}`
				}
				onClick={headerRightMenu}
			></div>
			{/* right menu */}
			<div 
				className={`right_menu py-[30px] px-[40px] bg-white absolute top-0 right-0 h-[100vh] w-[320px] z-10 transition-all ease duration-300
				${rightMenuShow ? 'translateX-0' : 'translate-x-full'}`
				}
				>

				<div onClick={headerRightMenu} className="right_menu_close absolute top-[10px] right-[10px] z-10 w-[27px] h-[27px] p-[27px]">
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 rotate-[45deg] block w-[35px] h-[5px] rounded-[10px] bg-[#B13F35]"></span>
					<span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -rotate-[45deg] block w-[35px] h-[5px] rounded-[10px] bg-[#B13F35]"></span>
				</div>

				<div className="sec1 text-[22px] leading-[18px] font-['AmericusSansAged'] text-[#B13F35]">
					<ul className="flex gap-[30px] pb-[50px]">
						<li>
							<div className="hover:cursor-pointer border-b-[3px] border-b-[#B13F35]">Kr</div>
						</li>
						<li>
							<div className="hover:cursor-pointer">En</div>
						</li>
					</ul>
				</div>

				<div className="sec2 text-[26px] leading-[30px] font-['AmericusSansAged'] text-[#B13F35]">
					<ul className="text-[26px] leading-[30px]">
						<li>
							<div className="block hover:cursor-pointer" onClick={shopSubMenuToggle}>SHOP</div>
							<div className={`${shopSubMenuShow ? '' : 'hidden'}`}>
								<ul className="text-[20px] leading-[23px] text-[#563D4A] ps-[10px] pt-[5px] pb-[20px]">
									<li>
										<Link className="block" href={'/'} onClick={headerRightMenu}>NEW</Link>
									</li>
									<li>
										<Link className="block" href={'/'} onClick={headerRightMenu}>BEST</Link>
									</li>
									<li>
										<Link className="block" href={'/'} onClick={headerRightMenu}>STATIONERY</Link>
									</li>
									<li>
										<Link className="block" href={'/'} onClick={headerRightMenu}>MOBILE</Link>
									</li>
									<li>
										<Link className="block" href={'/'} onClick={headerRightMenu}>LIVING</Link>
									</li>
									<li>
										<Link className="block" href={'/'} onClick={headerRightMenu}>OTHERS</Link>
									</li>
									<li>
										<Link className="block" href={'/'} onClick={headerRightMenu}>SALE</Link>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<Link className="block" href={'/about'} onClick={headerRightMenu}>ABOUT</Link>
						</li>
						<li>
							<Link className="block" href={'/characters'} onClick={headerRightMenu}>CHARACTERS</Link>
						</li>
						<li>
							<Link className="block" href={'/stories'} onClick={headerRightMenu}>STORIES</Link>
						</li>
						<li>
							<Link className="block" href={'/archive'} onClick={headerRightMenu}>ARCHIVE</Link>
						</li>
					</ul>
				</div>
				
				<div className="sec3 text-[22px] leading-[26px] font-['AmericusSansAged'] text-[#B13F35] py-[30px]">
					<ul>
						<li>
							<div className="hover:cursor-pointer" onClick={communitySubMenuToggle}>COMMUNITY</div>
							<div className={`${communitySubMenuShow ? '' : 'hidden'}`}> 
								<ul className="text-[20px] leading-[23px] text-[#563D4A] ps-[10px] pt-[5px] pb-[20px]">
									<li>
										<Link href={'/community/notice'} onClick={headerRightMenu}>NOTICE</Link>
									</li>
									<li>
										<Link href={'/community/qna'} onClick={headerRightMenu}>Q&A</Link>
									</li>
									<li>
										<Link href={'/community/review'} onClick={headerRightMenu}>REVIEW</Link>
									</li>
								</ul>
							</div>
						</li>
						<li>
							<Link href={'/stockist'} onClick={headerRightMenu}>STOCKIST</Link>
						</li>
						<li>
							<Link href={'/member/order'} onClick={headerRightMenu}>ORDER</Link>
						</li>
						<li>
							<Link href={'/'} onClick={headerRightMenu}>MY ACCOUNT</Link>
						</li>
						<li>
							<Link href={'/order/cart'} onClick={headerRightMenu}>CART 0</Link>
						</li>
						<li>
							<Link href={'/member/login'} onClick={headerRightMenu}>LOGIN</Link>
						</li>
					</ul>
				</div>

				<div className="sec4 text-[20px] leading-[23px] font-['AmericusSansAged'] text-[#564D4A]">
					<div className="pb-[50px]">
						<h3>Customer Center</h3>
						<p className="pb-[20px] text-[16px] leading-[20px]">070-8065-3455</p>
						<p className="text-[16px] leading-[20px]">Mon -Fri 10am - 6pm</p>
						<p className="text-[16px] leading-[20px]">[1-2pm Lunchtime]</p>
						<p className="text-[16px] leading-[20px]">Sat / Sun / Holiday OFF</p>
					</div>
					<div>
						<h3>Banking Info</h3>
						<p className="text-[16px] leading-[20px]">KB 584101-01-244759</p>
						<p className="text-[16px] leading-[20px]">Taeeun Kim (Dinotaeng)</p>
					</div>
				</div>
				
			</div>
    </div>
  )
}

export default SideBar