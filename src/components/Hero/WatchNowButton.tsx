const WatchNowButton = () => {
  return (
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
  );
};

export default WatchNowButton;
