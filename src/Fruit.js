import image from "./assets/desktop/image-graphic-design.jpg";
import fruit from "./assets/desktop/image-photography.jpg";
import apple from "./assets/image-4.jpg";
import tangerine from "./assets/image-5.jpg";
const Fruit = () => {
    return (  
        <div className="row">
            <div>
                <div>
                    <img className="fruit--img" src={image} alt="" />
                </div>
                <div className="apple">
                    <img className="mobile--apple standout--mobile-img" src={apple} alt="" />
                </div>
                <div className="fruit--text">
                    <h2 className="fruit--h2">Graphic design</h2>
                    <p className="fruit--txt">
                        Great design makes you memorable. We deliver artwork that underscores your brand message and captures potential clients’ attention.
                    </p>
                </div>
            </div>
            <div>
                <div>
                    <img className="fruit--img-tangerine"  src={fruit} alt="" />
                </div>
                <div className="tangerine">
                    <img className="mobile--apple standout--mobile-img" src={tangerine} alt="" />
                </div>
                <div className="fruit--text">
                    <h2 className="fruit--h2">Photography</h2>
                    <p className="fruit--txt">
                        Increase your credibility by getting the most stunning, high-quality photos that improve your business image.
                    </p>
                </div>
            </div>
        </div>
    );
}
 
export default Fruit;