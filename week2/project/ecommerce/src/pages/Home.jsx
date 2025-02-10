import { useState } from 'react';
import Categories from '../components/Categories.jsx';
import ProductList from '../components/ProductList.jsx';
import Header from '../components/Header.jsx';
import useFetch from '../hooks/useFetch.js';

export default function Home() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const productsUrl = selectedCategory
        ? `https://fakestoreapi.com/products/category/${selectedCategory}`
        : 'https://fakestoreapi.com/products';

    const {
        data: categories,
        loading: loadingCategories,
        error: errorCategories
    } = useFetch('https://fakestoreapi.com/products/categories');

    const {
        data: products,
        loading: loadingProducts,
        error: errorProducts
    } = useFetch(productsUrl);

    return (
        <div>
            <Header />
            <>
                {loadingCategories ? (
                    <p>Loading categories...</p>
                ) : errorCategories ? (
                    <p className="error">Error: {errorCategories}</p>
                ) : (
                    <Categories
                        categories={categories}
                        onCategorySelect={setSelectedCategory}
                        selectedCategory={selectedCategory}
                    />
                )}
                {selectedCategory && loadingProducts ? (
                    <p>Loading products...</p>
                ) : errorProducts ? (
                    <p className="error">Error: {errorProducts}</p>
                ) : (
                    <ProductList products={products || []} />
                )}
            </>
        </div>
    );
}
