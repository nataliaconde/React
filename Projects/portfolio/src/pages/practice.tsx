import { useLayoutEffect } from "react"

type Props = { hljs: any }

export default function practice({ hljs }: Props) {
  useLayoutEffect(() => {
    hljs.highlightAll()
  }, []);


  return (
    <div className="text-slate-300 text-center">
      <pre>
        <code className="rounded-md min-w-[480px] max-w-fit mx-auto text-start javascript">Practice
        </code>
      </pre>
    </div>
  );
}
