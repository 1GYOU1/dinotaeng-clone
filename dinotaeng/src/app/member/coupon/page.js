import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
    <p>Coupon List</p>
    <Link href={`https://dinotaeng.com/myshop/coupon/coupon.html`} target="_blank">https://dinotaeng.com/myshop/coupon/coupon.html</Link>
    </div>
  )
}

export default Page