import { useState } from "react";
import FrontFace from "./FrontFace";
import BackFace from "./BackFace";
import Choice from "./Choice";
import turn from "../assets/img/turn.png"
export default function FlashCard({ question, answer, cardPosition, deckLength, target, setFlashCard, setPage, setResult, result }) {
    const [border, setBorder] = useState("");
    const [face, setFace] = useState("front");

    return (
        <div data-identifier="flashcard" className={`flashcard ${border}`}>
            {face === "front" ? <FrontFace question={question} cardPosition={cardPosition} deckLength={deckLength} setFace={setFace} img={turn} /> : ""}
            {face === "back" ? <BackFace question={question} answer={answer} cardPosition={cardPosition} deckLength={deckLength} setFace={setFace} setBorder={setBorder} setResult = {setResult} result = {result} /> : ""}
            {face === "choice" ? <Choice question={question} answer={answer} cardPosition={cardPosition} deckLength={deckLength} setFace={setFace} setBorder={setBorder} img={turn} setFlashCard={setFlashCard} setPage={setPage} result = {result}  target={target} /> : ""}
        </div>
    );
}