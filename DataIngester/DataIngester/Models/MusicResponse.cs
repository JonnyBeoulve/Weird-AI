using Newtonsoft.Json;
using System.Collections.Generic;

namespace DataIngester.Models
{
    public class MusicResponse
    {
        [JsonProperty("message")]
        public Message Message { get; set; }
    }

    public class Message
    {
        [JsonProperty("body")]
        public Body Body { get; set; }
    }

    public class Body
    {
        [JsonProperty("album_list")]
        public List<Album> Albums { get; set; }


        [JsonProperty("track_list")]
        public List<Track> AlbumTracks { get; set; }

        [JsonProperty("lyrics")]
        public Lyrics Lyrics { get; set; }
    }

    public class Album
    {
        [JsonProperty("album")]
        public AlbumDetail AlbumDetail { get; set; }
    }

    public class AlbumDetail
    {
        [JsonProperty("album_id")]
        public int AlbumId { get; set; }

        [JsonProperty("album_name")]
        public string AlbumName { get; set; }
    }

    public class Track
    {
        [JsonProperty("track")]
        public TrackDetail TrackDetail { get; set; }       
    }

    public class TrackDetail
    {
        [JsonProperty("track_id")]
        public int TrackId { get; set; }

        [JsonProperty("track_name")]
        public string TrackName { get; set; }
    }

    public class Lyrics
    {
        [JsonProperty("lyrics_body")]
        public string LyricsBody { get; set; }
    }
}
