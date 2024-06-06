import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Cart</p>
      <Link href={`https://dinotaeng.com/order/orderform.html?basket_type=all_buy&delvtype=A`} target="_blank">https://dinotaeng.com/order/orderform.html?basket_type=all_buy&delvtype=A</Link>
    </div>
  )
}

export default Page