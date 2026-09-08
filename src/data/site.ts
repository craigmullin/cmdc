export const site = {
  email: 'craig@craigmullin.com',
  githubUrl: 'https://github.com/craigmullin',
  linkedinUrl: 'https://www.linkedin.com/in/craig-mullin',
  resumeUrl: '/craig_mullin_resume.pdf',
} as const

export const projects = [
  {
    title: 'DartStat',
    description: 'A mobile-first darts practice tracker for recording every throw and reviewing session and lifetime statistics.',
    technology: 'React · TypeScript · Firebase · PWA',
    href: 'https://dartstat.craigmullin.com',
  },
  {
    title: 'WordFlare.',
    description: 'A cheerful, unhurried word-finding game with hundreds of offline puzzles, custom source words, and a pressure-free Zen Mode.',
    technology: 'React · TypeScript · Firebase · PWA',
    href: 'https://wordflare.craigmullin.com',
  },
  {
    title: 'SpikeStat',
    description: 'A volleyball match and player-stat tracker for recording sets courtside and reviewing team, tournament, and player totals.',
    technology: 'React · TypeScript · Firebase',
    href: 'https://spikestat.craigmullin.com',
  },
  {
    title: 'Ledger',
    description: 'A personal garage and maintenance-history app designed around real repair work, parts, torque specifications, receipts, and service intervals.',
    technology: 'Product design · Data modeling · Mobile-first web',
    href: 'https://ledger.craigmullin.com/',
  },
  {
    title: 'Design',
    description: 'A personal design language for building coherent software, documents, and visual identities without sanding away their character.',
    technology: 'Design systems · Writing · Front-end architecture',
    href: 'https://github.com/craigmullin/design',
  },
] as const
