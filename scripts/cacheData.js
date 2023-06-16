export async function cacheData(file) {
	const cachedData = localStorage.getItem("cachedData");

	if (cachedData) {
		const postsData = JSON.parse(cachedData);
		return postsData;
	} else {
		try {
			const response = await fetch(file);
			const data = await response.json();
			localStorage.setItem("cachedData", JSON.stringify(data));
			return data;
		} catch (error) {
			console.error("Error fetching data:", error);
			throw error;
		}
	}
}
