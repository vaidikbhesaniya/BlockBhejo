import { HiMenuAlt4 } from "react-icons/hi";
import { AiOutlineClose } from "react-icons/ai";

import logo from "../../images/logo.png";
import { useState } from "react";

interface NavbarItemProps {
    title: string;
    classprops: string;
}

const NavbarItem: React.FC<NavbarItemProps> = ({ title, classprops }) => {
    return <li className={`mx-4 cursor-pointer ${classprops}`}>{title}</li>;
};
const Navbar = () => {
    const [toggleMenu, settoggleMenu] = useState<boolean>(false);
    return (
        <nav className="w-full flex md:justify-content justify-between items-center p-4">
            <div className="md:flex-[0.5] flex-initial items-center">
                <img src={logo} alt="logo" className="w-32 cursor-pointer" />
            </div>
            <ul className="text-white md:flex hidden list-none flex-row justify-between items-center flex-initial">
                {/* <NavbarItem /> */}

                {["Market", "Exchange", "Tutorial", "Wallets"].map((e) => (
                    <NavbarItem title={e} classprops="text-xl" />
                ))}

                <li className="bg-[#2952e3] py-2 px-7 rounded-full cursor-pointer hover:bg-[#2546bd]">
                    Login
                </li>
            </ul>

            <div className="flex relative">
                {toggleMenu ? (
                    <AiOutlineClose
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => settoggleMenu(false)}
                    />
                ) : (
                    <HiMenuAlt4
                        fontSize={28}
                        className="text-white md:hidden cursor-pointer"
                        onClick={() => settoggleMenu(true)}
                    />
                )}

                {toggleMenu && (
                    <ul className="z-10 fixed top-0  p-3 w-[70vw] h-screen shadow-2xl md:hidden list-none flex flex-col justify-center items-end rounded-md blue-glassmorphism right-0 text-white animate-slide-in ">
                        <li className="text-xl w-full my-2"></li>
                        <AiOutlineClose
                            onClick={() => settoggleMenu(false)}
                            className="absolute top-0 right-0 cursor-pointer"
                        />
                        {["Market", "Exchange", "Tutorial", "Wallets"].map(
                            (e) => (
                                <NavbarItem title={e} classprops="text-xl" />
                            )
                        )}
                    </ul>
                )}
            </div>
        </nav>
    );
};

export default Navbar;
