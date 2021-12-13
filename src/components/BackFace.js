import ButtonBox from "./ButtonBox";

export default function BackFace({ question, answer, setFace, setBorder, cardPosition, deckLength, setResult, result}) {
    const buttons = [
        { label: "Aprendi agora", border: "just-learned" },
        { label: "Não lembrei", border: "didnt-remember" },
        { label: "Lembrei com esforço", border: "hardly-remembered" },
        { label: "Zap!", border: "zap" }
    ]
    return (
        <div className="back-face">
            <span data-identifier="counter">{`${cardPosition}/${deckLength}`}</span>
            <h2>{question}</h2>
            <p>{answer}</p>
            <div className="button-box">
            {buttons.map((button, position) => <ButtonBox label = {button.label} border = {button.border} setFace = {setFace} setBorder={setBorder} setResult = {setResult} result = {result}/>)}
            </div>
        </div>
    );
}