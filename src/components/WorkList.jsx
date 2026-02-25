import { useRef } from 'react';
import styles from './WorkList.module.css';

const PROJECTS = [
  {
    name: 'Vanguard Audio',
    meta: 'Sonic Branding / Strategy',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1600508774634-4e11d34730e2?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Neon Structure',
    meta: 'Art Direction / Campaign',
    year: '2023',
    img: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Off-Grid Systems',
    meta: 'Product Design / UX',
    year: '2022',
    img: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Apex Gallery',
    meta: 'Spatial Design / Event',
    year: '2022',
    img: 'https://images.unsplash.com/photo-1558591710-4b4a1ae0f04d?auto=format&fit=crop&q=80&w=600',
  },
  {
    name: 'Monolith Inc.',
    meta: 'Brand Identity',
    year: '2021',
    img: 'https://images.unsplash.com/photo-1594938298603-c8148c472997?auto=format&fit=crop&q=80&w=600',
  },
];

export default function WorkList() {
  const revealRef = useRef(null);
  const revealImgRef = useRef(null);

  const handleMouseEnter = (img) => {
    revealImgRef.current.src = img;
    revealRef.current.style.opacity = '1';
    revealRef.current.style.transform = 'scale(1)';
  };

  const handleMouseLeave = () => {
    revealRef.current.style.opacity = '0';
    revealRef.current.style.transform = 'scale(0.8)';
  };

  const handleMouseMove = (e) => {
    const x = e.clientX + 20;
    const y = e.clientY - 100;
    revealRef.current.style.left = `${x}px`;
    revealRef.current.style.top = `${y}px`;
  };

  return (
    <>
      <div id="work">
        <div className={styles.sectionHeader}>
          <span className={styles.indexNumber}>01.</span>
          <h2 className="label">Manifest / Engagements</h2>
        </div>
        <ul className={styles.workList}>
          {PROJECTS.map((project) => (
            <li
              key={project.name}
              className={styles.workItem}
              onMouseEnter={() => handleMouseEnter(project.img)}
              onMouseLeave={handleMouseLeave}
              onMouseMove={handleMouseMove}
            >
              <div className={styles.projectName}>{project.name}</div>
              <div className={styles.projectMeta}>{project.meta}</div>
              <div className={styles.projectYear}>{project.year}</div>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.hoverReveal} ref={revealRef}>
        <img ref={revealImgRef} src="" alt="Preview" />
      </div>
    </>
  );
}
