export default function FrontFace({question, img, setFace, cardPosition, deckLength}) {
    return (
        <div className="front-face">
            <span>{`${cardPosition}/${deckLength}`}</span>
            <h2>{question}</h2>
            <img onClick={() => setFace("back")} classname="turn" src={img} alt="" />
        </div>
    );
}