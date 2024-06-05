import BoardDetail from "@/components/board/detail"
import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Review Detail</p>
      <Link href={`https://dinotaeng.com/article/review/4/68192/`} target="_blank">https://dinotaeng.com/article/review/4/68192/</Link>
      <BoardDetail type="Review" />
    </div>
  )
}

export default Page