import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
    <p>About</p>
    <Link href={`https://dinotaeng.com/mundane/html/sub_page/about.html`} target="_blank">https://dinotaeng.com/mundane/html/sub_page/about.html</Link>
    </div>
  )
}

export default Page