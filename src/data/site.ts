export const site = {
  email: '',
  githubUrl: 'https://github.com/craigmullin',
  linkedinUrl: '',
  resumeUrl: '',
} as const

export const projects = [
  {
    title: 'DartStat',
    status: 'Live app',
    description: 'A mobile-first darts practice tracker for recording every throw and reviewing session and lifetime statistics.',
    technology: 'React · TypeScript · Firebase · PWA',
    href: 'https://dartstat.craigmullin.com',
  },
  {
    title: 'Mimichat',
    status: 'Active prototype',
    description: 'A browser-based conversation mockup studio with editable messages, images, and social media layouts.',
    technology: 'React · TypeScript · Firebase · PWA',
    href: 'https://mimichat.craigmullin.com',
  },
  {
    title: 'SpikeStat',
    status: 'Live app',
    description: 'A volleyball match and player-stat tracker for recording sets courtside and reviewing team, tournament, and player totals.',
    technology: 'React · TypeScript · Firebase',
    href: 'https://spikestat.craigmullin.com',
  },
  {
    title: 'Ledger',
    status: 'Live app',
    description: 'A personal garage and maintenance-history app designed around real repair work, parts, torque specifications, receipts, and service intervals.',
    technology: 'Product design · Data modeling · Mobile-first web',
    href: 'https://ledger.craigmullin.com/',
  },
  {
    title: 'Design',
    status: 'Evolving system',
    description: 'A personal design language for building coherent software, documents, and visual identities without sanding away their character.',
    technology: 'Design systems · Writing · Front-end architecture',
    href: 'https://github.com/craigmullin/design',
  },
] as const
