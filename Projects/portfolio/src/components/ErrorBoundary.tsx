
interface Props {
  error: any | undefined,
  resetErrorBoundary: any | undefined,
  // any props that come into the component
}

function ErrorFallback({ error, resetErrorBoundary }: Props) {
  return (
    <div role="alert" className="flex flex-col text-center text-slate-300">
      <p>Something went wrong: </p>
      <pre> {error.message} </pre>
      <button onClick={resetErrorBoundary}>Try again</button>
    </div>
  )
}
export default ErrorFallback