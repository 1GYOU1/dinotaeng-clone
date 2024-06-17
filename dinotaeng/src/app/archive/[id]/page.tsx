'use client'

import Header from "../../header"
import Footer from "../../footer"
import styled from "../../subpage.module.scss"

import { fetchGallery } from "@/fetch/fetchGallery"
import { useEffect, useState } from "react"

interface Props {
  params: {
    id: string
  }
  data: Gallery[]
}

// archive detail page
function Page({params}: Props) {
  
  const [galleryData, setGalleryData] = useState<Gallery>()

  useEffect(() => {

    const init = async () => {
      const { data } = await fetchGallery({
        id: params.id
      })
      setGalleryData(data)
      // console.log(data)
    }
    init()

  }, [])

  return (
    <div className={styled.sub_wrap}>
      <Header/>
      <div className={styled.archive_detail_area}>
        {galleryData && (
          <>
              {galleryData.images.map((item:any, index:number) => (
                  <img src={item} alt={`image_${index}`} />
              ))}
          </>
        )}
      </div>

      <Footer/>
    </div>
  )
}

export default Page