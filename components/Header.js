import Image from "next/image"
import {
    SearchIcon,
} from '@heroicons/react/outline'
import {
    MdFavoriteBorder,
    MdHomeFilled,
    MdOutlineExplore,
} from "react-icons/md";
import { BsChatDots } from "react-icons/bs";
import { FiPlusSquare } from "react-icons/fi";
import { RiMenu3Fill } from "react-icons/ri";

function Header() {
    return (
        <div className="bg-white h-16 w-full flex justify-center">
            <div className="max-w-5xl flex justify-between items-center w-full">
                <div className="relative h-16 w-24">
                    <Image
                        alt="logo"
                        layout="fill"
                        objectFit="contain"
                        src="/images/logo.png"
                    />
                </div>
                <div className="relative rounded-md items-center">
                    <div className="absolute inset-y-0 flex pl-3 pointer-events-none items-center">
                        <SearchIcon
                            className="text-gray-500 h-5 w-5"
                        />
                    </div>
                    <input className="w-full bg-gray-50 pl-10 text-sm lg:text-base outline-none border-gray focus:ring-gray-800 focus:border-gray-800 rounded-md" type="text" placeholder="search" />
                </div>
                <div className="flex flex-row justify-evenly items-center">
                    <MdHomeFilled className="hidden lg:inline-block text-gray-900 mx-1 h-8 w-8" />
                    <BsChatDots className="hidden lg:inline-block text-gray-900 mx-1 h-8 w-8" />
                    <MdFavoriteBorder className="hidden lg:inline-block text-gray-900 mx-1 h-8 w-8" />
                    <MdOutlineExplore className="hidden lg:inline-block text-gray-900 mx-1 h-8 w-8" />
                    <RiMenu3Fill className="lg:hidden inline-block text-gray-900 mx-1 h-8 w-8" />
                    <FiPlusSquare className="text-gray-900 mx-1 h-8 w-8" />

                    <div className="relative w-10 h-10 mx-1">
                        <Image
                            src="/images/avatar.png"
                            layout="fill"
                            className=" rounded-full"
                            objectFit="contain"
                            alt="profile-pic"
                        />

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
