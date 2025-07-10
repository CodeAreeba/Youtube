import { card } from "../data/data.js";
const menuCard = document.getElementById("suggestion-side");

card.map((cardItems) => {
  const divElement = document.createElement("div");
  divElement.className = "menu-card";
  divElement.innerHTML = `
        <div class="card-image">
            <img src=${cardItems.img} />
            </div>
            <div class="channel-logo">
            <img src="${cardItems.logo}" alt="Channel Logo" />
            <div class="video-details">
                <h3>${cardItems.title}</h3>
                <div>
                <span>${cardItems.channelName}</span>
                </div>
                <span>${cardItems.views} • ${cardItems.duration}</span>
            </div>
        </div>
             `;
  menuCard.append(divElement);
  divElement.onclick = function () {
    const videoDetails = document.getElementById("video-details");
    videoDetails.innerHTML = `
          <video controls>
            <source src="./assets/demo-video.mp4" type="video/mp4" />
          </video>
          <h4>
             ${cardItems.title}
          </h4>
        <div class="details-sec">
            <div class="video-left">
              <img src="${cardItems.logo}" alt="" />
              <div class="mid-sec">
                <h4>${cardItems.channelName}</h4>
                <span>804k subscribers</span>
              </div>
              <button>Subscribe</button>
            </div>
   
        <div class="video-right">
            <div class="like-dislike-group">
                <button class="like-button">
                  <i class="fa-regular fa-thumbs-up"></i>
                  750K
                </button>
                <div class="divider"></div>
                <button class="dislike-button">
                  <i class="fa-regular fa-thumbs-down"></i>
                </button>
            </div>
              <button class="action-button">
                <i class="fa-solid fa-share"></i> Share
              </button>
              <button class="action-button">
                <i class="fa-solid fa-ellipsis"></i>
              </button>
        </div>
        </div>
         <div class="video-section">
        <div class="video-stats">
        <span class="views">${cardItems.views}</span>
        <span class="dot">•</span>
        <span class="time">${cardItems.duration}</span>
        <span class="tag">${cardItems.hashtag}</span>
        </div>
         <div class="video-description">
          ${cardItems.desc}
        </div>
        </div>
        
    `;

    const commentsDetails = document.getElementById("comments");
    const commentCountEl = document.getElementById("comment-count");
    commentsDetails.innerHTML = ""; // Clear previous comments
    commentCountEl.textContent = cardItems.comments.length;

    cardItems.comments.map((comments) => {
      const comCard = document.createElement("div");
      comCard.className = "comment-card";

      comCard.innerHTML = `
    <div class="comData">
      <img
        class="profile-pic"
        src="./assets/commentpro.jpg"
        alt="Profile Picture"
      />
      <div class="comment-content">
        <div class="user-info">
          <span class="username">${comments.username}</span>
          <span class="time">${comments.time}</span>
        </div>
        <p class="comment-text">
          ${comments.text}
        </p>
      </div> <!-- closing comment-content -->
    </div> <!-- closing comData -->
    <div class="actions">
      <i class="fa-regular fa-thumbs-up"></i>
      <span class="count">${comments.likes}</span>
      <i class="fa-regular fa-thumbs-down"></i>
      <span class="reply">Reply</span>
    </div>
  `;

      commentsDetails.append(comCard);
    });
  };
});
const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get("index"));
const matched = card.filter((_, i) => i === index)[0];
if (matched) {
  const videoDetails = document.getElementById("video-details");
  videoDetails.innerHTML = `
          <video controls>
            <source src="./assets/demo-video.mp4" type="video/mp4" />
          </video>
          <h4>
             ${matched.title}
          </h4>
        <div class="details-sec">
            <div class="video-left">
              <img src="${matched.logo}" alt="" />
              <div class="mid-sec">
                <h4>${matched.channelName}</h4>
                <span>804k subscribers</span>
              </div>
              <button>Subscribe</button>
            </div>
   
        <div class="video-right">
            <div class="like-dislike-group">
                <button class="like-button">
                  <i class="fa-regular fa-thumbs-up"></i>
                  750K
                </button>
                <div class="divider"></div>
                <button class="dislike-button">
                  <i class="fa-regular fa-thumbs-down"></i>
                </button>
            </div>
              <button class="action-button">
                <i class="fa-solid fa-share"></i> Share
              </button>
              <button class="action-button">
                <i class="fa-solid fa-ellipsis"></i>
              </button>
        </div>
         </div>
         <div class="video-section">
        <div class="video-stats">
        <span class="views">${matched.views}</span>
        <span class="dot">•</span>
        <span class="time">${matched.duration}</span>
        <span class="tag">${matched.hashtag}</span>
        </div>
         <div class="video-description">
          ${matched.desc}
        </div>
        </div>
        `;
    const commentsDetails = document.getElementById("comments");
    const commentCountEl = document.getElementById("comment-count");
    commentsDetails.innerHTML = ""; // Clear previous comments
    commentCountEl.textContent = matched.comments.length;

    matched.comments.map((comments) => {
      const comCard = document.createElement("div");
      comCard.className = "comment-card";

      comCard.innerHTML = `
    <div class="comData">
      <img
        class="profile-pic"
        src="./assets/commentpro.jpg"
        alt="Profile Picture"
      />
      <div class="comment-content">
        <div class="user-info">
          <span class="username">${comments.username}</span>
          <span class="time">${comments.time}</span>
        </div>
        <p class="comment-text">
          ${comments.text}
        </p>
      </div> <!-- closing comment-content -->
    </div> <!-- closing comData -->
    <div class="actions">
      <i class="fa-regular fa-thumbs-up"></i>
      <span class="count">${comments.likes}</span>
      <i class="fa-regular fa-thumbs-down"></i>
      <span class="reply">Reply</span>
    </div>
  `;

      commentsDetails.append(comCard);
    });

}
