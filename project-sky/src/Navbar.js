const Navbar = () => {
    return ( 
        <nav className="navbar">
        <h1>The blog</h1>
        <div className="links">
            <a href="/">Home</a>
            <a href="/" 
            // style={{
            //     color: "white", 
            //     backgroundColor: "#f1356d",
            //     borderRadius: "6px",
            // }}
            >Create</a>
            <a href="/">Search</a>
        </div>
    </nav>
     );
    
}
 
export default Navbar;