import image from "./assets/desktop/image-stand-out.jpg";
import standout from "./assets/image-6.jpg";

const Aud = () => {
    return (  
        <div className="row">
            <div className="aud">
                <img className="aud--img" src={image} alt="" />
            </div>
            <div className="standout">
                <img className="standout--mobile-img" src={standout} alt=""/>
            </div>
            <div className="col-1">
                <h2 className="info--h2">Stand out to the right audience</h2>
                <p className="info--text">
                Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we’ll build and extend your brand in digital places.
                </p>
                <a className="info--link" href="#">Learn more</a>
            </div>
            
            
        </div>
    );
}
 
export default Aud;