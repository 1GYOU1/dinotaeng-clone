'use client'

import { fetchGallery } from "@/fetch/fetchGallery"
import Link from "next/link"
import { useEffect, useState } from "react"

interface Props {
  params: {
    id: string
  }
}

function Page({params}: Props) {
  const [galleryData, setGalleryData] = useState<any[]>()

  useEffect(() => {
    const init = async () => {
      const { data } = await fetchGallery({
        id: params.id
      })
      setGalleryData(data)
    }
    init()
  }, [])
  return (
    <div className="w-full">
    <p>gallery</p>
    <Link href={`https://dinotaeng.com/mundane/html/product/journal_detail.html?product_no=249&cate_no=1&display_group=12`} target="_blank">https://dinotaeng.com/mundane/html/product/journal_detail.html?product_no=249&cate_no=1&display_group=12</Link>
    </div>
  )
}

export default Page