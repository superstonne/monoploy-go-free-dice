// components/Footer.js
import { getDictionary } from '../lib/i18n';

export default async function Footer({ lang }) {
  const dict = await getDictionary(lang);

  return (
    <footer className="bg-primary text-white py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h5 className="text-lg font-bold mb-4">{dict.footer.aboutUsTitle}</h5>
            <p>{dict.footer.aboutUsContent}</p>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">{dict.footer.quickLinksTitle}</h5>
            <ul className="space-y-2">
              <li><a href={`/${lang}`} className="hover:underline">{dict.nav.home}</a></li>
              <li><a href={`/${lang}/latest-links`} className="hover:underline">{dict.nav.latestLinks}</a></li>
              <li><a href={`/${lang}/how-to-get`} className="hover:underline">{dict.nav.howToGet}</a></li>
              <li><a href={`/${lang}/faq`} className="hover:underline">{dict.nav.faq}</a></li>
              <li><a href={`/${lang}/contact`} className="hover:underline">{dict.nav.contact}</a></li>
            </ul>
          </div>
          <div>
            <h5 className="text-lg font-bold mb-4">{dict.footer.partnerLinksTitle}</h5>
            <ul className="space-y-2">
              {/* 添加更多友情链接 */}
              <li><a href="https://woy.ai/" title="Woy AI Tools Directory" className="hover:underline">Woy AI Tools</a></li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-4 text-center">
          <p>&copy; 2024 Monopoly Go Free Dice. {dict.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
