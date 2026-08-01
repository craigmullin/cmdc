export const site = {
  email: '',
  githubUrl: 'https://github.com/craigmullin',
  linkedinUrl: '',
  resumeUrl: '',
} as const

export const projects = [
  {
    title: 'Spikechat',
    status: 'Active prototype',
    description: 'A PWA for composing realistic fictional conversations with editable messages, images, and social-post formats.',
    technology: 'React · TypeScript · Firebase · PWA',
    href: '',
  },
  {
    title: 'Personal Vehicle Maintenance',
    status: 'Concept / in development',
    description: 'A personal garage and maintenance-history app designed around real repair work, parts, torque specifications, receipts, and service intervals.',
    technology: 'Product design · Data modeling · Mobile-first web',
    href: '',
  },
  {
    title: 'The Mullin Design Language',
    status: 'Evolving system',
    description: 'A personal design language for building coherent software, documents, and visual identities without sanding away their character.',
    technology: 'Design systems · Writing · Front-end architecture',
    href: 'https://github.com/craigmullin/mullin-design-language',
  },
] as const
