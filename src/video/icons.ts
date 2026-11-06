/**
 * Aurora Glass icon set.
 *
 * Clean, rounded line icons on a 24×24 grid: a single 1.8-weight stroke in
 * `currentColor` with round caps and joins, matching the format the Scaffold
 * icons use. Registered over the Scaffold family so every
 * `<media-icon family="scaffold">` in the skin markup renders the Aurora
 * versions. Play/pause are soft filled shapes (the premium-player convention);
 * everything else is outline.
 */

const line = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24">${body}</svg>`;

const filled = (body: string): string =>
  `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" aria-hidden="true" viewBox="0 0 24 24">${body}</svg>`;

/** Soft filled triangle with rounded corners. */
export const playIcon = filled(
  `<path d="M8.4 5.9c0-.95 1.05-1.54 1.87-1.05l8.6 5.15c.79.47.79 1.61 0 2.08l-8.6 5.15c-.82.49-1.87-.1-1.87-1.05V5.9z"/>`,
);

/** Two soft bars. */
export const pauseIcon = filled(
  `<rect x="6" y="4.6" width="4.1" height="14.8" rx="2.05"/><rect x="13.9" y="4.6" width="4.1" height="14.8" rx="2.05"/>`,
);

/** Circular arrow, clockwise, arrowhead at the top. */
export const restartIcon = line(
  `<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M21.4 2.9v4h-4"/>`,
);

/** Circular arrow used by the ±10s seek buttons (the label carries the 10). */
export const seekIcon = line(
  `<path d="M19.5 12a7.5 7.5 0 1 1-2.2-5.3"/><path d="M21.4 2.9v4h-4"/>`,
);

const speaker = `<path d="M4 9.6v4.8h3.4L12 18.6c.6.5 1.6.1 1.6-.7V6.1c0-.8-1-1.2-1.6-.7L7.4 9.6H4z"/>`;

export const volumeHighIcon = line(
  speaker + `<path d="M16.6 9.2a4 4 0 0 1 0 5.6"/><path d="M18.9 6.8a7.4 7.4 0 0 1 0 10.4"/>`,
);

export const volumeLowIcon = line(speaker + `<path d="M16.6 9.2a4 4 0 0 1 0 5.6"/>`);

export const volumeOffIcon = line(
  speaker + `<path d="M16.4 9.6l5 5M21.4 9.6l-5 5"/>`,
);

const captionsFrame = `<rect x="3" y="5" width="18" height="14" rx="3.5"/>`;
const captionsMarks = `<path d="M10.6 10.2a2.6 2.6 0 1 0 0 3.6M17.2 10.2a2.6 2.6 0 1 0 0 3.6"/>`;

export const captionsOffIcon = line(captionsFrame + captionsMarks);

/** Filled frame with the CC marks knocked out — state reads by shape. */
export const captionsOnIcon = filled(
  `<path fill-rule="evenodd" d="M6.5 5h11A3.5 3.5 0 0 1 21 8.5v7A3.5 3.5 0 0 1 17.5 19h-11A3.5 3.5 0 0 1 3 15.5v-7A3.5 3.5 0 0 1 6.5 5zm4.1 5.2a2.6 2.6 0 1 0 0 3.6 2.6 2.6 0 0 0 0-3.6zm6.6 0a2.6 2.6 0 1 0 0 3.6 2.6 2.6 0 0 0 0-3.6z"/>`,
);

export const checkIcon = line(`<path d="M4.5 12.5l5 5 10-11"/>`);

export const chevronIcon = line(`<path d="M9 4.5l7.5 7.5L9 19.5"/>`);

export const fullscreenEnterIcon = line(
  `<path d="M4 9V6a2 2 0 0 1 2-2h3M15 4h3a2 2 0 0 1 2 2v3M20 15v3a2 2 0 0 1-2 2h-3M9 20H6a2 2 0 0 1-2-2v-3"/>`,
);

export const fullscreenExitIcon = line(
  `<path d="M9 4v3a2 2 0 0 1-2 2H4M20 9h-3a2 2 0 0 1-2-2V4M15 20v-3a2 2 0 0 1 2-2h3M4 15h3a2 2 0 0 1 2 2v3"/>`,
);

/** Gear: a ring with eight soft spokes. */
export const gearIcon = line(
  `<circle cx="12" cy="12" r="3.1"/>` +
    `<path d="M12 2.9v2.6M12 18.5v2.6M2.9 12h2.6M18.5 12h2.6M5.6 5.6l1.8 1.8M16.6 16.6l1.8 1.8M18.4 5.6l-1.8 1.8M7.4 16.6l-1.8 1.8"/>`,
);

