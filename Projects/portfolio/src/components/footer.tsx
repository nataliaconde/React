import React from "react"

type Props = { name: string }

export default function footer({ name }: Props) {
  return (
    <div className="my-2 text-slate-300 text-lg text-center italic">
      ~ {name} ~
    </div>
  )
}
