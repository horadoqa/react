import {
  FaGithub,
  FaDiscord,
  FaYoutube,
  FaBookOpen,
  FaGlobe,
  FaUsers,
} from 'react-icons/fa'

import HoraImg from './assets/logo.png'
import './App.css'

const documentationLinks = [
  {
    href: 'https://horadoqa.com.br',
    label: 'Hora do QA',
    description: 'Conteúdos sobre Qualidade de Software',
    icon: FaGlobe,
  },
  {
    href: 'https://horadoqa.github.io/qualidade-software/',
    label: 'Qualidade de Software',
    description: 'Documentação e materiais de estudo',
    icon: FaBookOpen,
  },
]

const socialLinks = [
  {
    href: 'https://github.com/horadoqa',
    label: 'GitHub',
    icon: FaGithub,
  },
  {
    href: 'https://discord.com/invite/8h2HHdKPe5',
    label: 'Discord',
    icon: FaDiscord,
  },
  {
    href: 'https://www.youtube.com/@horadoqa',
    label: 'YouTube',
    icon: FaYoutube,
  },
]

function Icon({ name, className = 'button-icon' }) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <use href={`/icons.svg#${name}`} />
    </svg>
  )
}

function LinkList({ links }) {
  return (
    <ul className="link-list">
      {links.map((link) => {
        const Icon = link.icon

        return (
          <li key={link.href}>
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="link-card"
            >
              <Icon
                className="social-icon"
                aria-hidden="true"
              />

              <span>
                <strong>{link.label}</strong>

                {link.description && (
                  <small>{link.description}</small>
                )}
              </span>

              <span className="arrow" aria-hidden="true">
                →
              </span>
            </a>
          </li>
        )
      })}
    </ul>
  )
}

function App() {
  return (
    <main className="page">
      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-logo">
          <img
            src={HoraImg}
            width="170"
            height="179"
            alt="Logo Hora do QA"
          />
        </div>

        <div className="hero-content">
          <span className="eyebrow">Comunidade de QA</span>

          <h1 id="hero-title">Hora do QA</h1>

          <p>
            Tudo o que você precisa conhecer sobre{' '}
            <strong>Qualidade de Software</strong>.
          </p>
        </div>
      </section>

      <div className="ticks" aria-hidden="true" />

      <section className="resources" aria-label="Recursos e comunidade">
        <article className="resource-card">
          <div className="resource-icon">
            <Icon
              name="documentation-icon"
              className="icon"
            />
          </div>

          <div className="resource-content">
            <h2>Documentação</h2>
            <p>
              Aprenda, consulte e aprofunde seus conhecimentos
              em Qualidade de Software.
            </p>

            <LinkList
              links={documentationLinks}
              type="documentation"
            />
          </div>
        </article>

        <article className="resource-card">
          <div className="resource-icon">
            <Icon
              name="social-icon"
              className="icon"
            />
          </div>

          <div className="resource-content">
            <h2>Comunidade</h2>
            <p>
              Conecte-se com outros profissionais e faça parte
              da nossa comunidade.
            </p>

            <LinkList links={socialLinks} type="social" />
          </div>
        </article>
      </section>

      <div className="ticks" aria-hidden="true" />

      <footer className="footer">
        <img
          src={HoraImg}
          width="42"
          height="44"
          alt=""
        />

        <span>
          Hora do QA · Qualidade de Software
        </span>
      </footer>
    </main>
  )
}

export default App