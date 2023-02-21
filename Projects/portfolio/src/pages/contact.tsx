import { useLayoutEffect } from "react"
import { useAtom } from "jotai"
import { currentDevAtom } from "./../Atoms"

type Props = {
  hljs: any
}

export default function Contact({ hljs }: Props) {

  const [currentDev] = useAtom(currentDevAtom)

  useLayoutEffect(() => {
    hljs.highlightAll()
  }, [])

  const contactInfo: string = `${currentDev} => {
  flexxall@live.com
  (913) 244-2996
  }`

  return (
    <div className="text-slate-300 text-center">
      <pre>
        <code className="rounded-md shadow-fd dark:shadow-fdDark min-w-[480px] max-w-fit mx-auto text-start javascript">
          {contactInfo}
        </code>
      </pre>
    </div>
  )
}