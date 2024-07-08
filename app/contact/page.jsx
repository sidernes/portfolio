/** @format */

"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";

import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";
import Link from "next/link";

const info = [
	{
		icon: <FaPhoneAlt />,
		title: "Telefono",
		description: "(+503) 7722 3100",
	},
	{
		icon: <FaEnvelope />,
		title: "Email",
		description: "sidernes22@gmail.com",
	},
	{
		icon: <FaMapMarkerAlt />,
		title: "Recidencia",
		description: "San Jacinto, San Salvador",
	},
];

import { motion } from "framer-motion";

const Contact = () => {
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
				<div className="flex flex-col xl:flex-row gap-[30px]">
					{/* form */}
					<div className="xl:w-[54%] order-2 xl:order-none">
						<form className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl">
							<h3 className="text-4xl text-accent">Vamos a trabajar juntos</h3>
							<p className="text-white/60">
								Trabajemos juntos para crear soluciones innovadoras y
								eficientes. Si tienes alguna pregunta, idea o proyecto en mente,
								no dudes en contactarme. Estoy aquí para ayudarte a llevar tus
								ideas al siguiente nivel.
							</p>
							{/* input */}
							{/* <div className="grid grid-cols-1 md:grid-cols-1 gap-6">
								<Input type="Nombre" placeholder="Nombre" />
							</div>
							<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
								<Input type="Correo" placeholder="Dirección de correo " />
								<Input type="Telefono" placeholder="Numero de telefono" />
							</div>
							<Textarea
								className="h-[200px]"
								placeholder="Escribe tu mensaje.."
							/> */}
							{/* btn */}
							{/* <Button size="md" className="max-w-40">
								Enviar mensaje
							</Button> */}

							<Button size="md">
								<Link
									href="https://wa.me/+50377223100"
									passHref
									target="_blank"
								>
									Enviar mensaje whatsapp
								</Link>
							</Button>
						</form>
					</div>
					{/* info */}
					<div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
						<ul className="flex flex-col gap-10">
							{info.map((item, index) => {
								return (
									<li key={index} className="flex items-center gap-6">
										<div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
											<div className="text-[28px]">{item.icon}</div>
										</div>
										<div className="flex-1">
											<p className="text-white/60">{item.title}</p>
											<h3 className="text-xl">{item.description}</h3>
										</div>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</motion.section>
	);
};

export default Contact;
