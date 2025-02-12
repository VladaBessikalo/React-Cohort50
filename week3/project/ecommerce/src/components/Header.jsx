import { Link } from 'react-router-dom';

export default function Header({ title }) {
    return (
        <div className="header">
            <header>
                <h1>{title}</h1>
            </header>
            <nav className="header--link">
                <Link to="/">Products</Link>
                <Link to="/favorites">Favorites</Link>
            </nav>
        </div>
    );
}
