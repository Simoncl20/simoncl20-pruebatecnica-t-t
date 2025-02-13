import { Chevron } from './icon/Chevron'

const HeroCard = ({title, image, href} : {title: string, image: string, href: string}) => {
    return (
        <article className="h-[230px] w-[420px] rounded-3xl bg-cover outline-[15px]  outline-white/60 flex flex-col justify-end items-end"
        style={{backgroundImage: `url(${image})`}}>
            <a className="text-white text-2xl font-semibold pb-5 px-4 flex gap-3 items-center" 
            href={href}>{title}
                <Chevron color='white' size={35}/>
            </a>
        </article>
    )
}

export default HeroCard
