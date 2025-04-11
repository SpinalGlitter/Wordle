export default function GuessResult({ results }) {
    return (
        <div>
            {results.map((result, index) => (
                <div className="result-row" key={index}>
                    {result.map((letterObj, i) => (
                        <span key={i} className={`letter-box ${letterObj.result}`}>
                        {letterObj.letter}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}