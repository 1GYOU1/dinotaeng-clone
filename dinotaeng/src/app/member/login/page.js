import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
    <p>Login</p>
    <Link href={`https://dinotaeng.com/member/login.html`} target="_blank">https://dinotaeng.com/member/login.html</Link>
    </div>
  )
}

export default Page