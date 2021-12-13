export default function DeckCaller({label, setDeck, img, setPage, deck, target, setTarget}){
return(
<button onClick={() => game(setTarget, target, setPage, setDeck, deck)}>{label} <img src={img} alt="" /></button>
);
}

function game (setTarget, target, setPage, setDeck, deck) {
    if (target === "") {
        alert("A meta de Zaps não deve ser vazia.");
        return;
    }
    if (parseFloat(target) < 1) {
        alert("Ameta de Zaps não pode ser menor que 1");
        return;
    }
    if (parseFloat(target) % 1 !== 0) {
        alert("A meta de Zaps precisa ser um número inteiro.");
        return;
    }
setPage("flashcard");
setDeck(deck);
setTarget(parseInt(target));
}