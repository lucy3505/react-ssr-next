import React from "react";
import { useRouter } from "next/router";
export default function Posts({ post }) {
  const router = useRouter();
  console.log("render post:", post);

  if (router.isFallback) {
    return <div>loading...</div>;
  }

  return (
    <div>
      <h1>title:{post.title}</h1>
      <p>id:{post.id}</p>
    </div>
  );
}

//数据获取
export async function getStaticProps(context) {
  // 这里为了演示方便，实际上不应该在这里请求api routes
  const {
    params: { id },
  } = context;
  const res = await fetch(`http://localhost:3006/api/post/${id}`);
  const post = await res.json();
  return { props: { post } };
}

//指定渲染的path
export async function getStaticPaths() {
  const res = await fetch("http://localhost:3006/api/posts");
  const posts = await res.json();
  const paths = posts.map((post) => ({
    params: { id: `${post.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
}
