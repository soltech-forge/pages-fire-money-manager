import { benefitOne, benefitTwo } from "@/components/data";
import TitledSection from "../Common/TitledSection";
import { Benefit } from "./Benefit";


const Benefits = () => {
	const preTitle = "Nextly Benefits"
	const title = "Why should you use this landing page"
	const description = "Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source."
	return (
		<TitledSection id="benefits" preTitle={preTitle} title={title} desc={description}>
			<Benefit data={benefitOne} />
			<Benefit imgPos="right" data={benefitTwo} />
		</TitledSection>
	)
}

export default Benefits;
