import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  // Reemplaza TU_ID_DE_VIDEO por el ID real de tu video en Google Drive
  const googleDriveUrl = "https://drive.google.com/uc?export=download&id=1tXnUciXOKjXBgOu5vlk4VGP5BfwNsBdi";

  const response = await fetch(googleDriveUrl);

  return new Response(response.body, {
    status: response.status,
    headers: {
      "Content-Type": response.headers.get("Content-Type") || "video/mp4",
      "Content-Length": response.headers.get("Content-Length") || "",
    },
  });
}