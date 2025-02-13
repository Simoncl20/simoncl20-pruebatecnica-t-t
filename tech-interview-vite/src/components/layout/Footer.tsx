import Logo from '../../assets/logo.png'
import Instagram from '../ui/icon/Instagram'

export const Footer = () => {
  return (
    <footer className='flex '>
        <div className='flex flex-col items-center'>
            <img src={Logo} alt="Logo AllinTravels" />
            <a href="" className='h-auto bg-blue-500 p-2 rounded-full'><Instagram width={"45"} height={"45"}/></a>
        </div>
    </footer>
  )
}
