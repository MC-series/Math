// minimal selector behaviour
const SeriesSelector = {
  init(onSelect) {
    const container = document.getElementById('series-container');
    if (!container || !window.animes || !window.animes.length) return;

    // clear any previous content and build items off-DOM
    container.innerHTML = '';
    const fragment = document.createDocumentFragment();

    window.animes.forEach((anime, i) => {
      const btn = document.createElement('button');
      btn.className = 'series-btn';
      btn.dataset.idx = i;

      const img = document.createElement('img');
      img.src = anime.posters?.[0]?.src || '';
      img.alt = anime.name;
      btn.appendChild(img);

      const label = document.createElement('span');
      label.className = 'series-label';
      label.textContent = anime.name;
      btn.appendChild(label);

      fragment.appendChild(btn);
    });

    container.appendChild(fragment);

    // use delegation so we only attach a single listener
    container.addEventListener('click', e => {
      const btn = e.target.closest('.series-btn');
      if (btn) onSelect(parseInt(btn.dataset.idx, 10));
    });

    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') onSelect(null);
    });
  },

  hide() { document.getElementById('series-container')?.classList.add('hidden'); },
  show() { document.getElementById('series-container')?.classList.remove('hidden'); }
};
