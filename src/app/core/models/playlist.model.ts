export interface Playlist {
  name: string;
  description: string;
  songs: Song[];
}


export interface Song {
  title: string;
  artist: string;
  album: string;
  releaseYear: string;
  genre: string;
}
