using DataIngester.Models;
using DataIngester.Services;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace DataIngester
{
    class Program
    {
        static void Main(string[] args)
        {
            List<SongInfo> songsInfo = new List<SongInfo>();
            MusicInfoService musicService = new MusicInfoService();

            List<Album> albums = musicService.GetAlbums(13807334);
            if (albums != null)
            {

                foreach (Album album in albums)
                {
                    List<Track> songs = musicService.GetSongs(album.AlbumDetail.AlbumId);

                    if (songs != null)
                    {
                        foreach (Track song in songs)
                        {
                            Lyrics lyrics = musicService.GetLyrics(song.TrackDetail.TrackId);
                            if (lyrics != null && !string.IsNullOrWhiteSpace(lyrics.LyricsBody))
                            {
                                string songName = song.TrackDetail.TrackName.Replace('/', '-').Replace('`', '\'');

                                SongInfo songInfo = new SongInfo
                                {
                                    Artist = "Weird AL Yankovic",
                                    AlbumName = album.AlbumDetail.AlbumName,
                                    SongName = songName,
                                    Lyrics = lyrics.LyricsBody.Replace("\n", " \n ")
                                };

                                songsInfo.Add(songInfo);

                                string filePath = $"C:\\Dev\\SongFolder\\{songName}.txt";
                                System.IO.File.WriteAllLines(filePath, new[] { songInfo.Lyrics });

                                Console.WriteLine($"Adding: {songInfo.AlbumName} - {song.TrackDetail.TrackId}" );
                            }
                        }
                    }
                }
            }
            string songsJson = JsonConvert.SerializeObject(songsInfo, Formatting.Indented);

            System.IO.File.WriteAllLines(@"C:\Dev\SongFolder\songsInfo.txt", new[] { songsJson });

            Console.WriteLine($"All Songs imported");
            Console.ReadLine();

        }
    }
}
