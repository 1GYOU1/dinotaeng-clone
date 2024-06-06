import Link from "next/link"

function Page() {
  return (
    <div className="w-full">
    <p>Address Edit Form</p>
    <Link href={`https://dinotaeng.com/myshop/addr/modify.html?ma_idx=94900`} target="_blank">https://dinotaeng.com/myshop/addr/modify.html?ma_idx=94900</Link>
    </div>
  )
}

export default Page