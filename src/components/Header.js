import Image from "next/image";
import React from "react";
import { FaBars } from "react-icons/fa6";
import MobileMenu from "./MobileMenu";
import Link from "next/link";

export default function Header() {
	return (
		<div className=" p-3 lg:p-4 flex justify-between items-center max-w-7xl mx-auto">
			{/* <Image src="/logo.png" alt="logo" width={70} height={70} /> */}
			<Link href={"/"} className=" block p-4 ">
				<h1>{process.env.NEXT_PUBLIC_API_NAME || "My Website"}</h1>
			</Link>

			<div className=" hidden lg:block">
				<ul className=" font-medium text-gray-700 flex items-center gap-4">
					<li>
						<Link href={"/about-us"} className="  block p-4">
							About Us
						</Link>
					</li>
					<li>
						<Link href={"/faq"} className="  block p-4">
							FAQs
						</Link>
					</li>
				</ul>
			</div>

			<MobileMenu />
		</div>
	);
}
