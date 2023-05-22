let data = [];

export default function medias(req, res) {
 

  if (req.method === "GET") {
    res.status(200).json(data);
  } else if (req.method === "DELETE") {
    let { id } = req.query;
    
    const index = data.findIndex((media) => media.id === id)
    data.splice(index,1)

    let mediaDelete = data.find((media) => media.id === id);

    console.log(mediaDelete)
    res.status(200).json(mediaDelete);
  }
}

//the delete request deleted everything;
//just need it to delete one ID
//thinking I need to use the find and findIndex
