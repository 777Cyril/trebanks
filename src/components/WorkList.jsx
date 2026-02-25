import styles from './WorkList.module.css';

const PROJECTS = [
  { name: 'Nike', meta: 'Brand & Community', year: '2023' },
  { name: 'Animal House', meta: 'Creative Production', year: '2023' },
  { name: '2Seater', meta: 'Strategy & Direction', year: '2022', href: 'https://www.2seateraudio.com/' },
  { name: 'Thesis', meta: 'Brand Consulting', year: '2022' },
  { name: 'William Raveis', meta: 'Campaign & Culture', year: '2021' },
];

export default function WorkList() {
  return (
    <div id="work">
      <div className={styles.sectionHeader}>
        <span className={styles.indexNumber}>01.</span>
        <h2 className="label">Manifest / Engagements</h2>
      </div>
      <ul className={styles.workList}>
        {PROJECTS.map((project) => {
          const inner = (
            <>
              <div className={styles.projectName}>{project.name}</div>
              <div className={styles.projectMeta}>{project.meta}</div>
              <div className={styles.projectYear}>
                {project.year}
                <span className={styles.arrow}>↑</span>
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
