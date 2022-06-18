export default function Footer () {
    return (
        <div className="flex flex-col p-10 text-xl" id="footer">
            <div className="text-highlight"><a href="mailto:rogerjoeyfan@gmail.com" target="_blank" rel="noopener noreferrer">rogerjoeyfan@gmail.com</a></div>
            <div className="text-highlight"><a href="https://github.com/ImNotRog" target="_blank" rel="noopener noreferrer">github.com/ImNotRog</a></div>

            <div className="mt-5">Useless Copyright:</div>
            <div className="text-highlight">© {new Date().getFullYear()}</div>
        </div>
    )
}