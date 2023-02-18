
type Props = {}

export default function projects({ }: Props) {
  return (
    <div className="flex flex-wrap justify-center items-center gap-4 w-full">
      <div className="w-1/3 sm:w-1/4 xl:w-1/7 text-center p-4 leading-loose text-sm rounded bg-indigo-300/75">
        <div className="font-semibold text-2xl">Project 1
          <img
            className="rounded-md mx-auto"
            src="/logo.png"
            alt="Flexxall"
          />
        </div>
        <p className="sm:text-lg leading-4 sm:leading-5 text-start">Short description</p>
      </div>
      <div className="w-1/3 sm:w-1/4 xl:w-1/7 text-center p-4 leading-loose text-sm rounded bg-indigo-300/75">
        <div className="font-semibold text-2xl">Project 2
          <img
            className="w-45 rounded-md mx-auto"
            src="/logo.png"
            alt="Flexxall"
          />
        </div>
        <p className="sm:text-lg leading-4 sm:leading-5 text-start">Short description</p>
      </div>
      <div className="w-1/3 sm:w-1/4 xl:w-1/7 text-center p-4 leading-loose text-sm rounded bg-indigo-300/75">
        <div className="font-semibold text-2xl">Project 3
          <img
            className="w-45 rounded-md mx-auto"
            src="/logo.png"
            alt="Flexxall"
          />
        </div>
        <p className="sm:text-lg leading-4 sm:leading-5 text-start">Short description</p>
      </div>
      <div className="w-1/3 sm:w-1/4 xl:w-1/7 text-center p-4 leading-loose text-sm rounded bg-indigo-300/75">
        <div className="font-semibold text-2xl">Project 4
          <img
            className="w-45 rounded-md mx-auto"
            src="/logo.png"
            alt="Flexxall"
          />
        </div>
        <p className="sm:text-lg leading-4 sm:leading-5 text-start">Short description</p>
      </div>
      <div className="w-1/3 sm:w-1/4 xl:w-1/7 text-center p-4 leading-loose text-sm rounded bg-indigo-300/75">
        <div className="font-semibold text-2xl">Project 5
          <img
            className="w-45 rounded-md mx-auto"
            src="/logo.png"
            alt="Flexxall"
          />
        </div>
        <p className="sm:text-lg leading-4 sm:leading-5 text-start">Short description</p>
      </div>
    </div>
  )
}
