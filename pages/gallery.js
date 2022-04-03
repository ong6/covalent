import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import persona from "../public/persona.png";
import wireframe_01 from "../public/wireframe_01.png";
import wireframe_02 from "../public/wireframe_02.png";
import styles from "../styles/Home.module.css";
import poster from "../public/covalent_banner.png";
import report_example from "../public/report_example.png";
import dashboard_example from "../public/dashboard_example.png";
import analytics_example from "../public/analytics_example.png";
import video_example from "../public/video_example.png";

export default function Home() {
	const ListLink = ({ weblink }) => {
		return (
			<li>
				<a
					href={weblink}
					target="_blank"
					className="text-blue-500"
					rel="noreferrer">
					{weblink}
				</a>
			</li>
		);
	};

	return (
		<div className={styles.container}>
			<Head>
				<title>Covalent - Design Process</title>
				<meta name="description" content="Covalent" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<Section delay={0.1}>
					<div className="text-lg mt-6">
						<div className="text-2xl font-medium">Gallery</div>
						<div className="text-lg mt-2">
							A showcase of some screens and references used to design my app.
						</div>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Poster Design</div>
						<Image
							src={poster}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Persona Design</div>
						<Image
							src={persona}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Dashboard Design</div>
						<Image
							src={dashboard_example}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Analytics Design</div>
						<Image
							src={analytics_example}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Report Design</div>
						<Image
							src={report_example}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="flex flex-col justify-center py-4 text-xl">
						<div className="text-xl font-medium">Video Design</div>
						<Image
							src={video_example}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="text-lg mt-6">
						<div className="text-xl font-medium">References</div>
						<ol className="text-lg list-disc list-inside py-4 mx-2">
							<ListLink weblink="https://wandr.studio/blog/dashboard-design-principles/" />
							<ListLink weblink="https://www.datapine.com/blog/dashboard-design-principles-and-best-practices/" />
							<ListLink weblink="https://www.sisense.com/blog/4-design-principles-creating-better-dashboards/" />
							<ListLink weblink="https://www.figma.com/community/file/809559910249051285" />
							<ListLink weblink="https://www.figma.com/community/file/981909581633093086" />
							<ListLink weblink="https://www.figma.com/community/file/952435706130034963" />
							<ListLink weblink="https://www.figma.com/community/file/1088418504991825797" />
						</ol>
					</div>
				</Section>
			</div>
		</div>
	);
}
