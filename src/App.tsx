import { createContext, useContext, useEffect, useState } from 'react';
import {
  FiArrowUp,
  FiArrowUpRight,
  FiCheck,
  FiCopy,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiMoon,
  FiSun,
  FiTool,
} from 'react-icons/fi';
import {
  education,
  experience,
  featured,
  profile,
  projects,
  skills,
  ui,
  type L,
  type Lang,
  type Project,
} from './data';

const sectionIds = ['projects', 'work', 'about', 'skills', 'contact'] as const;

type Theme = 'light' | 'dark';

const LangContext = createContext<Lang>('en');

/** Picks the current language's string; plain strings are language-neutral. */
function useT() {
  const lang = useContext(LangContext);
  return (s: string | L) => (typeof s === 'string' ? s : s[lang]);
}

const read = (key: string) => {
  try {
    return localStorage.getItem(key);
  } catch {
    return null;
  }
};

const write = (key: string, value: string) => {
  try {
    localStorage.setItem(key, value);
  } catch {
    /* storage unavailable — preference just won't persist */
  }
};

function useTheme(): [Theme, () => void] {
  const [theme, setTheme] = useState<Theme>(() => {
    const stored = (read('theme') || document.documentElement.dataset.theme) as Theme | undefined;
    if (stored === 'light' || stored === 'dark') return stored;
    return 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    document.documentElement.dataset.mode = theme;
    write('theme', theme);
  }, [theme]);

  return [theme, () => setTheme(t => (t === 'dark' ? 'light' : 'dark'))];
}

function useLang(): [Lang, () => void] {
  const [lang, setLang] = useState<Lang>(() => {
    const stored = read('lang');
    if (stored === 'en' || stored === 'fr') return stored;
    return navigator.language.toLowerCase().startsWith('fr') ? 'fr' : 'en';
  });

  useEffect(() => {
    document.documentElement.lang = lang;
    document.title = ui.meta.title[lang];
    document.querySelector('meta[name="description"]')?.setAttribute('content', ui.meta.description[lang]);
    write('lang', lang);
  }, [lang]);

  return [lang, () => setLang(l => (l === 'en' ? 'fr' : 'en'))];
}

/** Tracks which section is in view, scroll progress, and fades elements in as they enter. */
function useScrollEffects(lang: Lang) {
  const [active, setActive] = useState('');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const root = document.documentElement;
    const onScroll = () => {
      setScrolled(window.scrollY > 400);
      const max = root.scrollHeight - window.innerHeight;
      root.style.setProperty('--progress', String(max > 0 ? window.scrollY / max : 0));
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    const spy = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) setActive(e.target.id);
        }),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    sectionIds.forEach(id => {
      const el = document.getElementById(id);
      if (el) spy.observe(el);
    });

    return () => {
      window.removeEventListener('scroll', onScroll);
      spy.disconnect();
    };
  }, []);

  useEffect(() => {
    const reveal = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-in');
            reveal.unobserve(e.target);
          }
        }),
      { rootMargin: '0px 0px -10% 0px' }
    );
    document.querySelectorAll('[data-reveal]:not(.is-in)').forEach(el => reveal.observe(el));
    return () => reveal.disconnect();
  }, [lang]);

  return { active, scrolled };
}

function formatMonth(ym: string, lang: Lang) {
  const [y, m] = ym.split('-').map(Number);
  return new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-US', { month: 'short', year: 'numeric' }).format(
    new Date(y, m - 1)
  );
}

const External = (props: React.AnchorHTMLAttributes<HTMLAnchorElement> & { href: string }) => (
  <a target="_blank" rel="noopener noreferrer" {...props} />
);

/** Feeds the cursor position to CSS and updates font-unit construction coordinates. */
const trackPointer = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  const x = Math.round(e.clientX - rect.left);
  const y = Math.round(e.clientY - rect.top);
  e.currentTarget.style.setProperty('--x', `${x}px`);
  e.currentTarget.style.setProperty('--y', `${y}px`);
};

