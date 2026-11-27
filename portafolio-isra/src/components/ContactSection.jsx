import { useState } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { profile, socialLinks } from '../data/portfolioData'

export default function ContactSection() {
  const [formStatus, setFormStatus] = useState('')
  const [isSending, setIsSending] = useState(false)

  const handleSubmit = async (event) => {
    event.preventDefault()
    if (isSending) return

    const form = event.currentTarget
    const formData = new FormData(form)
    const senderEmail = String(formData.get('email'))
    const payload = {
      name: String(formData.get('name')),
      email: senderEmail,
      message: String(formData.get('message')),
      _replyto: senderEmail,
      _subject: 'Nuevo mensaje desde el portafolio de Israel',
    }

    setIsSending(true)
    setFormStatus('Enviando mensaje...')

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${profile.email}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
      })
      const result = await response.json()

      if (!response.ok || (result.success !== true && result.success !== 'true')) {
        throw new Error(result.message || 'El servicio rechazó el envío.')
      }

      form.reset()
      setFormStatus('Mensaje enviado. Gracias por escribirme.')
    } catch (error) {
      console.error('No se pudo enviar el formulario de contacto.', error)
      setFormStatus(error instanceof Error
        ? `No se pudo enviar el mensaje: ${error.message}`
        : 'No se pudo enviar el mensaje. Inténtalo de nuevo más tarde.')
    } finally {
      setIsSending(false)
    }
  }

  return (
    <section className="contact section-frame" id="contacto">
      <div className="contact-copy">
        <SectionHeading eyebrow="07 / Contacto" title={<>Contáctame y <span>trabajemos juntos.</span></>} />
        <p>¿Tienes una idea, un reto o una oportunidad? Escríbeme para conversar.</p>
        <a className="button button-primary" href={`mailto:${profile.email}`}>Escríbeme por Gmail <Icon name="arrowUpRight" size={17} /></a>
      </div>
      <form
        className="contact-form"
        action={`https://formsubmit.co/${profile.email}`}
        method="POST"
        onSubmit={handleSubmit}
        aria-busy={isSending}
      >
        <input type="hidden" name="_subject" value="Nuevo mensaje desde el portafolio de Israel" />
        <label htmlFor="contact-name">Nombre</label>
        <input id="contact-name" name="name" type="text" autoComplete="name" required maxLength={100} />
        <label htmlFor="contact-email">Correo electrónico</label>
        <input id="contact-email" name="email" type="email" autoComplete="email" required maxLength={254} />
        <label htmlFor="contact-message">Mensaje</label>
        <textarea id="contact-message" name="message" rows={5} required maxLength={2000} />
        <button className="button button-primary" type="submit" disabled={isSending}>
          {isSending ? 'Enviando...' : 'Enviar mensaje'} <Icon name="arrowUpRight" size={17} />
        </button>
        <p className="contact-form-note">Los datos se envían de forma segura y se procesan automáticamente.</p>
        <p className="contact-form-note" role="status" aria-live="polite">{formStatus}</p>
      </form>
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
