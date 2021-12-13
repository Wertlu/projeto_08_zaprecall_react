import "../assets/css/succes-page.css";
import logoMini from "../assets/img/logo-mini.png";
import party from "../assets/img/party.png";
import next from "../assets/img/next.png";

export default function Success({setPage, setDeck, setResult, setFlashCard, setTarget}) {
    return(
        <div className="succes-page">
      <header>
        <img src={logoMini} alt="" />
      </header>
      <h1>
        PARABÉNS!
        <img src={party} alt="" />
      </h1>
      <span>Você atingiu a sua meta!</span>
      <button
        onClick={() => restart(setPage, setDeck, setResult, setFlashCard, setTarget)}
      >
        Tentar Novamente! <img src={next} alt="" />
      </button>
    </div>
    );
}

function restart(setPage, setDeck, setResult, setFlashCard, setTarget){
    setPage("landing-page");
    setDeck("");
    setFlashCard(0);
    setResult(0);
    setTarget("");
}