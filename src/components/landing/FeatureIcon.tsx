const accent = "#EC784F";

type IconName =
  | "star"
  | "check"
  | "clock"
  | "flex"
  | "unique"
  | "revise";

export function FeatureIcon({ name }: { name: IconName }) {
  const common = { width: 16, height: 16, fill: "none" as const };
  switch (name) {
    case "star":
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...common}>
          <path
            d="M8 1L10 5.5L15 6.2L11.5 9.6L12.3 14.5L8 12.2L3.7 14.5L4.5 9.6L1 6.2L6 5.5L8 1Z"
            stroke={accent}
            strokeLinejoin="round"
          />
        </svg>
      );
    case "check":
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...common}>
          <path
            d="M2 8L6 12L14 4"
            stroke={accent}
            strokeWidth={1.2}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "clock":
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...common}>
          <path
            d="M8 1V8L12 12"
            stroke={accent}
            strokeWidth={1.2}
            strokeLinecap="round"
          />
          <circle cx="8" cy="8" r="6" stroke={accent} />
        </svg>
      );
    case "flex":
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...common}>
          <rect x="2" y="2" width="12" height="12" rx="2" stroke={accent} />
          <path
            d="M6 8L8 10L12 6"
            stroke={accent}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
    case "unique":
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...common}>
          <circle cx="8" cy="8" r="4" stroke={accent} />
          <circle cx="8" cy="8" r="1.5" fill={accent} />
        </svg>
      );
    case "revise":
      return (
        <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" {...common}>
          <path
            d="M8 1C4.1 1 1 4.1 1 8C1 11.9 4.1 15 8 15C11.9 15 15 11.9 15 8"
            stroke={accent}
            strokeLinecap="round"
          />
          <path
            d="M11 1L15 1L15 5"
            stroke={accent}
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      );
  }
}
