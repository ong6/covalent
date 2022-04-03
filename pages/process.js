import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import persona from "../public/persona.png";
import wireframe_01 from "../public/wireframe_01.png";
import wireframe_02 from "../public/wireframe_02.png";
import styles from "../styles/Home.module.css";

export default function Home() {
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
						<div className="text-2xl font-medium">Design Process</div>
						<div className="text-lg mt-2">
							Before starting the design process, I had to identify who my app
							was going to be for. I choose my target audience to be creators
							who focus mainly on video content.
						</div>
						<div className="text-lg mt-2">
							So I designed the following persona to help focus on the
							experience of that main actor.
						</div>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="flex justify-center py-4 text-xl">
						<Image
							src={persona}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.1}>
					<div className="text-lg mt-6">
						<div className="text-lg mt-2">
							Then based on this user group and the persona, I came up with the
							following user tasks.
						</div>
						<ol className="text-lg list-decimal list-inside py-4">
							<li className="li">
								I want to have a daily report with all my statistics across all
								social media platforms.
							</li>
							<li className="li">
								I want to be able to view the videos posted to each platform in
								one place.
							</li>
							<li className="li">
								I want to be able to see analytics data for each platform
								without having to go to each of them separately.
							</li>
						</ol>
						<div className="div">
							From these user tasks, I determined that a web application with a
							dashboard style would suit this product the best and since most
							video creators have to interact with websites, it would be a
							complementary addition to their workflow.
						</div>
						<div className="mt-2">
							I then hand drew simple wireframes to represent each user task to
							get a clearer image of what it was going to look like. After a few
							iterations, I ended up with the following storyboards/ prototypes:
						</div>
					</div>
				</Section>
				<Section delay={0.2}>
					<div className="flex justify-center py-4 text-xl">
						<Image
							src={wireframe_01}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="flex justify-center py-4 text-xl">
						<Image
							src={wireframe_02}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.4}>
					<div className="text-lg mt-4">
						<div className="text-lg mt-2">
							Some of the design decisions I faced when working on the
							wireframe:
						</div>
						<ol className="text-lg list-disc list-inside py-4">
							<li className="li">
								Using a dashboard style vs using a traditional style webpage.
							</li>
							<li className="li">
								What tabs do I want to showcase on the sidebar.
							</li>
							<li className="li">
								Usage of graphs and if they add value to the user especially
								when some data can be represented as values instead of graphs.
							</li>
						</ol>
						<div className="mt-2">
							In the end I choose to keep the dashboard style since it felt more
							functional especially when the user will want to be able to switch
							between different tabs conveniently. This also helps the user to
							be able to see the data in a more organized way.
						</div>
						<div className="mt-2">
							Once the Low-Fi mockups where done, I started to design the Hi-Fi
							version of the web application on Figma.
						</div>
					</div>
				</Section>
			</div>
		</div>
	);
}
