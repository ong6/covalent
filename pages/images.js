import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import Pie from "../components/Pie";
import styles from "../styles/Home.module.css";
import Streak from "../components/Streak";
import Sample from "../public/Sample.svg";
import Sample2 from "../public/Sample2.svg";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Covalent</title>
				<meta name="description" content="OCBC Hackathon" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<div className="">
				<Section delay={0.2}>
					<div className="flex flex-col">
						<div className="text-center font-bold text-3xl py-4">
							Our end goal
						</div>
						<div className="flex flex-row w-full space-x-4">
							<div className="div">
								<Image src={Sample} />
							</div>
							<div className="div">
								<Image src={Sample2} />
							</div>
						</div>
					</div>
				</Section>
			</div>
		</div>
	);
}
