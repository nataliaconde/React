import { Suspense, lazy, useLayoutEffect } from "react"

const Weather = lazy(() => import("./../components/Weather/Weather"))

type Props = { hljs: any }

export default function index({ hljs }: Props) {

  useLayoutEffect(() => {
    hljs.highlightAll()
  }, [])

  const intro: string = `const awesome: string = "FlexxDev";
    var lang: string[] = new Array("Java", "JavaScript", "TypeScript", "Ruby", "Python");
    var tech: string[] = new Array("React", "Vue", "Flask", "Rails");`

  return (
    <div className="text-center">
      <div>
        <img
          className="min-w-[300px] w-[480px] h-auto bg-contain shadow-fd dark:shadow-fdDark rounded-md mx-auto mb-10"
          src="/Flexxall.webp"
          alt="Flexxall"
        />
      </div>
      <pre title="codingIntro">
        <code className="rounded-md shadow-fd dark:shadow-fdDark min-w-[480px] max-w-fit mx-auto text-start typscript">
          {intro}
        </code>
      </pre>
      <Suspense fallback={<div>Loading...</div>}>
        <div className="m-5"><Weather /></div>
      </Suspense>
    </div>
  )
}
