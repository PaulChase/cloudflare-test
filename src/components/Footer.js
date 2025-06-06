import Link from "next/link";
import React from "react";
import { FaFacebook, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
	return (
		<footer className=" bg-green-50 text-primary ">
			<div className=" px-4 py-8 lg:py-24 lg:max-w-7xl lg:mx-auto grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4 ">
				<div>
					<h2 className=" text-xl font-bold  lg:text-3xl">Foodbank Nigeria</h2>

					<p className="  mt-2 lg:text-lg lg:mt-4">
						Revolutionizing agriculture and trade by making produce accessible, transportation reliable, and payments
						versatile.
					</p>
				</div>

				<div>
					<h2 className=" text-lg font-semibold lg:text-xl ">Company</h2>

					<ul className=" text-sm space-y-1 mt-2 lg:text-base lg:space-y-2">
						<li>
							<Link href={"/about-us"} className="">
								About Us
							</Link>
						</li>
						<li>
							<Link href={"#"} className="">
								Privacy Policy
							</Link>
						</li>
						<li>
							<Link href={"#"} className="">
								Our Team
							</Link>
						</li>
						<li>
							<Link href={"#"} className="">
								Terms and Conditions
							</Link>
						</li>
					</ul>
				</div>

				<div>
					<h2 className=" text-lg font-semibold lg:text-xl ">Contact Us</h2>

					<ul className=" text-sm space-y-1 mt-2  lg:text-base lg:space-y-2 ">
						<li>
							<Link href={"mailto:surefoodbanking@gmail.com"} className="">
								surefoodbanking@gmail.com
							</Link>
						</li>
						<li>
							+234 7065470056 <br /> +234 9074779624
						</li>
						<li>Suite D7 Othni Plaza Nouakchott Street Wuse 1, Abuja</li>
					</ul>
				</div>

				<div>
					<h2 className=" text-lg font-semibold lg:text-xl ">Find Us on:</h2>

					<ul className=" text-sm space-y-1 mt-2 flex gap-4 items-center lg:gap-6">
						<li>
							<Link href={"#"} className="">
								<FaFacebook className=" text-3xl lg:text-4xl" />
							</Link>
						</li>
						<li>
							<Link href={"#"} className="">
								<FaYoutube className=" text-3xl lg:text-4xl" />
							</Link>
						</li>
						<li>
							<Link href={"#"} className="">
								<FaLinkedin className=" text-3xl lg:text-4xl" />
							</Link>
						</li>
						<li>
							<Link href={"#"} className="">
								<FaTwitter className=" text-3xl lg:text-4xl" />
							</Link>
						</li>
					</ul>
				</div>
			</div>

			<div className=" bg-[#064E3B] p-6 text-center text-sm font-medium  lg:text-base text-white">
				Copyright {new Date().getFullYear()} - SureFoodBanking
			</div>
		</footer>
	);
}
