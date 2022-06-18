import Link from "next/link";

export default function Nav() {
    return (
        <div className="absolute flex text-white font-cursive gap-5 p-5 lg:gap-[100px] text-xl">
            <div className="hover:underline"><Link href="/">Home</Link></div>
            <div className="hover:underline">Projects</div>
            <div className="hover:underline">Contact</div>
        </div>
    )
}