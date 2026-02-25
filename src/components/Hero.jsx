import { useEffect, useState, useRef } from 'react';
import styles from './Hero.module.css';
import LogoCarousel from './LogoCarousel';

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
          Producer &nbsp;///&nbsp; Consultant &nbsp;///&nbsp; Culture
        </div>
        <div className={styles.sidebarNum}>001</div>
      </div>

      <div className={styles.mainCol}>
        <h1 className={styles.nameDisplay}>
          {displayedChars.map((item, i) =>
            item.isApostrophe ? (
              <span key={i} className={styles.apostrophe}>
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
        <LogoCarousel />
      </div>
    </section>
  );
}
