import { useEffect } from "react";

export default function Highscore() {
  useEffect(() => {
    window.location.href = 'http://localhost:5080/highscore';
  }, []);

  return null;
}
