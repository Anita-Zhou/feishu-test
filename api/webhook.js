module.exports = (req, res) => {
  if (req.method !== "POST") {
    res.statusCode = 405;
    return res.end("Method Not Allowed");
  }

  // Vercel 会自动解析 JSON（大多数情况 req.body 已经是对象）
  const body = req.body || {};

  console.log("====== Feishu Webhook Received ======");
  console.log("Full Body:", body);

  const projectName = body.project_name || (body.record && body.record.project_name);
  console.log("项目名称:", projectName);

  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.end(JSON.stringify({ ok: true, received_project_name: projectName }));
};
