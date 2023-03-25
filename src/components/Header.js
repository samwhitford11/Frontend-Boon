import Logo from "../assests/bOOn.png"


export default function Header() {
    return (
    <div className="'fixed w-full h-[80px] flex justify-between items-center px-4 bg-orange-400 text-gray-300'" >
        <img src={Logo} alt="Logo" style={{width: '200px'}} />
        <p>Keep track of gift ideas for any occasion.</p>
    </div>
    )
    
}