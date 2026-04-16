export type PortfolioProject = {
  slug: string;
  kicker: string;
  category: string;
  title: string;
  description: string;
  outcome: string;
  image: string;
  imageAlt: string;
  highlights: string[];
  stack: string[];
  links: { label: string; href: string }[];
  note?: string;
};

export const siteMeta = {
  name: "Bohdan Zelenskyi",
  role: "Fullstack Web Developer / ML & AI Engineer",
  location: "Schorndorf, Germany",
  email: "bogdan.zelya.s@gmail.com",
  phone: "+380971988733",
  github: "https://github.com/DrBarga",
  linkedin: "https://linkedin.com/in/bogdan-zelenskiy-a291a62b5",
  telegram: "https://t.me/dr_barga",
  availability: "Open to freelance client work",
};

export const navItems = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/experience", label: "Experience" },
  { href: "/projects", label: "Projects" },
  { href: "/stack", label: "Tech Stack" },
  { href: "/contact", label: "Contact" },
];

export const heroStats = [
  { label: "Delivery window", value: "Idea -> launch" },
  { label: "Impact seen", value: "60-80% less manual work" },
  { label: "Core blend", value: "Web + backend + AI" },
];

export const services = [
  {
    name: "Web development",
    tag: "Frontend + product",
    description:
      "Custom websites and applications with modern UI, strong performance, and clean information architecture.",
    items: [
      "Next.js and React builds",
      "Landing pages and business sites",
      "Dashboards, portals, and custom flows",
    ],
  },
  {
    name: "Backend systems",
    tag: "APIs + realtime",
    description:
      "Scalable backend services that support authentication, integrations, real-time behavior, and production reliability.",
    items: [
      "Node.js and FastAPI services",
      "REST APIs, auth, and data flow",
      "WebSockets, Redis, and async processing",
    ],
  },
  {
    name: "AI integration",
    tag: "Applied ML",
    description:
      "Practical AI features for websites and products, from computer vision to automation and multimodal pipelines.",
    items: [
      "Computer vision and OCR",
      "AI-assisted workflows and automation",
      "ML features inside real products",
    ],
  },
  {
    name: "Fast client delivery",
    tag: "Flexible build speed",
    description:
      "Code-first when needed, platform-first when smarter. I can move through WordPress, Shopify, Webflow, and Hostinger too.",
    items: [
      "WordPress and WooCommerce",
      "Shopify and Webflow sites",
      "The right stack for the business goal",
    ],
  },
];

export const proofPoints = [
  {
    kicker: "Rare combination",
    title: "Fullstack + AI",
    description:
      "I can design the interface, build the backend, and wire in AI capabilities without splitting the work across multiple specialists.",
  },
  {
    kicker: "Performance mindset",
    title: "Real-time systems",
    description:
      "Experience with WebSockets, async flows, Redis, and low-latency communication for systems that need to stay responsive under load.",
  },
  {
    kicker: "Business value",
    title: "Automation that saves time",
    description:
      "Built ML and computer vision pipelines that reduced manual work by 60-80% while improving speed and operational consistency.",
  },
  {
    kicker: "Freelance fit",
    title: "Fast delivery with modern tools",
    description:
      "I can move from MVP to scalable architecture and choose between custom code and faster platforms depending on what serves the client best.",
  },
];

export const processSteps = [
  {
    step: "01",
    title: "Scope the real goal",
    description:
      "Clarify what the product needs to do, what success looks like, and which stack gives the best speed-to-value.",
  },
  {
    step: "02",
    title: "Design the architecture",
    description:
      "Shape the information flow, API boundaries, data model, and interface structure before complexity grows in the wrong places.",
  },
  {
    step: "03",
    title: "Build and iterate",
    description:
      "Ship visible progress quickly, tighten the quality, and keep feedback loops short so momentum stays high.",
  },
  {
    step: "04",
    title: "Launch with confidence",
    description:
      "Polish, test, document the essentials, and leave the product in a state that is ready for real users and future growth.",
  },
];

export const experience = [
  {
    title: "Backend Developer",
    company: "Sayorama",
    period: "2025 - Present",
    summary:
      "Building backend services for a real-time messaging platform across iOS, Android, and web with a focus on fast communication, security, and scalability.",
    bullets: [
      "Designed low-latency communication flows using WebSockets and async patterns.",
      "Implemented caching, messaging, and concurrency support with Redis and queues.",
      "Built auth, token rotation, and secure API services for production session handling.",
    ],
    focus: ["Node.js", "WebSockets", "Redis", "Docker", "Realtime APIs"],
  },
  {
    title: "Machine Learning / Computer Vision Engineer",
    company: "KP MKPV KhMR",
    period: "2022 - 2025",
    summary:
      "Built and deployed ML and computer vision pipelines that processed thousands of images daily and integrated directly into business workflows.",
    bullets: [
      "Productionized OCR, object detection, face recognition, and license plate systems.",
      "Developed Flask and FastAPI services for ML delivery inside ERP and CRM environments.",
      "Optimized inference and robustness for near real-time use in daily operations.",
    ],
    focus: ["Python", "FastAPI", "OCR", "Computer Vision", "Docker"],
  },
  {
    title: "Fullstack / Backend Developer",
    company: "Wifi&Bed Co",
    period: "2023 - 2024",
    summary:
      "Built CRM, analytics, and automation systems with Python and MySQL to improve business visibility and reduce manual operations.",
    bullets: [
      "Designed backend services and data aggregation modules for operational analytics.",
      "Optimized SQL queries and API structure to improve responsiveness and scale.",
      "Prepared the system architecture for future AI and automation integration.",
    ],
    focus: ["Python", "Flask", "MySQL", "Analytics", "Automation"],
  },
];

