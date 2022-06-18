export default function Heading (props) {
    return (
        <div className="group mb-2 mt-10 relative inline-block pr-3">
            <div
                className="font-title leading-[.8] text-[100px] absolute left-3 top-3 group-hover:left-4 group-hover:top-4 text-transparent transition-all duration-300"
                style={{ WebkitTextStroke: '2px #E5E5E5' }}
            >
                {props.text}
            </div>
            <div className="font-title leading-[.8] text-[100px] relative z-10">
                {props.children}
            </div>
        </div>
    )
}