import { ResponsivePie } from "@nivo/pie";
import { data } from "../public/pieData";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Pie = () => (
	<ResponsivePie
		data={data}
		margin={{ top: 40, right: 40, bottom: 40, left: 40 }}
		innerRadius={0.5}
		padAngle={0.7}
		cornerRadius={3}
		activeOuterRadiusOffset={8}
		borderWidth={1}
		borderColor={{
			from: "color",
			modifiers: [["darker", 0.2]],
		}}
		arcLinkLabelsSkipAngle={10}
		arcLinkLabelsTextColor="#333333"
		arcLinkLabelsThickness={2}
		arcLinkLabelsColor={{ from: "color" }}
		arcLabelsSkipAngle={10}
		arcLabelsTextColor={{
			from: "color",
			modifiers: [["darker", 2]],
		}}
		defs={[
			{
				id: "dots",
				type: "patternDots",
				background: "inherit",
				color: "rgba(255, 255, 255, 0.3)",
				size: 4,
				padding: 1,
				stagger: true,
			},
			{
				id: "lines",
				type: "patternLines",
				background: "inherit",
				color: "rgba(255, 255, 255, 0.3)",
				rotation: -45,
				lineWidth: 6,
				spacing: 10,
			},
		]}
		fill={[
			{
				match: {
					id: "Food",
				},
				id: "dots",
			},
			{
				match: {
					id: "Food",
				},
				id: "dots",
			},
			{
				match: {
					id: "Savings",
				},
				id: "lines",
			},
			{
				match: {
					id: "Food",
				},
				id: "lines",
			},
		]}
	/>
);

export default Pie;
