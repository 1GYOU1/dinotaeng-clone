'use client'

import Link from "next/link"
import { useParams } from "next/navigation"

function Page() {
  /**
   * 현재 URL의 route에 있는 동적 매개변수 컴포넌트 hook
   * /product/[idx] 의 route인 경우
   * /product/1 으로 접속시
   * idx의 값은 1을 갖게 된다.
   */
  const params = useParams()
  return (
    <div className="w-full">
      <p>Product Detail {params.idx}</p>
      <Link href={`https://dinotaeng.com/product/detail.html?product_no=373&cate_no=42&display_group=1`} target="_blank">https://dinotaeng.com/product/detail.html?product_no=373&cate_no=42&display_group=1</Link>
    </div>
  )
}

export default Page