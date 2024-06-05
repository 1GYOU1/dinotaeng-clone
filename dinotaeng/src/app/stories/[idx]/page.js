'use client'

import Link from "next/link"
import { useParams } from "next/navigation"

function Page() {
  const params = useParams()
  return (
    <div className="w-full">
      <p>Stories Detail {params.idx}</p>
      <Link href={`https://dinotaeng.com/mundane/html/product/journal_detail2.html?product_no=247&cate_no=179&display_group=1`} target="_blank">https://dinotaeng.com/mundane/html/product/journal_detail2.html?product_no=247&cate_no=179&display_group=1</Link>
    </div>
  )
}

export default Page