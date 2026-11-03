export const PROFILE = {
  name: 'Alex Rajdhami',
  role: 'IT Support & Junior Developer',
  location: 'Ashford, Surrey, UK',
  email: 'alexrajdhami611@gmail.com',
  github: 'https://github.com/AlexRajdhami',
  linkedin: 'https://linkedin.com/in/alexrajdhami',
  cv: 'Alex_Rajdhami_CV.pdf',
};

export type Project = {
  title: string;
  liveLabel?: string;
  tag: string;
  summary: string;
  points: string[];
  stack: string[];
  image: string;
  height: number; // image height at 1200px wide (prevents layout shift)
  live: string;
  code: string;
};

export const PROJECTS: Project[] = [
  {
    title: 'AI Career Recommender',
    tag: 'Final-year dissertation',
    summary:
      'A full-stack web app that recommends UK careers from a user’s skills and interests, then shows live job adverts and the skills gap to close.',
    points: [
      'Hybrid machine-learning model (content-based + collaborative filtering), Precision@6 of 0.83 across 51 UK careers',
      'JWT login with bcrypt hashing, rate limiting and a security hub with phishing awareness checks',
      'Live job adverts from the Reed API; deployed on Render (API) and Vercel (frontend)',
    ],
    stack: ['Python', 'Flask', 'React', 'scikit-learn', 'spaCy', 'SQL'],
    image: 'projects/ai-career.webp',
    height: 755,
    live: 'https://ai-career-recommender-neon.vercel.app',
    code: 'https://github.com/AlexRajdhami/ai-career-recommender',
  },
  {
    title: 'Freelance Escrow DApp',
    tag: 'Blockchain',
    summary:
      'An Ethereum escrow where a client’s payment is locked in a smart contract and only released when the work is approved, with an arbitrator for disputes.',
    points: [
      'Factory pattern, state machine, role-based access and a reentrancy guard on every payout',
      '16 smart-contract tests and 5 frontend tests run by GitHub Actions before every deploy',
      'Live on the Sepolia test network with MetaMask and one-click network switching',
    ],
    stack: ['Solidity', 'Truffle', 'React', 'ethers.js', 'GitHub Actions'],
    image: 'projects/escrow.webp',
    height: 806,
    live: 'https://alexrajdhami.github.io/freelance-escrow-dapp/',
    code: 'https://github.com/AlexRajdhami/freelance-escrow-dapp',
  },
  {
    title: 'Fashion-MNIST & Wine Clustering',
    tag: 'Machine learning',
    summary:
      'Two machine-learning studies: recognising clothing in 70,000 images, and finding natural groups of white wines from their chemistry.',
    points: [
      'CNN reached 90.4% test accuracy, beating an ANN (87.3%) and Logistic Regression (84.4%)',
      'K-Means vs K-Medoids on 4,898 wines, compared with silhouette scores and PCA',
      'University group coursework (team of 5) – I wrote the code; runs in one click on Google Colab',
    ],
    stack: ['Python', 'TensorFlow / Keras', 'scikit-learn', 'pandas', 'Colab'],
    image: 'projects/ml.webp',
    height: 750,
    liveLabel: 'Open in Colab',
    live: 'https://colab.research.google.com/github/AlexRajdhami/ml-classification-clustering/blob/main/notebooks/01_fashion_mnist_classification.ipynb',
    code: 'https://github.com/AlexRajdhami/ml-classification-clustering',
  },
  {
    title: 'Lumière Studio',
    tag: 'Client website template',
    summary:
      'A photography portfolio and booking website template with a filterable gallery, lightbox, packages and a validated booking form.',
    points: [
      'Accessible lightbox with keyboard controls and a filterable gallery',
      'Responsive images: photos optimised from 29 MB down to 3 MB',
      'Typed with TypeScript, tested with Vitest, deployed by GitHub Actions',
    ],
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite', 'Vitest'],
    image: 'projects/lumiere.webp',
    height: 750,
    live: 'https://alexrajdhami.github.io/photography-portfolio/',
    code: 'https://github.com/AlexRajdhami/photography-portfolio',
  },
  {
    title: 'Synth',
    tag: 'Online clothing store',
    summary:
      'A minimal monochrome clothing shop with search, filters, a wishlist and a cart that supports promo codes and a validated checkout.',
    points: [
      'Built with plain HTML, CSS and JavaScript modules – no framework',
      'Cart, wishlist and filters saved in the browser between visits',
      '16 unit tests for cart maths, promo codes and form validation',
    ],
    stack: ['HTML', 'CSS', 'JavaScript', 'Node test runner'],
    image: 'projects/synth.webp',
    height: 630,
    live: 'https://alexrajdhami.github.io/Synth/',
    code: 'https://github.com/AlexRajdhami/Synth',
  },
];

