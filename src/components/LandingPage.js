import "../assets/css/landing-page.css";
import logo from "../assets/img/logo.png";
import next from "../assets/img/next.png";
import DeckCaller from "./DeckCaller";
export default function LandingPage({setPage, setTarget, setDeck, target}) {

    const buttons = [{
        deck: "Outro Zap",
        label: "Particar Outro Zap",
        img: { next },
    },
    {
        deck: "React",
        label: "Particar React",
        img: { next },
    }]

    return (
        <div className="landing-page">
            <img className="logo" src={logo} alt="" />
            <input onChange={(event) => setTarget(event.target.value)} type="number" placeholder="Sua meta de zaps" />
            <div className="buttons-box">
                {buttons.map((button) => <DeckCaller label = {button.label} deck = {button.deck} setDeck = {setDeck} img = {button.img} setPage = {setPage} target = {target} setTarget = {setTarget}/>)}
            </div>
        </div>
    )
}