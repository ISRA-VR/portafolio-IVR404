import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { skillAreas } from '../data/portfolioData'

export default function SkillsMatrix() {
  return (
    <section className="skills section-frame" id="habilidades">
      <SectionHeading
        eyebrow="04 / Habilidades"
        title={<>Un stack para <span>mover ideas.</span></>}
        copy="Tecnologías respaldadas por los proyectos del portafolio."
      />
      <div className="skills-grid">
        {skillAreas.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <div className="skill-icon"><Icon name={skill.icon} size={20} /></div>
            <h3>{skill.title}</h3>
            <ul className="skill-items">
              {skill.items.map((item) => (
                <li key={item.name}>
                  <strong>{item.name}</strong>
                  <span>{item.level}</span>
                  <small>Proyecto: {item.project}</small>
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  )
}
