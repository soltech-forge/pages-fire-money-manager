import Image from "next/image";
import { Container } from "@/components/Container";

const Hero = () => {
  return (
    <>
      <Container className="flex flex-wrap lg:my-24">
        <div className="flex items-center min-h-[600px] w-full lg:w-1/2">
          <div className="max-w-2xl my-auto">
            <h1 className="text-3xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              <span className="text-8xl bg-gradient-1 bg-clip-text text-transparent">FIRE</span> <br />
              <span>Money Manager</span>
            </h1>
            <p className="py-8 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              Track your income, expenses, and balances effortlessly. Get beautiful visual insights with intuitive charts and graphs to understand your financial health and patrimony at a glance.
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <div className="flex flex-wrap items-center">
                <a
                  className="mr-6 inline-flex h-[60px] items-center rounded-lg bg-primary px-[30px] py-[14px] text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
                  href="https://play.google.com/store/apps/details?id=com.soltechforge.fire_money_manager"
                >
                  <span className="border-stroke border-opacity-40 mr-[18px] border-r pr-[18px] leading-relaxed dark:border-[#BDBDBD]">Download Now</span>
                  <Image src="/images/google-play-store.svg" width="35" height="35" alt="Google Play Store" />
                </a>
                <a className="glightbox hover:text-primary dark:hover:text-primary inline-flex items-center py-4 text-black dark:text-white" href="#">
                  <span className="mr-[22px] flex h-[60px] w-[60px] items-center justify-center rounded-full border-2 border-current">
                    <svg width="14" height="16" viewBox="0 0 14 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path
                        d="M13.5 7.06367C14.1667 7.44857 14.1667 8.41082 13.5 8.79572L1.5 15.7239C0.833334 16.1088 -3.3649e-08 15.6277 0 14.8579L6.05683e-07 1.00149C6.39332e-07 0.231693 0.833334 -0.249434 1.5 0.135466L13.5 7.06367Z"
                        fill="currentColor"
                      ></path>
                    </svg>
                  </span>
                  <span className="text-base font-medium">
                    <span className="block text-sm"> Watch Demo </span>See how it works
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full lg:w-1/2">
          <div className="wow fadeInUp relative z-10 mx-auto w-full max-w-[550px] lg:mr-0">
            <div className="max-auto bg-gradient-1 absolute top-0 right-0 left-0 -z-10 aspect-square w-full rounded-full"></div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Hero;
