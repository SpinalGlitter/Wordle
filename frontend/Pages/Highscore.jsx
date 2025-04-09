import { useEffect } from "react";
import { API_URL } from "../config.js";

export default function Highscore() {
  useEffect(() => {
    window.location.href = `${API_URL}/highscore`;
  }, []);

  return null;
}
