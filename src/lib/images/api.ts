// eslint-disable-next-line @typescript-eslint/no-explicit-any
export async function fetchNews(apiKey: string): Promise<any> {
	const response = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`);

	if (!response.ok) {
		throw new Error('Failed to fetch news');
	}

	const data = await response.json();
	return data.articles;
}