const pipFrame = `<rect x="3" y="5" width="18" height="14" rx="3.5"/>`;

export const pipEnterIcon = line(pipFrame + `<rect x="12.5" y="12" width="6" height="4.5" rx="1.5"/>`);

export const pipExitIcon = line(pipFrame + `<rect x="5.5" y="7.5" width="6" height="4.5" rx="1.5"/>`);

/** Screen with the AirPlay triangle beneath. */
export const airplayEnterIcon = line(
  `<rect x="3.5" y="4.5" width="17" height="12" rx="2.5"/><path d="M12 13.2l2.8 3.8H9.2L12 13.2z"/>`,
);

/** Screen with the AirPlay triangle beneath it, filled (connected state). */
export const airplayExitIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" viewBox="0 0 24 24"><rect x="3.5" y="3.5" width="17" height="12" rx="2.5"/><path d="M12 15.9l3.1 4.1H8.9L12 15.9z" fill="currentColor" stroke="none"/></svg>`;

const castWaves = `<path d="M4.5 16.6a8.5 8.5 0 0 1 6.9 6.9M4.5 13.4a12.6 12.6 0 0 1 10.2 10.1M4.5 19.7a4.6 4.6 0 0 1 3.7 3.7"/>`;

export const castEnterIcon = line(
  `<path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17 16h-3.4"/>` + castWaves,
);

export const castExitIcon = line(
  `<path d="M4.5 6.5A2.5 2.5 0 0 1 7 4h10a2.5 2.5 0 0 1 2.5 2.5v7A2.5 2.5 0 0 1 17 16h-3.4"/>` +
    castWaves +
    `<path d="M10 7.5h6v5h-6z"/>`,
);

/** Speech bubble with two lines — the audio-track menu glyph. */
export const speechIcon = line(
  `<path d="M5 4.5h14a1.5 1.5 0 0 1 1.5 1.5v8A1.5 1.5 0 0 1 19 15.5H11l-4.6 4v-4H5A1.5 1.5 0 0 1 3.5 14V6A1.5 1.5 0 0 1 5 4.5z"/><path d="M7.5 9h9M7.5 12.2h5.5"/>`,
);

/** Gauge arc with a needle. */
export const speedIcon = line(
  `<path d="M4.6 18.5a9 9 0 1 1 14.8 0"/><path d="M12 14.5L15.8 8"/><circle cx="12" cy="14.5" r="1.4"/>`,
);

/** Three sliders with round knobs. */
export const switchesIcon = line(
  `<path d="M4 7.5h9.5M17.5 7.5H20M4 16.5h3.5M11.5 16.5H20"/><circle cx="15.5" cy="7.5" r="2.1"/><circle cx="9.5" cy="16.5" r="2.1"/>`,
);

/** Aurora ring spinner: an arc with a violet-to-cyan gradient stroke, spun by
 * the component's `--media-spinner-animation` variable (which the base styles
 * switch off under reduced motion and when the indicator hides). */
export const spinnerIcon = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" aria-hidden="true" viewBox="0 0 24 24"><style>@keyframes aurora-glass-spin{to{transform:rotate(360deg)}}</style><defs><linearGradient id="aurora-glass-spin-grad" x1="0" y1="0" x2="24" y2="24" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#7C5CFF"/><stop offset=".55" stop-color="#33CCFF"/><stop offset="1" stop-color="#3DFFA8"/></linearGradient></defs><path stroke="url(#aurora-glass-spin-grad)" stroke-width="2.6" stroke-linecap="round" d="M12 3.2a8.8 8.8 0 1 1-8.8 8.8" style="transform-box:view-box;transform-origin:center;animation:var(--media-spinner-animation, aurora-glass-spin 0.9s linear infinite)"/></svg>`;

export const auroraIcons: Record<string, string> = {
  'airplay-enter': airplayEnterIcon,
  'airplay-exit': airplayExitIcon,
  'captions-off': captionsOffIcon,
  'captions-on': captionsOnIcon,
  'cast-enter': castEnterIcon,
  'cast-exit': castExitIcon,
  check: checkIcon,
  chevron: chevronIcon,
  'fullscreen-enter': fullscreenEnterIcon,
  'fullscreen-exit': fullscreenExitIcon,
  gear: gearIcon,
  pause: pauseIcon,
  'pip-enter': pipEnterIcon,
  'pip-exit': pipExitIcon,
  play: playIcon,
  restart: restartIcon,
  seek: seekIcon,
  speech: speechIcon,
  speed: speedIcon,
  spinner: spinnerIcon,
  switches: switchesIcon,
  'volume-high': volumeHighIcon,
  'volume-low': volumeLowIcon,
  'volume-off': volumeOffIcon,
};
