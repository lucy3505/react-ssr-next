export default (req, res) => {
  const {
    query: { slug },
  } = req;
  res.status(404).json({ all: slug });
};
