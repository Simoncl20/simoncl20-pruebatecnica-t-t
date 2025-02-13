import  { ReactNode } from 'react'

interface LinkButtonProps {
  children: ReactNode;
  href: string;
}

const LinkButton = ({ children, href }: LinkButtonProps) => {
  return (
    <li className='hover:font-semibold transition-transform duration-300 transform hover:scale-110'>
        <a href={href}>{children}</a>
    </li>
  )
}

export default LinkButton
