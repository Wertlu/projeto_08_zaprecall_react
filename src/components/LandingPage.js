import "../assets/css/landing-page.css";
import logo from "../assets/img/logo.png";
import next from "../assets/img/next.png";
export default function LandingPage(){
    return(
        <div className="landing-page">
            <img className="logo" src={logo} alt="" />
            <input type="number" placeholder="Sua meta de zaps" />
            <div className="buttons-box">
                <button>Praticar JavaScript <img src={next} alt="" /></button>
                <button>Praticar React <img src={next} alt="" /></button>
            </div>
        </div>
    )
}