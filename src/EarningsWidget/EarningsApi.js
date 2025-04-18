const API_KEY = 'f090a778d74f4450a11ad417ad72740c';
const CACHE_MAX_AGE = 5 * 60 * 1000; // 5 minutes

// Cache for API responses
const cache = JSON.parse(localStorage.getItem('apiCache')) || {};

// Utility: Generate a cache key
const generateCacheKey = (url, params) => `${url}?${new URLSearchParams(params).toString()}`;

// Utility: Save cache to localStorage
const saveCache = () => {
  localStorage.setItem('apiCache', JSON.stringify(cache));
};

// Utility: Check if a cache entry is expired
const isCacheExpired = (cacheEntry, maxAge = CACHE_MAX_AGE) => {
  return Date.now() - cacheEntry.timestamp > maxAge;
};

// Utility: Fetch data with caching
const fetchWithCache = async (url, params = {}) => {
  const cacheKey = generateCacheKey(url, params);

  if (cache[cacheKey] && !isCacheExpired(cache[cacheKey])) {
    console.log(`Returning cached data for ${cacheKey}`);
    return cache[cacheKey].data;
  }

  console.log(`Fetching data from API: ${cacheKey}`);
  try {
    const response = await fetch(`${url}?${new URLSearchParams(params).toString()}`, {
      headers: { accept: 'application/json' },
    });
    if (!response.ok) {
      throw new Error(`API request failed with status ${response.status}`);
    }
    const data = await response.json();
    cache[cacheKey] = { data, timestamp: Date.now() };
    saveCache();
    return data;
  } catch (error) {
    console.error(`Failed to fetch data from ${url}:`, error);
    throw error;
  }
};

// Fetch earnings data
export const fetchEarningsData = async () => {
  const url = `https://api.benzinga.com/api/v2.1/calendar/earnings`;
  try {
    const data = await fetchWithCache(url, { token: API_KEY });
    return data.earnings || [];
  } catch (error) {
    console.error('Failed to fetch earnings data:', error);
    throw error;
  }
};

// Fetch logos data
export const fetchLogosData = async (tickers) => {
  const url = `https://api.benzinga.com/api/v2/logos/search`;
  const params = {
    token: API_KEY,
    search_keys: tickers.join(','),
    search_keys_type: 'symbol',
    fields: 'mark_vector_light',
  };
  try {
    const data = await fetchWithCache(url, params);
    return data.data || [];
  } catch (error) {
    console.error('Failed to fetch logos data:', error);
    throw error;
  }
};
