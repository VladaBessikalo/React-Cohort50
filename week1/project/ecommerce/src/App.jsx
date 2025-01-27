/* eslint-disable react/prop-types */
import './App.css';
import allCategories from './fake-data/all-categories.js';
import products from './fake-data/all-products.js';

export default function App() {
    return (
        <div>
            <Header />
            <main>
                <FilteredCategories allCategories={allCategories} />
                <ProductList products={products} />
            </main>
        </div>
    );
}

function Header() {
    return (
        <header>
            <h1>Products</h1>
        </header>
    );
}

function FilteredCategories({ allCategories }) {
    return (
        <section>
            <ul className="categories">
                {allCategories.map((category, index) => (
                    <li key={index} className="categories--item">
                        {category}
                    </li>
                ))}
            </ul>
        </section>
    );
}

function ProductList({ products }) {
    return (
        <section>
            <ul className="products">
                {products.map((product) => (
                    <ProductItem key={product.title} product={product} />
                ))}
            </ul>
        </section>
    );
}

function ProductItem({ product }) {
    return (
        <li className="products--item">
            <img
                src={product.image}
                alt={product.title}
                className="products--image"
            />
            <div className="products--title">{product.title}</div>
        </li>
    );
}
