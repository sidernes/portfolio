/** @format */

"use client";

// about data
const about = {
	title: "Acerca de",
	description:
		"Soy un desarrollador con amplia experiencia en el desarrollo de aplicaciones web, de escritorio y móviles. Me especializo en crear herramientas funcionales que no solo cumplen con su propósito principal, sino que también destacan por su excelente diseño.",
	info: [
		{
			fieldName: "Nombre",
			fieldValue: "Ricardo Villalta",
		},
		{
			fieldName: "Telefono",
			fieldValue: "(+503) 7722 3100",
		},
		{
			fieldName: "Experiencia",
			fieldValue: "7+ Años",
		},
		{
			fieldName: "Nacionalidad",
			fieldValue: "Salvadoreño",
		},
		{
			fieldName: "Email",
			fieldValue: "sidernes22@gmail.com",
		},
	],
};

// experience data
const experience = {
	icon: "/assets/resume/badge.svg",
	title: "Experiencia",
	description:
		"A lo largo de mi carrera de mas de 7 años, he desarrollado soluciones que han tenido un impacto significativo, mejorando procesos y resultados en diversos proyectos. Mi aporte ha sido versátil, adaptándome a diferentes tecnologias asi como a entornos dinámicos y desafiantes para asegurar el éxito y la productividad.",
	items: [
		{
			company: "Constru-Services S.A.",
			url: "https://constru-services.com/",
			position: "Analista programador senior",
			duration: "Abril 2022 - Junio 2024",
		},
		{
			company: "El Salvador Apparel solutions",
			url: "https://elsalvadoraps.com/",
			position: "Full Stack Developer",
			duration: "Febrero 2017 - Marzo 2022",
		},
		{
			company: "El Salvador Apparel solutions",
			url: "https://elsalvadoraps.com/",
			position: "Junior Developer",
			duration: "Julio 2016 - Febrero 2017",
		},
	],
};

// education data
const education = {
	icon: "/assets/resume/cap.svg",
	title: "Educación",
	description:
		"Estudié ingeniería de sistemas, avanzando 4 años en la carrera antes de decidir enfocarme en mi faceta laboral. Desde que salí de la universidad me preparado con cursos modernos que me han permitido adquirir conocimientos actualizados y prácticos en desarrollo web y móvil, así como en gestión de bases de datos. Mi educación continua demuestra mi compromiso con el aprendizaje y la mejora constante de mis habilidades.",
	items: [
		{
			institution: "Online Course Platform",
			degree: "Cursos de desarrollo web y móvil",
			duration: "2021",
		},
		{
			institution: "Universidad nacional de El Salvador",
			degree: "Ingenieria de sistemas informaticos",
			duration: "2010 - 2014",
		},
		{
			institution: "Instituto nacional DR Sarbelio Navarrete",
			degree: "Tecnico en mecanica automotriz",
			duration: "2007-2009",
		},
	],
};

