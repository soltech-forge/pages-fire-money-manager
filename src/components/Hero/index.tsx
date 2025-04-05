import { Container } from "@/components/Common/Container";
import TextSection from "./TextSection";
import ImageSection from "./ImageSection";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap lg:my-24">
        <div className="flex items-center min-h-[600px] w-full lg:w-1/2">
          <TextSection />
        </div>
        <div className="w-full lg:w-1/2">
          <ImageSection />
        </div>
      </Container>
    </>
  );
};

export default Hero;
