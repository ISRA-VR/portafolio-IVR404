import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { profile, socialLinks } from '../data/portfolioData'

export default function ContactSection() {
  return (
    <section className="contact section-frame" id="contacto">
      <div className="contact-copy">
        <SectionHeading eyebrow="05 / Contacto" title={<>Contáctame y <span>trabajemos juntos.</span></>} />
        <p>¿Tienes una idea, un reto o una oportunidad? Estoy listo para escucharla y convertirla en el siguiente proyecto.</p>
        <a className="button button-primary" href={`mailto:${profile.email}`}>Escríbeme por Gmail <Icon name="arrowUpRight" size={17} /></a>
      </div>
      <div className="social-grid">
        {socialLinks.map((social) => (
          <a className="social-card" href={social.href} target={social.href.startsWith('http') ? '_blank' : undefined} rel={social.href.startsWith('http') ? 'noreferrer' : undefined} key={social.label}>
            <span className="social-icon"><Icon name={social.icon} size={19} /></span>
            <span><b>{social.label}</b><small>{social.handle}</small></span>
            <Icon name="arrowUpRight" size={16} />
          </a>
        ))}
      </div>
    </section>
  )
}
