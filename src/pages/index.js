import Head from "next/head";
import {Inter} from "next/font/google";
import Hero from "@/components/modules/Hero/Hero";
import HeroSlider from "@/components/modules/HeroSlider/HeroSlider";
import Categories from "@/components/modules/Categories/Categories";
import Advantages from "@/components/modules/Advantages/Advantages";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
	
	const categories = [
		{
			title: "Риба",
			image: "./fish.png",
			desc: "Комплексні харчові добавки, консерванти та антоксиданти для риби та рибних виробів"
		}, {
			title: "М'ясо",
			image: "./meat.png",
			desc: "Консерванти для м'яса, консерванти для ковбаси. М'ясопереробка"
		}, {
			title: "Випічка",
			image: "./backery.png",
			desc: "Кондитерські та хлібобулочні вироби"
		}, {
			title: "Пиво, напої, вода",
			image: "./drinks.png",
			desc: "Ароматизатори, смакопідсюлювачі, барвники "
		}
	]
	
	return (
		<>
			<Head>
				<title>Ferment Craft</title>
				<meta name="description" content="Chemical Company"/>
				<meta name="viewport" content="width=device-width, initial-scale=1"/>
				<link rel="preconnect" href="https://fonts.googleapis.com"/>
				<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
				<link href="https://fonts.googleapis.com/css2?family=Inter:wght@100..900&display=swap" rel="stylesheet"/>
				<link rel="icon" href="/favicon.ico"/>
			</Head>
			<div className={""}>
				<Hero/>
				<Categories categories={categories}/>
				<Advantages/>
				{/*<ProductsPreview/>*/}
				{/*<ConsultSignUp/>*/}
			</div>
		</>
	);
}
