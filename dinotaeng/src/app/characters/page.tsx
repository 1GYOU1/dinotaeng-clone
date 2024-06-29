'use client'

import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"
import { useEffect, useState } from "react"
import { fetchCharactersList } from "@/fetch/fetchCharacters"

interface Props {
  data: Characters[]
}

//characters
function Page() {

  const [charactersData, setCharactersData] = useState<Characters[]>()

  useEffect(() => {

    const init = async () => {
      const { data } = await fetchCharactersList({});
      setCharactersData(data)
      // console.log(data)
    }
    init()

  }, [])

  return (
    <>
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
            {charactersData && charactersData.map((item: Characters) => (
              <li key={item._id}>
                <div className={styled.s_btn}>
                  <img src={item.thumbnail} alt={item.name}/>
                </div>
              </li>
            ))}
            </ul>
          </div>
        </div>

      </div>

      <Footer/>
    </div>
    </>
  )
}

export default Page