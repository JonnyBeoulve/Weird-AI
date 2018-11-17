using RestSharp;
using System.Net;

namespace DataIngester.DAL
{
    public class MusicInfoClient
    {
        private RestClient _client;
        private readonly string _apiKey = "212335c0934c85fe07ce1709d92348e1";

        public MusicInfoClient()
        {
            _client = new RestClient("https://api.musixmatch.com/ws/1.1");
        }

        public string GetAlbums(int artistId)
        {
            var client = new RestClient($"https://api.musixmatch.com/ws/1.1/artist.albums.get?format=json&artist_id={artistId}&apikey=212335c0934c85fe07ce1709d92348e1&page_size=100");
            var request = new RestRequest(Method.GET);
            //request.AddHeader("Postman-Token", "0f438a02-0abf-40b0-8b36-4a94c73bdc93");
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Accept", "application/json");
            IRestResponse response = client.Execute(request);
            if (response.StatusCode == HttpStatusCode.OK)
            {
                return response.Content;
            }
            else
            {
                return string.Empty;
            }
        }

        public string GetAlbumSongs(int albumId)
        {
            var client = new RestClient($"https://api.musixmatch.com/ws/1.1/album.tracks.get?format=json&album_id={albumId}&apikey=212335c0934c85fe07ce1709d92348e1&page_size=100");
            var request = new RestRequest(Method.GET);
            //request.AddHeader("Postman-Token", "ba55375f-ef37-4cea-874a-17c9e15761f7");
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Accept", "application/json");
            IRestResponse response = client.Execute(request);

            if (response.StatusCode == HttpStatusCode.OK)
            {
                return response.Content;
            }
            else
            {
                return string.Empty;
            }
        }

        public string GetSongLyric(int trackId)
        {
            var client = new RestClient($"https://api.musixmatch.com/ws/1.1/track.lyrics.get?format=json&track_id={trackId}&apikey=212335c0934c85fe07ce1709d92348e1");
            var request = new RestRequest(Method.GET);
            //request.AddHeader("Postman-Token", "8b8e0a57-0dac-45eb-83ee-1543af8f5a67");
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Accept", "application/json");
            IRestResponse response = client.Execute(request);

            if (response.StatusCode == HttpStatusCode.OK)
            {
                return response.Content;
            }
            else
            {
                return string.Empty;
            }
        }


        private string MakeRequest(RestRequest request)
        {
            //request.AddParameter("apikey", _apiKey);

            //// easily add HTTP Headers
            //request.AddHeader("accept", "application/json");
            request.AddHeader("cache-control", "no-cache");
            request.AddHeader("Accept", "application/json");


            // execute the request
            IRestResponse response = _client.Execute(request);
            return response.Content;
        }
    }
}
