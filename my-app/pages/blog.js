function Blog({ posts }) {
  console.log("render posts", posts);
  return (
    <main>
      <h1>博客列表：</h1>
      <p>使用getStaticProps 静态生成</p>
      <ul>
        {posts.map((post, idx) => (
          <li key={idx}>{post.title}</li>
        ))}
      </ul>
    </main>
  );
}

//数据获取
export async function getStaticProps() {
  // 这里为了演示方便，实际上不应该在这里请求api routes
  const res = await fetch("http://localhost:3000/api/posts");
  const posts = await res.json();
  return {
    props: {
      posts,
    },
  };
}

export default Blog;
