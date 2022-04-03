import Head from "next/head";
import Image from "next/image";
import Section from "../components/Sections";
import analytics_example from "../public/analytics_example.png";
import dashboard_example from "../public/dashboard_example.png";
import report_example from "../public/report_example.png";
import video_example from "../public/video_example.png";
import styles from "../styles/Home.module.css";
import { Button } from "@chakra-ui/react";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import Link from "next/dist/client/link";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Covalent - Design Decisions</title>
				<meta name="description" content="Covalent" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<div className="">
				<Section delay={0.1}>
					<div className="text-lg mt-6">
						<div className="text-2xl font-medium">Design Decisions</div>
						<div className="text-lg mt-2">
							While working on the High-Fi prototype, I choose to split my
							sidebar mockup into the following sections:
						</div>
						<ol className="text-lg list-decimal list-inside py-4 px-2">
							<li className="li">Dashboard - Landing page for the user</li>
							<li className="li">
								Messages - Allows user to chat with team members
							</li>
							<li className="li">
								Templates - Easy way for users to post videos across multiple
								platforms
							</li>
							<li className="li">
								Analytics - Allows user to track platform specific analytics
							</li>
							<li className="li">
								Reports - Allows users to track overall growth, performance and
								other non-video aspects
							</li>
							<li className="li">
								Team - User can manage team members, allow team members to post
								on their behalf etc, without having to give them account
								permissions
							</li>
							<li className="li">
								Videos - View all recently created videos and manage their
								individual analytics
							</li>
						</ol>
						<div className="div">
							The idea behind these 7 sections was that aside from just the
							analytics portions, the users should also be able to manage their
							team, post videos to all platforms at once and be able to
							customize their postings to suit each platform. I then decided to
							focus on the Analytics, Reports and Videos user flows to be made
							into an interactive prototype.
						</div>
						<div className="mt-2">
							While the rest of the sections could just be a static mockup, and
							although I am not going to fully explore some of these sections
							(due to time constraints), I wanted to show the user how the
							different sections of the app work together to create a cohesive
							experience.
						</div>
						<div className="mt-2">
							I choose to make use of
							<a href="https://mui.com/" className="text-blue-500">
								{" Material UI"}
							</a>
							<a
								href="https://www.figma.com/community/file/1088418504991825797"
								className="text-blue-500">
								{", Flex UI"}
							</a>
							<a
								href="https://chartplugin.com/index.html"
								className="text-blue-500">
								{", Charts Library in Figma "}
							</a>
							to help aid in the design of the interface. That said, I want to
							dive deeper into some of the design decisions made while designing
							some of the pages.
						</div>
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
				<Section delay={0.3}>
					<div className="text-lg mt-6">
						<div className="text-lg mt-2">
							The dashboard was the first page created and helped me to form the
							style that I would stick with for the rest of the pages. I decided
							to go with the main colors being white and blue with other colors
							being used to make other details pop. I followed design guidelines
							such as the 60, 30, 10 rule for coloring and kept my design as
							clean and minimal as possible.
						</div>
						<div className="text-lg mt-2">
							I also decided to keep all my items in each page as
							&quot;containers&quot;. I felt that this would make the charts and
							graphs less cluttered and give the user a feeling for
							spaciousness.
						</div>
					</div>
				</Section>
				<Section delay={0.4}>
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
				<Section delay={0.5}>
					<div className="text-lg mt-6">
						<div className="text-lg mt-2">
							The Analytics page is used to measure performance across
							platforms, this allows the user to have a high level overview of
							how their videos are performing. Most of the charts in this page
							are drawn with the charts library in Figma, with some cosmetics
							improvements by myself.
						</div>
						<div className="text-lg mt-2">
							All the chart data such as views, view growth and watch time are
							fields that the youtube, facebook and twitch analytics pages
							provided. So all these data fields are realistic and accurate in
							terms of what the user should be expected to see when viewing
							analytics.
						</div>
					</div>
				</Section>
				<Section delay={0.6}>
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
				<Section delay={0.7}>
					<div className="text-lg mt-6">
						<div className="text-lg mt-2">
							The key difference between the reports page and hte analytics page
							is that they represent the different types of data. While the
							analytics page is for representing the Video data, the analytics
							page is more for Business data. This will allow users to see how
							their videos are doing in more of a business perspective.
						</div>
						<div className="text-lg mt-2">
							As with the analytics page, the charts are drawn with the charts
							library and represent real data that can be gotten from each
							platform. I also decided to split out some of the data such as
							growth, profits, time viewed and subscriber rates. I did this to
							help categorize the data so users won&apos;t feel too overwhelmed
							by the amount of data.
						</div>
					</div>
				</Section>
				<Section delay={0.8}>
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
				<Section delay={0.9}>
					<div className="text-lg mt-6">
						<div className="text-lg mt-2">
							Finally, we have the video page. This page can be used by creators
							to help manage their past videos, post new videos and view their
							current videos. The page shows which platforms users have posted
							to, the number of views each video got, the name and description
							of the videos in a list format. The list format was choose to
							allow of displaying of more details than a card format while being
							easier to sort through the date, views and other field.
						</div>
						<div className="text-lg mt-2">
							Users can also view individual videos analytics from this page by
							clicking the three dots at the action area to open a small pop up
							menu.
						</div>
					</div>
				</Section>
				<Section delay={0.7}>
					<div className="flex items-center justify-between">
						<Link href="/process">
							<Button colorScheme="twitter" leftIcon={<BsFillCaretLeftFill />}>
								To Design Process
							</Button>
						</Link>
						<Link href="/demo">
							<Button
								colorScheme="twitter"
								rightIcon={<BsFillCaretRightFill />}>
								To Figma Showcase
							</Button>
						</Link>
					</div>
				</Section>
			</div>
		</div>
	);
}
