/* global React */
const LogoMark = ({ size = 38, color = "currentColor", accent = "#DF5A28" }) => (
  <svg width={size} height={size} viewBox="0 0 44 44" fill="none" aria-hidden="true">
    <path d="M31 10.5C28.2 8.3 24.8 7 21 7 12.2 7 5 14.2 5 23s7.2 16 16 16c3.8 0 7.2-1.3 10-3.5"
      stroke={color} strokeWidth="2.6" strokeLinecap="round" fill="none" />
    <path d="M27 15.5C25.2 14 22.9 13 20.4 13c-5.7 0-10.4 4.7-10.4 10.4S14.7 33.8 20.4 33.8c2.5 0 4.8-.9 6.6-2.4"
      stroke={color} strokeWidth="2.6" strokeLinecap="round" fill="none" />
    <circle cx="6.5" cy="12" r="3.4" fill={accent} />
    <circle cx="12" cy="31.5" r="2.4" stroke={color} strokeWidth="2.2" fill="none" />
  </svg>
);
window.LogoMark = LogoMark;
// Lightweight SVG icon set — line, 1.6 stroke, consistent geometry.

const Icon = ({ name, size = 20, stroke = 1.6 }) => {
  const s = size;
  const sw = stroke;
  const common = {
    width: s,
    height: s,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: sw,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };
  switch (name) {
    case "arrow-right":
      return (
        <svg {...common}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></svg>
      );
    case "arrow-ur":
      return (
        <svg {...common}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></svg>
      );
    case "heart":
      return (
        <svg {...common}><path d="M12 20s-7-4.35-7-10a4.5 4.5 0 0 1 8-2.83A4.5 4.5 0 0 1 19 10c0 5.65-7 10-7 10Z" /></svg>
      );
    case "stethoscope":
      return (
        <svg {...common}>
          <path d="M5 4v6a4 4 0 0 0 8 0V4" />
          <path d="M9 18a3 3 0 0 0 3-3v-1" />
          <circle cx="18" cy="16" r="2" />
        </svg>
      );
    case "book":
      return (
        <svg {...common}>
          <path d="M4 5a2 2 0 0 1 2-2h6v18H6a2 2 0 0 1-2-2V5Z" />
          <path d="M20 5a2 2 0 0 0-2-2h-6v18h6a2 2 0 0 0 2-2V5Z" />
        </svg>
      );
    case "sprout":
      return (
        <svg {...common}>
          <path d="M12 20v-8" />
          <path d="M12 12c-3 0-6-2-6-6 4 0 6 2 6 6Z" />
          <path d="M12 12c3 0 6-2 6-5-4 0-6 2-6 5Z" />
          <path d="M5 20h14" />
        </svg>
      );
    case "home":
      return (
        <svg {...common}>
          <path d="m3 11 9-7 9 7" />
          <path d="M5 10v9a1 1 0 0 0 1 1h4v-6h4v6h4a1 1 0 0 0 1-1v-9" />
        </svg>
      );
    case "users":
      return (
        <svg {...common}>
          <circle cx="9" cy="8" r="3.5" />
          <path d="M2 20c.6-3.6 3.4-6 7-6s6.4 2.4 7 6" />
          <circle cx="17" cy="6" r="2.5" />
          <path d="M22 14c-.4-2-1.8-3.5-4-4" />
        </svg>
      );
    case "leaf":
      return (
        <svg {...common}>
          <path d="M20 4c0 8-6 14-14 14C6 10 12 4 20 4Z" />
          <path d="M6 18 14 10" />
        </svg>
      );
    case "shield":
      return (
        <svg {...common}><path d="M12 3 4 6v6c0 5 3.5 8.5 8 9 4.5-.5 8-4 8-9V6l-8-3Z" /><path d="m9 12 2 2 4-4" /></svg>
      );
    case "chip":
      return (
        <svg {...common}>
          <rect x="7" y="7" width="10" height="10" rx="1.5" />
          <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" />
        </svg>
      );
    case "handshake":
      return (
        <svg {...common}>
          <path d="m2 12 5-4 4 3 4-3 5 4" />
          <path d="M6 8v6l3 3 2-2" />
          <path d="M18 8v6l-3 3-2-2" />
          <path d="m9 14 2 2" />
        </svg>
      );
    case "check":
      return (<svg {...common}><path d="m5 12 5 5 9-11" /></svg>);
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r=".6" fill="currentColor" />
        </svg>
      );
    case "twitter":
      return (
        <svg {...common}><path d="M4 4h4l4 6 5-6h3l-7 8 7 8h-4l-4-6-5 6H4l7-8L4 4Z" /></svg>
      );
    case "facebook":
      return (
        <svg {...common}><path d="M15 8h2V4h-2a4 4 0 0 0-4 4v2H9v4h2v6h4v-6h2.5l.5-4H15V8a1 1 0 0 1 1-1Z" /></svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="3" />
          <path d="M7 10v7" /><circle cx="7" cy="7" r="1" fill="currentColor" />
          <path d="M11 17v-4a2 2 0 0 1 4 0v4M11 10v7" />
        </svg>
      );
    case "tiktok":
      return (
        <svg {...common}>
          <path d="M14 4v9.5a3 3 0 1 1-2.5-2.96" />
          <path d="M14 4c.5 2.5 2.2 4 4.5 4.2" />
        </svg>
      );
    case "phone":
      return (<svg {...common}><path d="M5 4h4l2 5-3 2a12 12 0 0 0 5 5l2-3 5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2Z" /></svg>);
    case "mail":
      return (
        <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></svg>
      );
    case "pin":
      return (
        <svg {...common}><path d="M12 22s-7-7-7-12a7 7 0 1 1 14 0c0 5-7 12-7 12Z" /><circle cx="12" cy="10" r="2.5" /></svg>
      );
    case "lock":
      return (
        <svg {...common}><rect x="4" y="11" width="16" height="10" rx="2" /><path d="M8 11V8a4 4 0 1 1 8 0v3" /></svg>
      );
    default:
      return null;
  }
};

window.Icon = Icon;