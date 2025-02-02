import './App.css';
import { useEffect, useState } from 'react';
import Header from './components/Header.jsx';
import ProductList from './components/ProductList.jsx';
import Categories from './components/Categories.jsx';

export default function App() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [loadingCategories, setLoadingCategories] = useState(false);
    const [errorProducts, setErrorProducts] = useState(null);
    const [errorCategories, setErrorCategories] = useState(null);

    async function fetchData(url, setData, setLoading, setError) {
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

    useEffect(() => {
        fetchData(
            'https://fakestoreapi.com/products/categories',
            setCategories,
            setLoadingCategories,
            setErrorCategories
        );
        fetchData(
            'https://fakestoreapi.com/products',
            setProducts,
            setLoadingProducts,
            setErrorProducts
        );
    }, []);

    useEffect(() => {});

    useEffect(() => {
        const url = selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : 'https://fakestoreapi.com/products';
        fetchData(url, setProducts, setLoadingProducts, setErrorProducts);
    }, [selectedCategory]);

    return (
        <div className="app">
            <Header />
            <main></main>
            {loadingCategories ? (
                <p>Loading...</p>
            ) : errorCategories ? (
                <p className="error"> Error: {errorCategories} </p>
            ) : (
                <Categories
                    categories={categories}
                    onCategorySelect={setSelectedCategory}
                    selectedCategory={selectedCategory}
                />
            )}
            {loadingProducts ? (
                <p>Loading...</p>
            ) : errorProducts ? (
                <p className="error"> Error: {errorProducts} </p>
            ) : (
                <ProductList products={products} />
            )}
        </div>
    );
}
