import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
      <p>Main</p>
      <Link href={`https://dinotaeng.com`} target="_blank">https://dinotaeng.com</Link>
    </div>
  )
}

export default Page