import BoardList from "@/components/board/list"
import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Review</p>
      <Link href={`https://dinotaeng.com/board/product/list.html?board_no=4`} target="_blank">https://dinotaeng.com/board/product/list.html?board_no=4</Link>
      <BoardList type="Review" />
    </div>
  )
}

export default Page