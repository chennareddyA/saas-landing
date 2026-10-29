import { SectionHeader, Stars } from './ui'

type Review = { name: string; role: string; quote: string; color: string }

const rowOne: Review[] = [
  { name: 'Brian Ramirez', role: 'Financial Analyst', quote: 'This banking app has completely transformed how I manage my finances. It’s user-friendly and efficient!', color: '#45a38e' },
  { name: 'David Anderson', role: 'Marketing Manager', quote: 'I love the instant transfer feature! It makes sending money to friends and family a breeze.', color: '#a487d6' },
  { name: 'James Carter', role: 'Graphic Designer', quote: 'The budgeting tools are fantastic. They’ve really helped me keep track of my spending!', color: '#f7be26' },
  { name: 'Jane Doe', role: 'Data Scientist', quote: 'I’ve never felt more secure about my online banking. The security features are top-notch!', color: '#f76d26' },
  { name: 'Emily Clark', role: 'Product Designer', quote: 'Setting up my account took minutes and everything just works. Easy and fast!', color: '#1d9b5e' },
]

const rowTwo: Review[] = [
  { name: 'Sophia Lewis', role: 'Operations Lead', quote: 'Their support team is friendly and responsive. They resolved my issues promptly.', color: '#2e90fa' },
  { name: 'John Mitchell', role: 'Product Manager', quote: 'I appreciate the transparency in fees. No hidden charges mean I can manage my finances with confidence.', color: '#45a38e' },
  { name: 'Daniel Walker', role: 'Web Developer', quote: 'Automated savings has changed my life! I’m saving more than I ever thought possible.', color: '#a487d6' },
  { name: 'William Johnson', role: 'Sales Executive', quote: 'The virtual debit card feature gives me peace of mind when shopping online. Highly recommend!', color: '#f7be26' },
  { name: 'Joshua White', role: 'Business Consultant', quote: 'I can’t believe how quickly I can send money internationally. It saves me so much time.', color: '#f76d26' },
]

const initials = (name: string) =>
  name
    .split(' ')
    .map((n) => n[0])
    .join('')

function ReviewCard({ r }: { r: Review }) {
  return (
    <figure className="w-[331px] shrink-0 rounded-3xl bg-surface p-6">
      <figcaption className="flex items-center gap-3">
        <span
          className="grid size-12 shrink-0 place-items-center rounded-full text-sm font-semibold text-white"
          style={{ backgroundColor: r.color }}
          aria-hidden="true"
        >
          {initials(r.name)}
        </span>
        <span>
          <span className="block text-xl text-ink">{r.name}</span>
          <span className="block text-sm text-body">{r.role}</span>
        </span>
      </figcaption>
      <blockquote className="mt-4 min-h-[66px] text-base leading-[1.35] text-ink">“{r.quote}”</blockquote>
      <div className="mt-4">
        <Stars className="size-5" />
      </div>
    </figure>
  )
}

// Each row is rendered twice so the scroll loops seamlessly. The copy is hidden from screen readers.
function MarqueeRow({ reviews, reverse = false }: { reviews: Review[]; reverse?: boolean }) {
  return (
    <div className="group flex overflow-hidden">
      {[0, 1].map((copy) => (
        <ul
          key={copy}
          aria-hidden={copy === 1 ? true : undefined}
          className={`flex shrink-0 gap-6 pr-6 group-hover:[animation-play-state:paused] ${
            reverse ? 'animate-marquee-reverse' : 'animate-marquee'
          }`}
        >
          {reviews.map((r) => (
            <li key={r.name}>
              <ReviewCard r={r} />
            </li>
          ))}
        </ul>
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="testimonials">
      <div className="px-5">
        <SectionHeader
          badge="Testimonials"
          title="Real Feedback from Satisfied Customers"
          className="max-w-[920px]"
          text="Discover what real clients have to say about how our services have helped them achieve their goals and manage their finances effortlessly."
        />
      </div>
      <div className="mt-10 space-y-6 [mask-image:linear-gradient(90deg,transparent,#000_6%,#000_94%,transparent)]">
        <MarqueeRow reviews={rowOne} />
        <MarqueeRow reviews={rowTwo} reverse />
      </div>
    </section>
  )
}
