export async function fetchData(url, setData, setLoading, setError) {
    setLoading(true);
    setError(null);
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Failed to fetch data from ${url}`);
        }
        const data = await response.json();
        setData(data);
    } catch (error) {
        console.error(error);
        setError(error.message);
    } finally {
        setLoading(false);
    }
}
