export default function GuessResult({ results }) {
    return (
        <div>
            {results.map((result, index) => (
                <div key={index}>
                    {result.map((letter, i) => (
                        <span key={i} 
                              style={{
                                color: letter.result === 'correct' ? 'green' : 
                                       letter.result === 'misplaced' ? 'orange' : 'red',
                              }}
                        >
                        {letter.letter.toUpperCase()}
                        </span>
                    ))}
                </div>
            ))}
        </div>
    );
}