// skills data
const skills = {
	title: "Habilidades",
	description:
		"A lo largo de mi carrera en desarrollo de software, he adquirido conocimientos en una amplia variedad de tecnologías, herramientas y lenguajes de programación. Estas habilidades me permiten abordar proyectos desde diferentes perspectivas y asegurar la implementación de soluciones eficientes y efectivas.",
	skillList: [
		{
			title: "PHP",
			text: "Utilizado principalmente en el desarrollo de aplicaciones web del lado del servidor, PHP permite crear sitios dinámicos e interactivos.",
		},
		{
			title: "HTML y CSS",
			text: "Las bases del desarrollo web, HTML proporciona la estructura de las páginas web, mientras que CSS se encarga del estilo y diseño.",
		},
		{
			title: "JavaScript y TypeScript",
			text: "JavaScript es esencial para la interactividad en la web, y TypeScript, su superconjunto tipado, añade robustez al desarrollo de aplicaciones complejas.",
		},
		{
			title: "Java y C++ (nivel básico)",
			text: "Conocimientos en estos lenguajes me permiten entender y desarrollar aplicaciones con necesidades específicas de rendimiento y estructura.",
		},
		{
			title: "React y React Native",
			text: "React es fundamental para el desarrollo de interfaces de usuario dinámicas y eficientes, mientras que React Native extiende estas capacidades al desarrollo móvil multiplataforma.",
		},
		{
			title: "Next.js y Nest.js",
			text: "Next.js es un framework para aplicaciones React que facilita la creación de aplicaciones renderizadas en el servidor, mientras que Nest.js es un framework de Node.js para construir aplicaciones del lado del servidor escalables y mantenibles.",
		},
		{
			title: "jQuery",
			text: "Una librería de JavaScript que simplifica la manipulación del DOM y la gestión de eventos.",
		},
		{
			title: "Bootstrap y Tailwind CSS",
			text: "Frameworks de CSS que aceleran el desarrollo de interfaces de usuario responsivas y estilizadas.",
		},
		{
			title: "SQL Server, MySQL y PostgreSQL",
			text: "Estas tecnologías de bases de datos relacionales permiten almacenar, gestionar y recuperar datos de manera eficiente para aplicaciones de cualquier escala.",
		},
		{
			title: "Python (nivel básico)",
			text: "Utilizado para scripts y tareas de automatización.",
		},
		{
			title: "Git",
			text: "Sistema de control de versiones esencial para la colaboración y gestión del código.",
		},
		{
			title: "API de OpenAI",
			text: "Integración de capacidades de inteligencia artificial en aplicaciones.",
		},
		{
			title: "Photoshop",
			text: "Herramienta para el diseño gráfico y la edición de imágenes.",
		},
		{
			title: "Mapbox y Leaflet",
			text: "Tecnologías para la creación de mapas interactivos y la visualización de datos geoespaciales.",
		},
		{
			title: "Aplicaciones y Usos",
			text: "Estas habilidades me permiten desarrollar aplicaciones web y móviles completas, desde la concepción hasta la implementación y el mantenimiento. He trabajado en proyectos que van desde sistemas de gestión de contenido y plataformas de comercio electrónico hasta aplicaciones móviles y soluciones de visualización de datos geoespaciales.",
		},
	],
};

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const Resume = () => {
	return (
		<motion.div
			initial={{ opacity: 0 }}
			animate={{
				opacity: 1,
				transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
			}}
			className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
		>
			<div className="container mx-auto">
				<Tabs
					defaultValue="experience"
					className="flex flex-col xl:flex-row gap-[60px]"
				>
					<TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
						<TabsTrigger value="experience">Experiencia</TabsTrigger>
						<TabsTrigger value="skills">Habilidades</TabsTrigger>
						<TabsTrigger value="education">Educación</TabsTrigger>
						<TabsTrigger value="about">Acerca de</TabsTrigger>
					</TabsList>

					{/* content */}
					<div className="min-h-[70vh] w-full">
						{/* experience */}
						<TabsContent value="experience" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{experience.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{experience.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{experience.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.position}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<a href={item.url} title="Empresa" target="_blank">
															{item.company}
														</a>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* education */}
						<TabsContent value="education" className="w-full">
							<div className="flex flex-col gap-[30px] text-center xl:text-left">
								<h3 className="text-4xl font-bold">{education.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{education.description}
								</p>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
										{education.items.map((item, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{item.duration}</span>
													<h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
														{item.degree}
													</h3>
													<div className="flex items-center gap-3">
														{/* dot */}
														<span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
														<p className="text-white/60">{item.institution}</p>
													</div>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* skills */}
						<TabsContent value="skills" className="w-full h-full">
							<div className="flex flex-col gap-[30px]">
								<div className="flex flex-col gap-[30px] text-center xl:text-left">
									<h3 className="text-4xl font-bold">{skills.title}</h3>
									<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
										{skills.description}
									</p>
								</div>
								<ScrollArea className="h-[400px]">
									<ul className="grid grid-cols-2 sm:grid-cols-1 md:grid-cols-1 gap-4 xl:gap-[30px]">
										{skills.skillList.map((skill, index) => {
											return (
												<li
													key={index}
													className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
												>
													<span className="text-accent">{skill.title}</span>
													<p>{skill.text}</p>
												</li>
											);
										})}
									</ul>
								</ScrollArea>
							</div>
						</TabsContent>

						{/* about */}
						<TabsContent
							value="about"
							className="w-full text-center xl:text-left"
						>
							<div className="flex flex-col gap-[30px]">
								<h3 className="text-4xl font-bold">{about.title}</h3>
								<p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
									{about.description}
								</p>
								<ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
									{about.info.map((item, index) => {
										return (
											<li
												key={index}
												className="flex items-center justify-center xl:justify-start gap-4"
											>
												<span className="text-white/60">{item.fieldName}</span>
												<span className="text-xl">{item.fieldValue}</span>
											</li>
										);
									})}
								</ul>
							</div>
						</TabsContent>
					</div>
				</Tabs>
			</div>
		</motion.div>
	);
};

export default Resume;
