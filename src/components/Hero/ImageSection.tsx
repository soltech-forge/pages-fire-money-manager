import Image from "next/image";

const ImageSection = () => {
  return (
    <div className="wow fadeInUp relative z-10 mx-auto w-full max-w-[550px] lg:mr-0">
      <div className="max-auto bg-gradient-1 absolute top-0 right-0 left-0 -z-10 aspect-square w-full rounded-full"></div>
      <Image 
        src="/img/logo/fire_money.png"
        width={500}
        height={500}
        alt="Hero"
        className="object-cover object-center w-full h-auto rounded-lg lg:rounded-3xl" 
      />
    </div>
  );
};

export default ImageSection;
