import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
  } catch (error) {
    console.log("Error fetching forecast data");

    return new Response("Error fetching forecast data", { status: 500 });
  }
}
