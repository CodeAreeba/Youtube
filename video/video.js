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
        };
           });
        const params = new URLSearchParams(window.location.search);
        const index= parseInt(params.get("index"));
        const matched = card.filter((cardItems, i) => i === index);
        if(matched){
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
              <img src="${matched.chanelLogo}" alt="" />
              <div class="mid-sec">
                <h4>${matched.chanelName}</h4>
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
        }

        