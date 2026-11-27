import { useEffect, useRef, useState } from 'react'
import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { projects } from '../data/portfolioData'

function ProjectVisual({ project, imageIndex = 0, onMove }) {
  return (
    <div className={`project-visual visual-${project.theme}`} role={onMove ? undefined : 'img'} aria-label={project.images[imageIndex]}>
      {project.screenshots ? (
        <img className="project-screenshot" src={project.screenshots[imageIndex]} alt={project.images[imageIndex]} />
      ) : (
        <div className="mock-window">
          <div className="mock-topbar"><i /><i /><i /><span>{project.images[imageIndex]}</span></div>
          <div className="mock-content">
            {project.theme === 'api' ? (
              <div className="mock-code"><span>GET</span> /api/v1/projects<br /><span>200</span> · application/json<br /><b>{'{'} status: &quot;ready&quot; {'}'}</b></div>
            ) : (
              <>
                <div className="mock-heading"><i /><i /><i /></div>
                <div className="mock-stats"><i /><i /><i /></div>
                <div className="mock-chart"><i /><i /><i /><i /><i /><i /><i /><i /><i /></div>
                <div className="mock-rows"><i /><i /><i /></div>
              </>
            )}
          </div>
        </div>
      )}
      <span className="visual-caption">{String(imageIndex + 1).padStart(2, '0')} / {project.images.length}</span>
      {onMove && (
        <div className="modal-gallery-controls" role="group" aria-label="Galería del proyecto">
          <button type="button" onClick={(event) => { event.stopPropagation(); onMove(-1) }} aria-label="Imagen anterior"><Icon name="chevronLeft" size={17} /></button>
          <span>{project.images[imageIndex]}</span>
          <button type="button" onClick={(event) => { event.stopPropagation(); onMove(1) }} aria-label="Siguiente imagen"><Icon name="chevronRight" size={17} /></button>
        </div>
      )}
    </div>
  )
}

export default function ProjectsSection() {
  const [active, setActive] = useState(0)
  const [selected, setSelected] = useState(null)
  const [galleryIndex, setGalleryIndex] = useState(0)
  const gridRef = useRef(null)
  const selectProject = (index) => {
    setActive(index)
    if (window.matchMedia('(max-width: 760px)').matches) {
      gridRef.current?.children[index]?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }
  const move = (delta) => selectProject((active + delta + projects.length) % projects.length)
  const updateActiveFromScroll = () => {
    if (!gridRef.current || !window.matchMedia('(max-width: 760px)').matches) return
    const cards = Array.from(gridRef.current.children)
    const center = gridRef.current.getBoundingClientRect().left + gridRef.current.clientWidth / 2
    const nearestIndex = cards.reduce((nearest, card, index) => (
      Math.abs(card.getBoundingClientRect().left + card.offsetWidth / 2 - center)
      < Math.abs(cards[nearest].getBoundingClientRect().left + cards[nearest].offsetWidth / 2 - center) ? index : nearest
    ), 0)
    setActive(nearestIndex)
  }
  const openProject = (project) => {
    setSelected(project)
    setGalleryIndex(0)
  }
  const moveGallery = (delta) => setGalleryIndex((current) => (
    (current + delta + selected.images.length) % selected.images.length
  ))

  useEffect(() => {
    if (!selected) return undefined
    const onKeyDown = (event) => {
      if (event.key === 'Escape') setSelected(null)
    }
    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [selected])

  return (
    <section className="projects section-frame" id="proyectos">
      <SectionHeading
        eyebrow="05 / Proyectos"
        title={<>Lo que estoy <span>construyendo.</span></>}
        copy=""
      />
      <div className="project-carousel" aria-label="Galería de proyectos">
        <div className="projects-grid" ref={gridRef} onScroll={updateActiveFromScroll}>
          {projects.map((project, index) => (
            <article className={`project-card${index === active ? ' is-active' : ''}`} key={project.title}>
              <button className="project-open" type="button" onClick={() => openProject(project)} aria-label={`Ver detalles de ${project.title}`}>
                <ProjectVisual project={project} />
              </button>
              <div className="project-content">
                <div className="project-meta">
                  <span>{project.eyebrow}</span>
                  <span className="project-sequence">{String(index + 1).padStart(2, '0')}/{projects.length}</span>
                </div>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div>
                <div className="project-card-actions">
                  <button className="project-detail-link" type="button" onClick={() => openProject(project)}>
                    Ficha técnica <Icon name="arrowUpRight" size={15} />
                  </button>
                  {project.demo && (
                    <a className="project-demo-link" href={project.demo} target="_blank" rel="noreferrer">
                      Ver demo <Icon name="arrowUpRight" size={14} />
                    </a>
                  )}
                  {project.demoNote && (
                    <span className="project-demo-pending">
                      {project.demo ? 'Acceso a demo:' : 'Demo:'} {project.demoNote}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="carousel-controls">
          <button className="icon-button" type="button" onClick={() => move(-1)} aria-label="Proyecto anterior"><Icon name="chevronLeft" /></button>
          <div className="carousel-dots" aria-label={`Proyecto ${active + 1} de ${projects.length}`}>
            {projects.map((project, index) => (
              <button key={project.title} type="button" className={active === index ? 'is-active' : ''} onClick={() => selectProject(index)} aria-label={`Ir al proyecto ${index + 1}`} />
            ))}
          </div>
          <span className="carousel-count">{String(active + 1).padStart(2, '0')} / {String(projects.length).padStart(2, '0')}</span>
          <button className="icon-button" type="button" onClick={() => move(1)} aria-label="Siguiente proyecto"><Icon name="chevronRight" /></button>
        </div>
      </div>
      {selected && (
        <div className="project-modal-backdrop" role="presentation" onMouseDown={(event) => { if (event.target === event.currentTarget) setSelected(null) }}>
          <section className="project-modal" role="dialog" aria-modal="true" aria-labelledby="project-modal-title">
            <button type="button" className="preview-close" onClick={() => setSelected(null)} aria-label="Cerrar detalles"><Icon name="x" /></button>
            <ProjectVisual project={selected} imageIndex={galleryIndex} onMove={moveGallery} />
            <div className="project-modal-body">
              <span className="eyebrow">{selected.eyebrow}</span>
              <h2 id="project-modal-title">{selected.title}</h2>
              <p>{selected.description}</p>
              <div className="project-detail-grid">
                <div><h3>Mi aportación</h3><p>{selected.contribution}</p></div>
                <div><h3>Equipo</h3><p>{selected.teamContribution}</p></div>
                <div><h3>Arquitectura</h3><p>{selected.architecture}</p></div>
                <div><h3>Decisiones técnicas</h3><p>{selected.decisions}</p></div>
                <div><h3>Stack</h3><div className="tag-list">{selected.stack.map((item) => <span key={item}>{item}</span>)}</div></div>
              </div>
              <div className="project-modal-links">
                {selected.demo && <a href={selected.demo} target="_blank" rel="noreferrer">Ver demo <Icon name="arrowUpRight" size={15} /></a>}
                {selected.demoNote && <span className="project-demo-pending">{selected.demoNote}</span>}
                {selected.repository && <a href={selected.repository} target="_blank" rel="noreferrer">Repositorio <Icon name="github" size={15} /></a>}
              </div>
            </div>
          </section>
        </div>
      )}
    </section>
  )
}
