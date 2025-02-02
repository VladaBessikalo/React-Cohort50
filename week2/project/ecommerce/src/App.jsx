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
    const [loadingFilteredProducts, setLoadingFilteredProducts] =
        useState(false);

    async function fetchData(setData, query, setLoading) {
        setLoading(true);
        try {
            const response = await fetch(`https://fakestoreapi.com/${query}`);
            const data = await response.json();
            setData(data);
        } catch (error) {
            console.error(error);
        } finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        fetchData(setProducts, 'products', setLoadingProducts);
        fetchData(setCategories, 'products/categories', setLoadingCategories);
    }, []);

    const handleCategorySelect = (category) => {
        setLoadingFilteredProducts(true);
        setSelectedCategory(category);

        setTimeout(() => {
            setLoadingFilteredProducts(false);
        }, 500);
    };

    const filteredProducts = selectedCategory
        ? products.filter((product) => product.category === selectedCategory)
        : products;

    return (
        <div className="app">
            <Header />
            {loadingCategories || loadingProducts ? (
                <p>Loading...</p>
            ) : (
                <main>
                    <Categories
                        categories={categories}
                        onCategorySelect={handleCategorySelect}
                        selectedCategory={selectedCategory}
                    />
                    {loadingFilteredProducts ? (
                        <p>Loading...</p>
                    ) : (
                        <ProductList products={filteredProducts} />
                    )}
                </main>
            )}
        </div>
    );
}
