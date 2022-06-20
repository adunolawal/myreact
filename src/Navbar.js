const Navbar =() => {
    return (
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="titleNavbar">
                <a href='www.google.com'>Home</a>
                <a href='www.google.com' style={{
                color: 'white',
                backgroundColor: 'cadetblue',
                borderRadius:'5px',
                }}>New Blog</a>
            </div>
        </div>
    );
}

export default Navbar;