import "../style/colorlegends.css";

export default function ColorLegend() {
  return (
    <div style={{ textAlign: "center", marginTop: "30px" }}>
      <h3>Färgkodning för bokstäver</h3>

      <div className="wordle-row">
        <div className="wordle-box correct-box">A</div>
        <div className="wordle-box misplaced-box">P</div>
        <div className="wordle-box incorrect-box">Z</div>
      </div>

      <ul style={{ listStyle: "none", padding: 0, marginTop: "10px" }}>
        <li>
          <span style={{ color: "#4CAF50", fontWeight: "bold" }}>🟩 Grön:</span>{" "}
          Rätt bokstav på rätt plats
        </li>
        <li>
          <span style={{ color: "#FFC107", fontWeight: "bold" }}>🟨 Gul:</span>{" "}
          Rätt bokstav, fel plats
        </li>
        <li>
          <span style={{ color: "#F44336", fontWeight: "bold" }}>🟥 Röd:</span>{" "}
          Bokstaven finns inte i ordet
        </li>
      </ul>
    </div>
  );
}
