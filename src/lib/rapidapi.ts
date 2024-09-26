const RAPIDAPI_KEY = process.env.TASTY_API_KEY;
const TASTY_URL = 'https://tasty.p.rapidapi.com/recipes/list?from=0&size=20&tags=under_30_minutes';

export const fetchRandomRecipes = async (count = 5) => {
  const response = await fetch(`${TASTY_URL}`, {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': RAPIDAPI_KEY as string,
      'X-RapidAPI-Host': 'tasty.p.rapidapi.com',
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch recipes');
  }

  const data = await response.json();
  return data.results;
};