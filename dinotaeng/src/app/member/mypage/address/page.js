import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Address List</p>
      <Link href={`https://dinotaeng.com/myshop/addr/list.html`} target="_blank">https://dinotaeng.com/myshop/addr/list.html</Link>
    </div>
  )
}

export default Page