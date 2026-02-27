export default async function handler(req, res) {
  if (req.method === "GET" && req.query.challenge) {
    return res.status(200).send(req.query.challenge);
  }

  if (req.method !== "POST") {
    return res.status(200).send("OK");
  }

  try {
    const data = req.body;
    console.log("📥 收到请求:", JSON.stringify(data, null, 2));

    const projectName = data.project_name || data.event?.record?.fields?.["项目名称"];
    
    if (projectName) {
      console.log("🎉 项目名称:", projectName);
    }

    return res.status(200).send("success");
  } catch (e) {
    return res.status(500).send("error: " + e.message);
  }
}
