export default function Choice({question, answer, img, setBorder, setFace, cardPosition, deckLength, setFlashCard, setPage, result, target}) {
    return (
        <div className="flashcard">
            <div className="choice">
                <span>{`${cardPosition}/${deckLength}`}</span>
                <h2>{question}</h2>
                <p>{answer}</p>
                <img onClick={() => nextCardCaller(setBorder, setFace, setFlashCard, setPage, cardPosition, deckLength, target, result)} src={img} alt="" />
            </div>
        </div>
    );
}

function nextCardCaller(setBorder, setFace, setFlashCard, setPage, cardPosition, deckLength, target, result){
    if(cardPosition !== deckLength)
    setFlashCard(cardPosition);else{
        if(result >= target) setPage("succes");
         else setPage("failure");}
    setFace("front");
    setBorder("");
}