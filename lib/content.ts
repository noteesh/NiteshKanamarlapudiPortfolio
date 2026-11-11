// Single source of truth for content shown on both the home page and the sub-pages.
import type { IconType } from 'react-icons';
import { FaAws } from 'react-icons/fa';
import { SiPalantir, SiBankofamerica } from 'react-icons/si';

export type Experience = {
  company: string;
  role: string;
  period: string;
  team?: string;
  focus?: string;
  // Either an icon component or an image in /public, mirroring the certifications page.
  icon?: IconType;
  iconColor?: string;
  iconImage?: string;
};

export const experiences: Experience[] = [
  {
    company: 'Palantir Technologies',
    role: 'Incoming Forward Deployed Engineer',
    period: '2027',
    team: 'New grad',
    icon: SiPalantir,
    iconColor: 'text-white',
  },
  {
    company: 'Amazon Web Services',
    role: 'Software Development Engineer Intern',
    period: 'Aug 2026 – Nov 2026',
    team: 'EC2 High Performance Networking team',
    icon: FaAws,
    iconColor: 'text-orange-400',
    focus: 'Distributed systems & networking infrastructure',
  },
  {
    company: 'Bank of America',
    role: 'Software Engineering Intern',
    period: 'Jun 2026 – Aug 2026',
    team: 'Authentication team',
    icon: SiBankofamerica,
    iconColor: 'text-red-600',
    focus: 'Distributed systems & security',
  },
  {
    company: 'WorldQuant',
    role: 'Machine Learning Engineer',
    period: 'Jul 2024 – Sep 2024',
    focus: 'Machine learning & data pipelines',
    iconImage: '/images/worldquant-logo.png',
  },
];

export type Award = {
  place: 1 | 2 | 3; // drives the gold / silver / bronze trophy color
  label: string;
};

export const trophyColor: Record<Award['place'], string> = {
  1: 'text-yellow-400', // gold
  2: 'text-gray-300', // silver
  3: 'text-amber-600', // bronze
};

export type Project = {
  title: string;
  date: string; // the hackathon name for hackathon projects
  awards: Award[];
  // Two sentences: the problem it solves, and how it solves it technically.
  description: string;
  technologies: string[];
  github: string | null;
  demo: string | null;
  devpost: string | null;
  blog: string | null;
};

export const projects: Project[] = [
  {
    title: 'SwarmShield',
    date: 'IBM SkillsBuild AI Agents Hackathon 2026',
    awards: [{ place: 1, label: '1st Place Overall' }],
    description:
      'Contamination investigations in buildings take 4–8 hours; SwarmShield cuts that to about 2 minutes at under $0.20 each. Built with Sagnik Saha, it runs 7 specialist agents on IBM watsonx Orchestrate, checked by a Watchdog agent for hallucinations, and drives Arduino hardware through embedded C++ to shut off HVAC in real time.',
    technologies: ['IBM watsonx Orchestrate', 'Multi-Agent Systems', 'Arduino', 'C++', 'Embedded Systems'],
    github: 'https://github.com/SagnikSaha01/SwarmShield',
    demo: null,
    devpost: null,
    blog: 'https://www.linkedin.com/pulse/ibm-watsonx-orchestrate-building-swarmshield-nitesh-kanamarlapudi-n2vbe/',
  },
  {
    title: 'VerdictX',
    date: 'HackDuke 2026',
    awards: [
      { place: 1, label: '1st Place DigitalOcean Track' },
      { place: 2, label: '2nd Place Finance Track' },
    ],
    description:
      'Denials for loans, insurance, housing, and benefits are hard to challenge without a lawyer. VerdictX runs an adversarial courtroom of IBM watsonx Orchestrate agents that attack the denial, defend it, and judge the debate against real regulatory text, then drafts an appeal letter when the challenges hold up.',
    technologies: ['IBM watsonx Orchestrate', 'React', 'Node.js', 'MongoDB', 'Auth0', 'Twilio'],
    github: 'https://github.com/noteesh/HackDuke',
    demo: null,
    devpost: 'https://devpost.com/software/verdictx',
    blog: null,
  },
  {
    title: 'AURA',
    date: 'HackUNC 2026',
    awards: [
      { place: 1, label: '1st Place MongoDB Track' },
      { place: 3, label: '3rd Place Overall' },
    ],
    description:
      'Post-operative delirium often goes undetected because screening needs a specialist. AURA screens for it in minutes from a browser camera, tracking 6 ocular biomarkers with MediaPipe and comparing each patient against their own pre-surgery baseline in MongoDB, with Gemini 2.5 Flash grounded in clinical research to interpret the results.',
    technologies: ['MediaPipe', 'Gemini 2.5 Flash', 'MongoDB', 'Computer Vision'],
    github: 'https://github.com/noteesh/AURA-Advanced-Under-eye-Response-Assessment',
    demo: null,
    devpost: 'https://devpost.com/software/aura-automated-undereye-recovery-assessment',
    blog: null,
  },
  {
    title: 'Reflectra',
    date: 'Duke AI Hackathon 2025',
    awards: [{ place: 3, label: '3rd Place Health & Wellness' }],
    description:
      'People lose hours to unintentional browsing without ever seeing the pattern. Reflectra is a Chrome extension that classifies browsing intent with LangChain and GPT-4o-mini and lets users reflect on their habits through a RAG chat backed by Pinecone.',
    technologies: ['React', 'ExpressJS', 'LangChain', 'GPT-4o-mini', 'Pinecone', 'Supabase', 'Chrome Extension API'],
    github: 'https://github.com/SagnikSaha01/Reflectra',
    demo: null,
    devpost: 'https://devpost.com/software/reflectra-ngvlpw',
    blog: null,
  },
  {
    title: 'Eye in the Sky',
    date: 'LA Hacks 2026',
    awards: [],
    description:
      'Realistic emergency response training is expensive and hard to stage. Eye in the Sky is a mixed-reality trainer for Meta Quest 2, built in Unity with the Meta XR SDK, that uses the Scene API so virtual fire adapts to the layout of the real room.',
    technologies: ['Unity', 'Meta XR SDK', 'Scene API', 'Meta Quest 2', 'Mixed Reality'],
    github: null,
    demo: null,
    devpost: 'https://devpost.com/software/eye-in-the-sky-dt2vxn',
    blog: null,
  },
  {
    title: 'Facial Emotion Recognition · Escape Enterprises',
    date: 'Jun 2025 – Dec 2025',
    awards: [],
    description:
      'An app with 20,000+ active users needed to read user mood in real time to power mood-aware features. Built during an ML internship at Escape Enterprises, the OpenCV and Vision Transformer model reaches ~88% accuracy and cut inference costs by ~40%.',
    technologies: ['OpenCV', 'Vision Transformer', 'TensorFlow', 'Keras', 'Firebase', 'Python'],
    github: null,
    demo: null,
    devpost: null,
    blog: null,
  },
];

