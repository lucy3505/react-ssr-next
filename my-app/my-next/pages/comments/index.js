export default function Comments({ data }) {
  console.log("render comment:", data);
  return (
    <main>
      <h1>评论列表：</h1>
      <p>使用 getServerSideProps SSR</p>
      <ul>
        {data.map((comment) => (
          <li key={comment.id}>{comment.content}</li>
        ))}
      </ul>
    </main>
  );
}

export async function getServerSideProps(context) {
  const { params, req } = context;
  const res = await fetch("http://localhost:3006/api/comment");
  const comments = await res.json();
  return {
    props: {
      data: comments,
    },
  };
}
