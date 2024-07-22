import { NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  try {
    const apiKey=process.env.OPENWEATHERMAP_API_KEY;
    const lat = 40.4165;
    const lon = -3.7026;
    const url =
      "https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API key}";
  } catch (error) {
    console.log("Error fetching forecast data");

    return new Response("Error fetching forecast data", { status: 500 });
  }
}
