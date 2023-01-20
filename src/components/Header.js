import './Header.css';
import Logo from './Logo';

function Header() {
    return (
        <header className="app-header">
            <div className="app-header-left">
                <h3>Rahul Keshri</h3>
            </div>
            <div className="app-header-right">
               <Logo size="fix" />
            </div>
        </header>
    );
}

export default Header;