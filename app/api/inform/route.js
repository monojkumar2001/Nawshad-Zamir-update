const API_BASE = "https://mirhelal.com/motamotform/api/index.php";

async function proxyResponse(response) {
  const data = await response.json();
  return Response.json(data, { status: response.status });
}

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.toString();
  const response = await fetch(`${API_BASE}?${query}`, { cache: "no-store" });
  return proxyResponse(response);
}

export async function POST(request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.toString();
  const contentType = request.headers.get("content-type") || "";

  if (contentType.includes("multipart/form-data")) {
    const formData = await request.formData();
    const response = await fetch(`${API_BASE}?${query}`, {
      method: "POST",
      body: formData,
    });
    return proxyResponse(response);
  }

  const body = await request.text();
  const response = await fetch(`${API_BASE}?${query}`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
  });
  return proxyResponse(response);
}
