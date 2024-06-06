import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Cart</p>
      <Link href={`https://dinotaeng.com/order/basket.html`} target="_blank">https://dinotaeng.com/order/basket.html</Link>
    </div>
  )
}

export default Page