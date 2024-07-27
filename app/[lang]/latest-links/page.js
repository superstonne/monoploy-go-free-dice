// app/[lang]/monopoly-go-free-dice/page.js
import { Suspense } from 'react';
import { getDictionary } from '../../../lib/i18n';
import ClientLinks from './ClientLinks';

export default async function MonopolyGoFreeDicePage({ params: { lang } }) {
  const dict = await getDictionary(lang);

  return (
    <main className="container mx-auto px-4 py-8">
      <div className="container mx-auto p-4 bg-base-200 min-h-screen">
        <div className="card bg-base-100 shadow-xl">
          <div className="card-body">
            <h1 className="card-title text-4xl font-bold mb-6">{dict.latestLinks.pageTitle}</h1>

            <div className="alert alert-info shadow-lg mb-6">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current flex-shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                <span><strong>{dict.latestLinks.quickSummary}</strong> {dict.latestLinks.summaryContent}</span>
              </div>
            </div>

            <div className="mb-8">
              <h2 className="text-2xl font-semibold mb-2">{dict.latestLinks.contents}</h2>
              <ul className="menu bg-base-200 w-56 rounded-box">
                <li><a href="#active-links">{dict.latestLinks.activeLinksTitle}</a></li>
                <li><a href="#how-to-redeem">{dict.latestLinks.howToRedeemTitle}</a></li>
                <li><a href="#other-ways">{dict.latestLinks.otherWaysTitle}</a></li>
                <li><a href="#troubleshooting">{dict.latestLinks.troubleshootingTitle}</a></li>
              </ul>
            </div>

            <section id="active-links" className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">{dict.latestLinks.activeLinksTitle}</h2>
              <Suspense fallback={<div className="loading loading-spinner loading-lg">{dict.latestLinks.loadingLinks}</div>}>
                <ClientLinks lang={lang} dict={dict.latestLinks} />
              </Suspense>
            </section>

            <section id="how-to-redeem" className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">{dict.latestLinks.howToRedeemTitle}</h2>
              <p>{dict.latestLinks.howToRedeemContent}</p>
            </section>

            <section id="other-ways" className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">{dict.latestLinks.otherWaysTitle}</h2>
              <ul className="list-disc list-inside">
                {dict.latestLinks.otherWaysList.map((way, index) => (
                  <li key={index}>{way}</li>
                ))}
              </ul>
            </section>

            <section id="troubleshooting" className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">{dict.latestLinks.troubleshootingTitle}</h2>
              <p>{dict.latestLinks.troubleshootingContent}</p>
            </section>

            <div className="alert alert-success shadow-lg mb-8">
              <div>
                <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                <span><strong>{dict.latestLinks.ctaTitle}</strong> {dict.latestLinks.ctaContent}</span>
              </div>
            </div>

            <section className="mb-8">
              <h2 className="text-3xl font-semibold mb-4">{dict.latestLinks.faqTitle}</h2>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" checked="checked" /> 
                <div className="collapse-title text-xl font-medium">
                  {dict.latestLinks.faqQuestion1}
                </div>
                <div className="collapse-content"> 
                  <p>{dict.latestLinks.faqAnswer1}</p>
                </div>
              </div>
              <div className="collapse collapse-plus bg-base-200">
                <input type="radio" name="my-accordion-3" /> 
                <div className="collapse-title text-xl font-medium">
                  {dict.latestLinks.faqQuestion2}
                </div>
                <div className="collapse-content"> 
                  <p>{dict.latestLinks.faqAnswer2}</p>
                </div>
              </div>
            </section>

            <div className="stats shadow">
              <div className="stat">
                <div className="stat-title">{dict.latestLinks.lastUpdated}</div>
                <div className="stat-value">{new Date().toLocaleString(lang)}</div>
              </div>
              <div className="stat">
                <div className="stat-title">{dict.latestLinks.totalRolls}</div>
                <div className="stat-value">280</div>
              </div>
              <div className="stat">
                <div className="stat-title">{dict.latestLinks.usersHelped}</div>
                <div className="stat-value">152,487</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}