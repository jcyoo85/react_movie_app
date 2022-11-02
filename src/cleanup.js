import { useEffect, useState } from "react";

function Hello() {
  // function byeFn() {
  //   console.log("bye :(");
  // }
  // function hiFn() {
  //   console.log("created!");
  //   return byeFn; //컴포넌트가 사라질때 발생시킬수 있다.
  // }

  // useEffect(hiFn, [])
  // return <h1>Hello</h1>;

  useEffect(function() {
    console.log("hi");
    return function() {
      console.log("bye");
    }
  }, [])
}

function CleanUp() {
  const [showing, setShowing] = useState(false);
  const onClick = () => {
    setShowing((current) => !showing);
  }
  return (
    <div>
      {showing ? <Hello /> : null}
      <button onClick={onClick}>{showing ? "Hide" : "Show"}</button>
    </div>
  );
}

export default CleanUp;