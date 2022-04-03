import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import Pie from "../components/Pie";
import styles from "../styles/Home.module.css";
import Streak from "../components/Streak";
import { Progress } from "@chakra-ui/react";
import { AiFillCar } from "react-icons/ai";
import { BiFoodMenu } from "react-icons/bi";
import poster from "../public/covalent_banner.png";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Covalent</title>
				<meta name="description" content="Covalent" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<Section delay={0.1}>
					<div className="text-lg mt-6">
						<div className="text-2xl font-medium">Introduction</div>
						<div className="text-lg mt-2">
							With the growth of social media, more and more creators have
							picked up video creation as either a hobby or a full-time job. To
							keep up with this, more and more platforms for posting videos have
							come up in the recent years and having to manage all of them can
							be a hassle. We want to remedy this by introducing our social
							media manager:
						</div>
					</div>
				</Section>
				<Section delay={0.3}>
					<div className="flex justify-center py-4 text-xl">
						<Image
							src={poster}
							alt="covalent"
							placeholder="blur"
							className="rounded-lg"
						/>
					</div>
				</Section>
				<Section delay={0.5}>
					<div className="text-lg mt-4">
						<div className="text-lg mt-2">
							Covalent is a social media manager targeted primarily at users
							whose main form of content is in videos. Covalent helps to keep
							track of the analytics across all video platforms such as YouTube,
							twitch, Instagram, TikTok and more!
						</div>
						<div className="mt-2">
							Furthermore, covalent allows the management of videos as well as
							the tracking of growth across the different platforms and presents
							all data in visually appealing bar charts, graphs, and pie charts.
							This allows the user to worry less about their analytics and focus
							more on video production.
						</div>
					</div>
				</Section>
			</div>
		</div>
	);
}
