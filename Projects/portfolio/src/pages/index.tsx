import { Suspense, lazy, useLayoutEffect } from "react"

const Weather = lazy(() => import("./../components/Weather/weather"))

type Props = { hljs: any }

export default function index({ hljs }: Props) {
  useLayoutEffect(() => {
    hljs.highlightAll()
  }, [])

  const children: string = `const awesome:string = "FlexxDev";
    var lang:string[] = new Array("Java", "JavaScript", "TypeScript", "Ruby", "Python")
    var tech:string[] = new Array("React", "Vue", "Flask", "Rails")`

  return (
    <div className="text-center">
      <div>
        <img
          className="max-w-[480px] h-auto bg-contain rounded-md mx-auto mb-10"
          src="/Flexxall.jpg"
          alt="Flexxall"
        />
      </div>
      <pre>
        <code className="rounded-md min-w-[480px] max-w-fit mx-auto text-start language-typescript">
          {children}
        </code>
      </pre>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="m-5"><Weather /></div>
      </Suspense>
    </div>
  )
}
