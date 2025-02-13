import React from 'react'
import HeaderImg from '../../assets/header.png'
import HeroCard from '../ui/HeroCard'
import ViajesGrupales from '../../assets/viajes_grupales.png'
import ViajesMedida from '../../assets/viajes_a_la_medida.png'
import DestinosPareja from '../../assets/destinos_para_parejas.png'


const Hero = () => {
  return (
    <section
      className="relative w-full h-[88vh] bg-cover justify-center items-center flex flex-col"
      style={{ backgroundImage: `url(${HeaderImg})` }}
    >
      <div className="absolute bottom-0 left-0 right-0 h-1/3
              bg-gradient-to-b from-transparent to-black/50 "></div>

      <div className='flex flex-col items-center justify-center gap-4 pb-10'>
        <h1 className='text-white text-8xl font-bold tracking-[0.3em]'>THE TRAVEL</h1>
        <h2 className='text-yellowtravel font-bold text-4xl tracking-[1.5em]'>EXPERIENCE</h2>
      </div>
      <div className='flex gap-20 mt-10 absolute bottom-0 pb-15'>
        <HeroCard title='Viajes Grupales' image={ViajesGrupales} href='/explore' />
        <HeroCard title='Viajes a la medida' image={ViajesMedida} href='/explore' />
        <HeroCard title='Destinos para pareja' image={DestinosPareja} href='/explore' />
      </div>
    </section>
  )
}

export default Hero
