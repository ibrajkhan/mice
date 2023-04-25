import "./header.css"
import IndAfrica from "../../assets/Image/india_africa_logo.png"
import IndExim from "../../assets/Image/india_exim.png"
import CiiLogo from "../../assets/Image/cii-logo-new.jpg"
import LionLogo from "../../assets/Image/lion-logo.png"

const Header = () => {
    return (
        <div className="header container">
            <div className="row">
                <div className="col-md-4 col-xs-4 india_africa">
                    <img src={IndAfrica} className="img-responsive"/>
                </div>
                <div className="col-md-3 col-xs-3 india_exim">
                    <img src={IndExim} className="img-responsive"/>
                </div>
                <div className="col-md-2 col-xs-2 lion_logo">
                    <img src={LionLogo} className="img-responsive"/>
                </div>
                <div className="col-md-3 col-xs-3 cii_logo">
                    <img src={CiiLogo} className="img-responsive" />
                </div>
            </div>
        </div>
    );
}

export default Header;