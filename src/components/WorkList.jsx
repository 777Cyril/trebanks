import styles from './WorkList.module.css';

const PROJECTS = [
  { name: 'Vanguard Audio', meta: 'Sonic Branding / Strategy', year: '2023' },
  { name: 'Neon Structure', meta: 'Art Direction / Campaign', year: '2023' },
  { name: 'Off-Grid Systems', meta: 'Product Design / UX', year: '2022' },
  { name: 'Apex Gallery', meta: 'Spatial Design / Event', year: '2022' },
  { name: 'Monolith Inc.', meta: 'Brand Identity', year: '2021' },
];

export default function WorkList() {
  return (
    <div id="work">
      <div className={styles.sectionHeader}>
        <span className={styles.indexNumber}>01.</span>
        <h2 className="label">Manifest / Engagements</h2>
      </div>
      <ul className={styles.workList}>
        {PROJECTS.map((project) => (
          <li key={project.name} className={styles.workItem}>
            <div className={styles.projectName}>{project.name}</div>
            <div className={styles.projectMeta}>{project.meta}</div>
            <div className={styles.projectYear}>
              {project.year}
              <span className={styles.arrow}>↑</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