export const SKILLS: { group: string; items: string[] }[] = [
  {
    group: 'IT support',
    items: [
      'Windows & Microsoft 365',
      'Outlook, Teams & Excel',
      'Ticket handling',
      'Troubleshooting & escalation',
      'Linux & Bash',
      'Explaining tech simply',
    ],
  },
  {
    group: 'Security',
    items: [
      'Phishing awareness',
      'Secure login (JWT, bcrypt)',
      'GDPR & data protection',
      'Data Security and Protection trained',
    ],
  },
  {
    group: 'Development',
    items: ['Python', 'JavaScript / TypeScript', 'React', 'Flask', 'SQL', 'Machine learning (scikit-learn, Keras)', 'Solidity', 'Tailwind CSS'],
  },
  {
    group: 'Tools & design',
    items: ['Git & GitHub', 'GitHub Actions CI/CD', 'Vercel & Render', 'pytest, Vitest, Jest', 'Figma', 'Photoshop & Illustrator'],
  },
];

export const STRENGTHS = [
  {
    title: 'Calm with people',
    text: 'Two years in health and social care taught me to listen, stay patient and explain things simply – exactly what a good service desk needs.',
  },
  {
    title: 'Reliable and careful',
    text: 'Medication records and care notes leave no room for mistakes. I follow procedures, write things down and see tasks through.',
  },
  {
    title: 'Confidential by habit',
    text: 'I’m used to handling personal and sensitive information under GDPR and data protection rules every day.',
  },
];

export const EXPERIENCE = [
  {
    role: 'Web Developer & Booking Administrator',
    org: 'Tenerife Trusted Transfers (remote)',
    dates: 'Sep 2026 – Present',
    points: [
      'Manage the company website and the transfer booking and ticketing system',
      'Handle booking tickets and customer enquiries, resolving booking and technical issues',
      'Create website content and social media updates to support bookings',
    ],
  },
  {
    role: 'Care Assistant',
    org: 'Caremark; Avant Health Care',
    dates: 'May 2024 – Sep 2026',
    points: [
      'Delivered person-centred home care and kept accurate digital care records (including MAR)',
      'Communicated clearly with clients, families and colleagues, following safeguarding and data rules',
    ],
  },
  {
    role: 'Kitchen Assistant',
    org: 'Shere Khan Restaurant',
    dates: 'Dec 2023 – May 2024',
    points: ['Worked quickly and reliably as part of a busy team'],
  },
];

export const EDUCATION = [
  {
    title: 'BSc (Hons) Computer Science',
    org: 'University of East London',
    dates: 'Graduated 2026',
    text: 'Software development, databases, data management, system design and blockchain app development.',
  },
];

export const CERTS = [
  { title: 'Data Security and Protection', org: 'Better Security, Better Care', year: '2026' },
  { title: 'Care Certificate (Standards 1–15)', org: 'Social Works Ltd', year: '2024' },
  { title: 'Level 2 Certificate in Medication Handling & Administration', org: 'Highfield', year: '2024' },
  { title: 'Microsoft Azure Fundamentals (AZ-900)', org: 'Currently studying', year: 'In progress' },
];

export type DesignItem = { src: string; title: string; client: string; cat: 'Social media' | 'Web & UI' | 'Print & apparel' };

export const DESIGN_CATS = ['All', 'Social media', 'Web & UI', 'Print & apparel'] as const;

export const DESIGNS: DesignItem[] = [
  { src: 'design/ui-agency.webp', title: 'Creative agency landing page', client: 'Pixel Digital Art', cat: 'Web & UI' },
  { src: 'design/agency-window.webp', title: '“Your website is your window”', client: 'Digital agency campaign', cat: 'Social media' },
  { src: 'design/cake-birthday.webp', title: 'Birthday cakes promotion', client: 'Cake Heist bakery', cat: 'Social media' },
  { src: 'design/ui-tech-store.webp', title: 'Gaming tech store homepage', client: 'Concept UI', cat: 'Web & UI' },
  { src: 'design/monitor-curved.webp', title: 'Curved monitor product ad', client: 'Electronics retailer', cat: 'Social media' },
  { src: 'design/tshirt.webp', title: 'Florida 1989 T-shirt graphic', client: 'Apparel design', cat: 'Print & apparel' },
  { src: 'design/study-usa.webp', title: '“Why study in the USA?”', client: 'Education consultancy', cat: 'Social media' },
  { src: 'design/agency-build.webp', title: '“We build a website that builds your business”', client: 'Digital agency campaign', cat: 'Social media' },
  { src: 'design/poster-talking.webp', title: 'Typographic poster', client: 'Personal project', cat: 'Print & apparel' },
  { src: 'design/router.webp', title: 'Wi-Fi router product ad', client: 'Electronics retailer', cat: 'Social media' },
  { src: 'design/cake-fathers-day.webp', title: 'Father’s Day special', client: 'Cake Heist bakery', cat: 'Social media' },
  { src: 'design/ui-agency-full.webp', title: 'Agency website – full page', client: 'Pixel Digital Art', cat: 'Web & UI' },
];
