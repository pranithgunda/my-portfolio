// Import required component and method from react-router-dom
import { Link, useLocation } from react - router - dom

function Nav() {
    const currentPage = useLocation().pathname;

    return (
        <ul className="nav nav-tabs">
            <li className="nav-item">
                <Link
                    to="/"
                    className={currentPage === '/' ? 'nav-link active' : 'nav-link'}
                >
                    Home
                </Link>
            </li>
            <li className="nav-item">
                <Link
                    to="/about"
                    className={currentPage === '/about' ? 'nav-link active' : 'nav-link'}
                >
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/contact"
                className={currentPage === '/contact' ? 'nav-link active' : 'nav-link'}>
                </Link>
            </li>
            <li className="nav-item">
                <Link
                to="/resume"
                className={currentPage === '/resume' ? 'nav-link active' : 'nav-link'}>
                </Link>
            </li>
        </ul>
    );
}

export default Nav;