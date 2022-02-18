import styled from "../styles/Home.module.css";
import Link from "next/link";
import { useState } from "react";

export default function Home({ count, setCount }) {
  const [err, setErr] = useState(false);
  if (err) {
    throw new Error("chu bug le");
  }
  return (
    <div className={styled.container}>
      <h1 className={styled.title}>
        Welcome to <a href="https://nextjs.org">Next.js</a>
      </h1>
      <Link href="/book">
        <a>go to book</a>
      </Link>
      <h1>{count}</h1>
      <button onClick={() => setCount((c) => c + 1)}>click to add</button>
      <button onClick={() => setErr(true)}>click to throw error</button>
    </div>
  );
}
