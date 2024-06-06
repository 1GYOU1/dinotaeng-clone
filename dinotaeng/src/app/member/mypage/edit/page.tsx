import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Member Edit</p>
      <Link href={`https://dinotaeng.com/member/modify.html`} target="_blank">https://dinotaeng.com/member/modify.html</Link>
    </div>
  )
}

export default Page