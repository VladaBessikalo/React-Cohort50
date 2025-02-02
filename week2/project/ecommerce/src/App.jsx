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

    async function fetchData(url, setData, setLoading) {
        setLoading(true);
        try {
            const response = await fetch(url);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(
            'https://fakestoreapi.com/products/categories',
            setCategories,
            setLoadingCategories
        );
        fetchData(
            'https://fakestoreapi.com/products',
            setProducts,
            setLoadingProducts
        );
    }, []);

    useEffect(() => {
        const url = selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : 'https://fakestoreapi.com/products';
        fetchData(url, setProducts, setLoadingProducts);
    }, [selectedCategory]);

    return (
        <div className="app">
            <Header />
            {loadingCategories ? (
                <p>Loading...</p>
            ) : (
                <main>
                    <Categories
                        categories={categories}
                        onCategorySelect={setSelectedCategory}
                        selectedCategory={selectedCategory}
                    />
                    {loadingProducts ? (
                        <p>Loading...</p>
                    ) : (
                        <ProductList products={products} />
                    )}
                </main>
            )}
        </div>
    );
}
