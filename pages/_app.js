import Head from 'next/head'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Roger J. Fan</title>
				<meta name="description" content="Hi! I'm Roger Fan, a student at Gunn High School's Class of 2024."></meta>
			</Head>
			
			<Component {...pageProps} />
		</div>
	)
}

export default MyApp
