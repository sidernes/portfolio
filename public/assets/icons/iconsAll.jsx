/** @format */

import IconPhp from "./IconPhp.svg";
import IconJava from "./IconJava.svg";
import IconCPlusPlus from "./IconCPlusPlus.svg";
import IconMySql from "./IconMySql.svg";
import IconSqlLite from "./IconSqlLite.svg";
import IconSqlServer from "./IconSqlServer.svg";
import IconPostgreSql from "./IconPostgreSql.svg";
import Prisma from "./IconPrisma.svg";
import Bootstrap from "./IconBootstrap.svg";
import TypeOrm from "./IconTypeOrm.svg";
import Laravel from "./IconLaravel.svg";
import NestJs from "./IconNestJs.svg";
import IconAstro from "./IconAstro.svg";
import IconMaterialUi from "./IconMaterialUi.svg";
import IconNextjs from "./IconNextjs.svg";
import IconRedux from "./IconRedux.svg";
import IconStyled from "./IconStyled.svg";
import IconTailwind from "./IconTailwind.svg";
import IconRadix from "./IconRadix.svg";
import IconReactQuery from "./IconReactQuery.svg";
import IconTypeScript from "./IconTypeScript.svg";
import IconZustand from "./IconZustand.svg";
import IconHtml from "./IconHtml.svg";
import IconCss from "./IconCss.svg";
import IconReact from "./IconReact.svg";
import IconGit from "./IconGit.svg";
import IconGitHub from "./IconGtiHub.svg";
import IconStripe from "./IconStripe.svg";
import IconJavaScript from "./IconJavaScritp.svg";
import IconShadcn from "./IconShadcn.svg";
import IconMongodb from "./IconMongodb.svg";
import IconNodeJs from "./IconNodeJs.svg";
import IconVite from "./IconVite.svg";

export const ICONS = {
	php: IconPhp,
	java: IconJava,
	cPlusPlus: IconCPlusPlus,
	mySql: IconMySql,
	sqlLite: IconSqlLite,
	sqlServer: IconSqlServer,
	postgreSql: IconPostgreSql,
	bootstrap: Bootstrap,
	prisma: Prisma,
	typeOrm: TypeOrm,
	laravel: Laravel,
	nestJs: NestJs,
	html: IconHtml,
	css: IconCss,
	javaScript: IconJavaScript,
	react: IconReact,
	astro: IconAstro,
	materialUi: IconMaterialUi,
	nextjs: IconNextjs,
	redux: IconRedux,
	styled: IconStyled,
	tailwind: IconTailwind,
	radix: IconRadix,
	reactQuery: IconReactQuery,
	typeScript: IconTypeScript,
	zustand: IconZustand,
	git: IconGit,
	github: IconGitHub,
	stripe: IconStripe,
	shadcn: IconShadcn,
	mongodb: IconMongodb,
	nodejs: IconNodeJs,
	vite: IconVite,
	// add new icons here <--
	// Make sure that when calling the icon the key is the same
	// "optional" in the IconKeys const file adds the icon key for when you call IconKeys.nameIcon
};

const getIconComponent = (iconName) => {
	return ICONS[iconName] || null;
};

export { getIconComponent };
