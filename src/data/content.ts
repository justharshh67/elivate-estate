/* ------------------------------------------------------------------------
 * SITE CONTENT — Elivate Estate
 * ------------------------------------------------------------------------
 * Everything a client sees is defined here so copy can be edited without
 * touching components.
 *
 * Elivate Estate is a new company. The copy reflects that: commitments and
 * targets instead of legacy claims, a founding-client programme, and a
 * published-numbers promise. Swap in real case studies as they land.
 * --------------------------------------------------------------------- */

export const brand = {
  name: 'Elivate Estate',
  short: 'Elivate',
  tagline: 'Built on trust, rooted in value',
  descriptor: 'Digital marketing for real estate',
  domain: 'elivateestate.com',
  email: 'estateelavte1531@gmail.com',
  phone: '+1 (415) 555-0142',
  phoneHref: 'tel:+14155550142',
  whatsapp: 'https://wa.me/14155550142',
  location: 'Remote-first · Serving USA, UK, UAE & India',
} as const

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Results', href: '#results' },
  { label: 'Process', href: '#process' },
  { label: 'Engagement', href: '#engagement' },
  { label: 'FAQ', href: '#faq' },
] as const

export const about = {
  eyebrow: 'About Elivate Estate',
  headline: 'Built on trust, rooted in value',
  story: [
    'Elivate Estate started with an observation we could not shake: real estate marketing fails in the same way every quarter. Agencies sell impressions, brokerages buy leads, and the agent who actually has to answer the phone is left holding a bag of contacts and a missed commission.',
    'So we built the opposite. A specialist team that works on one industry only, owns the whole path from a stranger’s search to a signed contract, and reports on the one number that matters — qualified people who actually show up.',
  ],
  values: [
    {
      title: 'Trust, evidenced',
      body: 'Every claim ties to something you can check: a live dashboard, a written scope, a contract with a free-proof clause. If we cannot show it, we do not say it.',
    },
    {
      title: 'Value, measured',
      body: 'We are not paid for impressions or follower counts. We are paid for pipeline you can point at — enquiries, viewings, offers, keys handed over.',
    },
    {
      title: 'One industry, deeply',
      body: 'Real estate only. We know the portal landscape, the seasonality, the price points, and the difference between a curious click and a buyer who is already pre-approved.',
    },
    {
      title: 'Partnership, not retainers',
      body: 'Month-to-month after the proof window, named senior people on your account, and a handover pack that leaves you independent of us if you ever want to be.',
    },
  ],
  founder: {
    name: 'Aditi Kapoor',
    role: 'Founder & Growth Strategist',
    quote:
      '“I have spent fifteen years watching good agents lose good business to bad marketing. Elivate Estate exists so that never happens to another one of them — and so you can see every number behind what we do.”',
  },
  facts: [
    { value: '2026', label: 'Founded' },
    { value: '1', label: 'Industry only' },
    { value: '6', label: 'Clients per quarter' },
    { value: '60 days', label: 'Proof window' },
  ],
} as const

export type SocialKey = 'instagram' | 'linkedin'

export const socials: { key: SocialKey; label: string; href: string }[] = [
  {
    key: 'instagram',
    label: 'Instagram',
    href: 'https://www.instagram.com/elivateestate.co',
  },
  {
    key: 'linkedin',
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/company/elivateestate',
  },
]

export const hero = {
  eyebrow: 'Now onboarding founding clients',
  headline: ['More qualified property leads.', 'Fewer empty viewings.'],
  subhead:
    'Elivate Estate is a digital marketing agency built exclusively for real estate. Paid search, SEO, listing content and lead nurture — engineered to fill your pipeline with buyers and sellers who are ready to move.',
  primaryCta: { label: 'Get a free growth audit', href: '#contact' },
  secondaryCta: { label: 'See the growth model', href: '#results' },
  bullets: [
    'Only 6 founding client slots',
    'No lock-in contracts',
    'Transparent, revenue-linked reporting',
  ],
  note: 'Live in 14 days. Proof or free in 60.',
} as const

export const audienceLabels = [
  'RESIDENTIAL BROKERAGES',
  'LUXURY COLLECTIONS',
  'DEVELOPERS',
  'COMMERCIAL & INDUSTRIAL',
  'PROPTECH & PORTALS',
  'RENTALS & PROPERTY MGMT',
  'NEW-BUILD AGENTS',
] as const

