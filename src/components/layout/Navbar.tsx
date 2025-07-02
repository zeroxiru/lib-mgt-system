import { Link } from "react-router";
import Logo from "../../assets/Todo_Logo.png";
import { ModeToggle } from "../mode-toggle";
export default function Navbar() {
  return (
    <nav className="flex mx-auto w-full sticky top-0 z-30 gap-5 bg-white  shadow-md px-24">
      <div className="flex items-center">
        <img
          src={Logo}
          alt="Logo"
          className="h-8 w-auto transition duration-300 dark:grayscale dark:brightness-150"
        />
        <span className="font-bold ml-2">Lib-Mgt-Sys</span>
      </div>
      <div className="flex ml-auto items-center gap-3">
        <Link to="/">Home</Link>
        <Link to="/all-books">All-Books</Link>
        <Link to="/add-books">Add-Books</Link>
        <Link to="/borrow-summary">Borrow-Summary</Link>
      </div>
      <div className="ml-auto">
        <ModeToggle></ModeToggle>
      </div>
    </nav>
  );
}