export type ResearchProject = {
  title: string;
  lab: string;
  period: string;
  mentor?: string;
  summary: string; // short line for the home page card
  description: string[];
  link?: string;
};

export const researchProjects: ResearchProject[] = [
  {
    title: 'LLM-Guided Deep RL for Multi-Tier LEO Satellite Networks (Replication)',
    lab: 'NICE Lab · Dr. Yuchen Liu',
    mentor: 'Zhiying Wang, Ph.D. Student',
    period: '2026',
    summary:
      'Small-scale replication of an LLM-guided deep RL approach to handover and resource allocation in LEO satellite networks',
    description: [
      'Replicated the core ideas of "LLM-guided DRL for Multi-tier LEO Satellite Networks with Hybrid FSO/RF Links" (Li et al., 2025) as a small-scale demo',
      'Implemented the LEO orbit model, HAP Gauss-Markov mobility, FSO (Gamma-Gamma fading) and RF/OFDM (Nakagami-m) channel models, and the MDP formulation from the paper',
      'Built a Truncated Quantile Critics (TQC) agent with dynamic action masking that uses an LLM as a meta-controller to retune its own hyperparameters during training, compared against a no-LLM baseline',
    ],
    link: 'https://github.com/noteesh/LEO-Satellite-LLM-Optimization-Testing',
  },
  {
    title: 'Multiplayer Coding Efficacy Research',
    lab: 'NCSU Game2Learn Research Lab',
    period: 'Dec 2023 - Jun 2024',
    mentor: 'Yasitha Rajapaksha, Ph.D. Student',
    summary:
      'Studied the efficacy of multiplayer coding games for teaching elementary programming concepts to young students',
    description: [
      'Researched the efficacy of multiplayer coding under mentorship from Computer Science Ph.D. student Yasitha Rajapaksha',
      'Utilized "BOTS" block-based programming game to run experiments studying young students on the efficacy of learning elementary programming concepts through multiplayer games',
      'Developed research paper and presented findings at symposium upon study completion',
    ],
  },
  {
    title: 'Dual-Stack Network Navigation & Security',
    lab: 'Network Security & AI Research',
    period: 'Aug 2023 - Feb 2024',
    mentor: 'Dr. Yuchen Liu',
    summary:
      'Developed Python-based network monitoring tool using Scapy for packet analysis and malicious user detection',
    description: [
      'Initiated Dual-Stack Network Navigation research under guidance from distinguished professor in networking and artificial intelligence, Dr. Yuchen Liu',
      'Developed comprehensive research plan for implementing advanced network monitoring tools via Python-based solution, utilizing the Scapy library',
      'Built network monitoring tool using Scapy for packet capturing to analyze risk of malicious users across dual-stack networks through logging and alert mechanisms',
    ],
  },
];
