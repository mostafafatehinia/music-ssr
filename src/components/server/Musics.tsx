import { getMusics } from "@/services/musics";

import { Card } from "../Card";
import { Error } from "../Error";
import { NotFoundResult } from "../NotFoundResult";

export const Musics = async ({ title }: { title: string }) => {
  const { data: musics, isError } = await getMusics();
  const filteredMusics = musics?.filter((music) => {
    return title
      ? music.title.toLocaleLowerCase().includes(title.toLocaleLowerCase())
      : true;
  });

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-6">
        {filteredMusics?.map((music) => (
          <Card
            key={music.id}
            title={music.title}
            image={music.image}
            artist={music.artist_name}
            album={music.album_name}
          />
        ))}
      </div>
      {!isError && (!filteredMusics || filteredMusics?.length === 0) && (
        <NotFoundResult />
      )}
      {isError && <Error />}
    </>
  );
};
