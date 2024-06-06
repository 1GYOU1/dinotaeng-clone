import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Product List</p>
      <Link href={`https://dinotaeng.com/product/list.html?cate_no=42`} target="_blank">https://dinotaeng.com/product/list.html?cate_no=42</Link>
    </div>
  )
}

export default Page