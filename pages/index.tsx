import { NextPage } from "next";
import { useState } from "react";

const Index: NextPage = () => {
  const [count, setCount] = useState<number>(0);

  return (
    <>
      <h1>Hello Next.js</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>count</button>
    </>
  );
};

export default Index;
