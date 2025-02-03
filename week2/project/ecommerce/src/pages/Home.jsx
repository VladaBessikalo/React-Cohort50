import { useState, useEffect } from 'react';
import { fetchData } from '../util/api.js';
import Categories from '../components/Categories.jsx';
import ProductList from '../components/ProductList.jsx';
import Header from '../components/Header.jsx';

export default function Home() {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [loadingProducts, setLoadingProducts] = useState(false);
    const [loadingCategories, setLoadingCategories] = useState(false);
    const [errorProducts, setErrorProducts] = useState(null);
    const [errorCategories, setErrorCategories] = useState(null);

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

    useEffect(() => {
        const url = selectedCategory
            ? `https://fakestoreapi.com/products/category/${selectedCategory}`
            : 'https://fakestoreapi.com/products';
        fetchData(url, setProducts, setLoadingProducts, setErrorProducts);
    }, [selectedCategory]);

    return (
        <div>
            <Header />
            <>
                {loadingCategories ? (
                    <p>Loading...</p>
                ) : errorCategories ? (
                    <p className="error">Error: {errorCategories}</p>
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
                    <p className="error">Error: {errorProducts}</p>
                ) : (
                    <ProductList products={products} />
                )}
            </>
        </div>
    );
}
