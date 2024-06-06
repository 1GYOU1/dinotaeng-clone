'use client'

import { useParams } from "next/navigation"

function BoardDetail(param) {
  const params = useParams()
  return (
    <div className="w-full">
    <p>{param.type} Board Detail {params.idx}</p>
    </div>
  )
}

export default BoardDetail