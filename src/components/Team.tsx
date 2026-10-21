import { team } from '../data/content'
import { SectionHeading } from './ui'

const avatarGradients = [
  'from-gold/60 to-gold-deep/30',
  'from-sage/60 to-sage/20',
  'from-mist/40 to-mist/10',
  'from-gold-soft/50 to-gold/20',
]

export default function Team() {
  return (
    <section id="team" className="relative scroll-mt-24 border-t border-line/70 py-24 lg:py-32">
      <div className="container-x">
        <SectionHeading
          eyebrow="Who you work with"
          title={
            <>
              A small pod of people who <span className="text-gold">know property</span>
            </>
          }
          lead="The people in your first strategy call are the people doing the work. No account-management layer, no hand-off to a junior you never met."
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {team.map((member, i) => (
            <article
              key={member.name}
              data-reveal
              className="group relative overflow-hidden rounded-3xl border border-line/80 bg-ink-800/40 p-7 transition-all duration-500 hover:border-gold/30 hover:shadow-[0_26px_60px_-40px_rgba(212,175,106,0.55)]"
            >
              <div
                aria-hidden="true"
                className="pointer-events-none absolute -top-16 -right-14 size-40 rounded-full bg-gold/0 blur-3xl transition-all duration-700 group-hover:bg-gold/10"
              />
              <span
                className={`relative grid size-14 place-items-center rounded-2xl bg-gradient-to-br ${avatarGradients[i % avatarGradients.length]} font-display text-lg tracking-wide text-ink`}
              >
                {member.initials}
              </span>
              <h3 className="relative mt-5 text-lg text-mist">{member.name}</h3>
              <p className="relative mt-1 text-[12px] font-medium tracking-[0.1em] text-gold/85 uppercase">
                {member.role}
              </p>
              <p className="relative mt-4 text-sm leading-relaxed text-muted">{member.bio}</p>
              <ul className="relative mt-5 flex flex-wrap gap-1.5">
                {member.focus.map((f) => (
                  <li
                    key={f}
                    className="rounded-full border border-line/80 bg-ink-900/60 px-2.5 py-1 text-[11px] text-mist/60"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
