
import "../assets/css/main.css";
import logoMini from "../assets/img/logo-mini.png";
import turn from "../assets/img/turn.png";

export default function Main(){
    return(
        <main>
        <header>
            <img src={logoMini} alt="" />
            <h1>React</h1>
        </header>

        <div className="flashcard">
            {/* <div className="front-face">
                <span>1/8</span>
                <h2>O que é JSX?</h2>
                <img classname = "turn" src={turn} alt="" />
            </div> */}
            <div className="back-face">
                <span>1/8</span>
                <h2>O que é JSX?</h2>
                <p>Uma extensão de linguagem do JavaScript</p>
                <div className="button-box">
                    <button className="just-learned">Aprendi agora</button>
                    <button className="didnt-remember">Não lembrei</button>
                    <button className="hardly-remembered">Lembrei com esforço</button>
                    <button className="zap"><b>Zap!</b></button>
                </div>
            </div>
        </div>
    </main>
    )
}