export const stats = [
  { value: '14 days', label: 'To first live campaign' },
  { value: '60 days', label: 'Founding proof window' },
  { value: '100%', label: 'Reporting you can audit' },
  { value: '1:1', label: 'Strategist, not a ticket queue' },
] as const

export type Service = {
  id: string
  title: string
  summary: string
  points: string[]
  metric: string
  metricLabel: string
  icon: 'search' | 'seo' | 'camera' | 'social' | 'crm' | 'layout'
}

export const services: Service[] = [
  {
    id: 'paid',
    title: 'Paid Search & Lead Ads',
    summary:
      'Google and Meta campaigns built around buyer intent, not vanity clicks. Every lead lands in your CRM, not a lost inbox.',
    points: [
      'Geo-fenced campaigns per project, tower or neighbourhood',
      'Call tracking, lead scoring and instant WhatsApp/SMS alerts',
      'Creative built from real listing photography, not stock',
      'Budget reallocated weekly toward what actually books viewings',
    ],
    metric: '24/7',
    metricLabel: 'Lead routing, zero missed calls',
    icon: 'search',
  },
  {
    id: 'seo',
    title: 'Property SEO & Portal Visibility',
    summary:
      'Get found when someone searches "3 bed villa for sale near me" — on Google, on property portals and inside portal search.',
    points: [
      'Local + project landing pages built for property search intent',
      'Technical fixes for Core Web Vitals and index coverage',
      'Syndicated listings across major property portals',
      'Neighbourhood and amenity content that ranks long-term',
    ],
    metric: 'Top 3',
    metricLabel: 'Target local pack rank',
    icon: 'seo',
  },
  {
    id: 'content',
    title: 'Listing Content Studio',
    summary:
      'Listings are your best salesperson. We make them look like the best property on the market and spread them everywhere.',
    points: [
      'Photography, video, drone, 3D tours and floor plans',
      'Virtual staging and twilight edits for empty units',
      'Copywriting that ranks and converts',
      'One push, syndicated to every channel and portal',
    ],
    metric: '4 assets',
    metricLabel: 'Per listing, per month',
    icon: 'camera',
  },
  {
    id: 'social',
    title: 'Social & Community',
    summary:
      'Instagram, Facebook and LinkedIn run like a local sales team — market updates, new launches and neighbourhood proof.',
    points: [
      'Monthly content calendar with local market insights',
      'Short-form video and reels from your own listings',
      'Paid social retargeting of site and portal visitors',
      'Community groups and new-developer launch campaigns',
    ],
    metric: '3 channels',
    metricLabel: 'Always on, always local',
    icon: 'social',
  },
  {
    id: 'crm',
    title: 'CRM & Lead Nurture',
    summary:
      'The average agent loses half their leads to slow follow-up. We make sure every enquiry is answered in under 60 seconds.',
    points: [
      'Pipeline setup, lead stages and automated follow-up',
      'Speed-to-lead automation on web, portal and ad leads',
      'WhatsApp, email and SMS sequences for buyers and sellers',
      'Viewing-to-offer conversion tracking',
    ],
    metric: '<60 sec',
    metricLabel: 'Target first response time',
    icon: 'crm',
  },
  {
    id: 'web',
    title: 'Conversion Sites & Landing Pages',
    summary:
      'Fast, mobile-first pages built for one action: book a viewing. No templates, no slow builders, no broken funnels.',
    points: [
      'Custom listing microsites and project pages',
      'Booking, valuation and lead-capture flows',
      'A/B testing on headlines, forms and offer framing',
      'Sub-second load times on any connection',
    ],
    metric: '<1 sec',
    metricLabel: 'Target page load time',
    icon: 'layout',
  },
]

export type Playbook = {
  segment: string
  type: string
  location: string
  headline: string
  challenge: string
  approach: string
  funnel: { label: string; value: string }[]
  note: string
  accent: 'gold' | 'sage' | 'mist'
}

