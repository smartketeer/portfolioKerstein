import { NextResponse } from 'next/server';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('query');
  
  if (!query) {
    return NextResponse.json({ error: 'Query is required' }, { status: 400 });
  }

  try {
    const token = process.env.LORDICON_API_KEY;
    if (!token) {
      return NextResponse.json({ error: 'Missing Lordicon API key' }, { status: 500 });
    }

    const searchUrl = `https://api.lordicon.com/v1/icons?query=${encodeURIComponent(query)}`;
    const searchRes = await fetch(searchUrl, {
      headers: { 'Authorization': `Bearer ${token}` }
    });

    if (!searchRes.ok) {
      return NextResponse.json({ error: 'Failed to search icons' }, { status: searchRes.status });
    }

    const searchData = await searchRes.json();
    if (!searchData || searchData.length === 0) {
      return NextResponse.json({ error: 'Icon not found' }, { status: 404 });
    }

    // Filter to try and find an exact match or just take the first
    const firstIcon = searchData.find((i: any) => i.name === query) || searchData[0];
    const jsonUrl = firstIcon.files.json;

    const iconRes = await fetch(jsonUrl);
    if (!iconRes.ok) {
      return NextResponse.json({ error: 'Failed to fetch icon JSON' }, { status: iconRes.status });
    }

    const iconData = await iconRes.json();
    
    // Cache the icon response heavily to avoid hitting Lordicon API limits
    return NextResponse.json(iconData, {
      headers: {
        'Cache-Control': 'public, s-maxage=86400, stale-while-revalidate=43200',
      },
    });
  } catch (error) {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
