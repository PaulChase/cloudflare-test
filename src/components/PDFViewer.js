"use client";
import { useState } from "react";

function PDFViewer() {
	const [showModal, setShowModal] = useState(true);
	return (
		<>
			{showModal && (
				<div className=" fixed bg-black/80 z-20 left-0 top-0 w-full h-full flex items-center justify-center p-4">
					<div className=" bg-white p-4 lg:p-6 rounded-xl max-w-6xl w-full">
						<iframe
							src="/doc.pdf"
							width="100%"
							className=" rounded-lg h-[36rem] lg:h-[40rem]"
							style={{ border: "none" }}
						/>

						<button onClick={() => setShowModal(false)} className=" primary-btn md:w-80 mx-auto mt-6">
							I have read the document
						</button>
					</div>
				</div>
			)}
		</>
	);
}

export default PDFViewer;
