import { Link } from "react-router"
import Logo from "../../assets/Todo_Logo.png"
import { ModeToggle } from "../mode-toggle"
export default function Navbar() { 
    return ( 
        <nav className="max-w-7xl mx-auto h-16 flex items-center gap-3 px-5">
            <div className="flex items-center">
                <img src={Logo} alt="Logo" className="h-8 w-auto"/>
            <span className="font-bold ml-2">TaskMaster</span>
            </div>
            <Link to="/">Tasks</Link>
            <Link to="/users">Users</Link>
            <div className="ml-auto">
                <ModeToggle></ModeToggle>
            </div>
        </nav>
    )
}