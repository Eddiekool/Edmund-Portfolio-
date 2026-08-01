import { useState } from 'react'

const tracks = {
  savings: [
    {
      step: '01',
      title: 'Set your goal',
      description: 'Tell us what you’re saving for and by when.',
    },
    {
      step: '02',
      title: 'Automate contributions',
      description: 'Link a card or account and choose a savings schedule.',
    },
    {
      step: '03',
      title: 'Watch it grow',
      description: 'Track progress and earn interest along the way.',
    },
  ],
  loans: [
    {
      step: '01',
      title: 'Apply online',
      description: 'Fill out one short form — takes about five minutes.',
    },
    {
      step: '02',
      title: 'Get a decision',
      description: 'Most applicants hear back within 24 hours.',
    },
    {
      step: '03',
      title: 'Receive funds',
      description: 'Approved funds are deposited directly to your account.',
    },
  ],
} as const

type Track = keyof typeof tracks

export default function HowItWorks() {
  const [active, setActive] = useState<Track>('savings')

  return (
    <section id="how-it-works" className="bg-ink-50/60 py-20">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-ink-900">
              How it works
            </h2>
            <p className="mt-3 max-w-md text-ink-500">
              Whether you're saving toward a goal or applying for a loan, it
              only takes three steps.
            </p>
          </div>

          <div className="flex rounded-lg border border-ink-900/10 bg-white p-1">
            {(Object.keys(tracks) as Track[]).map((track) => (
              <button
                key={track}
                onClick={() => setActive(track)}
                className={`rounded-md px-4 py-2 text-sm font-medium capitalize transition ${
                  active === track
                    ? 'bg-ink-900 text-white'
                    : 'text-ink-500 hover:text-ink-900'
                }`}
              >
                {track}
              </button>
            ))}
          </div>
        </div>

        <div id="loans" className="mt-12 grid gap-8 sm:grid-cols-3">
          {tracks[active].map((item) => (
            <div key={item.step}>
              <div className="text-sm font-bold text-brand-600">
                {item.step}
              </div>
              <h3 className="mt-3 text-lg font-semibold text-ink-900">
                {item.title}
              </h3>
              <p className="mt-2 text-sm text-ink-500">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
