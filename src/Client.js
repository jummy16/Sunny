import image from "./assets/image-emily.jpg";
import jennie from "./assets/image-jennie.jpg";
import thomas from "./assets/image-thomas.jpg";

const Client = () => {
    return (  
        <div className="client">
            <h3 className="client--h3">CLIENTS TESTIMONIALS</h3>
            <div>
                <img className="client--img" src={image} alt="" />
                <p className="client--text">
                We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.
                </p>
                <h5 className="client--h5">Emily R.</h5>
                <p className="client--p">Marketing Director</p>
            </div>
            <div>
                <img  className="client--img"src={thomas} alt="" />
                <p className="client--text">
                Sunnyside’s enthusiasm coupled with their keen interest in our brand’s success made it a satisfying and enjoyable experience.
                </p>
                <h5 className="client--h5">Thomas S.</h5>
                <p className="client--p">Chief Operating Officer</p>
            </div>
            <div>
                <img className="client--img" src={jennie} alt="" />
                <p className="client--text">
                Incredible end result! Our sales increased over 400% when we worked with Sunnyside. Highly recommended!
                </p>
                <h5 className="client--h5">Jennie F.</h5>
                <p className="client--p">Business Owner</p>
            </div>
        </div>
    );
}
 
export default Client;