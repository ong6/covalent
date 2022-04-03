import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import poster from "../public/covalent_banner.png";
import styles from "../styles/Home.module.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Covalent - Figma Showcase</title>
				<meta name="description" content="Covalent" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<Section delay={0.1}>
					<div className="text-lg mt-6">
						<div className="text-2xl">Interactive Demo</div>
						<iframe
							className="my-4 border-2 border-blue-300 rounded-lg w-full"
							height="600"
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Fproto%2FbrRhvhN3In9jbjXjRXK1GO%2FJun-Xiong-Prototype%3Fpage-id%3D0%253A1%26node-id%3D30%253A4415%26viewport%3D337%252C48%252C0.5%26scaling%3Dscale-down%26starting-point-node-id%3D8%253A170"
							allowFullScreen></iframe>
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="text-lg mt-6">
						<div className="text-2xl">Template Showcase</div>
						<iframe
							className="my-4 border-2 border-blue-300 rounded-lg w-full"
							height="600"
							src="https://www.figma.com/embed?embed_host=share&url=https%3A%2F%2Fwww.figma.com%2Ffile%2FbrRhvhN3In9jbjXjRXK1GO%2FJun-Xiong-Prototype%3Fnode-id%3D0%253A1"
							allowFullScreen></iframe>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="text-lg mt-6">
						<div className="text-2xl mb-4">Poster</div>
						<Image
							src={poster}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg border-2 border-blue-300"
						/>
					</div>
				</Section>
			</div>
		</div>
	);
}
