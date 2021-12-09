import styles from "./HomeBackground.module.css";

export default function HomeBackground() {
  return (
    <>
      <svg className={styles.bg}>
        <defs>
          <filter id="glow">
            <feGaussianBlur stdDeviation="30" result="coloredBlur" />
            <feMerge>
              <feMergeNode in="coloredBlur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="10vw"
          cy="10vh"
          r="400"
          fill="#00A1FA"
          filter="url(#glow)"
        />
        <circle
          cx="90vw"
          cy="90vh"
          r="400"
          fill="#00EA99"
          filter="url(#glow)"
        />
        <circle cx="70vw" cy="20vh" r="100" fill="#00EA99" />
        <circle cx="30vw" cy="60vh" r="80" fill="#00EA99" />
        <circle cx="60vw" cy="50vh" r="50" fill="#00A1FA" />
      </svg>
    </>
  );
}
