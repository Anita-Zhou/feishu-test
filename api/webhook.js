export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  try {
    const body = req.body;

    console.log("====== Feishu Webhook Received ======");
    console.log("Full Body:", body);

    // 取项目名称
    const projectName = body?.project_name || body?.record?.project_name;

    console.log("项目名称:", projectName);

    return res.status(200).json({
      success: true,
      received_project_name: projectName,
    });
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ success: false });
  }
}
