// Go to this link to get the API key: https://console.cloud.google.com/apis/credentials

const GOOGLE_API_KEY = import.meta.env.VITE_GOOGLE_API_KEY;

// Go to this link to enable the YouTube Data API v3: https://console.cloud.google.com/apis/library/youtube.googleapis.com

export const YOUTUBE_MOST_POPULAR_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet,contentDetails,statistics&chart=mostPopular&maxResults=40&regionCode=US&key=" + GOOGLE_API_KEY;

export const YOUTUBE_LIVE_STREAMS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=5&q=earth&type=video&regionCode=US&key=" + GOOGLE_API_KEY;

export const YOUTUBE_LIVE_CHAT_ID_API = "https://www.googleapis.com/youtube/v3/videos?part=liveStreamingDetails,snippet&key=" + GOOGLE_API_KEY + "&id=";

export const YOUTUBE_LIVE_CHAT_API = "https://www.googleapis.com/youtube/v3/liveChat/messages?part=snippet,authorDetails&key=" + GOOGLE_API_KEY + "&liveChatId=";

export const LIVE_CHAT_COUNT = 30;

export const YOUTUBE_SEARCH_API = "https://suggestqueries-clients6.youtube.com/complete/search?client=youtube-reduced&hl=en&gs_ri=youtube-reduced&ds=yt&q=";

export const YOUTUBE_SEARCH_RESULTS_API = 'https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=';

export const YOUTUBE_VIDEO_DETAIL_API = "https://www.googleapis.com/youtube/v3/videos?part=snippet,statistics&key=" + GOOGLE_API_KEY + "&id=";

export const YOUTUBE_CHANNEL_API = "https://youtube.googleapis.com/youtube/v3/channels?part=snippet&key=" + GOOGLE_API_KEY + "&id=";

export const YOUTUBE_COMMENTS_API = "https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&key=" + GOOGLE_API_KEY + "&videoId=";
