using DataIngester.DAL;
using DataIngester.Models;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;

namespace DataIngester.Services
{
    class MusicInfoService
    {
        MusicInfoClient _client;

        public MusicInfoService()
        {
            _client = new MusicInfoClient();
        }

        public List<Album> GetAlbums(int artistId)
        {
            string results = _client.GetAlbums(artistId);

            if (string.IsNullOrEmpty(results))
            {
                return null;
            }

            MusicResponse musicResopnse = DeserializeContent(results);
            return musicResopnse.Message.Body.Albums;
        }

        public List<Track> GetSongs(int albumId)
        {
            string results = _client.GetAlbumSongs(albumId);

            if (string.IsNullOrEmpty(results))
            {
                return null;
            }

            MusicResponse musicResopnse = DeserializeContent(results);
            return musicResopnse.Message.Body.AlbumTracks;
        }

        public Lyrics GetLyrics(int songId)
        {
            string results = _client.GetSongLyric(songId);

            if (string.IsNullOrEmpty(results))
            {
                return null;
            }
            try
            {
                MusicResponse musicResopnse = DeserializeContent(results);
                return musicResopnse.Message.Body.Lyrics;
            }
            catch (Exception ex)
            {
                Console.WriteLine($"This song failed: {songId}");
                //throw;
                return null;
            }
        }

        private MusicResponse DeserializeContent(string stringContent)
        {
            return JsonConvert.DeserializeObject<MusicResponse>(stringContent);
        }
    }
}
