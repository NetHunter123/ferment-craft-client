import "@/styles/globals.css";
import NextNProgress from 'nextjs-progressbar';
import MainLayout from "@/components/layout/MainLayout";

export default function App({Component, pageProps}) {
	
	return <>
		<MainLayout pageProps={pageProps}>
			<Component {...pageProps} />
		</MainLayout>
	</>
}
