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
  const res = await fetch("http://localhost:3006/api/posts");
  const posts = await res.json();
  //返回数据{props:posts}，构建时，Blog组件会从props中取到posts数据
  return {
    props: {
      posts,
    },
    revalidate: 3, //单位：秒。在用户请求时在服务端重新渲染现有页面（如果页面存在超过这个时间）
  };
}

export default Blog;
