import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Delivery Change</p>
      <Link href={`https://dinotaeng.com/myshop/order/receiver_update.html?order_id=20240605-0001095&delivery_code=`} target="_blank">https://dinotaeng.com/myshop/order/receiver_update.html?order_id=20240605-0001095&delivery_code=</Link>
    </div>
  )
}

export default Page