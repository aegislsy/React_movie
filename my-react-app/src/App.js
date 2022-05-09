import { useState, useEffect } from "react";

function App() {
  const [toDo, setTodo] = useState("");
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => event.preventDefault();

  console.log(toDo);
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write tyour to do..."
        />
        <button> Add To do</button>
      </form>
    </div>
  );
}

export default App;
