import styles from './Archive.module.css';

// Placeholder archive entries — swap in real data when ready
const ARCHIVE = [
  { client: '—', role: '—', context: '—' },
  { client: '—', role: '—', context: '—' },
  { client: '—', role: '—', context: '—' },
  { client: '—', role: '—', context: '—' },
  { client: '—', role: '—', context: '—' },
  { client: '—', role: '—', context: '—' },
];

export default function Archive() {
  return (
    <div id="archive">
      <div className={styles.sectionHeader}>
        <span className={styles.indexNumber}>02.</span>
        <h2 className="label">Archive / Index</h2>
      </div>
      <div className={styles.tableHead}>
        <span>Client</span>
        <span>Role</span>
        <span>Context</span>
      </div>
      <ul className={styles.archiveList}>
        {ARCHIVE.map((item, i) => (
          <li key={i} className={styles.archiveItem}>
            <span className={styles.client}>{item.client}</span>
            <span className={styles.role}>{item.role}</span>
            <span className={styles.context}>{item.context}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
