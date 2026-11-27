import Icon from './Icon'
import SectionHeading from './SectionHeading'
import { skillAreas } from '../data/portfolioData'

export default function SkillsMatrix() {
  return (
    <section className="skills section-frame" id="habilidades">
      <SectionHeading
        eyebrow="02 / Lo que sé hacer"
        title={<>Un stack para <span>mover ideas.</span></>}
        copy="Conocimiento técnico con una mirada completa: desde la primera interfaz hasta el despliegue."
      />
      <div className="skills-grid">
        {skillAreas.map((skill) => (
          <article className="skill-card" key={skill.title}>
            <div className="skill-icon"><Icon name={skill.icon} size={20} /></div>
            <h3>{skill.title}</h3>
            <div className="skill-items">{skill.items.map((item) => <span key={item}>{item}</span>)}</div>
          </article>
        ))}
      </div>
    </section>
  )
}
