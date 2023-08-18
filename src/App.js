import React, {useState} from "react";
import "./style.css";

export default function App() {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);
  console.log('Este es un log', text, setText);
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <p>esto es un párrafo {text}</p>
      <form
        onSubmit={(event) => {
          event.preventDefault();
          console.log('submit');
          setList([...list, text]);
          setText('');
      }}
      >
        <input
         value={text}
         onChange={(event) => { 
          // console.log('cambio', event.target.value)
          setText(event.target.value);
         }}
        />
      </form>
      <ul>
        {list.map((element) => {
          return <li>{element}</li>;
        })}
      </ul>
    </div>
  );
}
