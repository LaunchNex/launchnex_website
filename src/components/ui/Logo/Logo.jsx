import styles from './Logo.module.css';

export default function Logo({ size = 32 }) {
  const textSize = size * 0.58;

  return (
    <div className={styles.logo}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={styles.icon}
        aria-hidden="true"
        focusable="false"
      >
        <defs>
          <linearGradient id="lnG" x1="0" y1="64" x2="64" y2="0" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#0F3D2E" />
            <stop offset="45%" stopColor="#1DBF73" />
            <stop offset="100%" stopColor="#2FE6A8" />
          </linearGradient>
        </defs>

        {/* Dark rounded square */}
        <rect x="1" y="1" width="62" height="62" rx="10" fill="#0B0F14" />
        <rect x="1" y="1" width="62" height="62" rx="10" fill="none" stroke="url(#lnG)" strokeWidth="1.5" opacity="0.4" />

        {/*
          Top-left L-bracket:
          Horizontal bar across top, vertical bar down left side.
          The bracket is thick (5px) and covers ~65% of each edge.
        */}
        <path
          d="M9 8 L44 8 L44 13 L14 13 L14 44 L9 44 Z"
          fill="url(#lnG)"
          opacity="0.45"
        />

        {/*
          Bottom-right L-bracket:
          Horizontal bar across bottom, vertical bar up right side.
        */}
        <path
          d="M55 56 L20 56 L20 51 L50 51 L50 20 L55 20 Z"
          fill="url(#lnG)"
          opacity="0.45"
        />

        {/*
          Zigzag lightning trail — starts from bottom-left,
          goes up in a Z-pattern to connect to the rocket.
          This is the key "Z" slash cutting through the frame.
        */}
        <path
          d="M10 54 L26 30 L18 30 L32 10 L38 10 L24 34 L32 34 L14 58 Z"
          fill="url(#lnG)"
          opacity="0.8"
        />

        {/*
          Rocket — diagonal from center toward upper-right,
          nose tip pointing upper-right, breaking out of frame
        */}
        {/* Rocket body — thick diagonal bar */}
        <path
          d="M30 34 L48 10 L53 14 L35 38 Z"
          fill="url(#lnG)"
        />
        {/* Pointed nose cone */}
        <path
          d="M48 10 L53 14 L58 5 Z"
          fill="#2FE6A8"
        />
        {/* Porthole window */}
        <circle cx="43" cy="20" r="3" fill="#0B0F14" />
        <circle cx="43" cy="20" r="1.8" fill="none" stroke="#2FE6A8" strokeWidth="0.6" opacity="0.5" />
        {/* Left fin */}
        <path
          d="M30 34 L25 31 L31 26 Z"
          fill="url(#lnG)"
          opacity="0.7"
        />
        {/* Right fin */}
        <path
          d="M35 38 L39 42 L34 37 Z"
          fill="url(#lnG)"
          opacity="0.7"
        />
      </svg>

      <span className={styles.text} style={{ fontSize: textSize }}>
        Launch<span className={styles.accent}>Nex</span>
      </span>
    </div>
  );
}
