'use client'

import { useParams } from "next/navigation"

interface Prop {
  type: String
}

function BoardDetail(param:Prop) {
  const params = useParams()
  return (
    <div className="w-full">
    <p>{param.type} Board Detail {params.idx}</p>
    </div>
  )
}

export default BoardDetail