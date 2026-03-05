const themes = [
  // 1 Default
{
    accent:'#990000',accentRgb:'153,0,0',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(153,0,0,.3)',borderGlow:'rgba(153,0,0,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(153,0,0,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(153,0,0,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(153,0,0,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 2
  {
    accent:'#8b3637',accentRgb:'139,54,55',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(117,33,38,.3)',borderGlow:'rgba(139,54,55,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(139,54,55,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(139,54,55,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(139,54,55,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 3
  {
    accent:'#145970',accentRgb:'20,89,112',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(10,71,94,.3)',borderGlow:'rgba(20,89,112,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(20,89,112,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(20,89,112,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(20,89,112,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 4
  {
    accent:'#3e46ae',accentRgb:'62,70,174',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(49,50,154,.3)',borderGlow:'rgba(62,70,174,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(62,70,174,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(62,70,174,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(62,70,174,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 5
  {
    accent:'#655100',accentRgb:'101,81,0',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(83,64,0,.3)',borderGlow:'rgba(101,81,0,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(101,81,0,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(101,81,0,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(101,81,0,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 6
  {
    accent:'#5d5056',accentRgb:'93,80,86',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(76,64,70,.3)',borderGlow:'rgba(93,80,86,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(93,80,86,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(93,80,86,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(93,80,86,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 7
  {
    accent:'#9e0028',accentRgb:'158,0,40',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(128,0,27,.3)',borderGlow:'rgba(158,0,40,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(158,0,0,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(158,0,40,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(158,0,40,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 8
  {
    accent:'#4b5835',accentRgb:'75,88,53',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(59,72,37,.3)',borderGlow:'rgba(75,88,53,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(75,88,53,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(75,88,53,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(75,88,53,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 9
  {
    accent:'#005d51',accentRgb:'0,93,81',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(0,75,64,.3)',borderGlow:'rgba(0,93,81,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(0,93,81,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(0,93,81,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(0,93,81,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 10
  {
    accent:'#853d00',accentRgb:'133,61,0',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(111,44,0,.3)',borderGlow:'rgba(133,61,0,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(133,61,0,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(133,61,0,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(133,61,0,.2)',dockShadow:'rgba(0,0,0,1)'
  },
  // 11
  {
    accent:'#ffffffcc',accentRgb:'26,26,26',
    bgMain:'#000000',panelGlass:'rgba(0,0,0,.98)',
    borderSubtle:'rgba(255,255,255,.05)',borderGlow:'rgba(255,255,255,.1)',
    textPure:'#686868',textVoid:'#000',textMuted:'#ffffff',
    textDim:'#4d4d4d',textDark:'#bdbdbd',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(255,255,255,.05)',hudOverlay:'rgba(0,0,0,.95)',
    frameInner:'rgba(255,255,255,.02)',
    dockSurface:'rgba(0,0,0,1)',dockBtnInner:'rgba(255,255,255,.01)',
    dockBtnBorder:'rgba(255,255,255,.05)',dockShadow:'rgba(0,0,0,1)'
  },
  // 12
  {
    accent:'#873556',accentRgb:'135,53,86',
    bgMain:'#030000',panelGlass:'rgba(8,0,0,.98)',
    borderSubtle:'rgba(114,32,69,.3)',borderGlow:'rgba(135,53,86,.5)',
    textPure:'#fff',textVoid:'#000',textMuted:'#8a8a8a',
    textDim:'#4d4d4d',textDark:'#2a2a2a',
    navBtnBg:'rgba(0,0,0,.9)',dataPtBg:'#000',
    barTrack:'rgba(135,53,86,.1)',hudOverlay:'rgba(5,0,0,.85)',
    frameInner:'rgba(255,255,255,.03)',
    dockSurface:'rgba(135,53,86,.08)',dockBtnInner:'rgba(255,255,255,.02)',
    dockBtnBorder:'rgba(135,53,86,.2)',dockShadow:'rgba(0,0,0,1)'
  }
];

const DEFAULT_THEME_INDEX = 1;

const statLabels = {
  ep: 'Archived EP',
  sea: 'Seasons',
  rate: 'Agency Rating',
  rank: 'Global Rank',
  mood: 'Mood',
  studio: 'Studio'
};

const App = {
  init() {
    const appRoot = document.getElementById('sd-app-root');
    if (appRoot) appRoot.classList.add('hidden');

    // make sure root variables match the default theme right away
    this.applyTheme((DEFAULT_THEME_INDEX + 1).toString());

    // try URL index
    const params = new URLSearchParams(window.location.search);
    let idx = parseInt(params.get('idx'), 10);
    if (!isNaN(idx) && idx >= 0 && window.animes && window.animes[idx]) {
      this.currentIndex = idx;
      this.showSeries(idx);
    }

    // initialise selector toolkit if available (allows reuse without series selector)
    if (typeof SeriesSelector !== 'undefined' && typeof SeriesSelector.init === 'function') {
      SeriesSelector.init(i => {
        if (i === null) { this.hideApp(); return; }
        this.currentIndex = i;
        this.showSeries(i);
      });
    }
  },

  // render the page contents from the data object
  loadSeries(idx) {
    const anime = window.animes && window.animes[idx];
    if (!anime) return;
    this.current = anime;
    const root = document.getElementById('sd-app-root');
    if (root) root.innerHTML = this.buildHTML(anime);

    // after injecting, re-cache selectors, animations and event handlers
    this.cache();
    this.intro();
    this.bind();
    this.setupMediaControl();
  },

  // show app and hide selector
  showSeries(idx) {
    const appRoot = document.getElementById('sd-app-root');
    const selector = document.getElementById('series-container');
    const menu = document.getElementById('sd-menu');
    if (selector) selector.classList.add('hidden');
    if (menu) menu.style.display = 'none';
    if (window.animes && window.animes[idx]) {
      this.applyTheme(window.animes[idx].color);
    }
    if (appRoot) {
      gsap.killTweensOf(appRoot);
      appRoot.classList.remove('hidden');
      // slide up a little while fading in, faster and smoother
      gsap.fromTo(appRoot,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.4, ease: 'expo.out' }
      );
    }
    this.loadSeries(idx);
  },

  applyTheme(colorKey) {
    // colorKey is a string like '1','2', etc.
    let index = parseInt(colorKey,10) - 1;
    if (isNaN(index) || index < 0 || index >= themes.length) {
      index = DEFAULT_THEME_INDEX;
    }
    const theme = themes[index];
    const root = document.documentElement;
    // set all theme-related variables
    Object.entries(theme).forEach(([k,v]) => {
      const varName = '--' + k.replace(/([A-Z])/g, '-$1').toLowerCase();
      root.style.setProperty(varName, v);
    });
  },

  hideApp() {
    const appRoot = document.getElementById('sd-app-root');
    const selector = document.getElementById('series-container');
    const menu = document.getElementById('sd-menu');
    const finish = () => {
      if (selector) selector.classList.remove('hidden');
      if (menu) menu.style.display = 'none';
      // revert to default palette when no series is visible
      this.applyTheme((DEFAULT_THEME_INDEX + 1).toString());
    };
    if (appRoot) {
      gsap.killTweensOf(appRoot);
      gsap.to(appRoot, {
        opacity: 0,
        y: 20,
        duration: 0.4,
        ease: 'expo.in',
        onComplete: () => {
          appRoot.classList.add('hidden');
          finish();
        }
      });
    } else {
      finish();
    }
  },

  buildHTML(a) {
    // helper to convert stat key to label text
    const statLabel = key => statLabels[key] || key;

    // hidden menu overlay listing all series (music button toggles)
    const menu = `
      <div class="sd-menu" id="sd-menu" style="display:none;">
        <ul>
          ${window.animes.map((s,i)=>`<li data-idx="${i}">${s.name}</li>`).join('')}
        </ul>
      </div>
    `;

    return `
    ${menu}
    <div class="sd-bg" style="background:url('${a.posters[0].src}')center/cover;filter:brightness(.1)blur(3px);"></div>
    <div class="sd-ui">
      <aside class="sd-card sd-rev">
        <div class="sd-car">
          <div class="sd-trk" id="sd-track">
            ${a.posters.map(p=>`<img src="${p.src}" alt="${p.alt}">`).join('')}
          </div>
          <button class="sd-nb sd-prev" id="sd-prev"><span>❮</span></button>
          <button class="sd-nb sd-nxt" id="sd-nxt"><span>❯</span></button>
        </div>
        <div class="sd-meta">
          <h1 class="sd-title">${a.name}</h1>
          <p class="sd-fileno">${a.subName}</p>
          <p class="sd-tag">${a.genreTag}</p>
          <div class="sd-btns">
            <a href="${a.watch}" target="_blank" class="sd-act sd-primary">${a.btnName}</a>
          </div>
        </div>
      </aside>

      <main class="sd-intel">
        <div class="sd-dgrid">
          ${Object.entries(a.stats).map(([k,v])=>`<div class="sd-dpt sd-rev"><h6>${statLabel(k)}</h6><p>${v}</p></div>`).join('')}
        </div>

        ${a.seasons.map(se=>`
          <div class="sd-arc sd-rev">
            <div class="sd-badg${se.status.toLowerCase()==='dropped'? ' sd-dropped':''}">${se.status}</div>
            <div class="sd-arct"><h2>${se.title}</h2></div>
            <span class="sd-date">${se.date}</span>
            <p class="sd-st">${se.story}</p>
          </div>
        `).join('')}

        <div class="sd-stats sd-rev">
          <h4 class="sd-hudlabel metrics-header">PERFORMANCE METRICS</h4>
          ${a.metrics.map(m=>`
            <div class="sd-bw">
              <div class="sd-brl"><span>${m.name}</span><span>${m.value}</span></div>
              <div class="sd-bgbar"><div class="sd-bf" data-percent="${m.value}"></div></div>
            </div>
          `).join('')}
        </div>
      </main>

      <aside class="sd-media">
        ${a.trailers.map(t=>`
          <div class="sd-hud sd-rev">
            <span class="sd-hudlabel">${t.title}</span>
            <div class="sd-vid"><iframe src="${t.link}" allowfullscreen></iframe></div>
          </div>
        `).join('')}
        <div class="sd-hud sd-rev">
          <span class="sd-hudlabel">Spotify SoundTrack</span>
          <div class="sd-spt">
            <iframe style="border-radius:12px"
              src="${a.spotify}"
              width="100%"
              height="352"
              frameBorder="0"
              allowfullscreen
              allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
              loading="lazy">
            </iframe>
          </div>
        </div>
        <div class="sd-hud sd-rev">
          <span class="sd-hudlabel">${a.laugh.title}</span>
          <div class="sd-vid"><iframe src="${a.laugh.link}" allowfullscreen></iframe></div>
        </div>
        <div class="sd-hud sd-rev">
          <span class="sd-hudlabel">Main Characters</span>
          <div class="sd-pgrid">
            <div class="sd-rail"></div>
            ${a.characters.map(c=>
              `<div class="sd-pnode">
                <div class="sd-pimg"><img src="${c.img}" alt="${c.name[0]}"></div>
                <div class="sd-pinfo"><h5>${c.name}</h5><p>${c.role}</p></div>
              </div>`
            ).join('')}
          </div>
        </div>
      </aside>
    </div>

    <nav class="sd-dock">
      <div class="sd-lbar">
        <button class="sd-dbtn" id="sd-dclose"><span>✕</span></button>
        <button class="sd-dbtn" id="sd-dreturn"><span>↺</span></button>
        <button class="sd-dbtn" id="sd-dmusic"><span>♫</span></button>
      </div>
    </nav>

    <div class="sd-modal" id="sd-modal">
      <div class="sd-mbox">
        <div class="sd-warn">⚠</div>
        <div class="sd-mhead"><span class="sd-fileno">EXTERNAL Link!</span></div>
          <div class="sd-mcontent">
            <h3>REDIRECTION</h3>
            <p>Leaving site to watch <strong>${a.name}</strong>. Continue to host site?</p>
          </div>
        <div class="sd-mfoot">
          <button class="sd-mbtn sd-cancel" id="sd-mcancel">Abort</button>
          <button class="sd-mbtn sd-confirm" id="sd-mconfirm">Proceed</button>
        </div>
      </div>
    </div>`;
  },

  cache() {
    const d = document;
    this.u = {
      rev: d.querySelectorAll('.sd-rev'),
      bars: d.querySelectorAll('.sd-bf'),
      track: d.getElementById('sd-track'),
      imgs: d.querySelectorAll('#sd-track img'),
      scrolls: d.querySelectorAll('.sd-intel,.sd-media'),
      modal: d.getElementById('sd-modal'),
      box: d.querySelector('.sd-mbox'),
      warn: d.querySelector('.sd-warn'),
      iframes: d.querySelectorAll('iframe')
    };
    this.c = {
      nxt: d.getElementById('sd-nxt'),
      prev: d.getElementById('sd-prev'),
      launch: d.querySelector('.sd-primary'),
      confirm: d.getElementById('sd-mconfirm'),
      cancel: d.getElementById('sd-mcancel'),
      // Dock buttons cached but logic removed in bind()
      dockBtns: d.querySelectorAll('.sd-dbtn')
    };
    this.s = { i: 0 };
  },

  // Ensures only one embedded player is active by resetting others when one is clicked
  setupMediaControl() {
    this.u.iframes.forEach(iframe => {
      iframe.addEventListener('click', () => {
        this.u.iframes.forEach(other => {
          if (other !== iframe && other.src) {
            // reassigning src forces most players to stop
            other.src = other.src;
          }
        });
      });
    });
  },

  intro() {
    const tl = gsap.timeline({ defaults: { ease: 'expo.out', duration: 0.8 } });
    tl.to(this.u.rev, {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: 'blur(0px)',
      stagger: { amount: 0.5, grid: 'auto', from: 'start' },
      onComplete: () => this.stat()
    }).from('.sd-lbar', { y: 100, opacity: 0, duration: 0.5 }, '-=0.4');
  },

  stat() {
    gsap.to(this.u.bars, {
      width: (i, el) => el.getAttribute('data-percent'),
      duration: 1.5,
      ease: 'power4.inOut',
      stagger: 0.1
    });
  },

  bind() {
    // Slider Logic (Kept)
    this.c.nxt?.addEventListener('click', () => this.slide(1));
    this.c.prev?.addEventListener('click', () => this.slide(-1));

    // Modal Logic (Kept)
    this.c.launch?.addEventListener('click', e => {
      e.preventDefault();
      this.modal(true);
    });
    this.c.cancel?.addEventListener('click', () => this.modal(false));
    this.c.confirm?.addEventListener('click', () => {
      window.open(this.c.launch.getAttribute('href'), '_blank');
      this.modal(false);
    });

    // dock/menu/selector delegation all via body click to reduce listeners
    document.body.addEventListener('click', e => {
      const id = e.target.closest('.sd-dbtn')?.id;
      if (id) {
        const len = window.animes.length;
        const changeSeries = newIdx => {
          this.currentIndex = newIdx;
          if (window.animes && window.animes[newIdx]) {
            this.applyTheme(window.animes[newIdx].color);
          }
          this.loadSeries(newIdx);
        };

        switch (id) {
          case 'sd-dreturn':
            changeSeries((this.currentIndex - 1 + len) % len);
            break;
          case 'sd-dclose':
            if (!document.getElementById('sd-app-root').classList.contains('hidden')) {
              this.hideApp();
            } else {
              changeSeries((this.currentIndex + 1) % len);
            }
            break;
          case 'sd-dmusic':
            const menu = document.getElementById('sd-menu');
            if (menu) menu.style.display = menu.style.display === 'none' ? 'flex' : 'none';
            break;
        }
      }

      const li = e.target.closest('#sd-menu li');
      if (li) {
        const idx = parseInt(li.dataset.idx, 10);
        if (!isNaN(idx)) {
          this.currentIndex = idx;
          this.loadSeries(idx);
        }
      }

      const selBtn = e.target.closest('#sd-selector .sel-btn');
      if (selBtn) {
        const idx = parseInt(selBtn.dataset.idx, 10);
        if (!isNaN(idx)) {
          this.currentIndex = idx;
          this.loadSeries(idx);
        }
      }
    });
  },

  modal(show) {
    const m = this.u.modal, b = this.u.box, w = this.u.warn;
    if (show) {
      // ensure modal text reflects current series (in case loadSeries was called earlier)
      const strong = m.querySelector('strong');
      if (strong && this.current) strong.textContent = this.current.name;

      m.style.display = 'flex';
      const t = gsap.timeline();
      t.fromTo(m, { opacity: 0, backdropFilter: 'blur(0px)' }, { opacity: 1, backdropFilter: 'blur(25px)', duration: 0.8 })
       .fromTo(b, { opacity: 0, scale: 1.1, y: 20 }, { opacity: 1, scale: 1, y: 0, duration: 0.8, ease: 'power3.out' }, '-=0.5');
      gsap.to(w, { opacity: 0.4, scale: 1.05, repeat: -1, yoyo: true, duration: 2.5, ease: 'sine.inOut' });
    } else {
      gsap.killTweensOf(w);
      gsap.to(m, { opacity: 0, duration: 0.4, onComplete: () => { m.style.display = 'none'; } });
    }
  },

  slide(d) {
    const len = this.u.imgs.length;
    this.s.i = (this.s.i + d + len) % len;
    this.update();
  },

  update() {
    const t = this.u.imgs[this.s.i];
    if (t) this.u.track.scrollTo({ left: t.offsetLeft, behavior: 'smooth' });
  }
};

App.init();