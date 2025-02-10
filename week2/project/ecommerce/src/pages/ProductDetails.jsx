import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function ProductDetails() {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProduct() {
            setLoading(true);
            setError(null);
            try {
                const response = await fetch(
                    `https://fakestoreapi.com/products/${id}`
                );
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                const data = await response.json();
                setProduct(data);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }

        fetchProduct();
    }, [id]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p className="error">Error: {error}</p>;
    if (!product) return <p>Product not found.</p>;

    return (
        <div className="product-details">
            <h1>{product.title}</h1>

            <img src={product.image} alt={product.title} width="200" />
            <p>{product.description}</p>
        </div>
    );
}
