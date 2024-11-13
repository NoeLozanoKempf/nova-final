var player = videojs('my-video', {
  autoplay: true,
  muted: true, // Silenciar para permitir autoplay
  preload: 'auto',
  loop: true,
});

var player = videojs('my-video');
player.autoplay(true); // Habilitar autoplay dinámicamente
