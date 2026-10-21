import { useState, type ChangeEvent, type FormEvent, type ReactNode } from 'react'
import { brand, contact, services } from '../data/content'
import { isValidEmail, submitLead, type LeadPayload } from '../lib/form'
import { ArrowRight, Check, Mail, Phone, Shield } from './Icons'
import SocialLinks from './SocialLinks'
import { SectionHeading } from './ui'

type Errors = Partial<Record<keyof LeadPayload, string>>

const emptyForm: LeadPayload = {
  name: '',
  email: '',
  phone: '',
  company: '',
  website: '',
  subject: contact.subjects[0],
  volume: contact.volumes[1],
  services: [],
  message: '',
}

const inputBase =
  'w-full rounded-xl border border-line bg-ink-900/70 px-4 py-3 text-sm text-mist placeholder:text-dim/70 transition-colors duration-200 focus:border-gold/60 focus:bg-ink-900 focus:outline-none'

export default function Contact() {
  const [form, setForm] = useState<LeadPayload>(emptyForm)
  const [errors, setErrors] = useState<Errors>({})
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const set = <K extends keyof LeadPayload>(key: K, value: LeadPayload[K]) => {
    setForm((prev) => ({ ...prev, [key]: value }))
    setErrors((prev) => ({ ...prev, [key]: undefined }))
  }

  const toggleService = (title: string) => {
    setForm((prev) => ({
      ...prev,
      services: prev.services.includes(title)
        ? prev.services.filter((s) => s !== title)
        : [...prev.services, title],
    }))
  }

  const validate = () => {
    const next: Errors = {}
    if (!form.name.trim()) next.name = 'Please tell us your name.'
    if (!form.email.trim()) next.email = 'We need an email to send the audit.'
    else if (!isValidEmail(form.email)) next.email = 'That email does not look right.'
    if (!form.company.trim()) next.company = 'Which business are we helping?'
    if (form.website && !/^https?:\/\/.+\..+/.test(form.website.trim()))
      next.website = 'Include http:// or https:// — or leave it blank.'
    setErrors(next)
    return Object.keys(next).length === 0
  }

  const onSubmit = async (event: FormEvent) => {
    event.preventDefault()
    if (!validate()) return

    setStatus('sending')
    try {
      await submitLead(form)
      setStatus('sent')
    } catch {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="relative scroll-mt-24 overflow-hidden border-t border-line/70 py-24 lg:py-32">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-40 left-1/2 h-[36rem] w-[36rem] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(212,175,106,0.18) 0%, rgba(212,175,106,0) 70%)',
        }}
      />

      <div className="container-x relative grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow={contact.eyebrow}
            title={contact.headline}
            lead={contact.subhead}
          />

          <div
            data-reveal
            className="mt-9 flex items-center gap-3 rounded-2xl border border-gold/25 bg-gold/[0.07] px-5 py-4"
          >
            <span className="relative flex size-2 shrink-0">
              <span className="absolute inline-flex size-full animate-pulse-ring rounded-full bg-gold/70" />
              <span className="relative inline-flex size-2 rounded-full bg-gold" />
            </span>
            <p className="text-[13px] font-medium text-gold">{contact.slots}</p>
          </div>

          <ul className="mt-7 space-y-3" data-reveal>
            {[
              'A full funnel teardown of your current marketing',
              'A benchmark against 3 competitors in your market',
              'A 12-month growth plan with projected lead volume',
              'All of it free, with no obligation and no pitch deck',
            ].map((item) => (
              <li key={item} className="flex gap-3 text-sm text-mist/75">
                <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-gold/15 text-gold">
                  <Check className="size-3" />
                </span>
                {item}
              </li>
            ))}
          </ul>

          <div
            data-reveal
            className="mt-10 space-y-3 rounded-2xl border border-line/80 bg-ink-800/40 p-6"
          >
            <p className="text-[11px] font-semibold tracking-[0.18em] text-dim uppercase">
              Prefer to talk now
            </p>
            <a
              href={brand.phoneHref}
              className="flex items-center gap-3 text-sm text-mist transition-colors hover:text-gold"
            >
              <Phone className="size-4 text-gold" />
              {brand.phone}
            </a>
            <a
              href={`mailto:${brand.email}`}
              className="flex items-center gap-3 text-sm text-mist transition-colors hover:text-gold"
            >
              <Mail className="size-4 text-gold" />
              {brand.email}
            </a>
            <p className="pt-2 text-[12px] text-dim">{brand.location}</p>
            <SocialLinks variant="row" className="pt-3" />
          </div>
        </div>

        <div
          data-reveal="scale"
          className="rounded-[2rem] border border-line/80 bg-ink-800/50 p-6 shadow-[0_40px_100px_-60px_rgba(0,0,0,0.9)] backdrop-blur-xl sm:p-9"
        >
          {status === 'sent' ? (
            <div className="flex min-h-[28rem] flex-col items-center justify-center text-center">
              <span className="grid size-16 place-items-center rounded-2xl border border-gold/35 bg-gold/10 text-gold">
                <Check className="size-8" />
              </span>
              <h3 className="mt-6 text-2xl text-mist">Request received</h3>
              <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
                Thanks {form.name.split(' ')[0]} — we will review your details and come back
                within one business day with your free funnel teardown and growth plan.
              </p>
              <p className="mt-6 flex items-center gap-2 text-[12px] text-dim">
                <Shield className="size-3.5 text-gold/70" />
                Your details stay private. No mailing lists, no reselling.
              </p>
              <button
                type="button"
                onClick={() => {
                  setForm(emptyForm)
                  setStatus('idle')
                }}
                className="mt-8 text-sm font-medium text-gold underline-offset-4 hover:underline"
              >
                Send another request
              </button>
            </div>
          ) : (
            <form onSubmit={onSubmit} noValidate>
              <h3 className="text-xl text-mist">Request your free growth audit</h3>
              <p className="mt-1.5 text-[13px] text-dim">
                Takes about 60 seconds. We reply within one business day.
              </p>

              <div className="mt-7 grid gap-4 sm:grid-cols-2">
                <Field label="Full name" error={errors.name} required>
                  <input
                    className={inputBase}
                    value={form.name}
                    onChange={(e) => set('name', e.target.value)}
                    placeholder="Jane Whitfield"
                    autoComplete="name"
                  />
                </Field>

                <Field label="Work email" error={errors.email} required>
                  <input
                    className={inputBase}
                    value={form.email}
                    onChange={(e) => set('email', e.target.value)}
                    placeholder="jane@youragency.com"
                    type="email"
                    autoComplete="email"
                  />
                </Field>

                <Field label="Company / brokerage" error={errors.company} required>
                  <input
                    className={inputBase}
                    value={form.company}
                    onChange={(e) => set('company', e.target.value)}
                    placeholder="Northbrook Realty"
                    autoComplete="organization"
                  />
                </Field>

                <Field label="Phone / WhatsApp">
                  <input
                    className={inputBase}
                    value={form.phone}
                    onChange={(e) => set('phone', e.target.value)}
                    placeholder="+1 415 555 0142"
                    autoComplete="tel"
                  />
                </Field>

                <div className="sm:col-span-2">
                  <Field label="Your website" error={errors.website}>
                    <input
                      className={inputBase}
                      value={form.website}
                      onChange={(e) => set('website', e.target.value)}
                      placeholder="https://youragency.com"
                      inputMode="url"
                    />
                  </Field>
                </div>

                <Field label="You are a" required>
                  <Select
                    value={form.subject}
                    onChange={(e) => set('subject', e.target.value)}
                    options={contact.subjects}
                  />
                </Field>

                <Field label="Listings you market" required>
                  <Select
                    value={form.volume}
                    onChange={(e) => set('volume', e.target.value)}
                    options={contact.volumes}
                  />
                </Field>
              </div>

              <div className="mt-5">
                <p className="text-[12px] font-medium tracking-[0.1em] text-dim uppercase">
                  What do you need most?
                </p>
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.map((service) => {
                    const active = form.services.includes(service.title)
                    return (
                      <button
                        key={service.id}
                        type="button"
                        onClick={() => toggleService(service.title)}
                        aria-pressed={active}
                        className={`rounded-full border px-3.5 py-2 text-[12.5px] transition-all duration-200 ${
                          active
                            ? 'border-gold/55 bg-gold/12 text-gold'
                            : 'border-line bg-ink-900/60 text-mist/65 hover:border-gold/35 hover:text-mist'
                        }`}
                      >
                        {service.title}
                      </button>
                    )
                  })}
                </div>
              </div>

              <div className="mt-5">
                <Field label="Anything else we should know?">
                  <textarea
                    className={`${inputBase} min-h-28 resize-y`}
                    value={form.message}
                    onChange={(e) => set('message', e.target.value)}
                    placeholder="Markets you operate in, current spend, goals for the next 6 months..."
                  />
                </Field>
              </div>

              {status === 'error' && (
                <p className="mt-4 rounded-xl border border-red-500/30 bg-red-500/10 px-4 py-3 text-[13px] text-red-300">
                  Something went wrong sending your request. Please email{' '}
                  <a href={`mailto:${brand.email}`} className="underline">
                    {brand.email}
                  </a>{' '}
                  and we will pick it up right away.
                </p>
              )}

              <button
                type="submit"
                disabled={status === 'sending'}
                className="group mt-7 inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-gold-soft via-gold to-gold-deep px-7 py-4 text-sm font-semibold text-ink transition-shadow duration-300 hover:shadow-[0_18px_50px_-20px_rgba(212,175,106,0.85)] disabled:cursor-not-allowed disabled:opacity-60"
              >
                {status === 'sending' ? 'Sending…' : 'Request my free growth audit'}
                {status !== 'sending' && (
                  <ArrowRight className="size-4 transition-transform duration-300 group-hover:translate-x-1" />
                )}
              </button>

              <p className="mt-4 text-center text-[12px] text-dim">
                By submitting you agree to be contacted about your growth audit. No spam,
                ever.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  error,
  required,
  children,
}: {
  label: string
  error?: string
  required?: boolean
  children: ReactNode
}) {
  return (
    <label className="block">
      <span className="mb-2 flex items-center gap-1.5 text-[12px] font-medium tracking-[0.06em] text-mist/70">
        {label}
        {required && <span className="text-gold">*</span>}
      </span>
      {children}
      {error && <span className="mt-1.5 block text-[12px] text-red-400">{error}</span>}
    </label>
  )
}

function Select({
  value,
  onChange,
  options,
}: {
  value: string
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void
  options: readonly string[]
}) {
  return (
    <span className="relative block">
      <select
        className={`${inputBase} appearance-none pr-10`}
        value={value}
        onChange={onChange}
      >
        {options.map((option) => (
          <option key={option} value={option} className="bg-ink-800">
            {option}
          </option>
        ))}
      </select>
      <svg
        aria-hidden="true"
        viewBox="0 0 24 24"
        className="pointer-events-none absolute top-1/2 right-3.5 size-4 -translate-y-1/2 text-dim"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </span>
  )
}
