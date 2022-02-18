import Link from "next/link";
import CustomLink from "../components/CustomLink";

export default function Home() {
  return (
    <div>
      <h1>/index</h1>
      <ul>
        <li>
          <Link href="/book">
            <a>静态路由跳转：/book</a>
          </Link>
        </li>
        <li>
          <Link href="/my/book/one">
            <a>静态路由跳转：/my/book/one</a>
          </Link>
        </li>
        <li>
          <Link href="/book/[id]" as="book/123">
            <a>动态路由跳转：/book/123</a>
          </Link>
        </li>
        <li>
          <Link href="/book/one" passHref>
            <CustomLink />
          </Link>
        </li>
        <li>
          <Link href={{ pathname: "/book", query: { year: "2020" } }}>
            <a>url对象跳转：/book?year=2020</a>
          </Link>
        </li>
        <li>
          <Link href="/book" replace>
            <a>replace to book</a>
          </Link>
        </li>
        <li>
          <Link href="/book" passHref>
            <button>按钮跳转</button>
          </Link>
        </li>
      </ul>
    </div>
  );
}
