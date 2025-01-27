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
            <div>
                <ul>
                    {allCategories.map((category, index) => (
                        <li key={index}>{category}</li>
                    ))}
                </ul>
            </div>
        </section>
    );
}

function ProductList({ products }) {
    return (
        <section>
            <ul>
                {products.map((product) => (
                    <ProductItem key={product.title} product={product} />
                ))}
            </ul>
        </section>
    );
}

function ProductItem({ product }) {
    return (
        <li className="product--item">
            <img
                src={product.image}
                alt={product.title}
                className="product--image"
            />
            <div className="product--title">{product.title}</div>
        </li>
    );
}
