const Home = (props) => {
    return (
        <div className="blogInfo" >
            <h2 onClick={props.clicked}>{props.title}</h2>
            <h5>{props.body}</h5>
            <h5>Written by {props.author}</h5>
        </div>  
    );
}

export default Home;