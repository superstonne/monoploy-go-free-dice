'use client';

import { useState, useEffect } from 'react';
import axios from 'axios';

export default function ClientLinks({ lang, dict }) {
  const [links, setLinks] = useState([]);

  useEffect(() => {
    const fetchLinks = async () => {
      try {
        console.log("Fetching links...");
        const response = await axios.get('/api/fetchLinks');
        setLinks(response.data.links || []);
      } catch (error) {
        console.error('Error fetching links:', error);
      }
    };

    fetchLinks();
  }, []);

  return (
    <section className="mb-8">
      <h2 className="text-3xl font-semibold mb-4">{dict.latestLinkslatestLinksTitle}</h2>
      <ol className="space-y-4">
        {links.map((link, index) => (
          <li key={index} className="relative p-4 bg-white shadow-lg rounded-lg transition-transform transform hover:scale-105">
            <a
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className={`block text-xl font-semibold text-blue-500 hover:text-blue-700 transition-colors duration-300 ${index === 0 ? 'relative after:content-["NEW"] after:absolute after:top-2 after:right-2 after:bg-yellow-400 after:text-white after:px-2 after:py-1 after:rounded-full after:text-sm' : ''}`}
            >
              {link.text}
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}