export default function ItemListe({ id, seen, title, onToggle }) {
  return (
    <li className={`item-list-row ${seen ? "is-seen" : ""}`}>
      <label className="checkbox-container">
        <input
          type="checkbox"
          checked={seen}
          onChange={(e) => onToggle(id, e.target.checked)}
          id={`item-${id}`} /* ID unique pour l'accessibilité */
        />
        <span className="custom-checkbox">
          {/* Icône de coche SVG visible uniquement quand coché */}
          <svg viewBox="0 0 24 24" className="checkmark-icon">
            <polyline points="20 6 9 17 4 12" />
          </svg>
        </span>
        <span className="item-title">{title}</span>
      </label>
    </li>
  );
}