export const education = [
  {
    title: "M.Sc. in Computer Science",
    org: "National Technical University “KhPI”",
    period: "In progress",
    points: [
      "Focused on machine learning, AI, data science, and computer vision.",
      "Coursework spans Python, algorithms, data structures, databases, and software engineering.",
      "Academic projects included data analysis, ML models, and system design.",
    ],
  },
  {
    title: "B.Sc. in Computer Science",
    org: "National Technical University “KhPI”",
    period: "Completed",
    points: [
      "Computer science foundation with emphasis on applied software engineering.",
      "Built practical experience across backend logic, databases, and technical problem solving.",
      "Paired academic work with hands-on projects in AI, automation, and web systems.",
    ],
  },
];

export const specialSkills = [
  "Analytical thinking and problem solving",
  "Data-driven decision making",
  "ML model evaluation and optimization",
  "Business requirement analysis for AI solutions",
  "Process automation and optimization",
  "Technical documentation and reporting",
  "Cross-functional collaboration",
  "User acceptance testing for AI systems",
];

export const projects: PortfolioProject[] = [
  {
    slug: "visioninsight",
    kicker: "AI video intelligence",
    category: "Applied AI platform",
    title: "VisionInsight",
    description:
      "A modular backend platform that transforms raw video streams into structured, machine-readable intelligence for monitoring, analytics, and downstream AI workflows.",
    outcome: "Raw video -> structured intelligence",
    image: "/images/projects/visioninsight-cover.png",
    imageAlt: "VisionInsight AI branded project cover",
    highlights: [
      "Designed a layered CV pipeline for detection, tracking, crowd dynamics, and event abstraction.",
      "Built the system to generate structured artifacts like summaries, stats, highlights, and JSONL event streams.",
      "Positioned the architecture for future multimodal expansion with audio events, embeddings, and LLM-based routing.",
    ],
    stack: ["Python", "FastAPI", "Computer Vision", "YOLO", "Docker", "JSONL"],
    links: [{ label: "GitHub", href: "https://github.com/DrBarga/visioninsight" }],
  },
  {
    slug: "grocery-ecommerce",
    kicker: "Commerce UX",
    category: "E-commerce experience",
    title: "Grocery / E-commerce Web App",
    description:
      "A responsive shopping experience focused on moving users smoothly from browsing to cart, checkout, order review, and final success state.",
    outcome: "Cleaner path from discovery to checkout",
    image: "/images/projects/ecommerce-flow.png",
    imageAlt: "E-commerce homepage for grocery shopping interface",
    highlights: [
      "Built the cart drawer, checkout page, order summary, and success flow as one consistent product experience.",
      "Focused on quantity controls, totals calculation, and responsive behavior across shopping states.",
      "Designed the interface to feel clear, lightweight, and conversion-oriented rather than cluttered.",
    ],
    stack: ["TypeScript", "React", "Responsive UI", "Checkout flow"],
    links: [{ label: "GitHub", href: "https://github.com/DrBarga/TS-Ecom" }],
  },
  {
    slug: "patient-monitoring-dashboard",
    kicker: "Health + AI concept",
    category: "Dashboard and monitoring",
    title: "AI-Powered Patient Monitoring Dashboard",
    description:
      "A web dashboard concept combining patient context, live vital signs, risk assessment, and computer-vision-assisted monitoring into one operational surface.",
    outcome: "Realtime clinical view with AI context",
    image: "/images/projects/patient-dashboard.png",
    imageAlt: "Patient monitoring dashboard with vital sign cards",
    highlights: [
      "Combined profile context, real-time vitals, trend views, and alerting into a clear clinical workflow.",
      "Explored how ML-based risk scoring and CV-based observation can live inside an understandable interface.",
      "Focused on explainability and signal clarity so the system remains interpretable, not just visually impressive.",
    ],
    stack: ["Dashboard UX", "Realtime data", "AI", "Computer Vision"],
    links: [],
    note: "Private concept build. More detail can be shared during a client conversation.",
  },
  {
    slug: "bim-services-website",
    kicker: "Service website",
    category: "Marketing site",
    title: "BIM Services Website",
    description:
      "A modern marketing site for BIM services with strong hierarchy, clean navigation, and service-led storytelling across portfolio, news, and contact touchpoints.",
    outcome: "Clear service positioning for BIM clients",
    image: "/images/projects/bim-services.png",
    imageAlt: "BIM services landing page screenshot",
    highlights: [
      "Structured the site around hero messaging, service areas, work samples, news, testimonials, and contact flow.",
      "Used a responsive layout and consistent visual system to keep a content-rich site easy to scan.",
      "Built for clarity and trust so potential clients understand the offer fast and know where to act.",
    ],
    stack: ["Nuxt.js", "Vue", "Marketing UX", "Responsive layout"],
    links: [{ label: "GitHub", href: "https://github.com/DrBarga/BIMPROVE" }],
  },
];

