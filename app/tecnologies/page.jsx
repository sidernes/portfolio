/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { skills } from "@/const/icons";
import { getIconComponent } from "@/public/assets/icons/iconsAll";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Phone",
		description: "(+40) 321 654 876",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "youremail@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Address",
		description: "Code Corner, Tech Town 13579",
	},
];

import { motion } from "framer-motion";

const Tecnologies = () => {
	return (
		<motion.section
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="py-6"
		>
			<div className="container mx-auto">
				<div className="flex flex-col xl:flex-row gap-[30px] mb-10">
					<p>
						En el mundo del desarrollo de software, dominar una amplia gama de
						tecnologías es crucial para crear soluciones eficientes y efectivas.
						A continuación, se presentan algunas de las tecnologías más
						importantes con las que he podido trabajar.
					</p>
				</div>
				<div className="flex flex-col xl:flex-row gap-[30px]">
					<ul className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-10 gap-6 xl:gap-[30px]">
						{skills.map(({ icon, title }) => {
							const IconComponent = getIconComponent(icon);
							return (
								<li
									key={title}
									className="flex flex-col items-center justify-center"
								>
									{IconComponent && (
										<IconComponent
											style={{
												width: "50px",
												height: "50px",
												fill: "currentColor",
											}}
										/>
									)}
									<p className="mt-4 text-sm">{title}</p>
								</li>
							);
						})}
					</ul>
				</div>
			</div>
		</motion.section>
	);
};

export default Tecnologies;
