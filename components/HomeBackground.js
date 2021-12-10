import styles from "./HomeBackground.module.css";

export default function HomeBackground() {
  return (
    <>
      <svg className={styles.bg} preserveAspectRatio="xMidYMid meet" viewBox="0 0 900 900">
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
          cx="-20%"
          cy="20%"
          r="400"
          fill="#00A1FA"
          filter="url(#glow)"
        />
        <circle
          cx="130%"
          cy="100vh"
          r="400"
          fill="#00EA99"
          filter="url(#glow)"
        />
        <circle cx="70%" cy="20%" r="100" fill="#00EA99" />
        <circle cx="30%" cy="60%" r="80" fill="#00EA99" />
        <circle cx="60%" cy="50%" r="50" fill="#00A1FA" />
      </svg>
    </>
  );
}
