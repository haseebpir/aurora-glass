import '@videojs/html/video/player';
import '@videojs/html/media/mux-video';
import '@/video/skin';
import skinTemplate from '@/video/skin.html?raw';

// What the preview plays. Change these to try the skin with your own media; any Mux or HLS URL works.
const SRC = 'https://stream.mux.com/FxcbnojA3xyQ1fGZgkN13D6yAGdopVP6NHCr220101LfA.m3u8';
const POSTER = 'https://image.mux.com/FxcbnojA3xyQ1fGZgkN13D6yAGdopVP6NHCr220101LfA/thumbnail.webp?time=69';
/** Chapters for the time slider, served from `apps/preview/public`. */
const CHAPTERS = './cosmic-dawn-chapters.vtt';

const MEDIA_PLACEHOLDER = '<!-- Add a compatible media component here. -->';

export function createPlayer(): HTMLElement {
  const player = document.createElement('video-player');
  player.setAttribute('poster', POSTER);

  player.innerHTML = skinTemplate.replace(
    MEDIA_PLACEHOLDER,
    `<mux-video src="${SRC}" playsinline crossorigin><track kind="chapters" label="English" srclang="en" src="${CHAPTERS}" default></mux-video>`
  );

  return player;
}
