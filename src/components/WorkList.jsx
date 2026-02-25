import styles from './WorkList.module.css';

const PROJECTS = [
  { name: 'Nike',                   meta: 'Digital Producer' },
  { name: 'Meta',                   meta: 'Creative Producer' },
  { name: 'AnimalxHouse Records',   meta: 'Creative Manager',                         href: 'https://www.animalxhouse.com/' },
  { name: '2SEATER Audio',          meta: 'Strategy, Brand Manager, Experiences',     href: 'https://www.2seateraudio.com/' },
  { name: 'Thesis',                 meta: 'Senior Producer' },
  { name: 'William Raveis',         meta: 'Digital Marketing & Technology Specialist' },
];

export default function WorkList() {
  return (
    <div id="work">
      <div className={styles.sectionHeader}>
        <span className={styles.indexNumber}>01.</span>
        <h2 className="label">Brand Engagements</h2>
      </div>
      <ul className={styles.workList}>
        {PROJECTS.map((project) => {
          const inner = (
            <>
              <div className={styles.projectName}>{project.name}</div>
              <div className={styles.projectMeta}>{project.meta}</div>
              <div className={styles.projectArrow}>
                <span className={styles.arrowWrap}>
                  <span className={styles.arrowUp}>↑</span>
                  <span className={styles.arrowRight}>→</span>
                </span>
              </div>
            </>
          );
          return project.href ? (
            <li key={project.name} className={styles.workItem}>
              <a href={project.href} target="_blank" rel="noopener noreferrer" className={styles.workItemLink}>
                {inner}
              </a>
            </li>
          ) : (
            <li key={project.name} className={styles.workItem}>
              {inner}
            </li>
          );
        })}
      </ul>
    </div>
  );
}
