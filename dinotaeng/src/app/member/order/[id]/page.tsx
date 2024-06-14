'use client'

import Link from "next/link"
import { useParams } from "next/navigation"

function Page() {
  const params = useParams()
  return (
    <div className="w-full">
      <p>Order Detail {params.idx}</p>
      <Link href={`https://dinotaeng.com/myshop/order/detail.html?order_id=20240605-0001095&page=1&history_start_date=2024-03-07&history_end_date=2024-06-05`} target="_blank">https://dinotaeng.com/myshop/order/detail.html?order_id=20240605-0001095&page=1&history_start_date=2024-03-07&history_end_date=2024-06-05</Link>
    </div>
  )
}

export default Page