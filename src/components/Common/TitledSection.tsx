const TitledSection = ({ id, preTitle, title, desc, children }: { id: string; preTitle: string; title: string; desc: string; children: React.ReactNode }) => {
  return (
    <section id={id} className="relative z-10 pt-[110px]">
      <div className="wow fadeInUp mx-auto mb-14 max-w-[690px] text-center lg:mb-[70px]" data-wow-delay=".2s">
        <div className="text-sm font-bold tracking-wider text-primary uppercase">{preTitle}</div>
        <h2 className="mb-4 text-3xl font-bold text-black dark:text-white sm:text-4xl md:text-[44px] md:leading-tight">{title}</h2>
        <p className="max-w-2xl leading-normal text-lg lg:text-xl xl:text-xl text-gray-500 dark:text-gray-300 py-4">{desc}</p>
      </div>
      <div className="max-w-[1390px] mx-auto">{children}</div>
    </section>
  );
};

export default TitledSection;
