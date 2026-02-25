import { useEffect, useState, useRef } from 'react';
import styles from './Hero.module.css';

const COLLAGE_IMAGES = [
  'https://images.unsplash.com/photo-1492562080023-ab3db95bfbce?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1511216335778-7cb8f49fa7a3?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?auto=format&fit=crop&q=80&w=1000',
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1000',
];

const NAME_TEXT = "Tre' Banks";

export default function Hero() {
  const [displayedChars, setDisplayedChars] = useState([]);
  const [typingDone, setTypingDone] = useState(false);
  const indexRef = useRef(0);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const interval = setInterval(() => {
        if (indexRef.current < NAME_TEXT.length) {
          const char = NAME_TEXT.charAt(indexRef.current);
          setDisplayedChars(prev => [...prev, { char, isApostrophe: char === "'" }]);
          indexRef.current += 1;
        } else {
          clearInterval(interval);
          setTypingDone(true);
        }
      }, 150);
      return () => clearInterval(interval);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <section className={styles.hero}>
      <div className={styles.sidebarCol}>
        <div className={styles.verticalText}>
          Producer &nbsp;/&nbsp; Consultant &nbsp;/&nbsp; Culture
        </div>
        <div className={styles.sidebarNum}>001</div>
      </div>

      <div className={styles.mainCol}>
        <div className={`label ${styles.identityLabel}`}>Identity Matrix</div>
        <h1 className={styles.nameDisplay}>
          {displayedChars.map((item, i) =>
            item.isApostrophe ? (
              <span
                key={i}
                className={`${styles.apostrophe}${typingDone ? ` ${styles.apostrophePulse}` : ''}`}
              >
                {item.char}
              </span>
            ) : (
              <span key={i}>{item.char}</span>
            )
          )}
          {typingDone && <span className={styles.cursor} />}
        </h1>
      </div>

      <div className={styles.mediaCol}>
        <div className={styles.collageWrapper}>
          {COLLAGE_IMAGES.map((src, i) => (
            <img key={i} src={src} alt={`Texture ${i + 1}`} className={styles.collageImg} />
          ))}
        </div>
      </div>
    </section>
  );
}
