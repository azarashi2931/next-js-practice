import { NextPage } from "next";
import { useState } from "react";

const Index: NextPage = () => {
  const [count, setCount] = useState<number>(0);
  const [text, setText] = useState<string>("");

  return (
    <>
      <h1>Hello Next.js</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>count</button>
      <form>
        <input value={text} onChange={(e) => setText(e.target.value)} />
      </form>
    </>
  );
};

export default Index;
