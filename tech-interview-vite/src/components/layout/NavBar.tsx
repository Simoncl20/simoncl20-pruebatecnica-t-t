import logo from '../../assets/logo.png'
import LinkButton from '../ui/LinkButton'

const NavBar = () => {
  return (
    <nav className='fixed top-0 left-0 z-50 w-full flex align-center justify-between px-24 py-10'>
      <img src={logo} alt='Logo All In Travels' />
      <ul className='flex text-black gap-25 font-light p-4'>
        <LinkButton href='/'>Inicio</LinkButton>
        <LinkButton href='/about'>Nosotros</LinkButton>
        <LinkButton href='/services'>Viajes</LinkButton>
        <LinkButton href='/contact'>Blogs</LinkButton>
        <LinkButton href='/login'>Contacto</LinkButton>
      </ul>
    </nav>
  )
}

export default NavBar
