import type { NextRequest } from "next/server";

export async function GET(
  req: NextRequest,
  context: { params: Promise<{ chapter: string }> } // 👈 note: Promise type
) {
  const { chapter } = await context.params; // must await if typed as Promise

  if (!chapter) {
    return new Response("Chapter not found", { status: 404 });
  }

  const response = await fetch(`https://quranapi.pages.dev/api/${chapter}.json`);
  const data = await response.json();

  if (!data || !data.surahName) {
    return new Response("Data not found", { status: 404 });
  }

  return new Response(JSON.stringify(data), {
    status: 200,
    headers: { "Content-Type": "application/json" },
  });
}
