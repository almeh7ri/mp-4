import {NextResponse} from "next/server";
export const dynamic = "force-dynamic";

const WEATHER_API_KEY = process.env.WEATHER_API_KEY;
console.log("Weather API Key:", WEATHER_API_KEY);

export async function GET(request:Request): Promise<NextResponse>{
    // using string deconstruction, extract search parameters from the url
    const {searchParams} = new URL(request.url);
    //Get the value of the city parameter from the query string
    const city = searchParams.get("city");
    //If no city parameter is provided, return a 400 bad request error response
    if (!city) {
        return NextResponse.json({error: "No [city] provider"},{status: 404});
    }
    const res = await fetch(
        `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}/next7days?unitGroup=us&include=days%2Ccurrent%2Cevents&key=${WEATHER_API_KEY}&contentType=json`
    );
    if(res.status !== 200) {
        return NextResponse.json({error: "Failed to fetch data"}, {status:500});
    }
    const data = await res.json();
    return NextResponse.json(data);
}