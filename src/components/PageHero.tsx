interface PageHeroProps {
  badge?: string
  title: React.ReactNode
  subtitle?: string
}

export default function PageHero({ badge, title, subtitle }: PageHeroProps) {
  return (
    <section className="relative pt-32 pb-16 bg-hero-gradient overflow-hidden">
      <div className="absolute top-1/3 left-1/4 w-80 h-80 bg-brand-mid/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 inset-x-0 h-24 bg-gradient-to-t from-brand-navy to-transparent pointer-events-none" />
      <div className="relative max-w-7xl mx-auto section-padding text-center">
        {badge && (
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border-glow glass text-sm text-brand-light mb-6">
            {badge}
          </div>
        )}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight tracking-tight mb-4">{title}</h1>
        {subtitle && (
          <p className="text-lg sm:text-xl text-white/55 max-w-2xl mx-auto leading-relaxed">{subtitle}</p>
        )}
      </div>
    </section>
  )
}
