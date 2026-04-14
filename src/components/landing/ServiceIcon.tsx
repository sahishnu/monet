export type ServiceIconName = "design" | "dev" | "domain" | "hosting" | "google";

const icons: Record<ServiceIconName, JSX.Element> = {
  design: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M3 17L7.5 12.5M7.5 12.5L5.5 10.5L14.5 3L17 5.5L10 14.5L7.5 12.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  dev: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7 6L3 10L7 14M13 6L17 10L13 14M11 4L9 16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
  domain: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <circle cx="10" cy="10" r="7" stroke="currentColor" strokeWidth="1.4" />
      <ellipse cx="10" cy="10" rx="3.5" ry="7" stroke="currentColor" strokeWidth="1.4" />
      <path d="M3 10H17" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  ),
  hosting: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect x="3" y="4" width="14" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <rect x="3" y="11" width="14" height="5" rx="1" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="6" cy="6.5" r="0.75" fill="currentColor" />
      <circle cx="6" cy="13.5" r="0.75" fill="currentColor" />
    </svg>
  ),
  google: (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M10 3L12.5 7.5H17L13.5 11L15 16L10 13L5 16L6.5 11L3 7.5H7.5L10 3Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  ),
};

export function ServiceIcon({ name }: { name: ServiceIconName }) {
  return icons[name] ?? null;
}