export const playbooks: Playbook[] = [
  {
    segment: 'Residential brokerage',
    type: '12 agents · 30 active listings',
    location: 'Suburban US market',
    headline: 'Turning portal traffic into booked viewings',
    challenge:
      'Strong listings, weak pipeline. Enquiries arrive from portals and portals alone, roughly a third of them go unanswered for more than a day, and the brokerage has no idea which campaigns produced anything.',
    approach:
      'Intent-led Google Search per neighbourhood, a 60-second speed-to-lead flow on every portal enquiry, and a weekly content studio that keeps every listing sharp across channels.',
    funnel: [
      { label: 'Listing views / month', value: '2,400' },
      { label: 'Enquiries', value: '112' },
      { label: 'Qualified leads', value: '58' },
      { label: 'Viewings booked', value: '21' },
      { label: 'Offers in 90 days', value: '6' },
    ],
    note: 'Modelled on a 30-listing brokerage with a $2,500 monthly media budget.',
    accent: 'gold',
  },
  {
    segment: 'Pre-construction developer',
    type: 'Single flagship project',
    location: 'Prime city-centre site',
    headline: 'Building demand before the doors open',
    challenge:
      'A beautiful project with no pipeline. Buyers and investors discover it too late, sales conversations start before there is any social proof, and every pre-launch month is a month of paying holding costs.',
    approach:
      'A gated waitlist with floor plans and 3D tours, intent-led search aimed at investors and downsizers, and a nurture sequence that trades access — not discounts — for early registration.',
    funnel: [
      { label: 'Waitlist signups', value: '1,850' },
      { label: 'Qualified buyers', value: '420' },
      { label: 'Unit reservations', value: '96' },
      { label: 'Reservations in 7 months', value: '72' },
      { label: 'Reservation rate', value: '38%' },
    ],
    note: 'Modelled on a 250-unit launch with a 9-month sales window.',
    accent: 'sage',
  },
  {
    segment: 'Commercial & industrial',
    type: 'Multi-division brokerage',
    location: 'Regional office market',
    headline: 'Winning leases worth chasing',
    challenge:
      'High-value deals, invisible online. No search presence, no asset-level pages, and deals above a million dollars never enter the pipeline because nobody is looking.',
    approach:
      'Asset-level landing pages for every warehouse, office and retail space, plus a shared lead dashboard so marketing and sales finally read from the same numbers.',
    funnel: [
      { label: 'Qualified enquiries', value: '19' },
      { label: 'Site visits booked', value: '11' },
      { label: 'LOIs issued', value: '6' },
      { label: 'Pipeline value / 90 days', value: '$4.1M' },
      { label: 'Return on ad spend', value: '3.2x' },
    ],
    note: 'Modelled on a $3,000 monthly media budget for mixed commercial assets.',
    accent: 'mist',
  },
]

export const promiseBlocks = [
  {
    title: 'We publish our own numbers',
    body: 'From month two we share our performance publicly — spend, leads, cost per lead and every miss. A new company earns trust by being inspectable, not by borrowing someone else’s case studies.',
  },
  {
    title: 'Proof, or it is free',
    body: 'If we have not delivered at least one qualified enquiry attributed to our work inside your first 60 days, our fees for that period are waived. Written into the agreement, no fine print.',
  },
  {
    title: 'Six clients, then we pause',
    body: 'We cap onboarding at six founding clients per quarter so every account gets senior attention. When the slots are full, we wait rather than dilute the work.',
  },
] as const

export type ProcessStep = {
  step: string
  title: string
  duration: string
  description: string
  deliverables: string[]
}

export const process: ProcessStep[] = [
  {
    step: '01',
    title: 'Free growth audit',
    duration: 'Day 0–3',
    description:
      'We audit your current funnel end to end: ad accounts, search visibility, listing presentation, follow-up speed and CRM hygiene. You get the findings whether you hire us or not.',
    deliverables: [
      'Full funnel teardown',
      'Competitor and portal benchmark',
      '12-month growth plan',
    ],
  },
  {
    step: '02',
    title: 'Offer & funnel design',
    duration: 'Week 1',
    description:
      'We define the offer, the audience, the promise and the conversion path. You approve a one-page strategy before a single ad goes live.',
    deliverables: [
      'Positioning and offer',
      'Audience + geo map',
      'Channel mix and budget split',
    ],
  },
  {
    step: '03',
    title: 'Launch & creative',
    duration: 'Week 2',
    description:
      'Campaigns, landing pages and content go live together so nothing is half-built. Tracking, call routing and CRM automations are wired before launch day.',
    deliverables: [
      'Campaign build and QA',
      'Landing pages and forms',
      'Tracking and CRM wiring',
    ],
  },
  {
    step: '04',
    title: 'Optimise & nurture',
    duration: 'Every week',
    description:
      'Weekly experiments on bids, creative, audiences and landing pages. Leads flow into automated sequences so nothing sits idle between the click and the viewing.',
    deliverables: [
      'Weekly test-and-learn cycle',
      'Nurture sequences for buyers and sellers',
      'Speed-to-lead monitoring',
    ],
  },
  {
    step: '05',
    title: 'Prove it & report',
    duration: 'Day 60 onward',
    description:
      'At the end of the proof window we show the numbers on the table — spend, leads, viewings, revenue — and you decide what happens next. A monthly report keeps it honest in between.',
    deliverables: [
      '60-day proof review',
      'Revenue-attributed dashboard',
      'Monthly strategy call',
    ],
  },
]

