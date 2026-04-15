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
      "People don't quickly understand what we do or why to choose us.",
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
  eyebrow: "The Monet difference",
  titleBold: "Launch your website",
  titleItalic: "in 7 days, not 7 weeks",
  items: [
    { title: "Fast turnaround" },
    { title: "Built for your brand" },
    { title: "Easy to manage" },
  ],
};

export const pricing = {
  eyebrow: "Pricing",
  title: ["A website that fits your budget", "and your bandwidth."],
  accentLineIndex: 1,
  tiers: [
    {
      id: "standard",
      name: "Standard",
      price: "$200",
      suffix: "/month",
      variant: "featured" as const,
      badge: "Most popular",
      features: [
        "Ongoing website updates & maintenance",
        "Unlimited design revisions",
        "Hosting & domain management",
        "SEO monitoring & improvements",
        "Google Business Profile management",
        "Priority support",
        "Cancel anytime",
      ],
      cta: { label: "Get started", href: "#contact" },
    },
    {
      id: "one-time",
      name: "One-Time Build",
      price: "$3,000",
      suffix: null,
      variant: "light" as const,
      features: [
        "Custom website design & development",
        "Up to 15 pages",
        "$15/month for Hosting",
        "Basic SEO setup",
        "30-day post-launch support",
        "Future updates billed at $50/hour"
      ],
      cta: { label: "Start your project", href: "#contact" },
    },
  ],
  custom: {
    name: "Custom",
    price: "Let's talk",
    headline: "Need more than a website?",
    features: [
      "Custom software design & development",
      "E-commerce & advanced integrations",
      "Internal dashboards & workflow tools",
      "Automation for repetitive business processes",
    ],
    cta: { label: "Contact us", href: "#contact" },
  },
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

export const faq = {
  eyebrow: "FAQ",
  title: ["Common questions,", "honest answers."],
  items: [
    {
      question: "Who is Monet a good fit for?",
      answer:
        "Monet is a great fit for small businesses and service providers who want a professional website without having to manage the technical side themselves. If you want a partner who can handle the website work so you can stay focused on running your business, Monet is built for that.",
    },
    {
      question: "Who will I actually be working with?",
      answer:
        "You'll work directly with Sahishnu Patel, the owner of Monet. He is a passionate software engineer and designer with a decade of experience in design and development, so you get direct communication and hands-on attention from the person actually building your site.",
    },
    {
      question: "How do I get started?",
      answer:
        "It starts with a short intro call so we can understand what you need. After that, we'll sign a contract and get started almost immediately.",
    },
    {
      question: "How long does a typical website project take?",
      answer:
        "We move fast. Most marketing websites can be delivered in about 7 days, depending on the size of the site, how quickly content is provided, and whether any custom features are needed.",
    },
    {
      question: "Can I update my website later?",
      answer:
        "Yes. If you're on the monthly plan, ongoing edits and updates are included as part of the service. If you choose the one-time build, future updates can still be made whenever needed and are billed separately.",
    },
    {
      question: "Can I cancel my service?",
      answer:
        "Yes, you can cancel your monthly service at any time. Your current billing cycle will continue through the end of the paid period, and you will not be billed for the following month. Your domain will remain yours, while the website, associated code, and assets remain the property of Monet, subject to the terms of your agreement.",
    },
    {
      question: "Why do I need an ongoing payment for my website?",
      answer:
        "Your website is a business asset and an investment, not just a one-time project. The ongoing payment covers the continued care, support, and updates needed to keep it working well as your business grows.",
    },
  ],
};

export const cta = {
  line1: "Ready to create your",
  line2Italic: "masterpiece?",
  sub: "Let's build it in 7 days.",
  primary: { label: "Book a Call", href: "#contact" },
  secondary: { label: "hello@monetdigitalstudio.com", href: "mailto:hello@monetstudio.com" },
};

export const footer = {
  columns: [] as { title: string; links: { label: string; href: string }[] }[],
  legal: [
    { label: "Privacy", href: "#" },
    { label: "Terms", href: "#" },
  ],
  copyright: `2026 ${brand.name}. All rights reserved.`,
};
