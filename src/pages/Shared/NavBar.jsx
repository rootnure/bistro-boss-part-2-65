import { NavLink } from "react-router-dom";
import Container from "../../components/Container";

const NavBar = () => {
    const navItems = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/">Home</NavLink></li>
    </>
    return (
        <>
            <div className="bg-black opacity-80 text-white fixed top-0 z-10 left-0 right-0">
                <Container>
                    <div className="navbar">
                        <div className="navbar-start">
                            <div className="dropdown">
                                <label tabIndex={0} className="btn btn-ghost lg:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                                </label>
                                <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                                    {navItems}
                                </ul>
                            </div>
                            <a className="btn btn-ghost text-xl">Bistro Boss</a>
                        </div>
                        <div className="navbar-center hidden lg:flex">
                            <ul className="menu menu-horizontal px-1 gap-x-2">
                                {navItems}
                            </ul>
                        </div>
                        <div className="navbar-end">
                            <a className="btn">Button</a>
                        </div>
                    </div>
                </Container>
            </div>
        </>
    );
};

export default NavBar;