function Nav(props: { active: string; theme: Theme; onToggleTheme: () => void; onToggleLang: () => void }) {
  const { active, theme, onToggleTheme, onToggleLang } = props;
  const lang = useContext(LangContext);
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav proof ${open ? 'nav--open' : ''}`}>
      <div className="container nav__inner">
        <a href="#top" className="nav__logo" aria-label={t(ui.nav.top)} onClick={() => setOpen(false)}>
          Asaréel Dadiouari
        </a>
        <nav className="nav__links" aria-label="Sections">
          {sectionIds.map(id => (
            <a
              key={id}
              href={`#${id}`}
              className={active === id ? 'is-active' : undefined}
              onClick={() => setOpen(false)}
            >
              {t(ui.nav[id])}
            </a>
          ))}
        </nav>
        <div className="nav__actions">
          <button
            type="button"
            className="lang-btn"
            onClick={onToggleLang}
            aria-label={t(ui.nav.otherLang)}
            title={t(ui.nav.otherLang)}
          >
            <span className={lang === 'en' ? 'is-on' : undefined}>en</span>
            <span className={lang === 'fr' ? 'is-on' : undefined}>fr</span>
          </button>
          <button
            type="button"
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={t(theme === 'dark' ? ui.nav.toLight : ui.nav.toDark)}
          >
            {theme === 'dark' ? <FiSun aria-hidden="true" /> : <FiMoon aria-hidden="true" />}
          </button>
          <button
            type="button"
            className="nav__burger"
            aria-label={t(ui.nav.menu)}
            aria-expanded={open}
            onClick={() => setOpen(o => !o)}
          >
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}

