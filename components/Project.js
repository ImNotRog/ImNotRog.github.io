import { Link } from 'react-feather';


export default function Project (props) {
    const { data } = props;

    const { name, description, picture, links, languages, significant } = data;

    return <div className={'border-2 lg:aspect-square flex flex-col items-center rounded-xl px-7 rotate-[-10deg] ' + (significant ? 'text-highlight border-highlight' : '')}>
        <div className={"font-fatface underline underline-offset-4 lg:underline-offset-[15px] decoration-2 mb-3 " + (name.length > 5 ? 'text-3xl lg:text-[3rem] lg:my-5' : 'text-5xl lg:text-[5rem] lg:my-4')}>{name}</div>
        <div className="text-xl hidden lg:block">{description}</div>
        <div className="flex mt-auto items-center gap-5 my-5">
            <a className={links.github ? '' : 'invisible'} href={links.github} target="_blank" rel="noopener noreferrer">
                <img src={`svgs/github.svg`} width={40} />
            </a>

            <a href={links.link} target="_blank" rel="noopener noreferrer">
                <img src={picture ? `images/${picture}` : `svgs/link.svg`} className="rounded-lg lg:w-[80px] w-[40px]" />
            </a>

            <a className={links.p5 ? '' : 'invisible'} href={links.p5} target="_blank" rel="noopener noreferrer">
                <img src={`svgs/p5.svg`} width={40} />
            </a>
        </div>
    </div>
}