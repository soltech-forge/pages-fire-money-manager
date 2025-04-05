import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="border-t border-stroke bg-white dark:border-strokedark dark:bg-blacksection">
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        <div className="flex flex-col flex-wrap items-center justify-center gap-5 border-t border-stroke py-7 dark:border-strokedark lg:flex-row lg:justify-between lg:gap-0">
          <div className="animate_top">
            <ul className="flex items-center gap-8">
              <FooterTextButton href="#" text="English" />
              <FooterTextButton href="https://doc-hosting.flycricket.io/soltech-forge/d023592d-086a-400a-99b8-358e57519ea5/privacy" text="Privacy Policy" />
              <FooterTextButton href="/support" text="Support" />
            </ul>
          </div>

          <div className="animate_top">
            <p>&copy; {new Date().getFullYear()} Soltech Forge. All rights reserved</p>
          </div>

          <div className="animate_top">
            <a href="/" className="relative">
              <Image width={50} height={50} src="/images/logo.svg" alt="Logo" className="dark:hidden" />
              <Image width={50} height={50} src="/images/logo.svg" alt="Logo" className="hidden dark:block" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const FooterTextButton = ({ href, text }: { href: string; text: string }) => {
  return (
    <li>
      <Link href={href} className="hover:text-primary">
        {text}
      </Link>
    </li>
  );
};

export default Footer;
