import "../assets/css/failure-page.css";
import logoMini from "../assets/img/logo-mini.png";
import sad from "../assets/img/sad.png";
import next from "../assets/img/next.png";

export default function Failure({ setPage, setDeck, setResult, cardPosition, setFlashCard, setTarget }) {
    return (
        <div className="failure-page">
            <header>
                <img src={logoMini} alt="" />
            </header>
            <h1>
                Putz..
                <img src={sad} alt="" />
            </h1>
            <span>
                Você esqueceu {cardPosition} flashcards..
                <br />
                Não desanime! Na próxima você consegue!
            </span>
            <button
                onClick={() => restart(setPage, setDeck, setResult, setFlashCard, setTarget)}
            >
                Tentar Novamente! <img src={next} alt="" />
            </button>
        </div>
    );
}

function restart(setPage, setDeck, setResult, setFlashCard, setTarget) {
    setPage("landing-page");
    setDeck("");
    setFlashCard(0);
    setResult(0);
    setTarget("");
  }