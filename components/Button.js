export default function Button (props) {
    return (
        <div className="relative">
            <div onClick={props.onClick} className="peer my-3 rounded-lg text-2xl bg-highlight font-fatface px-4 py-2 relative inline-block text-bg1 z-10 cursor-pointer">
                {props.children}
            </div>
            <div className="absolute my-3 rounded-lg text-transparent left-2 top-2 peer-hover:left-3 peer-hover:top-3 border-2 text-2xl font-fatface px-4 py-2 transition-all duration-300">
                {props.children}
            </div>
        </div>
    )
}