"use client";
import React, { useState } from "react";
import 'boxicons'
import "./header.css";
import {
    Popover,
    PopoverButton,
    PopoverGroup,
    PopoverPanel,
} from "@headlessui/react";
import {
    Bars3Icon,
    XMarkIcon,
    ChevronDownIcon,
} from "@heroicons/react/24/outline";
import video from "../assets/video.mp4"; // Import your video file here

const products = [
    {
        name: "English",
        href: "#",
    },
    {
        name: "Polski",
        href: "#",
    },
    {
        name: "Español",
        href: "#",
    },
    {
        name: "Português",
        href: "#",
    },
];

const options = [
    { label: "SEGMENTS", href: "#segments" },
    { label: "MAP", href: "#Map" },
    { label: "TECHNOLOGY", href: "#Tech" },
];

function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [selectedOption, setSelectedOption] = useState(" ");
    const [menuClass, setMenuClass] = useState("");
    const [selectedLang, setSelectedLang] = useState(null);

    const handleSelectLang = (lang) => {
        setSelectedLang(lang === selectedLang ? null : lang);
    };

    const handleOpenMenu = () => {
        setMenuClass("mobile-menu-enter");
        setMobileMenuOpen(true);
    };

    const handleCloseMenu = () => {
        setMenuClass("mobile-menu-exit");
        setTimeout(() => {
            setMobileMenuOpen(false);
            setMenuClass("");
        }, 500); // Duration of the slide out animation
    };

    return (
        <header className="Header-contain relative">
            {/* Video background */}
            <video autoPlay loop muted className="absolute top-0 left-0 object-cover w-full h-50vh">
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
            </video>

            <nav
                aria-label="Global"
                className="mx-auto flex items-center justify-between p-3 lg:px-8 navbar relative z-10"
            >
                <div className="flex lg:flex-1 lg:max-w-md">
                    <a href="#" className="-m-1.5 p-1.5">
                        <span className="sr-only">Your Company</span>
                        <p className="company-Name">
                            <span className="text-white font-extralight" > OSIEDLE </span> <br /> <strong className="text-white" > MALINOWSKIEGO </strong>
                        </p>
                    </a>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        onClick={handleOpenMenu}
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
                    >
                        <span className="sr-only">Open main menu</span>
                        <Bars3Icon aria-hidden="true" className="mobile-menu-icon " />
                    </button>
                </div>

                <PopoverGroup className="hidden lg:flex ">
                    {options.map((option) => (
                        <a
                            href={option.href}
                            key={option.label}
                            onClick={() => setSelectedOption(option.label)}
                            className={`nav-opt px-4 d leading-6 text-white-300 ${selectedOption === option.label ? "nav-opt-underline" : ""
                                }`}
                        >
                            {option.label}
                        </a>
                    ))}
                </PopoverGroup>

                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <div>
                        <Popover className="relative">
                            <PopoverButton className="lang-select flex items-center gap-x-1 text-sm font-semibold leading-6 text-white">
                                ENG
                                <ChevronDownIcon
                                    aria-hidden="true"
                                    className="h-5 w-5 flex-none text-white text-black"
                                />
                            </PopoverButton>

                            <PopoverPanel
                                transition
                                className="absolute -left-1 top-full z-10 mt-3  w-40 overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                            >
                                <div className="p-3">
                                    {products.map((item) => (
                                        <div
                                            key={item.name}
                                            className="header-subopt group relative flex items-center gap-x-6 rounded-xl p-3 text-sm leading-6"
                                        >
                                            <div className="flex-auto">
                                                <a
                                                    href={item.href}
                                                    className="header-subopt-para block font-semibold text-gray-900"
                                                >
                                                    {item.name}
                                                    <span className="absolute inset-0" />
                                                </a>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </PopoverPanel>
                        </Popover>
                    </div>
                    <button className="Contact-header ml-4">Contact Us</button>
                </div>
            </nav>

            {mobileMenuOpen && (
                <div
                    className={`fixed top-0 right-0 bottom-0 left-0 bg-white z-50 h-screen transition-transform duration-100 ease-in-out ${menuClass}`}
                >
                    <div style={{ display: "flex", justifyContent: "space-between" }} className="mobile-options-title px-2">
                        <div className="px-3 my-3">
                            <p className="Company-Name-Mobile ">
                                OSIEDLE <br /> <strong> MALINOWSKIEGO </strong>
                            </p>
                        </div>
                        <div>
                            <button
                                type="button"
                                onClick={handleCloseMenu}
                                className="p-2 text-gray-700"
                            >
                                <div className="menu-close-icon-container h-10 w-10">
                                    <XMarkIcon
                                        className="menu-close-icon h-12 w-10 font-bold"
                                        aria-hidden="true"
                                    />
                                    <span className="sr-only">Close mobile menu</span>
                                </div>
                            </button>
                        </div>
                    </div>
                    <div className="flex justify-end gap-4 px-3">
                        <div
                            className={`rounded-full ${selectedLang === 'ENG' ? 'bg-black text-white' : 'bg-white border border-black'} h-10 w-10 flex items-center justify-center`}
                            onClick={() => handleSelectLang('ENG')}
                        >
                            <p className="text-xs">ENG</p>
                        </div>
                        <div
                            className={`rounded-full ${selectedLang === 'PL' ? 'bg-black text-white' : 'bg-white border border-black'} h-10 w-10 flex items-center justify-center`}
                            onClick={() => handleSelectLang('PL')}
                        >
                            <p className="text-xs">PL</p>
                        </div>
                        <div
                            className={`rounded-full ${selectedLang === 'ESP' ? 'bg-black text-white' : 'bg-white border border-black'} h-10 w-10 flex items-center justify-center`}
                            onClick={() => handleSelectLang('ESP')}
                        >
                            <p className="text-xs">ESP</p>
                        </div>
                        <div
                            className={`rounded-full ${selectedLang === 'PT' ? 'bg-black text-white' : 'bg-white border border-black'} h-10 w-10 flex items-center justify-center`}
                            onClick={() => handleSelectLang('PT')}
                        >
                            <p className="text-xs">PT</p>
                        </div>
                    </div>
                    <hr className="mobile-menu-line my-3 border-t-2 border-gray-200 mx-4" />

                    <div className="mx-4">
                        <a href="#" className="mobile-menu-options block my-3">
                            Segments
                        </a>
                        <hr className="mobile-menu-line my-1 border-t-2 border-gray-200" />
                        <a href="#" className="mobile-menu-options block my-3">
                            Map
                        </a>
                        <hr className="mobile-menu-line my-1 border-t-2 border-gray-200 " />
                        <a href="#" className="mobile-menu-options block my-3">
                            Technology
                        </a>
                        <hr className="mobile-menu-line my-1 border-t-2 border-gray-200 " />
                    </div>

                    <div className="mobile-menu-buttons ">
                        <div className=" my-6 mx-7 flex-1">
                            <a href="#" className="mobile-menu-button-a block py-3  text-center">
                                CONTACT US
                            </a>
                        </div>

                        <div className="mobile-menu-icons flex-none w-16"> {/* Adjust width as needed */}
                            <a href="#" className="mobile-menu-icons-a border-2 border-gray-200">
                                <box-icon  name='phone-call'></box-icon>
                            </a>
                        </div>
                        <div className="mobile-menu-icons flex-none w-16"> {/* Adjust width as needed */}
                            <a href="#" className="mobile-menu-icons-a border-2 border-gray-200">
                                <box-icon name='envelope'></box-icon>
                            </a>
                        </div>

                    </div>
                </div>
            )}
        </header>
    );
}

export default Header;
