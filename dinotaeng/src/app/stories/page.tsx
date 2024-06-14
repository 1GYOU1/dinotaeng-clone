'use client';

import Header from "../header"
import Footer from "../footer"
import styled from "../subpage.module.scss"
import Link from "next/link"
import Api from "@/lib/ApiClass";

import { useEffect, useState } from "react"

interface Props {
  data: any[]
}

// stories page
function Page() {

  // api 한번에 호출
  const [storiesList, setStoriesList] = useState<any[]>()
  
  useEffect(() => {
    const init = async () => {
      try {
        const api = new Api()
        const {data} = await api.get('/ax/stories/list', {})
   
        setStoriesList(data.data)
        // console.log(data.data)
      } catch(e:any) {
        return { result: false, message: e.message }
      }
    }
    init()
  }, []);

  return (
    <div className={styled.sub_wrap}>

        <Header/>
        
        <div className={styled.stories_area}>
        <ul>
        {storiesList && storiesList.map((item:any) => (
          <li key={item._id}>
            <Link href={'/'}>
              <img src={item.image} alt={item.title}/>
              <p>{item.title}</p>
            </Link>
          </li>
        ))}
        </ul>
        </div>

        <Footer/>

    </div>
  )
}

export default Page