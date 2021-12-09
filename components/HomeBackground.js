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
        <circle
          cx="90vw"
          cy="90vh"
          r="400"
          fill="#00EA99"
          filter="url(#glow)"
        />
      </svg>
    </>
  );
}
