import React, { ReactNode } from 'react'

const FooterLink = ({children, href} : {children: ReactNode, href: string}) => {
  return (
    <li className='hover:font-semibold transition-transform duration-300 transform hover:scale-110'>
        <a href={href}>{children}</a>
    </li>
  )
}

export default FooterLink