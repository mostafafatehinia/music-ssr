import musics from "./musics.json";

export async function GET() {
  return Response.json(musics);
}
