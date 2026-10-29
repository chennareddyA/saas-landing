import { Logo } from './Logo'
import { Apple, Facebook, GooglePlay, Instagram, LinkedIn, Twitter } from './icons'

const columns = [
  { title: 'Home', links: ['Product Features', 'Benefits', 'How To Use', 'Key Features', 'Pricing', 'Testimonials', 'FAQ’s'] },
  { title: 'App', links: ['Mobile App', 'Desktop App', 'How To Use'] },
  { title: 'All Pages', links: ['Home', 'App', 'Blogs', 'Blog Open', 'Contact', 'Privacy Policy', '404'] },
]

const socials = [
  { label: 'Facebook', icon: Facebook },
  { label: 'LinkedIn', icon: LinkedIn },
  { label: 'Instagram', icon: Instagram },
  { label: 'Twitter', icon: Twitter },
]

export default function Footer() {
  return (
    <footer id="footer" className="bg-night-grid bg-night-deep-tone font-inter text-white">
      <div className="mx-auto max-w-[1240px] px-5 pt-20 lg:px-0 lg:pt-[110px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[364px_229px_197px_203px_246px] lg:gap-0">
          <div className="sm:col-span-2 lg:col-span-1">
            <Logo />
            <p className="mt-8 max-w-[240px] text-base leading-[1.45] text-[#babebc]">
              Empowering Your Projects, Enhancing Your Success, Every Step of the Way.
            </p>
            <ul className="mt-8 flex gap-3">
              {socials.map(({ label, icon: Icon }) => (
                <li key={label}>
                  <a href="#top" aria-label={label} className="grid size-10 place-items-center rounded-[10px] bg-white/[0.06] text-[#d7dbd9] transition-colors hover:bg-white/15">
                    <Icon className="size-5" />
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <p className="text-base font-medium">{col.title}</p>
              <ul className="mt-1.5 space-y-[6.5px]">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#top" className="text-base leading-6 text-[#babebc] transition-colors hover:text-white">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          <div className="self-start rounded-2xl border border-white/10 bg-white/[0.04] p-5 lg:w-[246px]">
            <p className="text-base font-medium">Download our App</p>
            <div className="mt-5 space-y-3">
              {[
                { icon: GooglePlay, small: 'Get It On', big: 'Google Play' },
                { icon: Apple, small: 'Download on the', big: 'App Store' },
              ].map(({ icon: Icon, small, big }) => (
                <a
                  key={big}
                  href="#top"
                  className="flex h-14 items-center justify-center gap-3 rounded-xl border border-white/10 bg-white/[0.06] transition-colors hover:bg-white/10"
                >
                  <Icon className="size-7" />
                  <span className="text-left leading-tight">
                    <span className="block text-xs text-[#babebc]">{small}</span>
                    <span className="block text-lg">{big}</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-4 border-t border-white/10 py-6 text-base text-[#747c77] sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Euphoria. All rights reserved.</p>
          <a href="#top" className="hover:text-white">Privacy Policy</a>
          <a href="#top" className="hover:text-white">Terms of Services</a>
        </div>
      </div>
    </footer>
  )
}
