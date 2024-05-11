import headerNavLinks from "@/data/headerNavLinks";
import Link from "next/link";
import SwitchTheme from "./switch-theme";
import MobileNav from "./mobile-nav";

export default function Header() {
  return (
    <header className="flex item-center justify-between  py-10">
      <div>logo</div>
      <div className="flex items-center space-x-4 leading-5 sm:space-x-6">
        {headerNavLinks.map((link) => (
          <Link
            key={link.title}
            href={link.href}
            className="hidden font-medium text-gray-900 dark:text-gray-100 sm:block"
          >
            {link.title}
          </Link>
        ))}
        <SwitchTheme></SwitchTheme>
        <MobileNav></MobileNav>
      </div>
    </header>
  );
}
