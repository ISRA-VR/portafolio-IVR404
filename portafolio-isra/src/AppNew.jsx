import Icon from './components/Icon'
import Navbar from './components/Navbar'
import SkillsMatrix from './components/SkillsMatrix'
import ProjectsSection from './components/ProjectsSection'
import DevInspector from './components/DevInspector'
import ContactSection from './components/ContactSection'
import { profile } from './data/portfolioData'
import './AppNew.css'
import './AppFeatures.css'

function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <main>
        <section className="hero section-frame" id="inicio">
          <div className="hero-copy">
            <div className="availability"><span className="pulse" /> Desarrollador en formación</div>
            <h1>Hola, soy<br />Israel <span>Valerdi.</span></h1>
            <p className="hero-role">Desarrollador Full-Stack en transición a Cloud / DevOps</p>
            <p className="hero-lead">Aquí comparto quién soy, lo que sé hacer y hacia dónde quiero crecer.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sobre-mi">Conoce mi perfil <Icon name="arrowRight" size={17} /></a>
              <a className="text-link" href="#habilidades">Explorar mis habilidades <Icon name="arrowDown" size={16} /></a>
            </div>
            <div className="hero-tags"><span>MX Puebla</span><span>Base de datos</span><span>Cloud</span><span>AWS</span><span>IA</span><span>SEO</span><span>...</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={profile.photoUrl} alt="Foto profesional de Israel Valerdi" />
              <span className="portrait-label"><i /> Foto Profesional</span>
            </div>
            <div className="portrait-note"><span className="badge-icon"><Icon name="sparkles" size={17} /></span><span><small>Mi enfoque</small><b>Aprender haciendolo</b></span></div>
          </div>
        </section>

        <section className="intro section-frame" id="sobre-mi">
          <div className="intro-label"><span className="eyebrow">01 / Mi perfil</span><span className="line" /></div>
          <div className="intro-copy">
            <h2>Lo que hago y <span>lo que me mueve.</span></h2>
            <p>{profile.bio}</p>
            <a className="text-link" href="#lo-que-busco">Conoce mis metas <Icon name="arrowRight" size={16} /></a>
          </div>
        </section>

        <section className="cv-highlights section-frame" id="lo-que-busco" aria-label="Mi enfoque y metas profesionales">
          <article className="cv-highlight">
            <span className="eyebrow">Lo que hago</span>
            <h2>Construyo soluciones digitales.</h2>
            <p>Desarrollo aplicaciones web, sistemas administrativos y sitios, cuidando tanto la experiencia de las personas como el funcionamiento de cada parte.</p>
          </article>
          <article className="cv-highlight">
            <span className="eyebrow">Lo que propongo</span>
            <h2>Entender antes de implementar.</h2>
            <p>Escuchar los requisitos, aclarar el problema y proponer soluciones útiles, adaptables y fáciles de mantener.</p>
          </article>
          <article className="cv-highlight">
            <span className="eyebrow">Mis metas</span>
            <h2>Desarrollador Web Full-Stack & Especialista en Soluciones Digitales</h2>
            <p>Seguir fortaleciendo frontend, backend, bases de datos y despliegue, y aplicar ese aprendizaje en proyectos reales.</p>
          </article>
        </section>

        <SkillsMatrix />
        <ProjectsSection />

        <DevInspector />
        <ContactSection />
      </main>
      <footer className="site-footer section-frame"><span>© 2026 Israel Valerdi Román </span><a href="#inicio">Volver arriba ↑</a></footer>
    </div>
  )
}

export default App
