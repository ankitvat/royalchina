const handler = (req, res) => {
  if (req.method === "POST") {
    const data = req.body;
    console.log("data", data);
  }
  res.status(400).json({ message: "Bad Request" });
};

export default handler;
