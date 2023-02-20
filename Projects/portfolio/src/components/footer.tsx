import React from "react"
import { useAtom } from "jotai"
import { currentDevAtom } from "./../Atoms"

type Props = {}

export default function footer({ }: Props) {

  const [currentDev] = useAtom(currentDevAtom)

  return (
    <div className="my-2 text-slate-300 text-lg text-center italic">
      ~ {currentDev} ~
    </div>
  )
}
