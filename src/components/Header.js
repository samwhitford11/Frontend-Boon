import Logo from "../assests/bOOn.png"


export default function Header() {
    return (
    <div className="'fixed w-full h-[80px] md:flex md:items-center md:justify-center md:p-6 px-4 bg-orange-400 text-white'" >
        <img src={Logo} alt="Logo" style={{width: '200px'}} />
        <p className="text-white">Keep track of gift ideas for any occasion.</p>
    </div>
    )
    
}