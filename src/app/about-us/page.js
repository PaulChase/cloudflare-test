import React from "react";
import Image from "next/image";
import { FaCheckDouble } from "react-icons/fa6";
import CustomFont from "next/font/local";
import Head from "next/head";

const bentoga = CustomFont({
	src: "../../../public/Bentoga-Thin.otf",
	variable: "--font-bentoga",
});

export const metadata = {
	title: "About Us - SureFood",
};

export default function page() {
	return (
		<main>
			<header
				className=" px-4 py-16 lg:py-40 bg-center bg-cover bg-no-repeat text-white relative"
				style={{ backgroundImage: `url('/about-us-bg.jpeg')` }}
			>
				<div className=" max-w-3xl lg:mx-auto">
					<div className=" bg-black/30 absolute top-0 left-0 w-full h-full"></div>
					<div className=" relative z-10">
						<h1 className=" text-4xl font-semibold text-center mt-6 leading-[3rem] relative z-20 lg:text-6xl">
							Welcome to <span className={`${bentoga.className}`}>FoodBank</span>
						</h1>

						<div className=" text-center mt-4 md:text-lg lg:text-xl lg:mt-6 lg:leading-9 ">
							<p>
								Your trusted partner in revolutionizing food access and Economic empowerment across Africa. At FoodBank,
								we address food security and foster sustainable solutions that empower individuals and communities. Our
								innovative platforms seamlessly connect farmers, buyers, and drivers by ensuring a robust ecosystem for
								trade and financial inclusion. <br /> We take pride in a catalyst for positive change, creating
								resilient communities though trust, innovation and collaboration.
							</p>
						</div>
					</div>
				</div>
			</header>

			{/* 2nd section */}
			<section className=" px-4 py-6 lg:py-20 bg-gradient-to-t from-green-100 to-green-50">
				<div className=" max-w-6xl mx-auto">
					<h3 className=" text-2xl md:text-3xl lg:text-4xl font-semibold text-center mt-6 leading-[3rem] relative z-20">
						Sure Food <span className={`${bentoga.className} text-[#059669] italic`}>Strategy</span>
					</h3>

					<p className=" mt-2 text-center text-gray-700 md:text-lg lg:text-xl max-w-2xl lg:mx-auto md:mt-4">
						We focus on creating a sustainable and supportive ecosystem through 4key + 1 pillars:
					</p>

					<div className=" mt-10 lg:mt-16 flex flex-col gap-6 lg:grid lg:grid-cols-3 lg:justify-center">
						<div className=" bg-primary text-white rounded-xl p-6 space-y-4 lg:space-y-6 lg:py-8">
							<Image
								src="/vlc.png"
								width={100}
								height={100}
								alt="error image"
								className=" mx-auto h-40 lg:h-60 w-auto"
							/>

							<h3 className=" p-3 text-black bg-white rounded-xl text-center font-semibold lg:text-lg">1. FoodBank</h3>

							<div>
								<div>
									<h4 className=" text-lg font-medium">Goal:</h4>
									<p className=" text-sm mt-1">Ensure access to nutritious food for the community.</p>
								</div>
								<div className=" mt-2">
									<h4 className=" text-lg font-medium">Initiatives:</h4>
									<ul className=" text-sm space-y-1 list-disc pl-2 mt-1">
										<li>Food Bank: Distribute wet and dry foods, including:</li>
										<li>Animal Products (meat, poultry, diary)</li>
										<li>Fresh and preserved produce</li>
										<li>Hydration Support: Provide clean water access for sustainable food system.</li>
									</ul>
								</div>
							</div>
						</div>

						<div className=" bg-primary text-white rounded-xl p-6 space-y-4 lg:space-y-6 lg:py-8">
							<Image
								src="/vlc.png"
								width={100}
								height={100}
								alt="error image"
								className=" mx-auto h-40 lg:h-60 w-auto"
							/>

							<h3 className=" p-3 text-black bg-white rounded-xl text-center font-semibold lg:text-lg">
								2. Health Service
							</h3>

							<div>
								<div>
									<h4 className=" text-lg font-medium">Goal:</h4>
									<p className=" text-sm mt-1">Promote wellness through natural and organic solutions.</p>
								</div>
								<div className=" mt-2">
									<h4 className=" text-lg font-medium">Initiatives:</h4>
									<ul className=" text-sm space-y-1 list-disc pl-2 mt-1">
										<li>Offer organic herbal medicines and consumables.</li>
										<li>Create networks to connect these products to broader markets..</li>
									</ul>
								</div>
							</div>
						</div>

						<div className=" bg-primary text-white rounded-xl p-6 space-y-4 lg:space-y-6 lg:py-8">
							<Image
								src="/vlc.png"
								width={100}
								height={100}
								alt="error image"
								className=" mx-auto h-40 lg:h-60 w-auto"
							/>

							<h3 className=" p-3 text-black bg-white rounded-xl text-center font-semibold lg:text-lg">
								3. Partnership
							</h3>

							<div>
								<div>
									<h4 className=" text-lg font-medium">Goal:</h4>
									<p className=" text-sm mt-1">Foster collaboration and cooperative growth.</p>
								</div>
								<div className=" mt-2">
									<h4 className=" text-lg font-medium">Initiatives:</h4>
									<ul className=" text-sm space-y-1 list-disc pl-2 mt-1">
										<li>Provide exclusive cooperative services for members.</li>
										<li>Assign unique IDs to each member for efficient resource sharing and tracking.</li>
									</ul>
								</div>
							</div>
						</div>

						<div className=" bg-primary text-white rounded-xl p-6 space-y-4 lg:space-y-6 lg:py-8">
							<Image
								src="/vlc.png"
								width={100}
								height={100}
								alt="error image"
								className=" mx-auto h-40 lg:h-60 w-auto"
							/>

							<h3 className=" p-3 text-black bg-white rounded-xl text-center font-semibold lg:text-lg">
								4. Marketing & Services
							</h3>

							<div>
								<div>
									<h4 className=" text-lg font-medium">Goal:</h4>
									<p className=" text-sm mt-1">Expand opportunities and improve logistics.</p>
								</div>
								<div className=" mt-2">
									<h4 className=" text-lg font-medium">Initiatives:</h4>
									<ul className=" text-sm space-y-1 list-disc pl-2 mt-1">
										<li>Offer marketing and advertising services for small businesses and community initiatives.</li>
										<li>Enhance sales and supply logistics, including:</li>
										<ul className=" pl-2 list-disc">
											<li>Cargo support</li>
											<li>Warehouse hosting services</li>
										</ul>
									</ul>
								</div>
							</div>
						</div>
						<div className=" bg-primary text-white rounded-xl p-6 space-y-4 lg:space-y-6 lg:py-8">
							<Image
								src="/vlc.png"
								width={100}
								height={100}
								alt="error image"
								className=" mx-auto h-40 lg:h-60 w-auto"
							/>

							<h3 className=" p-3 text-black bg-white rounded-xl text-center font-semibold lg:text-lg">5. Result</h3>

							<div>
								<div className=" ">
									<h4 className=" text-lg font-medium">Our core values</h4>
									<ul className=" text-sm space-y-1 list-disc pl-2 mt-1">
										<li>Collaboration: Achieving shared goals.</li>
										<li>Education: Empowering communities.</li>
										<li>Communication: Building networks.</li>
										<li>Networking: Connecting people and resources.</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* 3rd section */}
			<section className=" px-4 py-10 lg:py-24 bg-gradient-to-t from-green-100 to-white">
				<div className=" grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 max-w-6xl mx-auto lg:items-center">
					<Image src={"/location.png"} width={100} height={100} className=" h-60 w-auto mx-auto lg:h-80" alt="image" />

					<div>
						<h3 className=" text-2xl lg:text-3xl font-semibold  leading-[3rem] relative z-20">
							Sure Food <span className={`${bentoga.className} text-[#059669] italic`}>Mission</span>
						</h3>

						<p className=" text-gray-700 mt-2 leading-7 md:text-lg lg:text-xl lg:leading-19 lg:mt-4">
							Our core purpose and mission is to provide a full range of high quality, innovative, appropriate, cost
							effective and sustainable Agro-Allied Food and drugs distribution solutions that satisfy the needs of its
							clients and the communities it serves. A Nigeria where affordable learning is available to all
						</p>
					</div>
				</div>
			</section>

			{/* 4th section */}
			<section className=" px-4 py-10 lg:py-24">
				<div className="  grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-8 max-w-7xl mx-auto lg:items-center ">
					<Image
						src={"/star.png"}
						width={100}
						height={100}
						className=" h-60 w-auto mx-auto lg:order-2 lg:h-80"
						alt="image"
					/>

					<div>
						<h3 className=" text-2xl lg:text-3xl font-semibold  leading-[3rem] relative z-20">
							Sure Food <span className={`${bentoga.className} text-[#059669] italic`}>Vision</span>
						</h3>

						<p className="text-gray-700 mt-2 leading-7 md:text-lg lg:text-xl lg:leading-19 lg:mt-4">
							Our core purpose and mission is to provide a full range of high quality, innovative, appropriate, cost
							effective and sustainable Agro-Allied Food and drugs distribution solutions that satisfy the needs of its
							clients and the communities it serves. A Nigeria where affordable learning is available to all
						</p>
					</div>
				</div>
			</section>

			{/* 5th section */}
			<section className=" px-4 py-10 lg:py-24 bg-gradient-to-b from-green-50 to-white">
				<div className=" max-w-6xl  mx-auto">
					<h3 className=" text-2xl lg:text-3xl font-semibold  leading-[3rem] text-center">
						Why <span className={`${bentoga.className} text-[#059669] italic`}>SureFood</span>
					</h3>

					<div className=" mt-8 lg:mt-16 grid grid-cols-1 max-w-5xl mx-auto gap-4 lg:grid-cols-2 lg:gap-8">
						{new Array(4).fill(4).map((item, index) => (
							<div className=" flex p-4 items-center gap-4" key={index}>
								<p>
									<FaCheckDouble className=" text-2xl lg:text-4xl text-primary " />
								</p>

								<div>
									<h4 className=" text-lg font-semibold lg:text-xl">Innovative Solutions</h4>

									<p className=" text-gray-700 mt-2 lg:text-lg lg:mt-4">
										Cutting-edge technology drives our platforms, simplifying food distribution, trade, and finncial
										services.
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</main>
	);
}
