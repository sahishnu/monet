const brandSerif = "Monet";
const brandSans = "Digital Studio";

export const brand = {
  name: `${brandSerif} ${brandSans}`,
  /** First word — Instrument Serif italic in header/footer; rest stays sans. */
  nameSerif: brandSerif,
  nameSans: brandSans,
  tagline:
    "Crafting digital masterpieces with care, intention, and a deep love for beautiful design.",
};

export const nav = {
  links: [
    { label: "Work", href: "#work" },
    { label: "Services", href: "#services" },
    { label: "Pricing", href: "#pricing" },
  ],
  cta: { label: "Get in Touch", href: "#contact" },
};

export const hero = {
  eyebrow: "Web Design & Development",
  lines: ["You run the business.", "We make sure your"],
  accent: "website keeps up.",
  sub:
    "Your website should bring in business, not create more work.",
  primaryCta: { label: "Start a Project", href: "#contact" },
  secondaryCta: { label: "See Pricing", href: "#pricing" },
};

export const beforeAfter = {
  title: "Why choose Monet?",
  subtitle:
    "A strong business can still have an unfinished picture online.",
  before: {
    heading: "Before working with Monet",
    items: [
      "Our business has grown, but our website still feels behind.",
      "People don't quickly understand what we do orwhy to choose us.",
      "We know the site needs work, but we don't have time to manage it.",
      "The website feels more like a chore than a growth tool.",
    ],
  },
  after: {
    heading: "After working with Monet",
    items: [
      "A website that reflects the quality of the business behind it.",
      "Clearer messaging that builds trust and drives more inquiries.",
      "One team handling copy, design, and development from start to finish.",
      "A polished site that works hard without creating more work.",
    ],
  },
};

export const howItWorks = {
  eyebrow: "How it works",
  title: ["The way design", "should be done"],
  accentLineIndex: 1,
  steps: [
    {
      n: "1",
      title: "Subscribe",
      body: "Choose a plan that fits your needs. Get started in minutes, not weeks.",
    },
    {
      n: "2",
      title: "Request",
      body: "Request whatever you need -- websites, brands, apps, landing pages. We handle it all.",
    },
    {
      n: "3",
      title: "Receive",
      body: "Get your designs delivered in days, not months. Revisions included until you're thrilled.",
    },
  ],
};

export const features = {
  eyebrow: "Why Monet",
  titleItalic: `"You'll never go back"`,
  titleBold: "better",
  items: [
    {
      title: "Top-notch quality",
      body: "Senior-level design craft at your fingertips, whenever you need it.",
      icon: "star" as const,
    },
    {
      title: "Fixed monthly rate",
      body: "No surprises. Pay the same predictable price each month.",
      icon: "check" as const,
    },
    {
      title: "Lightning fast",
      body: "Most designs delivered in just a few business days on average.",
      icon: "clock" as const,
    },
    {
      title: "Fully flexible",
      body: "Scale up, down, pause, or cancel anytime. No contracts.",
      icon: "flex" as const,
    },
    {
      title: "Unique to you",
      body: "Every design crafted especially for your brand. 100% yours.",
      icon: "unique" as const,
    },
    {
      title: "Unlimited revisions",
      body: "We iterate until you love it. No limits on rounds of feedback.",
      icon: "revise" as const,
    },
  ],
};

export const pricing = {
  eyebrow: "Pricing",
  title: ["One subscription,", "endless possibilities"],
  accentLineIndex: 1,
  tiers: [
    {
      id: "starter",
      name: "Starter",
      price: "$3,500",
      suffix: "/project",
      variant: "light" as const,
      features: [
        "Up to 5 pages",
        "Responsive design",
        "Basic SEO setup",
        "2 rounds of revisions",
        "1 month support",
      ],
      cta: { label: "Get started", href: "#contact" },
    },
    {
      id: "professional",
      name: "Professional",
      price: "$8,500",
      suffix: "/project",
      variant: "featured" as const,
      badge: "Most popular",
      features: [
        "Up to 15 pages",
        "Custom animations",
        "Advanced SEO & analytics",
        "CMS integration",
        "3 months support",
      ],
      cta: { label: "Get started", href: "#contact" },
    },
    {
      id: "enterprise",
      name: "Enterprise",
      price: "Custom",
      suffix: null,
      variant: "light" as const,
      features: [
        "Unlimited pages",
        "E-commerce & web apps",
        "Full brand identity",
        "Dedicated project manager",
        "12 months support",
      ],
      cta: { label: "Contact us", href: "#contact" },
    },
  ],
};

export const services = {
  eyebrow: "What we take care of",
  title: ["Everything your business needs"],
  titleAccent: "to shine online.",
  sub: "Everything your business needs to look polished online and stay easy to manage.",
  items: [
    {
      title: "Website design",
      body: "Clean, credible design that helps people understand your business and trust you faster.",
      icon: "design" as const,
    },
    {
      title: "Website development",
      body: "A fast, modern site built properly, not pieced together with shortcuts.",
      icon: "dev" as const,
    },
    {
      title: "Domain management",
      body: "We handle domain setup, renewals, and the details that are easy to forget.",
      icon: "domain" as const,
    },
    {
      title: "Hosting management",
      body: "Reliable hosting setup and maintenance, without you needing to think about it.",
      icon: "hosting" as const,
    },
    {
      title: "Google Business Profile",
      body: "We keep your profile accurate, updated, and easier for local customers to find.",
      icon: "google" as const,
    },
  ],
};

export const cta = {
  line1: "Ready to create your",
  line2Italic: "masterpiece?",
  sub: "Let's talk about your project. We'd love to hear what you're building.",
  primary: { label: "Book a Call", href: "#contact" },
  secondary: { label: "hello@monetstudio.com", href: "mailto:hello@monetstudio.com" },
};

export const footer = {
  columns: [
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Blog", href: "#" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Web Design", href: "#" },
        { label: "Development", href: "#" },
        { label: "Branding", href: "#" },
      ],
    },
    {
      title: "Connect",
      links: [
        { label: "Twitter", href: "#" },
        { label: "Dribbble", href: "#" },
        { label: "LinkedIn", href: "#" },
      ],
    },
  ],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  copyright: `2026 ${brand.name}. All rights reserved.`,
};
