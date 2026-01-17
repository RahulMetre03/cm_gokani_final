const API_KEY = "AIzaSyC4R4SMnKe-3qx9aX8wXZiDjnx271Rvcmg";

function getVideoId(url) {
  const match = url.match(/(?:v=|youtu\.be\/)([a-zA-Z0-9_-]{11})/);
  return match ? match[1] : null;
}

async function getSongCardHTML(url) {
  const videoId = getVideoId(url);
  if (!videoId) return "";

  const apiUrl = `https://www.googleapis.com/youtube/v3/videos?part=snippet&id=${videoId}&key=${API_KEY}`;

  try {
    const res = await fetch(apiUrl);
    const data = await res.json();
    if (!data.items || !data.items.length) return "";

    const video = data.items[0];

    return `
      <a href="${url}">
        <div class="flex_card">
          <img src="${video.snippet.thumbnails.high.url}" alt="">
          <div class="song_details">
            <div class="card_title_song">${video.snippet.title}</div>
            <div class="card_title_creator">${video.snippet.channelTitle}</div>
          </div>
        </div>
      </a>
    `;
  } catch (err) {
    console.error(err);
    return "";
  }
}

/* ✅ THIS IS THE ONLY CALL */
// getSongCardHTML("https://youtu.be/V8-Y_ZHFFmE?si=3sgZgUwk4GXCJOvw").then(html => {
//   document.querySelector(".original_flex").innerHTML += html;
// });
