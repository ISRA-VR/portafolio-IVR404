import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { profile, projects, skillAreas, socialLinks } from '../data/portfolioData'

const suggestedQuestions = [
  '¿Quién es Israel?',
  '¿Qué servicios ofrece?',
  '¿Qué proyectos ha desarrollado?',
  '¿Qué tecnologías usa para frontend?',
  '¿Qué tecnologías usa para backend?',
  '¿Cómo trabaja con APIs y bases de datos?',
  '¿Qué nivel tiene en cada habilidad?',
  '¿Qué tecnologías usó en Zapatería?',
  '¿Cuáles son sus metas profesionales?',
  '¿Cómo puedo contactarlo?',
]

const normalizeText = (text) => text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '')
const describeSkills = (area) => area.items
  .map((item) => `${item.name} (${item.level}; proyecto: ${item.project})`)
  .join(', ')

function describeProject(project) {
  return `${project.title}\n${project.description}\nMi aportación: ${project.contribution}.\nEquipo: ${project.teamContribution}.\nStack: ${project.stack.join(', ')}.\nArquitectura: ${project.architecture}\nDecisiones: ${project.decisions}`
}

function getAgentResponse(question) {
  const query = normalizeText(question)
  const selectedProject = projects.find((project) => {
    const title = normalizeText(project.title)
    if (title.includes('math') && /(math|matematic|juego|nino)/.test(query)) return true
    if (title.includes('nova') && /(nova|tienda|ecommerce|e-commerce|catalogo)/.test(query)) return true
    if (title.includes('zapateria') && /(zapateria|inventario|pos|stock|ventas)/.test(query)) return true
    if (title.includes('gym') && /(gym|gimnasio|fit partner|entrenamiento)/.test(query)) return true
    return false
  })

  if (selectedProject) return describeProject(selectedProject)

  if (/(solucion|que hace|construye|tipo de trabajo|que desarrolla)/.test(query)) {
    return 'Israel ha trabajado en proyectos de sitios y aplicaciones web, tiendas en línea y sistemas de gestión. Consulta la sección de servicios para ver qué ofrece como freelance.'
  }

  if (/(servicio|freelance|precio|costo|cotizacion)/.test(query)) {
    return 'Ofrece sitios web responsivos, interfaces para tiendas en línea y sistemas administrativos para emprendedores y pequeños negocios. El precio es a convenir.'
  }

  if (/(quien|perfil|sobre israel|acerca|a que se dedica|profesion\b|ocupacion|que rol|full.?stack)/.test(query)) {
    return `${profile.name} (${profile.username}) es desarrollador de software en formación. ${profile.bio}`
  }

  if (/(experiencia laboral|anos de experiencia|tiempo de experiencia|empleos anteriores)/.test(query)) {
    return 'El portafolio no especifica años de experiencia laboral ni empleos anteriores. Sí presenta proyectos, responsabilidades, tecnologías y decisiones técnicas para conocer su trabajo.'
  }

  if (/(proyecto|trabajo|portafolio|portfolio)/.test(query)) {
    return `Estos son algunos proyectos de su portafolio:\n${projects.map((project) => `• ${project.title}: ${project.description}`).join('\n')}\nPuedes preguntarme por cualquiera para ver su rol, stack y arquitectura.`
  }

  if (/(api|endpoint)/.test(query) && /(bases? de datos|database|mysql|postgres|tidb|sqlite|crud)/.test(query)) {
    const api = skillAreas.find((area) => area.title === 'APIs')
    const database = skillAreas.find((area) => area.title === 'Bases de datos')
    return `APIs: ${api ? describeSkills(api) : 'sin datos disponibles'}. Bases de datos: ${database ? describeSkills(database) : 'sin datos disponibles'}.`
  }

  if (/(arquitect|estructura|decisiones tecnicas|como esta hecho|como esta hecha|como se construyo)/.test(query)) {
    return `La arquitectura depende del proyecto:\n${projects.map((project) => `• ${project.title}: ${project.architecture}`).join('\n')}\nPregunta por un proyecto específico para conocer también sus decisiones técnicas.`
  }

  if (/(meta|objetivo|futuro|crecer|aspiracion|especializar)/.test(query)) {
    return 'Su meta profesional es desarrollarse como programador Full-Stack y especialista en soluciones digitales, seguir fortaleciendo frontend, backend y bases de datos, y aplicar ese aprendizaje en proyectos reales.'
  }

  if (/(contact|correo|email|whatsapp|contrat|hablar|vacante|oportunidad|empleo|colaborar)/.test(query)) {
    const whatsapp = socialLinks.find((social) => social.label === 'WhatsApp')
    return `El perfil está orientado al desarrollo web y a la creación de soluciones digitales. Para conversar sobre una oportunidad o colaboración, puedes escribir a ${profile.email}${whatsapp ? ` o contactarlo por WhatsApp: ${whatsapp.href}` : ''}.`
  }

  if (/(metod|proceso|como trabaja|forma de trabajar|requisitos|propuesta|adapt)/.test(query)) {
    return 'Su enfoque es entender primero los requisitos de cada usuario y adaptarse a ellos. Propone soluciones prácticas, pensadas para optimizar procesos, conectar mejor con las personas y combinar experiencia de usuario con una implementación mantenible.'
  }

  if (/(ia|inteligencia artificial|agente|automatiz)/.test(query)) {
    return 'El portafolio no documenta proyectos ni experiencia de Israel con inteligencia artificial.'
  }

  if (/(seo|analitica|analytics|tag manager|wordpress|migracion)/.test(query)) {
    return 'El portafolio no documenta experiencia o proyectos relacionados con SEO, analítica, Tag Manager, WordPress ni migraciones.'
  }

  if (/(seguridad|autenticacion|jwt|validacion)/.test(query)) {
    const security = skillAreas.find((area) => area.items.some((item) => item.name === 'JWT'))
    return security ? `Seguridad: ${describeSkills({ items: security.items.filter((item) => item.name === 'JWT') })}.` : 'El portafolio no detalla experiencia en seguridad.'
  }

  if (/(bases? de datos|database|mysql|postgres|tidb|sqlite|crud|modelo relacional)/.test(query)) {
    const database = skillAreas.find((area) => area.title === 'Bases de datos')
    return `Tecnologías de bases de datos: ${database ? describeSkills(database) : 'sin datos disponibles'}.`
  }

  if (/(api|endpoint|integracion)/.test(query)) {
    const api = skillAreas.find((area) => area.title === 'APIs')
    return `Sus proyectos incluyen ${api ? describeSkills(api) : 'APIs REST'}.`
  }

  if (/(frontend|front end|interfaz|javascript|react|vue|css|html)/.test(query)) {
    const frontend = skillAreas.find((area) => area.title === 'Frontend')
    return `Frontend: ${frontend ? describeSkills(frontend) : 'sin datos disponibles'}.`
  }

  if (/(backend|back end|servidor|python|node|php|laravel|express)/.test(query)) {
    const backend = skillAreas.find((area) => area.title === 'Backend')
    return `Backend: ${backend ? describeSkills(backend) : 'sin datos disponibles'}.`
  }

  if (/(tecnologia|habilidad|stack|lenguaje|herramienta)/.test(query)) {
    return `Tecnologías registradas:\n${skillAreas.map((area) => `• ${area.title}: ${describeSkills(area)}`).join('\n')}`
  }

  return 'Puedo responder preguntas sobre su perfil, proyectos, habilidades y contacto. Por ejemplo: “¿Qué tecnologías usa para backend?” o “¿Cómo está hecha la zapatería?”'
}

