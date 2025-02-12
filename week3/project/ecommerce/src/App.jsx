import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home.jsx';
import ProductDetails from './pages/ProductDetails.jsx';
import { FavoritesProvider } from './context/FavoritesContext.jsx';
import { Favorites } from './pages/Favorites.jsx';

export default function App() {
    return (
        <div className="app">
            <FavoritesProvider>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/favorites" element={<Favorites />} />
                    <Route path="/product/:id" element={<ProductDetails />} />
                </Routes>
            </FavoritesProvider>
        </div>
    );
}
