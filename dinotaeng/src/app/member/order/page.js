import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Order List</p>
      <Link href={`https://dinotaeng.com/myshop/order/list.html?history_start_date=2024-03-07&history_end_date=2024-06-05&past_year=2023`} target="_blank">https://dinotaeng.com/myshop/order/list.html?history_start_date=2024-03-07&history_end_date=2024-06-05&past_year=2023</Link>
    </div>
  )
}

export default Page