import Logo from '../../assets/logo.png'
import FooterLink from '../ui/FooterLink'
import Facebook from '../ui/icon/Facebook'
import Instagram from '../ui/icon/Instagram'
import Tiktok from '../ui/icon/Tiktok'
import Youtube from '../ui/icon/Youtube'
import IconMail from '../../assets/icono_mail.png'
import IconPhone from '../../assets/icono_telefono.png'
import IconPin from '../../assets/icono_mail.png'


export const Footer = () => {
  return (
    <footer className='flex gap-40 items-start py-20 px-35'>
      
        <div className='flex flex-col items-center gap-10'>
            <img src={Logo} alt="Logo AllinTravels" className='w-xs'/>
            <div className='flex gap-3 justify-between w-full'>
              <a href="https://www.instagram.com/" className='h-fit bg-bluetravel p-3 rounded-full transition-all hover:bg-yellowtravel hover:scale-110'>
                <Facebook width={"25"} height={"25"} color='white'/>
              </a>
              <a href="https://www.instagram.com/" className='h-auto bg-bluetravel p-3 rounded-full transition-all hover:bg-yellowtravel hover:scale-110'>
                <Instagram width={"25"} height={"25"} color='white'/>
              </a>
              <a href="https://www.instagram.com/" className='h-auto bg-bluetravel p-3 rounded-full transition-all hover:bg-yellowtravel hover:scale-110'>
                <Tiktok width={"25"} height={"25"} color='white'/>
              </a>
              <a href="https://www.instagram.com/" className='h-auto bg-bluetravel p-3 rounded-full transition-all hover:bg-yellowtravel hover:scale-110'>
                <Youtube width={"25"} height={"25"} color='white'/>
              </a>
            </div>
        </div>
        <nav>
          <ul className='flex flex-col gap-2'>
            <FooterLink href='/'>Inicio</FooterLink>
            <FooterLink href='/'>¿Quienes Somos?</FooterLink>
            <FooterLink href='/'>Viajes Grupales</FooterLink>
            <FooterLink href='/'>Viajes a la medida</FooterLink>
            <FooterLink href='/'>Contáctanos</FooterLink>
            <FooterLink href='/'>Alianzas Estratégicas</FooterLink>
            <FooterLink href='/'>Blogs</FooterLink>
            <FooterLink href='/'>Términos y Condiciones</FooterLink>
            <FooterLink href='/'>Política de Privacidad</FooterLink>
            <FooterLink href='/'>Registro Nacional de Turismo</FooterLink>
          </ul>
        </nav>
      <div>
        <div className='flex gap-1'>
          <img src='' alt='' />
        </div>
      </div>
    </footer>
  )
}


