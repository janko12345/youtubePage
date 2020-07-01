const sideVids = document.querySelector("#side-vids");
console.log(sideVids);
for (let i = 0; i < 9; i++) {
    const image = document.createElement("img");
    image.classList.add("next-vid");
    image.src = "https://i.ytimg.com/vi/EhbZGV2dqZ4/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&rs=AOn4CLD7P3cwRKP25I_dKIH2mtbrH29WMg";
    image.alt = "upcoming"

    const content = document.createElement("div");
    content.classList.add("next-content");

    const contentWrapper = document.createElement("div");
    contentWrapper.classList.add("next-content-wrapper");

    const nextVideoName = document.createElement("h4");
    nextVideoName.textContent = "Margin and Padding Deep Dive: The basics";
    
    const videoAuthor = document.createElement("p");
    videoAuthor.innerHTML = "<small>Kevin Powell</small>";
    
    const videoViews = document.createElement("p");
    videoViews.innerHTML = "<small>22 t. views • 2 years ago</small>";

    contentWrapper.appendChild(nextVideoName);  
    contentWrapper.appendChild(videoAuthor);
    contentWrapper.appendChild(videoViews);
    content.appendChild(contentWrapper);
    sideVids.appendChild(image);
    sideVids.appendChild(content);

    
}