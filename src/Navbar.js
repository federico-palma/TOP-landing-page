const Navbar = () => {
    return (
    <nav className="navbar">
        <div className="header">
            <img id="navbar-logo" src={require("./images/icon-cat.png")} alt="logo-cat.png"/>
            <h2>Cat Memes</h2>
        </div>
        
        <div className="navbar-links">
            <button className="navbar-link">Home</button>
            <button className="navbar-link">Cat 1</button>
            <button className="navbar-link">Cat 2</button>
        </div>
    </nav>
    );
}
 
export default Navbar;