import Head from 'next/head'
import Footer from '../components/Footer'
import Nav from '../components/Nav'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Roger J. Fan</title>
				<meta name="description" content="Hi! I'm Roger Fan, a student at Gunn High School's Class of 2024." />
				<link rel="icon" href="/favicon.ico" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
				<link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Bebas+Neue&family=Gelasio:ital,wght@0,400;0,700;1,400;1,700&family=Yellowtail&display=swap" rel="stylesheet" />
			</Head>
			
			<Nav />

			<Component {...pageProps} />

			<Footer />
		</div>
	)
}

export default MyApp
