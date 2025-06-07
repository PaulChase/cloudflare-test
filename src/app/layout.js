import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={` antialiased`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
