import Button from "./Button";
import styles from "./App.module.css";
import {useState, useEffect} from "react";
import CleanUp from "./cleanup";

function App() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");

  const onClick = () => {
    setValue( (prev) => prev + 1 );
  }
  const onChange = (event) => {
    setKeyword(event.target.value);
  }
  console.log('i run only once!');

  useEffect( () => console.log('call the api........') , []);

  useEffect(
    () => {
      console.log('i run when "keyword" change')
    }, [keyword]
  );
  useEffect(
    () => {
      console.log('i run when "counter" change')
    }, [counter]
  );
  return (
    <div className="App">
      <input type="text" value={keyword} onChange={onChange} placeholder="Search hear..." />
      <h1 className={styles.title}>wellcome back!!{counter}</h1>
      <Button text={"Continue"}/>
      <button onClick={onClick}>Click me</button>
      <hr />
      <h3
        style={{
          padding:"20px 0 5px 0",
        }}
      >CleanUp</h3>
      <CleanUp />
    </div>
  );
}

export default App;
