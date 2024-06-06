import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Mypage Main</p>
      <Link href={`https://dinotaeng.com/myshop/index.html`} target="_blank">https://dinotaeng.com/myshop/index.html</Link>
    </div>
  )
}

export default Page