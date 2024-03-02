import { FaInstagram, FaFacebook, FaYoutube, FaTelegramPlane, FaApple, FaGooglePlay } from "react-icons/fa";
import { Link } from "react-router-dom";
import ButtonApps from "../pure/ButtonApps";
import { FooterCss } from "./Footer.style";


export default function Footer() {
    return (
        <FooterCss className="container">
            <div className="social">
                <i><FaInstagram/></i>
                <i><FaFacebook/></i>
                <i><FaYoutube/></i>
                <i><FaTelegramPlane/></i>
            </div>
            <div className="links">
                <Link to="">Home</Link>
                <Link to="">Jobs</Link>
                <Link to="">Info</Link>
                <Link to="">Support</Link>
                <Link to="">Contact us</Link>
                <Link to="">FAQ</Link>
                <Link to="">Account</Link>
                <Link to="">Help Center</Link>
            </div>
            <div className="upLoad">
                <ButtonApps icon={<FaApple className="icon"/>}><div><span>Descarga en</span><p>App Store</p></div></ButtonApps>
                <ButtonApps icon={<FaGooglePlay className="icon"/>}><div><span>Descarga en</span><p>Google Play</p></div></ButtonApps>
            </div>
        </FooterCss>
    );
}