function Hero() {
  const lang = useContext(LangContext);
  const t = useT();
  const [unitX, setUnitX] = useState(740);

  const onHeroMove = (e: React.PointerEvent<HTMLElement>) => {
    trackPointer(e);
    const rect = e.currentTarget.getBoundingClientRect();
    const ratio = Math.max(0, Math.min(1, (e.clientX - rect.left) / Math.max(1, rect.width)));
    setUnitX(Math.round(120 + ratio * 880));
  };

  return (
    <section className="hero proof" id="top" onPointerMove={onHeroMove}>
      <div className="container hero__wrap">
        <div className="hero__grid">
          <div className="hero__col" data-reveal style={{ '--i': 0 } as React.CSSProperties}>
            <div className="hero__construct">
              <svg
                className="hero__guides-svg"
                viewBox="0 0 520 180"
                preserveAspectRatio="none"
                aria-hidden="true"
                data-kind="diagram"
              >
                <line x1="0" y1="16" x2="520" y2="16" stroke="currentColor" strokeWidth="1" />
                <line x1="0" y1="52" x2="520" y2="52" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" />
                <line x1="0" y1="158" x2="520" y2="158" stroke="currentColor" strokeWidth="1" />
                <line x1="2" y1="0" x2="2" y2="180" stroke="currentColor" strokeWidth="1" />
                <line x1="518" y1="0" x2="518" y2="180" stroke="currentColor" strokeWidth="1" />
                <text x="510" y="12" textAnchor="end" fontSize="10" fill="currentColor">
                  Cap 700, {unitX}u
                </text>
                <text x="510" y="153" textAnchor="end" fontSize="10" fill="currentColor">
                  Baseline 0
                </text>
              </svg>
              <h1 className="hero__title">
                Asaréel
                <br />
                Dadiouari
              </h1>
            </div>
            <p className="lead hero__lede">
              {t(ui.hero.lede)}
              {lang === 'en' ? ' ' : ''}
              <External href="https://www.uqac.ca">UQAC</External>.
            </p>
            <div className="hero__cta">
              <a href="#projects" className="btn btn--primary crop">
                {t(ui.hero.cta)}
              </a>
              {profile.resume && (
                <External href={profile.resume[lang]} className="btn crop">
                  {t(ui.hero.resume)}
                </External>
              )}
              <div className="hero__socials">
                <External href={profile.github} className="icon-btn" aria-label="GitHub">
                  <FiGithub aria-hidden="true" />
                </External>
                <External href={profile.linkedin} className="icon-btn" aria-label="LinkedIn">
                  <FiLinkedin aria-hidden="true" />
                </External>
                <External href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
                  <FiMail aria-hidden="true" />
                </External>
              </div>
            </div>
          </div>

          <div className="hero__stage" data-reveal style={{ '--i': 1 } as React.CSSProperties}>
            <figure
              className="hero__sheet crop"
              data-slot="hero"
              data-kind="product"
              data-alt="Production interface of PMO 5.0 (autoauditpmo5-0.com)"
            >
              <img
                src="./screens/pmo5-desktop.png"
                width={2880}
                height={1800}
                alt="PMO 5.0 self-audit SaaS platform in production"
                fetchPriority="high"
              />
              <figcaption className="hero__sheet-bar" data-keep>
                <span>Plate 01: PMO 5.0 (autoauditpmo5-0.com)</span>
                <span className="num">16:10, {unitX} units</span>
              </figcaption>
            </figure>
          </div>
        </div>

        <dl className="stats">
          {ui.stats.map((s, i) => (
            <div key={i}>
              <dt className="num">{t(s.value)}</dt>
              <dd>{t(s.label)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const Tags = ({ items }: { items: string[] }) => (
  <div className="tags">
    {items.map(s => (
      <span key={s} className="tag">
        {s}
      </span>
    ))}
  </div>
);

/** Built product sample when no screenshot file is provided. */
function ProjectMedia({ project, index }: { project: Project; index: number }) {
  const [failed, setFailed] = useState(false);
  const slotName = `project-${index}`;

  if (!project.image || failed) {
    const isStocks = project.name.toLowerCase().includes('stock');
    return (
      <div
        className="project__media project__media--specimen"
        data-slot={slotName}
        data-kind="product"
        data-alt={`${project.name} interface specimen`}
      >
        <div className="specimen-ui" data-keep>
          <div className="specimen-ui__head">
            <span>{project.name}</span>
            <span className="num">{isStocks ? 'NYSE / TSX sample feed' : 'Pipeline view, 3 stages'}</span>
          </div>
          {isStocks ? (
            <div className="specimen-ui__body">
              <div className="specimen-ui__metrics">
                <div>
                  <small>Ticker sample</small>
                  <strong className="num">EXM.TO</strong>
                </div>
                <div>
                  <small>RSI (14)</small>
                  <strong className="num">54.2</strong>
                </div>
                <div>
                  <small>Forecast window</small>
                  <strong className="num">30 days</strong>
                </div>
              </div>
              <svg className="specimen-ui__chart" viewBox="0 0 360 110" aria-label="Sample technical analysis chart">
                <line x1="0" y1="25" x2="360" y2="25" stroke="currentColor" strokeOpacity="0.16" />
                <line x1="0" y1="55" x2="360" y2="55" stroke="currentColor" strokeOpacity="0.16" />
                <line x1="0" y1="85" x2="360" y2="85" stroke="currentColor" strokeOpacity="0.16" />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  points="8,82 58,74 108,61 158,68 208,46 258,39 308,28 352,22"
                />
                <text x="8" y="18" fontSize="10" fill="currentColor">
                  Moving average and ML confidence band (sample)
                </text>
              </svg>
            </div>
          ) : (
            <div className="specimen-ui__body">
              <div className="specimen-ui__rows">
                <div className="specimen-ui__row">
                  <strong>Full-Stack Engineer</strong>
                  <span>Example Health Corp</span>
                  <span className="num">Technical interview</span>
                </div>
                <div className="specimen-ui__row">
                  <strong>.NET Platform Developer</strong>
                  <span>Sample Financial Ltd</span>
                  <span className="num">Application sent</span>
                </div>
                <div className="specimen-ui__row">
                  <strong>Angular Lead</strong>
                  <span>North Studio Inc</span>
                  <span className="num">Follow-up scheduled</span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div
      className="project__media"
      data-slot={slotName}
      data-kind="product"
      data-alt={`${project.name} screenshot`}
    >
      <img
        src={project.image}
        width={2880}
        height={1800}
        alt={`${project.name} screenshot`}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

function Featured() {
  const t = useT();

  return (
    <External href={featured.url} className="project project--featured crop" onPointerMove={trackPointer}>
      <div
        className="featured__visual"
        data-slot="pmo-featured"
        data-kind="product"
        data-alt="PMO 5.0 production platform interface"
      >
        <img
          src="./screens/pmo5-desktop.png"
          width={2880}
          height={1800}
          alt="PMO 5.0 production screen"
          loading="lazy"
        />
      </div>
      <div className="project__body">
        <h3>{featured.name}</h3>
        <div className="project__top">
          <span className="badge badge--live">{t(ui.live)}</span>
          <span className="featured__url">{featured.url.replace('https://', '')}</span>
          <FiArrowUpRight className="project__arrow" aria-hidden="true" />
        </div>
        <p>{t(featured.summary)}</p>
        <Tags items={featured.stack} />
      </div>
    </External>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  const t = useT();
  const body = (
    <>
      <ProjectMedia project={project} index={index} />
      <div className="project__body">
        <h3>{project.name}</h3>
        <div className="project__top">
          {project.building ? (
            <span className="badge badge--building">
              <FiTool aria-hidden="true" /> {t(ui.building)}
            </span>
          ) : (
            <span className="num muted">{String(index).padStart(2, '0')}</span>
          )}
          {project.url ? (
            <FiArrowUpRight className="project__arrow" aria-hidden="true" />
          ) : (
            <span className="muted project__soon">{t(ui.soon)}</span>
          )}
        </div>
        <p>{t(project.summary)}</p>
        <Tags items={project.stack} />
      </div>
    </>
  );

  return project.url ? (
    <External href={project.url} className="project crop" onPointerMove={trackPointer}>
      {body}
    </External>
  ) : (
    <div className="project project--static crop" onPointerMove={trackPointer}>
      {body}
    </div>
  );
}

function Projects() {
  const t = useT();

  return (
    <section id="projects" className="section section--projects">
      <div className="container">
        <div className="section-head">
          <h2>{t(ui.sections.projects)}</h2>
        </div>
        <div className="projects">
          <Featured />
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i + 2} />
          ))}
        </div>
        <div className="projects__footer">
          <External href={`${profile.github}?tab=repositories`} className="btn crop">
            <FiGithub aria-hidden="true" /> {t(ui.moreGithub)}
          </External>
        </div>
      </div>
    </section>
  );
}

function Experience() {
  const lang = useContext(LangContext);
  const t = useT();
  const sep = lang === 'fr' ? 'à' : 'to';

  return (
    <section id="work" className="section section--band">
      <div className="container grid-split">
        <div className="section-head">
          <h2>{t(ui.sections.work)}</h2>
        </div>
        <div className="work__content">
          <ol className="timeline set">
            {experience.map(job => (
              <li key={job.id} className={`job ${job.end ? '' : 'job--current'}`}>
                <div className="job__aside">
                  <div className="job__meta num">
                    <span>
                      {formatMonth(job.start, lang)} {sep} {job.end ? formatMonth(job.end, lang) : t(ui.present)}
                    </span>
                    {!job.end && <span className="badge">{t(ui.current)}</span>}
                  </div>
                  <p className="job__org">{t(job.org)}</p>
                  <p className="job__place muted">{t(job.place)}</p>
                </div>
                <div className="job__main">
                  <h3>{t(job.title)}</h3>
                  {job.previous && (
                    <p className="job__prev muted num">
                      {t(ui.previously)} {t(job.previous.title)} ({formatMonth(job.previous.start, lang)} {sep}{' '}
                      {formatMonth(job.previous.end, lang)})
                    </p>
                  )}
                  <ul>
                    {job.points.map((p, i) => (
                      <li key={i}>{t(p)}</li>
                    ))}
                  </ul>
                  <Tags items={job.stack} />
                </div>
              </li>
            ))}
          </ol>

          <div className="edu-block">
            <h3 className="subhead">{t(ui.sections.education)}</h3>
            <ul className="education set">
              {education.map(e => (
                <li key={e.id}>
                  <strong>{t(e.degree)}</strong>
                  <span className="muted">{t(e.school)}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  const lang = useContext(LangContext);
  const t = useT();
  const [first, ...rest] = ui.about;
  const [before, after] = t(first).split('{pron}');

  return (
    <section id="about" className="section section--about">
      <div className="container grid-about">
        <div className="about__text">
          <div className="section-head">
            <h2>{t(ui.sections.about)}</h2>
          </div>
          <div className="prose">
            <p>
              {before}
              <span className="muted">{profile.pronunciation}</span>
              {after}
            </p>
            {rest.map((p, i) => (
              <p key={i}>{t(p)}</p>
            ))}
          </div>
        </div>
        <div className="about__visual">
          <div
            className="about__specimen crop"
            data-slot="about-specimen"
            data-kind="product"
            data-alt="Engineering practice and stack architecture specimen"
          >
            <div className="about__specimen-inner" data-keep>
              <div className="about__specimen-row">
                <span className="num muted">01 / Frontend systems</span>
                <strong>Angular, RxJS, TypeScript, React</strong>
                <span>Component architecture, reactive state, accessible interfaces</span>
              </div>
              <div className="about__specimen-row">
                <span className="num muted">02 / Backend and data</span>
                <strong>.NET 10, ASP.NET Core, WCF, PostgreSQL, SQL Server</strong>
                <span>Enterprise services, QuestPDF generation, schema design</span>
              </div>
              <div className="about__specimen-row">
                <span className="num muted">03 / Operations and security</span>
                <strong>Docker, GitHub Actions, Azure DevOps, Cloudflare</strong>
                <span>Passkeys, two-step verification, xUnit and Vitest suites</span>
              </div>
            </div>
          </div>
          <p className="caption num">
            {lang === 'fr'
              ? 'Planche 02: Architecture logicielle et livraison continue (depuis 2020)'
              : 'Plate 02: Software architecture and continuous delivery (since 2020)'}
          </p>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const t = useT();

  return (
    <section id="skills" className="section section--skills">
      <div className="container">
        <div className="section-head">
          <h2>{t(ui.sections.skills)}</h2>
        </div>
        <dl className="skills">
          {skills.map(s => (
            <div key={s.id} className="skills__card crop">
              <dt>{t(s.group)}</dt>
              <dd>
                {s.items.map(item => (
                  <span key={t(item)} className="tag tag--lg">
                    {t(item)}
                  </span>
                ))}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

function CopyEmail() {
  const t = useT();
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(profile.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      window.open(`mailto:${profile.email}`, '_blank', 'noopener');
    }
  };

  return (
    <button
      type="button"
      className={`btn crop copy-btn ${copied ? 'is-copied' : ''}`}
      onClick={copy}
      aria-live="polite"
    >
      {copied ? <FiCheck aria-hidden="true" /> : <FiCopy aria-hidden="true" />}{' '}
      {t(copied ? ui.contact.copied : ui.contact.copy)}
    </button>
  );
}

/** Local time in Eastern Time for remote teams and recruiters. */
function LocalTime() {
  const lang = useContext(LangContext);
  const t = useT();
  const format = () =>
    new Intl.DateTimeFormat(lang === 'fr' ? 'fr-CA' : 'en-CA', {
      hour: 'numeric',
      minute: '2-digit',
      timeZone: 'America/Toronto',
    }).format(new Date());
  const [time, setTime] = useState(format);

  useEffect(() => {
    setTime(format());
    const id = setInterval(() => setTime(format()), 30_000);
    return () => clearInterval(id);
  }, [lang]);

  return (
    <span className="muted num">
      {time}, {t(ui.timeZone)}
    </span>
  );
}

function Contact() {
  const t = useT();

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__main">
          <h2 className="contact__title">
            {t(ui.contact.title)} {t(ui.contact.accent)}
          </h2>
          <div className="contact__row">
            <External href={`mailto:${profile.email}`} className="contact__email">
              {profile.email}
            </External>
            <CopyEmail />
          </div>
        </div>
        <div className="contact__card crop">
          <div className="contact__links">
            <External href={profile.linkedin}>LinkedIn</External>
            <External href={profile.github}>GitHub</External>
            {profile.resume && <External href={profile.resume.en}>Résumé (EN)</External>}
            {profile.resume && <External href={profile.resume.fr}>CV (FR)</External>}
          </div>
          <div className="contact__meta">
            <LocalTime />
          </div>
        </div>
      </div>
    </section>
  );
}

export default function App() {
  const [theme, toggleTheme] = useTheme();
  const [lang, toggleLang] = useLang();
  const { active, scrolled } = useScrollEffects(lang);

  return (
    <LangContext.Provider value={lang}>
      <div className="progress" aria-hidden="true" />
      <Nav active={active} theme={theme} onToggleTheme={toggleTheme} onToggleLang={toggleLang} />
      <main id="main">
        <Hero />
        <Projects />
        <Experience />
        <About />
        <Skills />
        <Contact />
      </main>
      <footer className="footer proof">
        <div className="container footer__mast">
          <div className="footer__wordmark" aria-hidden="true">
            Asaréel Dadiouari
          </div>
          <div className="footer__inner">
            <span className="num">
              © {new Date().getFullYear()} {profile.name}
            </span>
            <LocalTime />
          </div>
        </div>
      </footer>
      <button
        type="button"
        hidden={!scrolled}
        className="to-top icon-btn"
        aria-label={ui.nav.top[lang]}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FiArrowUp aria-hidden="true" />
      </button>
    </LangContext.Provider>
  );
}
