
export default async function handler(req, res) {
  const response = await fetch("https://gw-c.petgenius.info/wfservice/z1/specialcares/list", {
    method: "POST",
    headers: {
      "Authorization": "Basic " + Buffer.from("wsfarmina_zendesk:test").toString("base64"),
      "Content-Type": "application/json"
    },
    body: JSON.stringify(req.body)
  });

  const data = await response.json();
  res.status(200).json(data);
}
