/* eslint-disable react/prop-types */
import ProductItem from './ProductItem';

export default function ProductList({ products }) {
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
