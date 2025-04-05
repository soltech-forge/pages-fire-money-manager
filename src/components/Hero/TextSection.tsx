import DownloadButton from "./DowloadButton";
import WatchNowButton from "./WatchNowButton";

const TextSection = () => {
  return (
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
          <DownloadButton />
          <WatchNowButton />
        </div>
      </div>
    </div>
  );
};

export default TextSection;
