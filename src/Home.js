import Bodypop from "./Bodypop";

const Home = (props) => {
    return (
        <div>
            <div className="blogInfo" >
                <h2 onClick={props.clicked}>{props.title}</h2>
                <h5>{props.body}</h5>
                <h5>Written by {props.author}</h5>
            </div>
            {/* <div className="blogInfo">
                <h2>Welcome to the New Blog</h2>
                <h5>Written by Omarion</h5>
            </div> */}
        </div>
    );
}

export default Home;