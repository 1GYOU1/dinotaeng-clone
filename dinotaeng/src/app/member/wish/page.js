import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
    <p>Wish List</p>
    <Link href={`https://dinotaeng.com/myshop/wish_list.html`} target="_blank">https://dinotaeng.com/myshop/wish_list.html</Link>
    </div>
  )
}

export default Page