/** @format */

"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";

const DownloadCV = () => {
	const downloadCV = () => {
		window.open(
			"https://drive.google.com/file/d/19latex9BhopaWSkyxEtIA_iRLvuYROio/view?usp=sharing",
			"_blank"
		);
	};
	return (
		<Button
			variant="outline"
			size="lg"
			className="uppercase flex items-center gap-2"
			onClick={downloadCV}
		>
			<span>Descargar CV</span>
			<FiDownload className="text-xl" />
		</Button>
	);
};

export default DownloadCV;
