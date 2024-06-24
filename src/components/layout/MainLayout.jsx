import {MantineProvider} from "@mantine/core";
import Header from "@/components/modules/Header/Header";
import styles from './main-layout.module.css'
import NextNProgress from "nextjs-progressbar";
import {useRouter} from "next/router";
import Footer from "@/components/modules/Footer/Footer";

const MainLayout = ({children, pageProps}) => {
	const router = useRouter()
	
	const activeLayout = router.pathname !== "/auth"
	console.log(activeLayout)
	return (
		<MantineProvider
			withGlobalStyles
			withNormalizeCSS
		>
			<NextNProgress/>
			{activeLayout ? <>
					<Header/>
					{/*<div className="" style={{*/}
					{/*	height: "75px"*/}
					{/*}}/>*/}
					<main className={styles.layout_container}>
						{children}
					</main>
					{/*<Footer/>*/}
				</>
				:
				<main>{children}</main>}
		</MantineProvider>
	)
}

export default MainLayout
