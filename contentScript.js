function addButtonToVideos() {
    document.querySelectorAll('ytd-playlist-video-renderer').forEach(video => {
        if (video.querySelector('.copy-url-button')) return;

        const videoUrl = video.querySelector('a')?.href;
        const treeDotsButtonContainer = video.querySelector('.style-scope .ytd-playlist-video-list-renderer #button')?.parentElement?.parentElement;

        if (videoUrl && treeDotsButtonContainer) {
            treeDotsButtonContainer.before(createCopyButton(videoUrl), createRemoveButton(video));
        }
    });
}

function applyButtonStyles(button) {
    Object.assign(button.style, {
        background: "#0f0f0f", // Dark mode background
        border: "1px solid #1F1F1F", // Light border
        borderRadius: "8px",
        padding: "8px",
        cursor: "pointer",
        width: "40px",
        height: "40px",
        margin: "0 4px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Slightly stronger shadow for dark mode
        transition: "background 0.3s ease, transform 0.1s ease"
    });
}

function setupButtonEffects(button) {
    button.onmouseenter = () => (button.style.background = "#2a2a2a");
    button.onmouseleave = () => (button.style.background = "#1f1f1f");
    button.onmousedown = () => {
        button.style.background = "#3a3a3a";
        button.style.transform = "scale(0.9)";
    };
    button.onmouseup = () => {
        button.style.background = "#2a2a2a";
        setTimeout(() => (button.style.transform = "scale(1)"), 100);
    };
}

function createButton(svgIcon, className, onClick) {
    const button = document.createElement("button");
    button.innerHTML = svgIcon;
    button.classList.add(className);
    applyButtonStyles(button);
    setupButtonEffects(button);
    button.addEventListener("click", onClick);
    return button;
}

function createCopyButton(videoUrl) {
    const copyIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
            <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
        </svg>
    `;

    return createButton(copyIcon, "copy-url-button", () => {
        const videoId = videoUrl.split("=")[1].split("&")[0];
        copyToClipboard(`https://youtu.be/${videoId}`);
    });
}

function createRemoveButton(item) {
    const trashIcon = `
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#ddd" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6l-2 14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2L5 6"></path>
            <path d="M10 11v6"></path>
            <path d="M14 11v6"></path>
            <path d="M6 6V3h12v3"></path>
        </svg>
    `;

    return createButton(trashIcon, "remove-url-button", () => {
        item.querySelector(".style-scope .ytd-playlist-video-list-renderer #button").click();
        setTimeout(() => {
            document.querySelector("#items > ytd-menu-service-item-renderer:nth-child(3) > tp-yt-paper-item").click();
        }, 250);
    });
}


// copy a string to the clipboard
function copyToClipboard(str) {
    navigator.clipboard.writeText(str);
}

window.onload = () => {
    const observer = new MutationObserver(() => {
        const videoItems = document.querySelectorAll(
            'ytd-playlist-video-renderer'
        );

        // if there are videos on the page, add the button
        if (videoItems.length > 0) {
            addButtonToVideos();
        }
    });

    observer.observe(document.body, { childList: true, subtree: true });
};
