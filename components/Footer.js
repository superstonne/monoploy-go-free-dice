// components/Footer.js
import { getDictionary } from '../lib/i18n'

export default async function Footer({ lang }) {
  const dict = await getDictionary(lang)

  return (
    <footer className="bg-primary text-white p-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 Monopoly Go Free Dice. {dict.footer.rights}</p>
      </div>
    </footer>
  )
}