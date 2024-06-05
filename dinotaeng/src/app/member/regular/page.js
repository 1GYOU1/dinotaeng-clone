import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
    <p>Wish List</p>
    <Link href={`https://dinotaeng.com/myshop/regular_delivery.html`} target="_blank">https://dinotaeng.com/myshop/regular_delivery.html</Link>
    </div>
  )
}

export default Page