function initVideo() {
  const video = document.querySelector('.gym__video');
  if (!video) {
    return;
  }
  const videoSrc = video.dataset.src;

  video.addEventListener('click', () => {
    if (video.classList.contains('ready')) {
      return;
    }
    video.classList.add('ready');
    video.insertAdjacentHTML('afterbegin', '<iframe src="' + videoSrc + '" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>');
  });
}

export default initVideo;
