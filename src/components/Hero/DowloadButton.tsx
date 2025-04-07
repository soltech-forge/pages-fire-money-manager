import Image from "next/image";

const DownloadButton = () => {
  return (
    <a
      className="mr-6 px-[30px] py-[14px] h-[60px] inline-flex items-center rounded-lg text-white bg-primary hover:bg-primary/90 dark:text-black dark:bg-white dark:hover:bg-white/90"
      href="https://play.google.com/store/apps/details?id=com.soltechforge.fire_money_manager"
    >
      <span className="border-stroke border-opacity-40 mr-[18px] border-r pr-[18px] leading-relaxed dark:border-[#BDBDBD]">Download Now</span>
      <Image src="/img/google-play-store-dark.svg" width="35" height="35" alt="Google Play Store" className="dark:hidden" />
      <Image src="/img/google-play-store-light.svg" width="35" height="35" alt="Google Play Store" className="hidden dark:block" />
    </a>
  );
};

export default DownloadButton;
