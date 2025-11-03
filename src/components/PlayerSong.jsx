import Player from "@madzadev/audio-player";

const tracks = [
  {
    url: "./chill-music.mp3",
    title: "Chill music",
    tags: ["house"],
  },
  {
    url: "./deep-house.mp3",
    title: "Deep House",
    tags: ["dnb"],
  },
];
function PlayerSong() {
  return (
    <>
      <Player
        trackList={tracks}
        includeTags={false}
        includeSearch={false}
        showPlaylist={false}
      />
    </>
  );
}

export default PlayerSong;
