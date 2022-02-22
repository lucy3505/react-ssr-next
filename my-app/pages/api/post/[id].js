export default function post(req, res) {
  const {
    query: { id },
  } = req;
  res.statusCode = 200;
  res.json({
    title: `博客-${id}`,
    id: id,
    content: "content XXX",
  });
}
