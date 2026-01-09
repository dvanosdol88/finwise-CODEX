import { kv } from "@vercel/kv";
import { NextRequest, NextResponse } from "next/server";

const VOTE_KEY = "quiz:votes";

const validOptions = [
  "retire-early",
  "vacation-home",
  "give-to-advisor",
  "invest-it",
  "pay-off-mortgage",
  "other",
];

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { votes } = body as { votes: string[] };

    if (!votes || !Array.isArray(votes) || votes.length === 0) {
      return NextResponse.json(
        { error: "No votes provided" },
        { status: 400 }
      );
    }

    // Validate vote options
    const invalidVotes = votes.filter((v) => !validOptions.includes(v));
    if (invalidVotes.length > 0) {
      return NextResponse.json(
        { error: "Invalid vote options", invalid: invalidVotes },
        { status: 400 }
      );
    }

    // Increment vote count for each selected option
    const pipeline = kv.pipeline();
    for (const vote of votes) {
      pipeline.hincrby(VOTE_KEY, vote, 1);
    }
    await pipeline.exec();

    // Return updated counts
    const counts = await kv.hgetall<Record<string, number>>(VOTE_KEY);

    return NextResponse.json({ success: true, counts });
  } catch (error) {
    console.error("Vote submission error:", error);
    return NextResponse.json(
      { error: "Failed to submit vote" },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const counts = await kv.hgetall<Record<string, number>>(VOTE_KEY);
    return NextResponse.json({ counts: counts || {} });
  } catch (error) {
    console.error("Vote fetch error:", error);
    return NextResponse.json(
      { error: "Failed to fetch votes" },
      { status: 500 }
    );
  }
}
