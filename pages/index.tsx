import { NextPage } from "next";
import Link from "next/link";
import { useState } from "react";
import { TestComponent } from "../components/test-component";

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
      <Link href="./second">second</Link>
      <TestComponent />
    </>
  );
};

export default Index;
