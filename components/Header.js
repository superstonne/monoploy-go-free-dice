// components/Header.js
import Link from 'next/link';
import LanguageSwitcher from './LanguageSwitcher';
import { getDictionary } from '../lib/i18n';

export default async function Header({ lang }) {
  const dict = await getDictionary(lang);

  return (
    <header className="bg-primary text-white shadow-lg">
      <div className="navbar container mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </label>
            <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52 text-black">
              <li><Link href={`/${lang}`}>{dict.nav.home}</Link></li>
              <li><Link href={`/${lang}/latest-links`}>{dict.nav.latestLinks}</Link></li>
              <li><Link href={`/${lang}/how-to-get`}>{dict.nav.howToGet}</Link></li>
              <li><Link href={`/${lang}/faq`}>{dict.nav.faq}</Link></li>
              <li><Link href={`/${lang}/contact`}>{dict.nav.contact}</Link></li>
            </ul>
          </div>
          <Link href={`/${lang}`} className="btn btn-ghost normal-case text-xl text-white">Monopoly Go Free Dice</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-white">
            <li><Link href={`/${lang}`}>{dict.nav.home}</Link></li>
            <li><Link href={`/${lang}/latest-links`}>{dict.nav.latestLinks}</Link></li>
            <li><Link href={`/${lang}/how-to-get`}>{dict.nav.howToGet}</Link></li>
            <li><Link href={`/${lang}/faq`}>{dict.nav.faq}</Link></li>
            <li><Link href={`/${lang}/contact`}>{dict.nav.contact}</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <LanguageSwitcher currentLang={lang} />
        </div>
      </div>
    </header>
  );
}
