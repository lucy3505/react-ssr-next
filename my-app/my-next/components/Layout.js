import styled from "./layout.module.css";

export default function Layout({ children }) {
  return (
    <main className={styled.container}>
      <header></header>
      <section>{children}</section>
      <footer></footer>
    </main>
  );
}
