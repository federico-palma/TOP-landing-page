const Intro = () => {
    return (
        <div className="intro">
            <div className="intro-text">
                <h1>Cat Memes!</h1>
                <p>Cats have always been the best source of entertainment, and it's now more true than ever on the age of internet with: CAT MEMES.</p>
                <button className="sign-up-btn">Sign up for More!</button>
            </div>
            <div className="intro-img-container">
                <img id="intro-img" src={require("./images/intro-cat.png")} alt="cat meme.png"/>
            </div>
        </div>
    );
}
 
export default Intro;