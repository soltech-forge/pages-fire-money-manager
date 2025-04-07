import TitledSection from "../Common/TitledSection";
import { Benefit } from "./Benefit";
import BenefitsData from "./benefitsData";


const Benefits = () => {
	const preTitle = "Benefits";
	const title = "Why FIRE Money Manager?";
	const description = "All the tools you need to master your money and accelerate your path to financial freedom.";
	return (
		<TitledSection id="benefits" preTitle={preTitle} title={title} desc={description}>
			<Benefit data={BenefitsData.tracking} />
			<Benefit imgPos="right" data={BenefitsData.insights} />
		</TitledSection>
	)
}

export default Benefits;
