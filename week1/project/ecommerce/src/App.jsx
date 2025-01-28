import './App.css';
import { useState } from 'react';
import allCategories from './fake-data/all-categories.js';
import products from './fake-data/all-products.js';
import Header from './components/Header.jsx';
import Categories from './components/Categories.jsx';
import ProductList from './components/ProductList.jsx';

export default function App() {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const handleCategorySelect = (category) => {
        setSelectedCategory(category);
    };

    const normalizeCategory = (category) => {
        return category.replace('FAKE:', '').trim();
    };

    const filteredProducts = selectedCategory
        ? products.filter(
              (product) =>
                  normalizeCategory(product.category) ===
                  normalizeCategory(selectedCategory)
          )
        : products;

    return (
        <div className="app">
            <Header />
            <main>
                <Categories
                    allCategories={allCategories}
                    onCategorySelect={handleCategorySelect}
                    selectedCategory={selectedCategory}
                />
                <ProductList products={filteredProducts} />
            </main>
        </div>
    );
}
