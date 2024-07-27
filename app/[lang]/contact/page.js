// app/[lang]/contact/page.js
import { getDictionary } from '../../../lib/i18n'

export default async function Contact({ params: { lang } }) {
  const dict = await getDictionary(lang)

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">{dict.contact.title}</h1>
      <p className="mb-8">{dict.contact.description}</p>
      
      <form className="max-w-md mx-auto">
        <div className="form-control">
          <label className="label">
            <span className="label-text">{dict.contact.form.name}</span>
          </label>
          <input type="text" className="input input-bordered" required />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">{dict.contact.form.email}</span>
          </label>
          <input type="email" className="input input-bordered" required />
        </div>
        <div className="form-control mt-4">
          <label className="label">
            <span className="label-text">{dict.contact.form.message}</span>
          </label>
          <textarea className="textarea textarea-bordered h-24" required></textarea>
        </div>
        <div className="form-control mt-6">
          <button type="submit" className="btn btn-primary">{dict.contact.form.submit}</button>
        </div>
      </form>
    </main>
  )
}