import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [parentcount, setParentCount] = useState(0);
  const [childcount, setChildCount] = useState(0);
  const chnageParentCount = () => {
    setParentCount(parentcount + 1);
  };
  const chnageChildCount = () => {
    setChildCount(childcount + 1);
  };
  return (
    <>
      <h3>This is parent Count: {parentcount}</h3>
      <Child count={childcount} />
      <button onClick={chnageParentCount}>Increment</button>
      <button onClick={chnageChildCount}>Child Increment</button>
    </>
  );
}
