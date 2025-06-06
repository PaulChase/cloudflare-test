"use client";
import Link from "next/link";
import React, { useState } from "react";
import { FaBars } from "react-icons/fa6";
import { IoClose } from "react-icons/io5";

const MobileMenu = () => {
	const [isOpen, setIsOpen] = useState(false);

	const menuItems = [
		{ label: "Home", href: "#" },
		{ label: "About", href: "#" },
		{ label: "Services", href: "#" },
		{ label: "Contact", href: "#" },
	];

	const toggleMenu = () => {
		setIsOpen(!isOpen);
	};

	return (
		<div className="relative lg:hidden">
			{/* Hamburger button */}
			<button
				onClick={toggleMenu}
				className=" p-2 rounded-lg hover:bg-gray-100 transition-colors"
				aria-label="Toggle menu"
			>
				{isOpen ? <IoClose size={32} /> : <FaBars size={32} />}
			</button>

			{/* Overlay */}
			{isOpen && <div className="fixed inset-0 bg-black bg-opacity-50 transition-opacity z-40" onClick={toggleMenu} />}

			{/* Menu */}
			<nav
				className={`fixed top-0 left-0 h-full w-5/6 bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${
					isOpen ? "translate-x-0" : "-translate-x-full"
				}`}
			>
				<div className="pt-16 px-4">
					<ul className=" font-medium text-gray-700 divide-y divide-gray-300">
						<li>
							<Link href={"/"} className=" block py-6 px-4 ">
								Home
							</Link>
						</li>
						<li>
							<Link href={"/about-us"} className="  block py-6 px-4">
								About Us
							</Link>
						</li>
						<li>
							<Link href={"faq"} className="  block py-6 px-4">
								FAQs
							</Link>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default MobileMenu;
