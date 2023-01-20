import Logo from './Logo';
import './Main.css';

const Main = function(props) {
    return (
        <main className="app-main">
            <div className="main-container">
                <Logo />
                <h1>Rahul keshri</h1>
                <h2>Software Engineer @ Google</h2>
            </div> 
        </main>
    );
}

export default Main;