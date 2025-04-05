import Image from "next/image";

const DownloadButton = () => {
  return (
    <a
      className="mr-6 inline-flex h-[60px] items-center rounded-lg bg-primary px-[30px] py-[14px] text-white hover:bg-black/90 dark:bg-white dark:text-black dark:hover:bg-white/90"
      href="https://play.google.com/store/apps/details?id=com.soltechforge.fire_money_manager"
    >
      <span className="border-stroke border-opacity-40 mr-[18px] border-r pr-[18px] leading-relaxed dark:border-[#BDBDBD]">Download Now</span>
      <Image src="/images/google-play-store.svg" width="35" height="35" alt="Google Play Store" />
    </a>
  );
};

export default DownloadButton;
