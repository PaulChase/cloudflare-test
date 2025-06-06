import React from "react";
import Image from "next/image";
import Accordion from "../../components/Accordion";
import { loan_faqs, membership_faqs } from "../../utils/data";
import CustomFont from "next/font/local";

const bentoga = CustomFont({
	src: "../../../public/Bentoga-Thin.otf",
	variable: "--font-bentoga",
});

export const metadata = {
	title: "Frequently Asked Questions - SureFood",
};

export default function page() {
	return (
		<main>
			<section className=" px-4 py-6 lg:py-20 max-w-5xl mx-auto relative ">
				<h1 className=" text-4xl lg:text-6xl lg:leading-[4.5rem] font-semibold text-center mt-6 leading-[3rem] relative z-20">
					<span className={`${bentoga.className} text-[#059669]`}>Everything</span> <br />
					You Need to Know
				</h1>

				<Image
					src={"/question-mark.png"}
					width={100}
					height={100}
					alt="question mark"
					className=" h-24 w-auto absolute top-2 right-4"
				/>
				<Image
					src={"/question-mark.png"}
					width={100}
					height={100}
					alt="question mark"
					className=" h-24 w-auto absolute top-20 left-4"
				/>
			</section>

			<section className=" px-4 py-12 lg:py-24 mt-12 bg-gradient-to-t from-green-200 to-green-50">
				<div className=" max-w-5xl mx-auto">
					<h2 className=" text-xl lg:text-2xl font-semibold text-center bg-white text-primary p-6 rounded-lg shadow-md shadow-green-300">
						Frequently Asked Questions
					</h2>

					<div className=" mt-8 bg-white p-6 rounded-lg lg:p-12 lg:shadow">
						<h3 className=" text-lg font-semibold mb-4 lg:mb-6 text-center lg:text-xl ">Membership Ethics</h3>
						<Accordion data={membership_faqs} />
					</div>
					<div className=" mt-8 bg-white p-6 rounded-lg lg:p-12 lg:shadow">
						<h3 className=" text-lg font-semibold mb-4 lg:mb-6 text-center lg:text-xl ">Loan Rules</h3>
						<Accordion data={loan_faqs} />
					</div>
				</div>
			</section>
		</main>
	);
}