export type Member = {
  name: string
  role: string
  bio: string
  initials: string
  focus: string[]
}

export const team: Member[] = [
  {
    name: 'Aditi Kapoor',
    role: 'Founder & Growth Strategist',
    bio: 'Fifteen years in property marketing across Delhi, Dubai and San Francisco. Started Elivate Estate after watching too many agents buy leads they could never sell.',
    initials: 'AK',
    focus: ['Funnel strategy', 'Positioning', 'Analytics'],
  },
  {
    name: 'Rohan Mehta',
    role: 'Head of Paid Media',
    bio: 'Built and scaled search and social programmes for residential developers and brokerages across four continents. Obsessed with lead quality over lead volume.',
    initials: 'RM',
    focus: ['Google Ads', 'Meta Ads', 'Lead scoring'],
  },
  {
    name: 'Sara Nair',
    role: 'Content & Brand Lead',
    bio: 'Former property photographer turned brand strategist. Runs our listing content studio and makes every unit look like the one your buyer falls in love with.',
    initials: 'SN',
    focus: ['Photography', 'Video', 'Brand systems'],
  },
  {
    name: 'Dev Iyer',
    role: 'CRM & Automation Lead',
    bio: 'Engineers the follow-up that actually happens — WhatsApp, email and SMS sequences, dashboards your sales team will genuinely open, and alerts that actually ring.',
    initials: 'DI',
    focus: ['CRM setup', 'Automation', 'Reporting'],
  },
]

export type Plan = {
  name: string
  scope: string
  pitch: string
  featured: boolean
  features: string[]
  cta: string
}

export const plans: Plan[] = [
  {
    name: 'Starter',
    scope: 'Up to 5 listings · 1 market',
    pitch: 'For solo agents and small teams getting their first consistent inbound.',
    featured: false,
    features: [
      'Local SEO for one neighbourhood set',
      'Google Search campaigns in a single market',
      'One conversion landing page',
      'Basic CRM setup and lead routing',
      'Listing content studio at cost',
      'Monthly report and email support',
    ],
    cta: 'Start with an audit',
  },
  {
    name: 'Growth',
    scope: 'Up to 20 listings · up to 3 markets',
    pitch: 'For brokerages and agents serious about scaling predictable, qualified pipeline.',
    featured: true,
    features: [
      'Full local and project SEO programme',
      'Google and Meta ads across up to three markets',
      'Listing content studio — 10 shoots per month',
      'Lead nurture via WhatsApp, email and SMS',
      'Conversion website build (up to 12 pages)',
      'Bi-weekly strategy calls',
    ],
    cta: 'Claim a founding slot',
  },
  {
    name: 'Scale',
    scope: 'Unlimited listings · multi-market',
    pitch: 'For developers, teams and multi-market operators who need a full growth engine.',
    featured: false,
    features: [
      'Developer launch campaigns and pre-launch waitlists',
      'Dedicated content studio and media budget management',
      'A dedicated strategist and pod (creative, media, content)',
      '24/7 lead routing with a 5-minute response SLA',
      'Revenue attribution and offline CRM reporting',
      'Quarterly business review with the founding team',
    ],
    cta: 'Talk to the founder',
  },
]

