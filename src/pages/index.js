import Head from "next/head";
import {Inter} from "next/font/google";
import Hero from "@/components/modules/Hero/Hero";
import HeroSlider from "@/components/modules/HeroSlider/HeroSlider";

const inter = Inter({subsets: ["latin"]});

export default function Home() {
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
			
				
			
				{/*<Categoies/>*/}
				{/*<Advantages/>*/}
				{/*<ProductsPreview/>*/}
				{/*<ConsultSignUp/>*/}
			</div>
		</>
	);
}
