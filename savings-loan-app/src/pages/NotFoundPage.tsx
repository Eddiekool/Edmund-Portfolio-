import { Link } from 'react-router-dom'

export default function NotFoundPage() {
  return (
    <div className="mx-auto flex min-h-[60vh] max-w-md flex-col items-center justify-center px-6 text-center">
      <h1 className="text-3xl font-bold text-ink-900">404</h1>
      <p className="mt-2 text-sm text-ink-500">
        We couldn't find the page you're looking for.
      </p>
      <Link
        to="/"
        className="mt-6 rounded-lg bg-ink-900 px-4 py-2 text-sm font-semibold text-white"
      >
        Back home
      </Link>
    </div>
  )
}
