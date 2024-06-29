'use client'

import Header from "../../header"
import Footer from "../../footer"
import styled from "../../subpage.module.scss"
import { useEffect, useState } from "react"
import { fetchStoriesDetail } from "@/fetch/fetchStoriesDetail"

interface Props {
  params: {
    id: string
  }
  data: Story
}

// stories detail page
function Page({params}: Props) {

  // api 한번에 호출
  const [storiesDetail, setStoriesDetail] = useState<Story>()
  
  useEffect(() => {
    const init = async () => {
      const { data } = await fetchStoriesDetail({
        id: params.id
      })
      setStoriesDetail(data)
      // console.log(data)
    }
    init()
  }, []);

  return (
    <div className={styled.sub_wrap}>

        <Header/>

        <div className={styled.stories_detail}>
          {storiesDetail && (
            <div dangerouslySetInnerHTML={{ __html: storiesDetail.content }}></div>
          )}
        </div>

        <Footer/>

    </div>
  )
}

export default Page