import { useEffect, useState } from "react";

export default function ApiTest() {
  const [word, setWord] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5080/api/word?length=6&unique=false")
      .then((res) => {
        if (!res.ok) throw new Error("Något gick fel i API-anropet");
        return res.json();
      })
      .then((data) => {
        console.log("Data från backend:", data);
        setWord(data.word);
      })
      .catch((err) => {
        console.error("Fel vid hämtning:", err);
        setError(err.message);
      });
  }, []);

  return (
    <div>
      <h2>Testar fetch från backend</h2>
      {word && (
        <p>
          Slumpmässigt ord från API: <strong>{word}</strong>
        </p>
      )}
      {error && <p style={{ color: "red" }}>Fel: {error}</p>}
    </div>
  );
}
