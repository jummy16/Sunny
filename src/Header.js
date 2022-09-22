import image from "./assets/desktop/image-header.jpg";
import header from "./assets/image-header.jpg";
import icon from "./assets/menu-bar.png";
const Header = () => {
    return (  
        <div>
            <h4 className="header--h4">sunnyside</h4>
            <ul className="header--ul">
                <li>About</li>
                <li>Services</li>
                <li>Project</li>
                <li className="contact">CONTACT</li>
            </ul>
            <h1 className="header--h1">WE ARE CREATIVES</h1>
            
                <div>
                    <img className="header--img" src={image} alt="" />
                </div>
            <div className="header">
                <img className="header--mobile--img" src={header} alt="" />
            </div>
                <img className="bar" src={icon} alt="" />
        </div>
    );
}
 
export default Header;