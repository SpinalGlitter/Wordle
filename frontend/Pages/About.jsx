export default function About() {
  return (
    <div style={{ padding: "20px", maxWidth: "800px", margin: "auto" }}>
      <h1>Om projektet - Wordle-spel</h1>

      <h2>Vad är detta för projekt?</h2>
      <p>
        Detta projekt är ett <strong>Wordle-inspirerat spel</strong>, där
        användaren gissar ett slumpmässigt valt ord. Appen demonstrerar en
        komplett fullstack-applikation med React frontend, Express backend och
        MongoDB Atlas som databas.
      </p>

      <h2>Tekniker och verktyg</h2>
      <ul>
        <li>
          <strong>React & Vite:</strong> För snabb utveckling av interaktiva
          frontend-komponenter.
        </li>
        <li>
          <strong>Node.js & Express:</strong> Backend-server för API-hantering
          och routing.
        </li>
        <li>
          <strong>MongoDB Atlas:</strong> Molndatabas för lagring av highscores.
        </li>
        <li>
          <strong>EJS:</strong> För server-side rendering av highscore-listan.
        </li>
        <li>
          <strong>REST API:</strong> Kommunikation mellan frontend och backend.
        </li>
      </ul>

      <h2>Hur fungerar spelet?</h2>
      <ol>
        <li>Användaren väljer ordlängd och om ordet ska ha unika bokstäver.</li>
        <li>Frontend hämtar ett slumpmässigt ord från backend.</li>
        <li>Användaren gissar ordet, och backend ger feedback via API.</li>
        <li>
          När spelet är slut sparas resultatet i MongoDB Atlas och visas i en
          highscore-lista.
        </li>
      </ol>

      <h2>Syftet med projektet</h2>
      <p>
        Projektet har syftat till att utveckla färdigheter inom
        fullstack-utveckling, React, REST API:er, databashantering och
        server-side rendering.
      </p>

      <h2>Utvecklare</h2>
      <p>
        <strong>Namn:</strong> Johannes Persson <br />
        <strong>Kurs:</strong> Avancerad webbutveckling - Fullstack <br />
        <strong>Datum:</strong> 2025-04-15
      </p>
      <a href="/" class="back-link-about">Tillbaka till spelet</a>
    </div>
  );
}
