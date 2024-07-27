// app/[lang]/faq/page.js
import { getDictionary } from '../../../lib/i18n'

export default async function FAQ({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{dict.faq.title}</h1>
      <div className="space-y-4">
        {dict.faq.questions.map((item, index) => (
          <div key={index} className="collapse collapse-plus bg-base-200">
            <input type="radio" name="my-accordion-3" /> 
            <div className="collapse-title text-xl font-medium">
              {item.question}
            </div>
            <div className="collapse-content"> 
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}