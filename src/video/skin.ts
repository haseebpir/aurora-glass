import '../styles/video/scaffold.css';
import './skin.css';
import '@videojs/html/i18n';
import '@videojs/html/ui/container';
import '@videojs/html/ui/poster';
import '@videojs/html/ui/error-dialog';
import '@videojs/html/ui/dialog-backdrop';
import '@videojs/html/ui/dialog-popup';
import '@videojs/html/ui/dialog-title';
import '@videojs/html/ui/dialog-description';
import '@videojs/html/ui/dialog-close';
import '@videojs/html/ui/controls';
import '@videojs/html/ui/controls-backdrop';
import '@videojs/html/ui/controls-group';
import '@videojs/html/ui/buffering-indicator';
import '@videojs/html/ui/controls-content';
import '@videojs/html/ui/tooltip-group';
import '@videojs/html/ui/title';
import '@videojs/html/ui/airplay-button';
import '@videojs/html/ui/tooltip';
import '@videojs/html/ui/tooltip-label';
import '@videojs/html/ui/tooltip-shortcut';
import '@videojs/html/ui/cast-button';
import '@videojs/html/ui/pip-button';
import '@videojs/html/ui/fullscreen-button';
import '@videojs/html/ui/seek-button';
import '@videojs/html/ui/play-button';
import '@videojs/html/ui/time-slider';
import '@videojs/html/ui/time-slider-chapters';
import '@videojs/html/ui/slider-track';
import '@videojs/html/ui/slider-buffer';
import '@videojs/html/ui/slider-fill';
import '@videojs/html/ui/slider-thumb';
import '@videojs/html/ui/slider-preview';
import '@videojs/html/ui/slider-thumbnail';
import '@videojs/html/ui/slider-value';
import '@videojs/html/ui/time-slider-chapter-title';
import '@videojs/html/ui/mute-button';
import '@videojs/html/ui/volume-popover';
import '@videojs/html/ui/volume-slider';
import '@videojs/html/ui/time-group';
import '@videojs/html/ui/time';
import '@videojs/html/ui/time-separator';
import '@videojs/html/ui/captions-button';
import '@videojs/html/ui/menu';
import '@videojs/html/ui/menu-content';
import '@videojs/html/ui/menu-item';
import '@videojs/html/ui/menu-separator';
import '@videojs/html/ui/quality-radio-group';
import '@videojs/html/ui/menu-radio-item';
import '@videojs/html/ui/menu-item-indicator';
import '@videojs/html/ui/audio-track-radio-group';
import '@videojs/html/ui/playback-rate-radio-group';
import '@videojs/html/ui/captions-radio-group';
import '@videojs/html/ui/hotkey';
import '@videojs/html/ui/gesture';
import '@videojs/html/ui/status-announcer';
import '@videojs/html/ui/volume-indicator';
import '@videojs/html/ui/volume-indicator-fill';
import '@videojs/html/ui/volume-indicator-value';
import '@videojs/html/ui/status-indicator';
import '@videojs/html/ui/status-indicator-value';
import '@videojs/html/ui/seek-indicator';
import '@videojs/html/ui/seek-indicator-value';
import { registerIcons } from '@videojs/html/icons';
import { auroraIcons } from './icons';
import {
  airPlayEnterIcon as airPlayEnterIconScaffold,
  airPlayExitIcon as airPlayExitIconScaffold,
  captionsOffIcon as captionsOffIconScaffold,
  captionsOnIcon as captionsOnIconScaffold,
  castEnterIcon as castEnterIconScaffold,
  castExitIcon as castExitIconScaffold,
  checkIcon as checkIconScaffold,
  chevronIcon as chevronIconScaffold,
  fullscreenEnterIcon as fullscreenEnterIconScaffold,
  fullscreenExitIcon as fullscreenExitIconScaffold,
  gearIcon as gearIconScaffold,
  pauseIcon as pauseIconScaffold,
  pipEnterIcon as pipEnterIconScaffold,
  pipExitIcon as pipExitIconScaffold,
  playIcon as playIconScaffold,
  restartIcon as restartIconScaffold,
  seekIcon as seekIconScaffold,
  speechIcon as speechIconScaffold,
  speedIcon as speedIconScaffold,
  spinnerIcon as spinnerIconScaffold,
  switchesIcon as switchesIconScaffold,
  volumeHighIcon as volumeHighIconScaffold,
  volumeLowIcon as volumeLowIconScaffold,
  volumeOffIcon as volumeOffIconScaffold,
} from '@videojs/html/icons/scaffold';

registerIcons('scaffold', {
  'airplay-enter': airPlayEnterIconScaffold,
  'airplay-exit': airPlayExitIconScaffold,
  'captions-off': captionsOffIconScaffold,
  'captions-on': captionsOnIconScaffold,
  'cast-enter': castEnterIconScaffold,
  'cast-exit': castExitIconScaffold,
  check: checkIconScaffold,
  chevron: chevronIconScaffold,
  'fullscreen-enter': fullscreenEnterIconScaffold,
  'fullscreen-exit': fullscreenExitIconScaffold,
  gear: gearIconScaffold,
  pause: pauseIconScaffold,
  'pip-enter': pipEnterIconScaffold,
  'pip-exit': pipExitIconScaffold,
  play: playIconScaffold,
  restart: restartIconScaffold,
  seek: seekIconScaffold,
  speech: speechIconScaffold,
  speed: speedIconScaffold,
  spinner: spinnerIconScaffold,
  switches: switchesIconScaffold,
  'volume-high': volumeHighIconScaffold,
  'volume-low': volumeLowIconScaffold,
  'volume-off': volumeOffIconScaffold,
});

/* Aurora Glass: replace every Scaffold glyph with the rounded line versions. */
registerIcons('scaffold', auroraIcons);

/* Aurora Glass color-scheme sync.
 *
 * The light palette lives in CSS under `@media (prefers-color-scheme: light)`
 * and under a `data-ag-scheme` attribute. Host pages and the preview
 * workbench switch schemes through the `color-scheme` property, which CSS
 * alone cannot branch on (and this project's build lowers `light-dark()`
 * tokens to a media-query toggle that cannot see it), so keep the attribute
 * in sync with the used scheme: an explicit `light` or `dark` in the computed
 * `color-scheme` wins; `light dark` / `normal` defer to the OS preference. */
function auroraUsedScheme(el: Element): 'light' | 'dark' {
  const parts = (getComputedStyle(el).colorScheme ?? '').split(/\s+/).filter(Boolean);
  if (parts.length === 1 && parts.includes('light')) return 'light';
  if (parts.length === 1 && parts.includes('dark')) return 'dark';
  if (parts.includes('only')) return parts.includes('light') ? 'light' : 'dark';
  return matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark';
}

function syncAuroraScheme(): void {
  for (const el of document.querySelectorAll('.media-skin')) {
    const scheme = auroraUsedScheme(el);
    if (el.getAttribute('data-ag-scheme') !== scheme) el.setAttribute('data-ag-scheme', scheme);
  }
}

const auroraSchemeObserver = new MutationObserver(syncAuroraScheme);
auroraSchemeObserver.observe(document.documentElement, {
  attributes: true,
  attributeFilter: ['style', 'class'],
});
auroraSchemeObserver.observe(document, { childList: true, subtree: true });
matchMedia('(prefers-color-scheme: light)').addEventListener('change', syncAuroraScheme);
syncAuroraScheme();
