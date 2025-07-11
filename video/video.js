const card = JSON.parse(localStorage.getItem("cards"));
const menuCard = document.getElementById("suggestion-side");
const commentsDetails = document.getElementById("comments");
const commentCountEl = document.getElementById("comment-count");
const input = document.getElementById("comment-input");
const params = new URLSearchParams(window.location.search);
const index = parseInt(params.get("index"));
const matched = card.filter((_, i) => i === index)[0];
const profile = localStorage.getItem("profilePic");

// Render suggestions sidebar
function renderSuggestions() {
  card.map((cardItems, i) => {
    if (i !== index) {
      const divElement = document.createElement("div");
      divElement.className = "menu-card";
      divElement.innerHTML = `
        <div class="card-image">
          <img src="${cardItems.img}" />
        </div>
        <div class="channel-logo">
          <img src="${cardItems.logo}" alt="Channel Logo" />
          <div class="video-details">
            <h3>${cardItems.title}</h3>
            <div><span>${cardItems.channelName}</span></div>
            <span>${cardItems.views} • ${cardItems.duration}</span>
          </div>
        </div>
      `;
      menuCard.append(divElement);
      divElement.onclick = function () {
        window.location.href = `?index=${i}`;
      };
    }
  });
}

// Render main video and info
function renderVideoDetails(video) {
  const videoDetails = document.getElementById("video-details");
  videoDetails.innerHTML = `
    <video controls>
      <source src="./assets/demo-video.mp4" type="video/mp4" />
    </video>
    <h4>${video.title}</h4>
    <div class="details-sec">
      <div class="video-left">
        <img src="${video.logo}" alt="" />
        <div class="mid-sec">
          <h4>${video.channelName}</h4>
          <span>804k subscribers</span>
        </div>
        <button>Subscribe</button>
      </div>
      <div class="video-right">
        <div class="like-dislike-group">
          <button class="like-button">
            <i class="fa-regular fa-thumbs-up"></i> 750K
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
        <span class="views">${video.views}</span>
        <span class="dot">•</span>
        <span class="time">${video.duration}</span>
        <span class="tag">${video.hashtag}</span>
      </div>
      <div class="video-description">${video.desc}</div>
    </div>
  `;
}

// Render all comments
function renderComments(comments) {
  commentsDetails.innerHTML = "";
  commentCountEl.textContent = comments.length;
  comments.forEach((comment) => renderComment(comment));
}

// Render one comment
function renderComment(comment) {
  const comCard = document.createElement("div");
  comCard.className = "comment-card";
  comCard.innerHTML = `
    <div class="comData">
      <img class="profile-pic" src="./assets/commentpro.jpg" alt="Profile Picture" />
      <div class="comment-content">
        <div class="user-info">
          <span class="username">${comment.username}</span>
          <span class="time">${comment.time}</span>
        </div>
        <p class="comment-text">${comment.text}</p>
      </div>
    </div>
    <div class="actions">
      <i class="fa-regular fa-thumbs-up"></i>
      <span class="count">${comment.likes}</span>
      <i class="fa-regular fa-thumbs-down"></i>
      <span class="reply">Reply</span>
    </div>
  `;
  commentsDetails.append(comCard);
}

// Handle new comment input
function setupCommentInput() {
  input.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
      const commentText = input.value.trim();
      if (commentText) {

        const storedUsername = JSON.parse(localStorage.getItem("username")); 
        const usernameToUse = storedUsername && storedUsername.trim() !== "" ? storedUsername : "@GuestUser";
        const newComment = {
             
          username: usernameToUse,
          time: "just now",
          text: commentText,
          likes: 0,
        };
        matched.comments.push(newComment);
        renderComment(newComment);
        commentCountEl.textContent = matched.comments.length;

        card[index].comments = matched.comments;
        localStorage.setItem("cards", JSON.stringify(card));
        input.value = "";
      }
    }
  });
}

// Main logic
if (matched) {
  renderSuggestions();
  renderVideoDetails(matched);
  renderComments(matched.comments);
  setupCommentInput();
}