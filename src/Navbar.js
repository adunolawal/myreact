const Navbar =(props) => {
    return (
        <div className="navbar">
            <h1>The Dojo Blog</h1>
            <div className="titleNavbar">
                <a href='www.google.com'>Home</a>
                <button onClick={props.showpop} 
                style={{
                color: 'white',
                backgroundColor: 'cadetblue',
                borderRadius:'5px',
                border: "none"
                }}>New Blog</button>
            </div>
        </div>
    );
}

export default Navbar;