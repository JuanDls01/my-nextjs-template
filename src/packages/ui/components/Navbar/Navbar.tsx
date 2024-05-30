import { getDictionary } from "@/dictionaries";
import { Language } from "@/i18n-config";
import Link from "next/link";

const navbarLinks = [
  { href: "/", title: "home" },
  { href: "/dashboard", title: "dashboard" },
] as const;

type NavbarProps = {
  lang: Language;
};

const Navbar = async ({ lang }: NavbarProps) => {
  const { Navbar } = await getDictionary(lang);

  return (
    <nav className="container mx-auto flex w-full items-center justify-between border-b border-gray-800">
      <h1 className={`text-xl font-bold text-white`}>Next.js Template</h1>
      <ul className="flex w-2/6 items-center justify-between">
        {navbarLinks.map(({ href, title }) => (
          <li key={title}>
            <Link href={href}>{Navbar[title]}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};
export default Navbar;
