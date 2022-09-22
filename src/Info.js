import image from "./assets/desktop/image-transform.jpg";
import egg from "./assets/image-egg.jpg";
const Info = () => {
    return (
        <div className="row"> 
            <div className="col-2">
                <h2 className="info--h2">Transform your brand</h2>
                <p className="info--text">
                    We are a full-service creative agency specializing in helping brands grow fast. 
                    Engage your clients through compelling visuals that do most of the marketing for you.
                </p>
                <a className="info--link" href="#">Learn more</a>
            </div>
            <div className="egg">
                <img className="info--egg" src={image} alt="" />
            </div>
            <div className="info--mobile">
                <img className="info--mobile--egg" src={egg} alt="" />
            </div>
        </div>
        
     );
}
 
export default Info;