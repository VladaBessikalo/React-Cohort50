/* eslint-disable react/prop-types */
export default function ProductItem({ product }) {
    return (
        <li className="products--item">
            <div className="product">
                <img
                    src={product.image}
                    alt={product.title}
                    className="product--image"
                />
                <div className="product--title">{product.title}</div>
            </div>
        </li>
    );
}
