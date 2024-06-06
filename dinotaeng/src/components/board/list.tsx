interface Prop {
  type: String
}

function BoardList(param:Prop) {
  return (
    <div className="w-full">
      <p>{param.type} Board List</p>
    </div>
  )
}

export default BoardList