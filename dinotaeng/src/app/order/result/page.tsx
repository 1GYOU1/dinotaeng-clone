import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Cart</p>
      <Link href={`https://dinotaeng.com/order/order_result.html?order_id=20240605-0001095`} target="_blank">https://dinotaeng.com/order/order_result.html?order_id=20240605-0001095</Link>
    </div>
  )
}

export default Page