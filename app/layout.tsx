import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import { cn } from "@/lib/utils";

const poppins = Poppins({
	weight: ["400", "500"], // if single weight, otherwise you use array like [400, 500, 700],
	style: "normal", // if single style, otherwise you use array like ['normal', 'italic']
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Gasogi -> United | Urubabye Igwe",
	description: "Gasogi United Gasogi FootBall Club",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang='en'>
			<body
				className={cn(
					poppins.className,
					"bg-slate-100 pb-20",
				)}>
				<NavBar />
				{children}
			</body>
		</html>
	);
}
