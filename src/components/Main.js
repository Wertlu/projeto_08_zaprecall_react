import "../assets/css/main.css";
import logoMini from "../assets/img/logo-mini.png";
import FlashCard from "./FlashCard";
export default function Main({setPage, deck, flashCard, setFlashCard, result, setResult, target}) {

    const decks = [
        {
            label: "React",
            cards: [
                {
                    question: "O que é JSX?",
                    answer: "Uma extensão de linguagem do JavaScript",
                },
                {
                    question: "O React é __",
                    answer: "uma biblioteca JavaScript para construção de interfaces",
                },
                {
                    question: "Componentes devem iniciar com __",
                    answer: "letra maiúscula",
                },
                { question: "Podemos colocar __ dentro do JSX", answer: "expressões" },
                {
                    question: "O ReactDOM nos ajuda __",
                    answer:
                        "interagindo com a DOM para colocar componentes React na mesma",
                },
                {
                    question: "Usamos o npm para __",
                    answer: "gerenciar os pacotes necessários e pendencias",
                },
                {
                    question: "Usamos props para __",
                    answer: "passar diferentes informações para componentes",
                },
                {
                    question: "Usamos estado (State) para __",
                    answer:
                        "dizer para o react quais informações atualizadas devem renderizar a tela novamente",
                },
            ],
        },
        {
            label: "Outro Zap",
            cards: [
                { question: "Pergunta 1", answer: "1", },
                { question: "Pergunta 2", answer: "2" },
                { question: "Pergunta 3", answer: "3", },
                { question: "Pergunta 4", answer: "4" },
                { question: "Pergunta 5", answer: "5" },
            ],
        },
    ];
    const chosenDeck = decks.find((chosenDeck) => chosenDeck.label === deck);
    console.log(chosenDeck);
    return (
        <main>
            <header>
                <img src={logoMini} alt="" />
                <h1>React</h1>
            </header>
            <FlashCard question={chosenDeck.cards[flashCard].question} answer={chosenDeck.cards[flashCard].answer} cardPosition={flashCard + 1} deckLength = {chosenDeck.cards.length} setFlashCard = {setFlashCard} setPage = {setPage} setResult = {setResult} result = {result} target={target}/>
            </main>
    )
}