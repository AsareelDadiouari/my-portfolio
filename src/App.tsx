import { createContext, useContext, useEffect, useState } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { FiArrowUp, FiArrowUpRight, FiCheck, FiCopy, FiMail, FiMoon, FiSun, FiTool } from 'react-icons/fi';
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

const sectionIds = ['about', 'work', 'projects', 'skills', 'contact'] as const;

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
    const stored = document.documentElement.dataset.theme as Theme | undefined;
    if (stored) return stored;
    return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
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

  // Re-run on language change so any freshly rendered elements get revealed too.
  useEffect(() => {
    const reveal = new IntersectionObserver(
      entries =>
        entries.forEach(e => {
          if (e.isIntersecting) {
            e.target.classList.add('is-visible');
            reveal.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal:not(.is-visible)').forEach(el => reveal.observe(el));
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

function Nav(props: { active: string; theme: Theme; onToggleTheme: () => void; onToggleLang: () => void }) {
  const { active, theme, onToggleTheme, onToggleLang } = props;
  const lang = useContext(LangContext);
  const t = useT();
  const [open, setOpen] = useState(false);

  return (
    <header className={`nav ${open ? 'nav--open' : ''}`}>
      <div className="nav__inner">
        <a href="#top" className="nav__logo" aria-label={t(ui.nav.top)} onClick={() => setOpen(false)}>
          AD<span>.</span>
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
          <button className="lang-btn" onClick={onToggleLang} aria-label={t(ui.nav.otherLang)} title={t(ui.nav.otherLang)}>
            <span className={lang === 'en' ? 'is-on' : undefined}>EN</span>
            <span className={lang === 'fr' ? 'is-on' : undefined}>FR</span>
          </button>
          <button
            className="icon-btn"
            onClick={onToggleTheme}
            aria-label={t(theme === 'dark' ? ui.nav.toLight : ui.nav.toDark)}
          >
            {theme === 'dark' ? <FiSun /> : <FiMoon />}
          </button>
          <button
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

  return (
    <section className="hero" id="top">
      <div className="container">
        <p className="eyebrow reveal">
          <span className="dot" /> {t(ui.hero.role)} · Angular · .NET · PostgreSQL
        </p>
        <h1 className="hero__title reveal">
          Asaréel
          <br />
          <em>Dadiouari</em>
        </h1>
        <p className="hero__lede reveal">
          {t(ui.hero.lede)}
          {lang === 'en' ? ' ' : ''}
          <External href="https://www.uqac.ca">UQAC</External>.
        </p>
        <div className="hero__cta reveal">
          <a href="#projects" className="btn btn--primary">
            {t(ui.hero.cta)}
          </a>
          {profile.resume && (
            <External href={profile.resume[lang]} className="btn">
              {t(ui.hero.resume)} <FiArrowUpRight />
            </External>
          )}
          <div className="hero__socials">
            <External href={profile.github} className="icon-btn" aria-label="GitHub">
              <FaGithub />
            </External>
            <External href={profile.linkedin} className="icon-btn" aria-label="LinkedIn">
              <FaLinkedinIn />
            </External>
            <External href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
              <FiMail />
            </External>
          </div>
        </div>
        <dl className="stats reveal">
          {ui.stats.map((s, i) => (
            <div key={i}>
              <dt>{t(s.value)}</dt>
              <dd>{t(s.label)}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}

const SectionHead = ({ index, title }: { index: string; title: string }) => (
  <div className="section-head reveal">
    <span className="section-head__index">{index}</span>
    <h2>{title}</h2>
  </div>
);

function About() {
  const t = useT();
  const [first, ...rest] = ui.about;
  const [before, after] = t(first).split('{pron}');

  return (
    <section id="about" className="section">
      <div className="container grid-2">
        <SectionHead index="01" title={t(ui.sections.about)} />
        <div className="prose reveal">
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
    </section>
  );
}

function Experience() {
  const lang = useContext(LangContext);
  const t = useT();

  return (
    <section id="work" className="section">
      <div className="container grid-2">
        <SectionHead index="02" title={t(ui.sections.work)} />
        <div>
          <ol className="timeline">
            {experience.map(job => (
              <li key={job.id} className={`job reveal ${job.end ? '' : 'job--current'}`}>
                <div className="job__meta mono">
                  <span>
                    {formatMonth(job.start, lang)} — {job.end ? formatMonth(job.end, lang) : t(ui.present)}
                  </span>
                  {!job.end && <span className="badge">{t(ui.current)}</span>}
                </div>
                <h3>{t(job.title)}</h3>
                <p className="job__org">
                  {t(job.org)} <span className="muted">· {t(job.place)}</span>
                </p>
                {job.previous && (
                  <p className="job__prev mono muted">
                    {t(ui.previously)} {t(job.previous.title)} · {formatMonth(job.previous.start, lang)} —{' '}
                    {formatMonth(job.previous.end, lang)}
                  </p>
                )}
                <ul>
                  {job.points.map((p, i) => (
                    <li key={i}>{t(p)}</li>
                  ))}
                </ul>
                <div className="tags">
                  {job.stack.map(s => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ol>

          <h3 className="subhead reveal">{t(ui.sections.education)}</h3>
          <ul className="education">
            {education.map(e => (
              <li key={e.id} className="reveal">
                <strong>{t(e.degree)}</strong>
                <span className="muted">{t(e.school)}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Remote screenshots can disappear or block hotlinking — fall back to a styled title card. */
function ProjectMedia({ project }: { project: Project }) {
  const [failed, setFailed] = useState(false);

  if (!project.image || failed) {
    return (
      <div
        className={`project__media project__media--fallback ${project.building ? 'project__media--building' : ''}`}
        aria-hidden="true"
      >
        <span>{project.name}</span>
      </div>
    );
  }

  return (
    <div className="project__media">
      <img
        src={project.image}
        alt={`${project.name} screenshot`}
        loading="lazy"
        referrerPolicy="no-referrer"
        onError={() => setFailed(true)}
      />
    </div>
  );
}

/** Feeds the cursor position to CSS for the card spotlight effect. */
const trackPointer = (e: React.PointerEvent<HTMLElement>) => {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty('--x', `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty('--y', `${e.clientY - rect.top}px`);
};

const Tags = ({ items }: { items: string[] }) => (
  <div className="tags">
    {items.map(s => (
      <span key={s} className="tag">
        {s}
      </span>
    ))}
  </div>
);

function Featured() {
  const t = useT();

  return (
    <External href={featured.url} className="project project--featured reveal" onPointerMove={trackPointer}>
      <div className="featured__visual" aria-hidden="true">
        <span className="featured__url mono">{featured.url.replace('https://', '')}</span>
        <span className="featured__name">{featured.name}</span>
      </div>
      <div className="project__body">
        <div className="project__top">
          <span className="badge badge--live">
            <span className="dot" /> {t(ui.live)}
          </span>
          <FiArrowUpRight className="project__arrow" />
        </div>
        <h3>{featured.name}</h3>
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
      <ProjectMedia project={project} />
      <div className="project__body">
        <div className="project__top">
          {project.building ? (
            <span className="badge badge--building">
              <FiTool /> {t(ui.building)}
            </span>
          ) : (
            <span className="mono muted">{String(index).padStart(2, '0')}</span>
          )}
          {project.url ? (
            <FiArrowUpRight className="project__arrow" />
          ) : (
            <span className="mono muted project__soon">{t(ui.soon)}</span>
          )}
        </div>
        <h3>{project.name}</h3>
        <p>{t(project.summary)}</p>
        <Tags items={project.stack} />
      </div>
    </>
  );

  return project.url ? (
    <External href={project.url} className="project reveal" onPointerMove={trackPointer}>
      {body}
    </External>
  ) : (
    <div className="project project--static reveal" onPointerMove={trackPointer}>
      {body}
    </div>
  );
}

function Projects() {
  const t = useT();

  return (
    <section id="projects" className="section">
      <div className="container">
        <SectionHead index="03" title={t(ui.sections.projects)} />
        <div className="projects">
          <Featured />
          {projects.map((p, i) => (
            <ProjectCard key={p.name} project={p} index={i + 2} />
          ))}
        </div>
        <div className="center reveal">
          <External href={`${profile.github}?tab=repositories`} className="btn">
            <FaGithub /> {t(ui.moreGithub)}
          </External>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const t = useT();

  return (
    <section id="skills" className="section">
      <div className="container grid-2">
        <SectionHead index="04" title={t(ui.sections.skills)} />
        <dl className="skills">
          {skills.map(s => (
            <div key={s.id} className="skills__row reveal">
              <dt className="mono">{t(s.group)}</dt>
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
    <button className={`copy-btn ${copied ? 'is-copied' : ''}`} onClick={copy} aria-live="polite">
      {copied ? <FiCheck /> : <FiCopy />} {t(copied ? ui.contact.copied : ui.contact.copy)}
    </button>
  );
}

/** "3:42 PM · Eastern Time" — a small human touch for remote recruiters. */
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
    <span className="muted">
      {time} · {t(ui.timeZone)}
    </span>
  );
}

function Contact() {
  const t = useT();

  return (
    <section id="contact" className="section contact">
      <div className="container">
        <span className="section-head__index reveal">05 — {t(ui.sections.contact)}</span>
        <h2 className="contact__title reveal">
          {t(ui.contact.title)} <em>{t(ui.contact.accent)}</em>
        </h2>
        <div className="contact__row reveal">
          <External href={`mailto:${profile.email}`} className="contact__email">
            {profile.email} <FiArrowUpRight />
          </External>
          <CopyEmail />
        </div>
        <div className="contact__links reveal">
          <External href={profile.linkedin}>LinkedIn</External>
          <External href={profile.github}>GitHub</External>
          {profile.resume && <External href={profile.resume.en}>Résumé (EN)</External>}
          {profile.resume && <External href={profile.resume.fr}>CV (FR)</External>}
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
      <main>
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Skills />
        <Contact />
      </main>
      <footer className="footer">
        <div className="container footer__inner">
          <span>
            © {new Date().getFullYear()} {profile.name}
          </span>
          <LocalTime />
        </div>
      </footer>
      <button
        className={`to-top icon-btn ${scrolled ? 'is-shown' : ''}`}
        aria-label={ui.nav.top[lang]}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        <FiArrowUp />
      </button>
    </LangContext.Provider>
  );
}