export default function DevInspector() {
  const [question, setQuestion] = useState('')
  const [messages, setMessages] = useState([
    { id: 0, role: 'agent', text: '¡Hola! Soy el asistente del portafolio de Israel. Pregúntame por su perfil, proyectos, habilidades o metas.' },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [voiceStatus, setVoiceStatus] = useState('')
  const messageListRef = useRef(null)
  const timeoutRef = useRef(null)
  const nextIdRef = useRef(1)

  useEffect(() => {
    const messageList = messageListRef.current
    if (messageList) messageList.scrollTop = messageList.scrollHeight
  }, [messages, isTyping])

  useEffect(() => () => {
    window.clearTimeout(timeoutRef.current)
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
  }, [])

  const askAgent = (text) => {
    const prompt = text.trim()
    if (!prompt || isTyping) return

    const userMessage = { id: nextIdRef.current++, role: 'user', text: prompt }
    setMessages((current) => [...current, userMessage])
    setQuestion('')
    setIsTyping(true)
    timeoutRef.current = window.setTimeout(() => {
      const answer = { id: nextIdRef.current++, role: 'agent', text: getAgentResponse(prompt) }
      setMessages((current) => [...current, answer])
      setIsTyping(false)
    }, 850)
  }

  const speakLatestAnswer = () => {
    if (!('speechSynthesis' in window) || !('SpeechSynthesisUtterance' in window)) {
      setVoiceStatus('La lectura en voz alta no está disponible en este navegador.')
      return
    }

    if (isSpeaking) {
      window.speechSynthesis.cancel()
      setIsSpeaking(false)
      setVoiceStatus('Lectura detenida')
      return
    }

    const latestAnswer = messages.slice().reverse().find((message) => message.role === 'agent')
    if (!latestAnswer) return

    const utterance = new SpeechSynthesisUtterance(latestAnswer.text)
    utterance.lang = 'es-MX'
    utterance.onend = () => setIsSpeaking(false)
    utterance.onerror = (event) => {
      setIsSpeaking(false)
      if (event.error !== 'canceled' && event.error !== 'interrupted') {
        console.error('No se pudo reproducir la respuesta en voz alta.', event.error)
        setVoiceStatus('No se pudo reproducir la respuesta.')
      }
    }

    window.speechSynthesis.cancel()
    window.speechSynthesis.speak(utterance)
    setIsSpeaking(true)
    setVoiceStatus('Reproduciendo respuesta')
  }

  const clearChat = () => {
    window.clearTimeout(timeoutRef.current)
    if ('speechSynthesis' in window) window.speechSynthesis.cancel()
    setIsTyping(false)
    setIsSpeaking(false)
    setVoiceStatus('')
    setQuestion('')
    setMessages([
      { id: 0, role: 'agent', text: '¡Hola! Soy el asistente del portafolio de Israel. Pregúntame por su perfil, proyectos, habilidades o metas.' },
    ])
    nextIdRef.current = 1
  }

  return (
    <section className="inspector section-frame" id="inspector">
      <SectionHeading
        eyebrow="06 / Conoce a Israel"
        title={<>Asistente del <span>portafolio.</span></>}
        copy="Una forma rápida e interactiva de conocer mi perfil, lo que hago y los proyectos que he desarrollado."
      />
      <div className="inspector-panel agent-panel">
        <div className="agent-header">
          <div className="agent-avatar"><Icon name="sparkles" size={18} /></div>
          <div className="agent-identity">
            <strong>Isra <span>· Portfolio Agent</span></strong>
            <small><i /> Asistente disponible</small>
          </div>
          <div className="agent-header-actions">
            <span className="agent-badge">PERFIL IA</span>
            <button type="button" className="agent-clear-button" onClick={clearChat} aria-label="Limpiar chat" title="Limpiar chat">
              <Icon name="trash" size={15} /><span>Limpiar chat</span>
            </button>
          </div>
        </div>

        <div className="agent-conversation">
          <div className="agent-messages" ref={messageListRef} aria-live="polite" aria-label="Conversación con el asistente">
            {messages.map((message) => (
              <article className={`agent-message ${message.role === 'user' ? 'from-user' : 'from-agent'}`} key={message.id}>
                {message.role === 'agent' && <span className="message-avatar"><Icon name="sparkles" size={13} /></span>}
                <p>{message.text}</p>
              </article>
            ))}
            {isTyping && (
              <div className="agent-message from-agent" role="status" aria-label="El asistente está preparando una respuesta">
                <span className="message-avatar"><Icon name="sparkles" size={13} /></span>
                <div className="agent-typing"><span /><span /><span /></div>
                <small>Preparando respuesta</small>
              </div>
            )}
          </div>

          <div className="agent-suggestions" aria-label="Preguntas sugeridas">
            {suggestedQuestions.map((suggestion) => (
              <button type="button" key={suggestion} disabled={isTyping} onClick={() => askAgent(suggestion)}>
                {suggestion}
              </button>
            ))}
          </div>

          <form className="agent-compose" onSubmit={(event) => { event.preventDefault(); askAgent(question) }}>
            <textarea
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={(event) => {
                if (event.key === 'Enter' && !event.shiftKey) {
                  event.preventDefault()
                  askAgent(question)
                }
              }}
              placeholder="Pregunta sobre proyectos, tecnologías, experiencia, metas profesionales..."
              aria-label="Escribe una pregunta"
              autoComplete="off"
              rows={2}
              maxLength={500}
              disabled={isTyping}
            />
            <div className="agent-compose-actions">
              <button
                type="button"
                className={`agent-voice-button${isSpeaking ? ' is-speaking' : ''}`}
                onClick={speakLatestAnswer}
                disabled={isTyping}
                aria-label={isSpeaking ? 'Detener lectura en voz alta' : 'Escuchar última respuesta en voz alta'}
                title={isSpeaking ? 'Detener lectura' : 'Escuchar respuesta'}
              >
                <Icon name={isSpeaking ? 'volumeOff' : 'volume'} size={17} />
              </button>
              <button type="submit" disabled={!question.trim() || isTyping} aria-label="Enviar pregunta">
                {isTyping ? <span className="agent-spinner" /> : <Icon name="arrowRight" size={17} />}
              </button>
            </div>
          </form>
          <p className="agent-disclaimer" aria-live="polite">{voiceStatus || 'Asistente informativo · Respuestas basadas en este portafolio'}</p>
        </div>

        <div className="inspector-footer">
          <span><i /> Perfil y proyectos disponibles</span>
        </div>
      </div>
    </section>
  )
}
