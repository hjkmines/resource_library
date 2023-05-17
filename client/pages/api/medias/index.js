let data = [];

export default function medias(req, res) {
  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "DELETE") {
    let { id } = req.query;

    let mediaDelete = data.filter((media) => media.id === id);
    res.status(200).json(mediaDelete);
  }
}
