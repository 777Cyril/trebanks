import styles from './LogoCarousel.module.css';

const LOGOS = [
  { src: '/logos/Logo_NIKE.svg',      alt: 'Nike' },
  { src: '/logos/THESIS logo.png',    alt: 'Thesis' },
  { src: '/logos/2seater logo.png',   alt: '2Seater' },
  { src: '/logos/William R Logo.png', alt: 'William R' },
];

// Duplicate 4× for a seamless infinite loop
const TRACK = [...LOGOS, ...LOGOS, ...LOGOS, ...LOGOS];

export default function LogoCarousel() {
  return (
    <div className={styles.panel}>
      {/* Blue accent stripe */}
      <div className={styles.accentStripe} />

      <div className={styles.window}>
        <div className={styles.track}>
          {TRACK.map((logo, i) => (
            <div key={i} className={styles.slide}>
              <img src={logo.src} alt={logo.alt} className={styles.logo} />
            </div>
          ))}
        </div>
      </div>

      {/* Editorial label */}
      <div className={styles.panelLabel}>Clients &amp; Collaborators</div>
    </div>
  );
}
