import { useState } from "react";
import ItemListe from "./ItemListe.jsx";
import SearchBar from "./SearchBar";

const initialList = [];

export default function BucketList() {
  const [list, setList] = useState(initialList);
  const [art, setArt] = useState("");
  function handleTogle(id, checked) {
    setList(
      list.map((item) => {
        if (id == item.id) {
          return { ...item, seen: checked };
        }
        return item;
      })
    );
  }
  // permettra d'ajouter une ouvre d'art
  function handleClick(title) {
    setList([...list, { id: crypto.randomUUID(), title: title, seen: false }]);
  }
  return (
    <>
      <SearchBar onAdd={handleClick} />
      <h1>Liste d’œuvres d’art</h1>
      <h2>Ma liste à voir absolument :</h2>
      {list.length ? (
        list.map((item) => (
          <ItemListe {...item} key={item.id} onToggle={handleTogle} />
        ))
      ) : (
        <div className="list-vide">Coffre d'art vide </div>
      )}
    </>
  );
}
