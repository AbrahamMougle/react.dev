import { useState } from "react";
import toUpperCaseWord from "./toUpperCaseWord";

export default function SearchBar({ onAdd }) {
  const [art, setArt] = useState("");

  return (
    <form className="search-bar-form" onSubmit={(e) => e.preventDefault()}>
      <div className="form-group">
        <input
          type="text"
          id="user-input"
          value={art}
          onChange={(e) => setArt(e.target.value)}
          placeholder=" " /* L'espace est requis pour le CSS du label flottant */
        />
        <label htmlFor="user-input">Votre gadget</label>
      </div>

      <button
        className={`btn-smooth ${!art.length ? "mon-bouton" : ""}`}
        disabled={!art.length}
        onClick={() => {
          onAdd(toUpperCaseWord(art));
          setArt("");
        }}
        type="button"
      >
        <span>Ajouter</span>
        <svg viewBox="0 0 24 24" width="18" height="18" className="btn-icon">
          <path fill="currentColor" d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
        </svg>
      </button>
    </form>
  );
}