export const engagementNotes = [
  {
    t: 'Scope, then commercials',
    d: 'Every engagement is scoped after your free growth audit, so you only pay for what your market and pipeline actually need. No published rates, no hidden line items.',
  },
  {
    t: 'Media budget',
    d: 'Paid directly to Google and Meta at cost, so you always see every rupee in your own dashboard. We recommend a monthly media budget large enough to produce statistically meaningful data, and you approve all of it.',
  },
  {
    t: 'Exit terms',
    d: 'Month-to-month after the 60-day proof window. You keep every asset, account and document we build — no exit fee, no clawback.',
  },
] as const

export type Faq = { q: string; a: string }

export const faqs: Faq[] = [
  {
    q: 'You are a new company — why should I trust you?',
    a: 'Fair question, and we do not expect you to trust a brand name. Trust the proof window instead: we agree in writing to deliver at least one qualified enquiry attributed to our work within 60 days, or our fees for that period are waived. We also publish our own performance publicly from month two, misses included. You are not buying a track record — you are buying a 60-day test with the downside removed.',
  },
  {
    q: 'What exactly is a founding client?',
    a: 'One of six businesses we take on each quarter while we build the company. Founding clients get terms locked for the cohort, a named founding strategist, direct access to the founders, and a seat in the case studies we publish later. In exchange, we ask for honest feedback and permission to reference the work.',
  },
  {
    q: 'Do you only work with real estate?',
    a: 'Yes. Real estate is the only sector we take on. That means we already know the buying cycle, the portal landscape, the seasonality of your market and the difference between a curiosity click and a buyer who is actually pre-approved.',
  },
  {
    q: 'How quickly will I see results?',
    a: 'Paid search and lead routing can move within the first two weeks because intent is already there. SEO and organic content compound over three to six months. Your 60-day proof window is measured from the day campaigns go live, and we report against it weekly rather than hiding it in a monthly slide.',
  },
  {
    q: 'What does a "qualified lead" actually mean?',
    a: 'A lead that has passed our qualification filter: correct geography, stated budget in range, real intent to view in the next 60 days, and a reachable contact. Every lead is scored before it reaches your sales team, and you can see the score and source on every single record.',
  },
  {
    q: 'What does it cost?',
    a: 'We do not publish rates. Every engagement is scoped against your market, your listing volume and your pipeline before a number is agreed, and you get that scope in writing alongside your free growth audit. There are no setup surprises and no line items that appear later.',
  },
  {
    q: 'Will I be locked into a long contract?',
    a: 'No. Every engagement is month to month after the 60-day proof window. We keep you because the results hold up, not because leaving is painful. If we are not producing qualified pipeline, you can walk in month two.',
  },
  {
    q: 'Do I need to provide the photography and video?',
    a: 'Not if you are on Growth or Scale — our content studio handles photography, video, drone, floor plans, virtual staging and 3D tours, then syndicates everything to your portals, site and social channels. On Starter, you can use our team at cost or bring your own assets.',
  },
  {
    q: 'Which platforms do you work on?',
    a: 'Google Search, Performance Max, Meta, Instagram, YouTube, LinkedIn for developer and commercial campaigns, plus portal syndication for Zillow, Rightmove, Property Finder, Bayut, 99.co, 99acres and any local MLS or portal your market uses.',
  },
  {
    q: 'Will this work together with my in-house team or broker?',
    a: 'Yes, and it is common. We act as the specialist marketing pod and hand over clean, documented assets, dashboards and playbooks so your in-house team or franchise marketing department can take over any part of the work without friction.',
  },
  {
    q: 'What is the minimum ad budget you require?',
    a: 'For paid search, we recommend a monthly media budget large enough that the data stays statistically meaningful, and we manage platform fees separately from that spend. On Starter, we can run a lower-budget organic and retargeting programme instead. We agree the number with you in writing before anything is spent.',
  },
]

export const contact = {
  eyebrow: 'Free growth audit',
  headline: 'Find out exactly where your next 50 leads come from',
  subhead:
    'Tell us a little about your business. We will come back within one business day with a free funnel teardown, a competitor benchmark and a 12-month growth plan — with no obligation.',
  subjects: [
    'I am an agent / brokerage',
    'I am a developer',
    'I am a proptech or portal',
    'Something else',
  ],
  volumes: [
    '1–5 listings',
    '6–20 listings',
    '21–100 listings',
    '100+ listings / multi-project',
  ],
  slots: '3 of 6 founding slots remaining this quarter',
} as const
