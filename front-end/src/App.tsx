import { useEffect, useState } from "react";
import "./App.css";
import { api } from "./service/api";

function App() {
  const [count, setCount] = useState(0);

  function handlerUpdateCounter() {
    setCount((count) => count + 1);
  }

  useEffect(() => {
    api.get("/").then(({ data }) => {
      if (data.count) setCount(data.count);
    });
  }, []);

  useEffect(() => {
    const handler = setTimeout(() => {
      api.post("/", {
        count,
      });
    }, 500);
    return () => {
      clearTimeout(handler);
    };
  }, [count]);

  return (
    <div className="App">
      <div className="card">
        <button onClick={handlerUpdateCounter}>count is {count}</button>
      </div>
    </div>
  );
}

export default App;
