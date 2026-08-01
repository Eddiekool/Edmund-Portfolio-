import { Link } from 'react-router-dom'

export default function SignupPage() {
  return (
    <div className="mx-auto flex min-h-[70vh] max-w-md flex-col justify-center px-6 py-20">
      <h1 className="text-2xl font-bold text-ink-900">Create your account</h1>
      <p className="mt-2 text-sm text-ink-500">
        This is a placeholder screen — wire up real registration here next.
      </p>

      <form className="mt-8 space-y-4">
        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="name">
            Full name
          </label>
          <input
            id="name"
            type="text"
            placeholder="Ada Lovelace"
            className="mt-1 w-full rounded-lg border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="email">
            Email
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            className="mt-1 w-full rounded-lg border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
        </div>
        <div>
          <label className="text-sm font-medium text-ink-700" htmlFor="password">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="••••••••"
            className="mt-1 w-full rounded-lg border border-ink-900/10 px-4 py-2.5 text-sm outline-none focus:border-brand-500"
          />
        </div>
        <button
          type="submit"
          className="w-full rounded-lg bg-ink-900 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-600"
        >
          Create account
        </button>
      </form>

      <p className="mt-6 text-center text-sm text-ink-500">
        Already have an account?{' '}
        <Link to="/login" className="font-semibold text-brand-600">
          Log in
        </Link>
      </p>
    </div>
  )
}
