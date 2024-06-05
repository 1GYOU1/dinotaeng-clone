import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Article List</p>
      <Link href={`https://dinotaeng.com/myshop/board_list.html`} target="_blank">https://dinotaeng.com/myshop/board_list.html</Link>
    </div>
  )
}

export default Page