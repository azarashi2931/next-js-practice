import { NextPage } from "next";
import Link from "next/link";
import { hello } from "../lib/hello";

const Second: NextPage = () => {
  return (
    <>
      <h1>Hello Next.js</h1>
      <button onClick={() => hello()}>hello</button>
      <Link href="/" >index</Link>
    </>
  );
};

export default Second;
