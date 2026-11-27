import { useState } from 'react'
import Icon from './Icon'
import { socialLinks } from '../data/portfolioData'

const links = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Proyectos', href: '#proyectos' },
  { label: 'Habilidades', href: '#habilidades' },
  { label: 'Asistente', href: '#inspector' },
  { label: 'Contacto', href: '#contacto' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="site-header">
      <a className="brand" href="#inicio" onClick={closeMenu} aria-label="Israel Valerdi, inicio">
        <span className="brand-mark">IV</span>
        <span>Israel <b>Valerdi</b></span>
      </a>
      <nav className={menuOpen ? 'is-open' : ''} aria-label="Navegación principal">
        {links.map((link) => (
          <a href={link.href} onClick={closeMenu} key={link.href}>
            {link.label}
          </a>
        ))}
        <div className="mobile-socials">
          {socialLinks.map((social) => (
            <a key={social.label} href={social.href} aria-label={social.label} onClick={closeMenu}>
              <Icon name={social.icon} size={17} />
            </a>
          ))}
        </div>
      </nav>
      <a className="header-cta" href="#contacto">Hablemos <Icon name="arrowUpRight" size={16} /></a>
      <button
        className="mobile-menu"
        type="button"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={menuOpen}
      >
        <Icon name={menuOpen ? 'x' : 'menu'} />
      </button>
    </header>
  )
}
