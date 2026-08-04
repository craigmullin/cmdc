export const site = {
  email: '',
  githubUrl: 'https://github.com/craigmullin',
  linkedinUrl: '',
  resumeUrl: '',
} as const

export const projects = [
  {
    title: 'Chat',
    status: 'Active prototype',
    description: 'A browser-based conversation mockup studio with editable messages, images, and social media layouts.',
    technology: 'React · TypeScript · Firebase · PWA',
    href: 'https://spikechat.craigmullin.com',
  },
  {
    title: 'Ledger',
    status: 'Concept / in development',
    description: 'A personal garage and maintenance-history app designed around real repair work, parts, torque specifications, receipts, and service intervals.',
    technology: 'Product design · Data modeling · Mobile-first web',
    href: '',
  },
  {
    title: 'Design',
    status: 'Evolving system',
    description: 'A personal design language for building coherent software, documents, and visual identities without sanding away their character.',
    technology: 'Design systems · Writing · Front-end architecture',
    href: 'https://github.com/craigmullin/design',
  },
] as const