export const publicRepos = [
  {
    label: "Open source backend",
    name: "visioninsight",
    description:
      "Explainable crowd and event video analytics with FastAPI and structured outputs.",
    href: "https://github.com/DrBarga/visioninsight",
  },
  {
    label: "Live website",
    name: "ASKI Studio landing page",
    description:
      "A public Next.js marketing build deployed on Vercel with a clean presentation layer.",
    href: "https://github.com/DrBarga/ASKI-Studio-landing-page",
    demo: "https://aski-studio-landing-page.vercel.app",
  },
  {
    label: "Frontend flow",
    name: "TS-Ecom",
    description:
      "Public repository connected to the e-commerce interface and shopping flow work.",
    href: "https://github.com/DrBarga/TS-Ecom",
  },
  {
    label: "Client-style build",
    name: "BIMPROVE",
    description:
      "Nuxt/Vue project tied to BIM-focused service website work and interface experiments.",
    href: "https://github.com/DrBarga/BIMPROVE",
  },
];

export const stackGroups = [
  {
    kicker: "Frontend and product",
    name: "Interfaces people actually use",
    description:
      "For premium sites, dashboards, and app surfaces, I usually work with React and Next.js, backed by strong UI structure and fast iteration.",
    items: [
      "Next.js",
      "React",
      "TypeScript",
      "JavaScript",
      "Tailwind CSS",
      "Nuxt.js",
      "HTML5",
      "CSS3",
    ],
  },
  {
    kicker: "Backend and services",
    name: "APIs, auth, and business logic",
    description:
      "This is the layer where product requirements become reliable services, integrations, and workflows that can scale with real usage.",
    items: [
      "Node.js",
      "FastAPI",
      "Flask",
      "REST APIs",
      "WebSockets",
      "Async processing",
      "Authentication",
      "Redis",
    ],
  },
  {
    kicker: "AI and machine learning",
    name: "Applied intelligence, not hype",
    description:
      "I focus on ML and AI systems that can plug into products and operations, especially in computer vision, OCR, and automation-heavy scenarios.",
    items: [
      "PyTorch",
      "TensorFlow",
      "Computer Vision",
      "OCR",
      "Object Detection",
      "Face Recognition",
      "Multimodal Systems",
      "LangChain",
    ],
  },
  {
    kicker: "Data and infrastructure",
    name: "The layer that keeps things stable",
    description:
      "Good delivery depends on reproducible environments, clean deployment, and data systems that do not become bottlenecks later.",
    items: [
      "Docker",
      "Docker Compose",
      "Linux",
      "MySQL",
      "MongoDB",
      "SQL",
      "Pandas",
      "NumPy",
      "Git",
      "GitHub",
    ],
  },
  {
    kicker: "Flexible delivery",
    name: "Platforms when speed matters",
    description:
      "Not every project needs a custom stack. I also work with faster delivery platforms when they are the right answer for the scope and timeline.",
    items: ["WordPress", "WooCommerce", "Shopify", "Webflow", "Hostinger"],
  },
];

export const stackFlow = [
  {
    step: "01",
    title: "Interface layer",
    description:
      "Design the user-facing experience with the right balance of speed, clarity, motion, and responsiveness.",
  },
  {
    step: "02",
    title: "Application logic",
    description:
      "Define routes, services, APIs, auth, and workflow rules so the product behaves cleanly under real usage.",
  },
  {
    step: "03",
    title: "Data and infrastructure",
    description:
      "Set up storage, deployment, caching, and environment structure to keep the product stable and scalable.",
  },
  {
    step: "04",
    title: "AI capability",
    description:
      "Add machine learning, automation, OCR, or computer vision when the project benefits from it in a concrete way.",
  },
];

export const contactLinks = [
  {
    label: "Telegram",
    value: "@dr_barga",
    href: siteMeta.telegram,
    note: "The fastest way to start a conversation about a project.",
  },
  {
    label: "Email",
    value: siteMeta.email,
    href: `mailto:${siteMeta.email}`,
    note: "Best for detailed briefs, references, and collaboration context.",
  },
  {
    label: "LinkedIn",
    value: "bogdan-zelenskiy-a291a62b5",
    href: siteMeta.linkedin,
    note: "Professional profile, background, and long-form connection point.",
  },
  {
    label: "GitHub",
    value: "DrBarga",
    href: siteMeta.github,
    note: "Public repositories, experiments, and technical execution trail.",
  },
  {
    label: "Phone",
    value: "+380 97 198 8733",
    href: `tel:${siteMeta.phone}`,
    note: "Available when a project is already moving and a call is useful.",
  },
];
