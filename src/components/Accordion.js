"use client";
import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa6";

const Accordion = ({ data = [] }) => {
	const [openSections, setOpenSections] = useState([]);
	const [accordionData, setAccordionData] = useState(data);

	// const accordionData = [
	// 	{
	// 		title: "What is React?",
	// 		content:
	// 			"React is a free and open-source front-end JavaScript library for building user interfaces based on components. It is maintained by Meta and a community of individual developers and companies.",
	// 	},
	// 	{
	// 		title: "What is Tailwind CSS?",
	// 		content:
	// 			"Tailwind CSS is a utility-first CSS framework that provides a set of pre-built classes to help you build custom designs without writing CSS. It allows for rapid UI development with highly customizable components.",
	// 	},
	// 	{
	// 		title: "Why use React with Tailwind?",
	// 		content:
	// 			"Combining React with Tailwind CSS provides a powerful way to build responsive, maintainable, and scalable user interfaces. React handles the component logic and state management, while Tailwind provides a flexible styling system.",
	// 	},
	// ];

	const toggleSection = (index) => {
		setOpenSections((prev) => {
			if (prev.includes(index)) {
				return prev.filter((item) => item !== index);
			} else {
				return [...prev, index];
			}
		});
	};

	return (
		<div className="w-full max-w-3xl mx-auto space-y-4 lg:space-y-6">
			{accordionData.map((section, index) => (
				<div key={index} className="border border-gray-200 rounded-lg p-6 bg-white  lg:shadow">
					<button
						onClick={() => toggleSection(index)}
						className="w-full flex justify-between items-center  hover:bg-gray-50 transition-colors gap-4 cursor-pointer"
					>
						<span className="font-semibold text-primary text-left text-base md:text-lg lg:text-xl">
							{section.title}
						</span>
						<FaChevronDown
							className={`w-5 h-5 text-primary transition-transform duration-300 ${
								openSections.includes(index) ? "rotate-180" : ""
							}`}
						/>
					</button>

					<div
						className={`overflow-hidden transition-all duration-300 ease-in-out ${
							openSections.includes(index) ? "max-h-40" : "max-h-0"
						}`}
					>
						<div className=" mt-4 lg:mt-6 bg-gray-50">
							<p className="text-gray-700  lg:text-lg">{section.content}</p>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default Accordion;
