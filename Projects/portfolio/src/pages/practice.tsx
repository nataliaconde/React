import { useLayoutEffect } from "react";

type Props = { hljs: any };

export default function practice({ hljs }: Props) {
  useLayoutEffect(() => {
    hljs.highlightAll();
  }, []);

  const children: string = `const awesome:string = "FlexxDev";
    var lang:string[] = new Array("Java", "JavaScript", "TypeScript", "Ruby", "Python")
    var tech:string[] = new Array("React", "Vue", "Flask", "Rails")`;
  return (
    <div className="text-slate-300 text-center">
      <pre>
        <code className="rounded-md min-w-[480px] max-w-fit mx-auto text-start language-typescript">
          {children}
        </code>
      </pre>
    </div>
  );
}
