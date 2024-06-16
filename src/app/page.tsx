import { Musics, SearchInput } from "@/components";

export default function MusicsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined };
}) {
  const { title } = searchParams;
  return (
    <main className="p-6 space-y-4">
      <SearchInput />
      <Musics title={title as string} />
    </main>
  );
}
