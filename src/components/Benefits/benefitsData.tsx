import {
	ChartPieIcon,
	BriefcaseIcon,
	TableCellsIcon,
	SparklesIcon,
	PresentationChartLineIcon,
	Squares2X2Icon
} from "@heroicons/react/24/solid";


const tracking = {
	title: "Take Control of Your Financial Future",
	desc: "FIRE Money Manager gives you the tools to track, analyze, and understand your money, so you can focus on building freedom, not spreadsheets.",
	image: "img/screenshots/movements.jpeg",
	bullets: [
		{
			title: "Stay in Control of Your Spending",
			desc: "Track every income and expense with ease, using customizable categories and accounts. Get clarity on where your money is going.",
			icon: <BriefcaseIcon />,
		},
		{
			title: "Spot Patterns at a Glance",
			desc: "Explore your finances through different views that make it easy to recognize habits, track progress, and make better money decisions.",
			icon: <SparklesIcon />,
		},
		{
			title: "Own Your Data, Your Way",
			desc: "Export your transactions and reports to Excel anytime. FIRE Money Manager puts your financial life in your hands.",
			icon: <TableCellsIcon />,
		},
	],
};

const insights = {
	title: "Understand Your Money Like Never Before",
	desc: "Get instant insights with clean, interactive visuals",
	image: "img/screenshots/stats_accounts.jpeg",
	bullets: [
		{
			title: "Follow the Flow of Your Money",
			desc: "Visualize where your money comes from and where it goes, with clean, intuitive breakdowns by category.",
			icon: <ChartPieIcon />,
		},
		{
			title: "Track Your Financial Progress",
			desc: "Monitor your net worth over time with interactive charts that show how your finances evolve.",
			icon: <PresentationChartLineIcon />,
		},
		{
			title: "Visualize Your Wealth Distribution",
			desc: "See how your money is spread across accounts and categories to understand your overall financial structure.",
			icon: <Squares2X2Icon />,
		},
	],
};


export default {
	tracking, 
	insights,
};
