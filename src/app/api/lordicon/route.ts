import { NextResponse } from "next/server";

// We want to cache these icon requests for performance, as icons don't change often
export const revalidate = 86400; // Cache for 24 hours

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("query");

  if (!query) {
    return NextResponse.json({ error: "Missing query parameter" }, { status: 400 });
  }

  const token = process.env.LORDICON_API_KEY;

  if (!token) {
    console.error("Missing LORDICON_API_KEY in environment variables.");
    return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
  }

  try {
    // 1. Search for the icon using the Lordicon API
    const searchUrl = `https://api.lordicon.com/v1/icons?query=${encodeURIComponent(query)}`;
    const searchRes = await fetch(searchUrl, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (!searchRes.ok) {
      console.error(`Lordicon search failed: ${searchRes.status} ${searchRes.statusText}`);
      return NextResponse.json({ error: "Failed to search for icon" }, { status: searchRes.status });
    }

    const searchData = await searchRes.json();

    if (!searchData || searchData.length === 0) {
      return NextResponse.json({ error: "Icon not found" }, { status: 404 });
    }

    // 2. We take the first icon matched and get its JSON file URL
    const firstIcon = searchData[0];
    const jsonUrl = firstIcon.files?.json;

    if (!jsonUrl) {
      return NextResponse.json({ error: "Icon data not available" }, { status: 404 });
    }

    // 3. Fetch the actual animation JSON
    const iconRes = await fetch(jsonUrl);

    if (!iconRes.ok) {
      console.error(`Lordicon JSON fetch failed: ${iconRes.status} ${iconRes.statusText}`);
      return NextResponse.json({ error: "Failed to fetch icon data" }, { status: iconRes.status });
    }

    const iconData = await iconRes.json();

    // 4. Return the JSON to the client so <lord-icon> can render it
    return NextResponse.json(iconData);
  } catch (error) {
    console.error("Lordicon API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
