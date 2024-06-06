import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
    <p>Coupon Product List</p>
    <Link href={`https://dinotaeng.com/myshop/coupon/coupon_product_list.html?coupon_no=6065623990400000050`} target="_blank">https://dinotaeng.com/myshop/coupon/coupon_product_list.html?coupon_no=6065623990400000050</Link>
    </div>
  )
}

export default Page