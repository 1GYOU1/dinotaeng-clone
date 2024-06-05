import BoardDetail from "@/components/board/detail"
import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Q&A Detail</p>
      <Link href={`https://dinotaeng.com/article/review/4/68192/`} target="_blank">https://dinotaeng.com/article/review/4/68192/</Link>
      <BoardDetail type="Q&A" />
    </div>
  )
}

export default Page