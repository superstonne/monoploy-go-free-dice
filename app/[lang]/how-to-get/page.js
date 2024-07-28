// app/[lang]/how-to-get/page.js
import { getDictionary } from '../../../lib/i18n'

export async function generateMetadata({ params }) {
  const dict = await getDictionary(params.lang)
  const canonicalUrl = `https://www.monoploy-go-free-dice.com/${params.lang}/how-to-get`

  return {
    title: dict.howToGet.title,
    description: dict.howToGet.description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: dict.howToGet.title,
      description: dict.howToGet.description,
      url: canonicalUrl,
    },
  }
}

export default async function HowToGet({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{dict.howToGet.title}</h1>
      <p className="text-xl mb-8">{dict.howToGet.description}</p>

      <div className="space-y-8">
        {dict.howToGet.steps.map((step, index) => (
          <div key={index} className="card bg-base-100 shadow-xl">
            <div className="card-body">
              <h2 className="card-title text-2xl">
                Step {index + 1}: {step.title}
              </h2>
              <p>{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-12">
        <h2 className="text-3xl font-semibold mb-4">Tips for Getting Free Dice</h2>
        <ul className="list-disc list-inside space-y-2">
          {dict.howToGet.tips.map((tip, index) => (
            <li key={index}>{tip}</li>
          ))}
        </ul>
      </div>

      <div className="alert alert-info mt-8">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="stroke-current shrink-0 w-6 h-6"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
        <span>{dict.howToGet.note}</span>
      </div>
    </main>
  )
}