import { useLayoutEffect } from "react"

type Props = { hljs: any }

export default function practice({ hljs }: Props) {

  useLayoutEffect(() => {
    hljs.highlightAll()
  }, [])

  const title = String.raw`
   ___| |_  ___  _____ __      __ ____ _____ ___
  / __| __|/ _  |  __/ \ \ /\ / // _  |  __// __|
  \__ | |_  (_| | |     \ V  V /  (_| | |   \__ |
  |___/\__|\__,_|_|      \_/\_/  \__,_|_|   |___/
 `

  const code = ` return (
    <div className="text-slate-300 text-center">
      <pre>
        <code className="rounded-md min-w-[480px] max-w-fit mx-auto my-5 text-start plaintext">
          {title}
        </code>
      </pre>
      <pre>
        <code className="rounded-md min-w-[480px] max-w-fit mx-auto my-5 text-start javascript">Practice
        </code>
      </pre>
    </div>
  )`

  return (
    <div className="text-slate-300 text-center">
      <pre>
        <code className="shadow-fd dark:shadow-fdDark rounded-md min-w-[480px] max-w-fit mx-auto my-5 text-start plaintext">
          {title}
        </code>
      </pre>

      <pre>
        <code className="shadow-fd dark:shadow-fdDark rounded-md min-w-[480px] max-w-fit mx-auto my-5 text-start javascript">
          Practice
        </code>
      </pre>

      <pre>
        <code className="shadow-fd dark:shadow-fdDark rounded-md min-w-[480px] max-w-fit mx-auto my-5 text-start javascript">
          {code}
        </code>
      </pre>

    </div>
  )
}
