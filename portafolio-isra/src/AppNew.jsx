import Icon from './components/Icon'
import Navbar from './components/Navbar'
import SkillsMatrix from './components/SkillsMatrix'
import ProjectsSection from './components/ProjectsSection'
import DevInspector from './components/DevInspector'
import ContactSection from './components/ContactSection'
import { profile } from './data/portfolioData'
import cvFileUrl from './assets/CV_Israel_Valerdi.pdf?url'
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
            <p className="hero-role">Desarrollador web Full-Stack Jr.</p>
            <p className="hero-lead">Aquí comparto quién soy, lo que sé hacer y hacia dónde quiero crecer.</p>
            <p className="hero-goal">Busco empleo junior, prácticas o freelance en desarrollo web.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#sobre-mi">Conoce mi perfil <Icon name="arrowRight" size={17} /></a>
              <a className="button button-secondary" href={cvFileUrl} download="CV_Israel_Valerdi.pdf">Descargar CV <Icon name="arrowDown" size={16} /></a>
              <a className="text-link" href="#habilidades">Explorar mis habilidades <Icon name="arrowDown" size={16} /></a>
            </div>
            <div className="hero-tags"><span>Puebla, México</span><span>Desarrollo web</span><span>React</span><span>Node.js</span></div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={profile.photoUrl} alt="Foto profesional de Israel Valerdi" />
              <span className="portrait-label"><i /> Foto Profesional</span>
            </div>
            <div className="portrait-note"><span className="badge-icon"><Icon name="sparkles" size={17} /></span><span><small>Mi enfoque</small><b>Aprender haciéndolo</b></span></div>
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

        <section className="education section-frame" id="educacion">
          <div className="section-heading">
            <span className="eyebrow">02 / Educación</span>
            <h2>Formación <span>profesional.</span></h2>
          </div>
          <article className="education-card">
            <span className="education-mark"><Icon name="layers" size={20} /></span>
            <div>
              <span className="eyebrow">En curso</span>
              <h3>Ingeniería en Desarrollo de Software Multiplataforma</h3>
              <p>Universidad Tecnológica de Tecamachalco</p>
              <div className="education-details">
                <span>Periodo: 2026–2028</span>
                <span>Avance: cuatrimestre 07 (de 12)</span>
                <span>Egreso previsto: 2028</span>
              </div>
            </div>
          </article>
          <article className="education-card">
            <span className="education-mark"><Icon name="layers" size={20} /></span>
            <div>
              <span className="eyebrow">Concluido</span>
              <h3>Técnico Superior Universitario (T.S.U.)</h3>
              <p>Universidad Tecnológica de Tecamachalco</p>
              <div className="education-details">
                <span>Periodo: 2024–2026</span>
                <span>Egreso: 24 de agosto de 2026</span>
              </div>
            </div>
          </article>
        </section>

        <section className="services section-frame" id="servicios">
          <div className="section-heading">
            <span className="eyebrow">03 / Servicios freelance</span>
            <h2>Soluciones web para <span>tu proyecto.</span></h2>
            <p>Servicios para emprendedores y pequeños negocios que necesitan presencia web o herramientas para gestionar su operación.</p>
          </div>
          <div className="service-grid">
            <article className="service-card">
              <span className="eyebrow">01</span>
              <h3>Sitios web adaptables</h3>
              <p>Páginas web adaptables a dispositivos móviles y de escritorio.</p>
            </article>
            <article className="service-card">
              <span className="eyebrow">02</span>
              <h3>Tiendas en línea</h3>
              <p>Interfaces para mostrar y organizar productos en línea en tiempo real.</p>
            </article>
            <article className="service-card">
              <span className="eyebrow">03</span>
              <h3>Sistemas administrativos</h3>
              <p>Herramientas web para apoyar la gestión de productos, inventario y ventas.</p>
            </article>
            <article className="service-card">
              <span className="eyebrow">04</span>
              <h3>Desarrollo de aplicaciones móviles</h3>
              <p>Creación de aplicaciones para dispositivos móviles con funcionalidades específicas.</p>
            </article>
            <article className="service-card">
              <span className="eyebrow">05</span>
              <h3>Aplicaciones personalizadas a la necesidad del cliente</h3>
              <p>Desarrollo de soluciones personalizadas según las necesidades específicas de cada cliente.</p>
            </article>
          </div>
          <p className="service-price">Precio: <strong>a convenir</strong></p>
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
