const SectionCard = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="rounded-2xl bg-gray-50 dark:bg-black shadow dark:shadow-primary px-5 pb-14 pt-14 md:pb-1 lg:pb-5 lg:pt-20 xl:px-10">
      <div className="flex flex-col items-center justify-center">{children}</div>
    </div>
  );
};

export default SectionCard;
