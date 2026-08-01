import type { ReactNode } from 'react'

type ButtonProps = {
  children: ReactNode
  href: string
  variant?: 'primary' | 'secondary'
  external?: boolean
}

export function Button({ children, href, variant = 'primary', external = false }: ButtonProps) {
  return (
    <a className={`button button--${variant}`} href={href} {...(external ? { target: '_blank', rel: 'noreferrer' } : {})}>
      {children}<span aria-hidden="true"> ↗</span>
    </a>
  )
}
