/** @format */

"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
	{
		name: "Inicio",
		path: "/",
	},
	// {
	//   name: "services",
	//   path: "/services",
	// },
	{
		name: "CV",
		path: "/resume",
	},
	// {
	// 	name: "Trabajos",
	// 	path: "/work",
	// },
	{
		name: "Contactos",
		path: "/contact",
	},
];

const Nav = () => {
	const pathname = usePathname();
	return (
		<nav className="flex gap-8">
			{links.map((link, index) => {
				return (
					<Link
						href={link.path}
						key={index}
						className={`${
							link.path === pathname && "text-accent border-b-2 border-accent"
						} capitalize font-medium hover:text-accent transition-all`}
					>
						{link.name}
					</Link>
				);
			})}
		</nav>
	);
};

export default Nav;
