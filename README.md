# Wordle spel med Highscore

Detta är ett Wordle-spel. Användaren gissar ett slumpmässigt ord, får färgkodad feedback, och kan skicka in sin tid och antal gissningar till en highscore-lista. Sidan innehåller också en "About"-sida.

## Teknisk översikt

### Frontend
- **React** (via Vite) – användargränssnitt, logik och interaktion
- Dynamisk rendering av feedback (grön/gul/röd)
- Valbara spelinställningar (ordlängd, unika bokstäver)
- Formulär för highscore

### Backend
- **Node.js & Express**
- API-endpoints för:
  - Hämta slumpmässigt ord
  - Validera gissningar med feedback-algoritm
  - Skicka in highscore
- Server-side rendering av highscore-listan med **EJS**

### Databas
- **MongoDB Atlas** – molnbaserad datalagring
- Highscores sparas med: namn, antal gissningar, tid, ordlängd m.m

---

## Kom igång

### Installation

```bash
git clone https://github.com/SpinalGlitter/Wordle.git
cd wordle/server
npm install
npm start
```
> Standardport: `http://localhost:5080`

### För granskning/testning

Om du vill använda en **egen MongoDB Atlas-URL**:

1. **Skapa en `.env`-fil** i `server/` med:
   ```
   MONGODB_URI=din_mongodb_uri_här
   ```

2. **Alternativt**: Gå till `server/database/db.js` och byt ut raden:
   ```js
   const url = process.env.MONGODB_URI;
   ```
   mot din egen hårdkodade URL (endast för test).

