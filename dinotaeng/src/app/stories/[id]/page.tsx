'use client'

import Header from "../../header"
import Footer from "../../footer"
import styled from "../../subpage.module.scss"
import { useParams, useSearchParams } from "next/navigation"
// import { useEffect } from "react"

// stories detail page
function Page() {
  const params = useParams();
  const searchParams = useSearchParams();
  const content = searchParams.get("content");

  // useEffect(() => {
  //   console.log('params:', params);
  //   console.log('content:', content);
  // }, []);

  return (
    <div className={styled.sub_wrap}>

        <Header/>
        
        <div className={styled.stories_detail}>

          <div dangerouslySetInnerHTML={{ __html: content }}></div>
        
        </div>

        <Footer/>

    </div>
  )
}

export default Page