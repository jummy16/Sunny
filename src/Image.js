import cone from "./assets/desktop/image-gallery-cone.jpg";
import milk from "./assets/desktop/image-gallery-milkbottles.jpg";
import orange from "./assets/desktop/image-gallery-orange.jpg";
import sugar from "./assets/desktop/image-gallery-sugarcubes.jpg";
import cones from "./assets/image-1.jpg";
import milks from "./assets/image-2.jpg";
import oranges from "./assets/image-3.jpg";
import sugars from "./assets/image-sugar.jpg";

const Image = () => {
    return (  
        <div className="row image">
            <img className="gallery" src={cone} alt="" />
            <img className="gallery" src={milk} alt="" />
            <img className="gallery" src={orange} alt="" />
            <img className="gallery" src={sugar} alt="" />
            
            <div className="mobile--gallery">
                <img className="mobile-gallery-img" src={cones} alt="" />
                <img className="mobile-gallery-img" src={milks} alt="" />
            </div>
            <div className="mobile--gallery">
                <img className="mobile-gallery-img" src={oranges} alt="" />
                <img className="mobile-gallery-img" src={sugars} alt="" />
            </div>
            
        </div>
    );
}
 
export default Image;