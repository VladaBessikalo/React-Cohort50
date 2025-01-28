/* eslint-disable react/prop-types */
import './App.css';
import allCategories from './fake-data/all-categories.js';
import products from './fake-data/all-products.js';
import Header from './components/Header.jsx';
import Categories from './components/Categories.jsx';
import ProductList from './components/ProductList.jsx';

export default function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <Categories allCategories={allCategories} />
                <ProductList products={products} />
            </main>
        </div>
    );
}
