# Watch Later Playlist Enhancer

This Chrome extension enhances the YouTube "Watch Later" playlist by adding two handy buttons for each video:
1. **Copy URL**: Quickly copy a shortened YouTube URL (`youtu.be`) for the video to your clipboard.
2. **Remove**: Easily remove a video from the "Watch Later" playlist.

---

## Features

- Adds a **Copy URL** button to each video in the "Watch Later" playlist.
- Adds a **Remove** button to delete videos from the playlist with a single click.
- Works dynamically as new videos are loaded on the playlist page.

---

## Installation

### Clone or Download the Repository
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/watch-later-playlist-enhancer.git
   ```
2. Navigate to the project folder:
   ```bash
   cd watch-later-playlist-enhancer
   ```

### Load the Extension
1. Open Google Chrome and go to `chrome://extensions/`.
2. Enable **Developer mode** (toggle in the top-right corner).
3. Click **Load unpacked** and select the project folder.

---

## Usage

1. Go to your YouTube "Watch Later" playlist.
2. You'll see two new buttons added to each video:
   - **Copy**: Copies the shortened URL for the video to your clipboard.
   - **Remove**: Removes the video from the playlist.
3. Enjoy a more streamlined experience managing your Watch Later playlist!

---

## How It Works

- **Dynamic Button Injection**: The extension uses a `MutationObserver` to monitor changes in the DOM and dynamically adds the buttons as new videos are loaded.
- **Clipboard Access**: The "Copy" button uses the Clipboard API to copy the shortened URL.
- **Playlist Management**: The "Remove" button interacts with YouTube's internal DOM structure to simulate the removal action.

---

## File Structure

```
watch-later-playlist-enhancer/
├── icons/
│   ├── 32.png
│   └── 128.png
├── contentScript.js
├── manifest.json
└── README.md
```

### Files
- **`manifest.json`**: Extension configuration file.
- **`contentScript.js`**: Main script that injects and manages buttons on the YouTube page.
- **`icons/`**: Folder containing icons for the extension.

---

## Permissions

This extension requires the following permissions:
- **`activeTab`**: To interact with the current tab.
- **`clipboardWrite`**: To copy URLs to the clipboard.
- **`host_permissions`**: To run scripts on YouTube (`https://www.youtube.com/*`).

---

## Contributing

Contributions are welcome! If you have ideas for new features or improvements:
1. Fork the repository.
2. Create a new branch for your feature:
   ```bash
   git checkout -b feature-name
   ```
3. Submit a pull request.

---

## License

This project is licensed under the [MIT License](LICENSE).

---

### Screenshots

![Copy and Remove Buttons](https://via.placeholder.com/800x400.png?text=Add+Your+Screenshots+Here)

---

Feel free to adapt this README as you see fit, adding more specific details or customization.