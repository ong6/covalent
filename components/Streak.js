import { ResponsiveCalendar } from "@nivo/calendar";
import { data } from "../public/calendarData";

// make sure parent container have a defined height when using
// responsive component, otherwise height will be 0 and
// no chart will be rendered.
// website examples showcase many properties,
// you'll often use just a few of them.

const Streak = () => (
	<ResponsiveCalendar
		data={data}
		from="2022-01-01"
		to="2022-05-12"
		emptyColor="#eeeeee"
		colors={["#61cdbb", "#97e3d5"]}
		margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
		monthBorderColor="#ffffff"
		dayBorderWidth={2}
		dayBorderColor="#ffffff"
	/>
);

export default Streak;
