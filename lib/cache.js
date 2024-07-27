// cache.js
import cheerio from 'cheerio';

let cache = null;
let lastFetchTime = null;
let isFetching = false;
let fetchPromise = null;

const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

export async function getCachedData() {
  console.log("Get links....");
  
  const currentTime = Date.now();
  
  if (cache && lastFetchTime && (currentTime - lastFetchTime < CACHE_DURATION)) {
    console.log("Returning cache....");
    return cache;
  }

  if (!isFetching) {
    isFetching = true;
    fetchPromise = fetchAndUpdateCache().finally(() => {
      isFetching = false;
    });
  }

  // Wait for the async task to complete
  await fetchPromise;

  return cache;
}

async function fetchAndUpdateCache() {
  try {
    const url = 'https://www.vg247.com/monopoly-go-dice-links';
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }

    const html = await response.text();
    const $ = cheerio.load(html);
    // Define regex to match `{number} Free Dice`
    const regex = /\d+\sFree\sDice/;

    // Filter links that match the condition
    const links = $('a')
      .filter((i, el) => {
        const text = $(el).text().trim();
        return regex.test(text);
      })
      .map((i, el) => {
        const href = $(el).attr('href');
        const text = $(el).text().trim();
        return { href, text };
      })
      .get();
    console.log("links=", links);

    $('.entry-content ol li a').each((index, element) => {
      const href = $(element).attr('href');
      const text = $(element).text().trim();

      // Check if the text matches the format "{number} free dice rolls"
      const regex = /^\d+\sfree\s\dice\srolls$/i;
      if (regex.test(text)) {
        links.push({ href, text });
      }
    });

    cache = links;
    lastFetchTime = Date.now(); // Update the last fetch time
  } catch (error) {
    console.error('Failed to fetch and update cache:', error);
  }
}