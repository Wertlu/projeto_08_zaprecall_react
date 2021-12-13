export default function ButtonBox({ border, label, setFace, setBorder, setResult, result }) {
    return (
        <button onClick={() => choiceCaller(setFace, setBorder, border, setResult, result)} className={border}>{label}</button>
    );
}

function choiceCaller(setFace, setBorder, border, setResult, result) {
    setFace("choice");
    setBorder(border);
    if (border === "hardly-remembered" || border === "zap") setResult(result + 1);
    setBorder(border);
}
