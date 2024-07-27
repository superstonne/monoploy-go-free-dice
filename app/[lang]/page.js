// app/[lang]/page.js
import { getDictionary } from '../../lib/i18n'
import Link from 'next/link'

export default async function Home({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto px-4 py-8">
      {/* Hero Section */}
      <div className="hero bg-primary text-white rounded-box mb-8">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-5xl font-bold mb-4">{dict.home.title}</h1>
            <p className="text-xl mb-6">{dict.home.description}</p>
            <Link href={`/${lang}/latest-links`} className="btn btn-secondary btn-lg">
              {dict.home.cta}
            </Link>
          </div>
        </div>
      </div>

      {/* Content Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card bg-base-100 shadow-xl border-2 border-primary">
          <div className="card-body">
            <h2 className="card-title text-2xl text-primary">{dict.home.whatIs}</h2>
            <p>{dict.home.whatIsContent}</p>
          </div>
        </div>

        <div className="card bg-secondary text-white">
          <div className="card-body">
            <h2 className="card-title text-2xl">{dict.home.howItWorks}</h2>
            <ol className="list-decimal list-inside space-y-2">
              {dict.home.howItWorksList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ol>
          </div>
        </div>

        <div className="card bg-accent text-neutral">
          <div className="card-body">
            <h2 className="card-title text-2xl">{dict.home.benefits}</h2>
            <ul className="list-disc list-inside space-y-2">
              {dict.home.benefitsList.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="card bg-base-100 shadow-xl border-2 border-secondary">
          <div className="card-body">
            <h2 className="card-title text-2xl text-secondary">{dict.home.latestUpdates}</h2>
            <div className="space-y-2">
              {dict.home.updatesList.map((update, index) => (
                <div key={index} className="alert alert-info">
                  <div>
                    <span className="font-bold">{update.date}:</span>
                    <span>{update.content}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="card bg-base-100 shadow-xl my-8 border-2 border-accent">
        <div className="card-body">
          <h2 className="card-title text-3xl text-primary mb-4">{dict.home.faq}</h2>
          {dict.home.faqList.map((item, index) => (
            <div key={index} className="collapse collapse-plus bg-base-200 mb-2">
              <input type="radio" name="my-accordion-3" /> 
              <div className="collapse-title text-xl font-medium text-secondary">
                {item.question}
              </div>
              <div className="collapse-content"> 
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="card bg-primary text-white">
        <div className="card-body items-center text-center">
          <h2 className="card-title text-3xl">{dict.home.callToAction}</h2>
          <p className="mb-4">{dict.home.callToActionContent}</p>
          <div className="card-actions">
            <Link href={`/${lang}/latest-links`} className="btn btn-secondary btn-lg">
              {dict.home.getStarted}
            </Link>
          </div>
        </div>
      </div>
    </main>
  )
}