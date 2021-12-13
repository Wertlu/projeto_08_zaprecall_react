import { useState } from "react";
import "./assets/css/reset.css";
import "./assets/css/style.css";
import LandingPage from "./components/LandingPage";
import Main from "./components/Main";
import Succes from "./components/Succes.js";
import Failure from "./components/Failure.js"
export default function App() {
    const [page, setPage] = useState("LandingPage");
    const [target, setTarget] = useState("");
    const [deck, setDeck] = useState("");
    const [flashCard, setFlashCard] = useState(0);
    const [result, setResult] = useState(0);

    return (
        <>
            {page === "LandingPage" ? <LandingPage setPage={setPage} setDeck={setDeck} setTarget={setTarget} target={target} /> : ""}
            {page === "flashcard" ? <Main setPage={setPage} deck={deck} flashCard={flashCard} setFlashCard={setFlashCard} result={result} setResult={setResult} target={target}/> : ""}
            {page === "succes" ? <Succes setPage={setPage} setTarget={setTarget} setDeck={setDeck} setFlashCard={setFlashCard} setResult={setResult}/> : ""}
            {page === "failure" ? <Failure setPage={setPage} setTarget={setTarget} setDeck={setDeck} setFlashCard={setFlashCard} setResult={setResult} result = {result} target ={target}/> : ""}
        </>
    )
}