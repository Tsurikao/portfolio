/* Olha Tsurika portfolio — main.js
   1. OLHA_ASSETS — image map (source name -> file in assets/). Add new images here.
   2. App — all texts (EN / DK / UA), case studies, live projects, services, animations,
      cursor, menu, tabs, hover reveal.
   3. Renderer — turns the markup inside <x-dc> in index.html into the live page.
      It loads React 18 from unpkg.com (internet connection required, like Google Fonts). */

window.OLHA_ASSETS = {
  "mintra-cover2.png": "assets/img/projects/mintra.webp",
  "mintra-lr-01.png": "assets/img/projects/mintra-01.webp",
  "mintra-lr-02.png": "assets/img/projects/mintra-02.webp",
  "mintra-lr-03.png": "assets/img/projects/mintra-03.webp",
  "mintra-lr-04.png": "assets/img/projects/mintra-04.webp",
  "mintra-lr-05.png": "assets/img/projects/mintra-05.webp",
  "mintra-lr-06.png": "assets/img/projects/mintra-06.webp",
  "mintra-lr-07.png": "assets/img/projects/mintra-07.webp",
  "mintra-lr-08.png": "assets/img/projects/mintra-08.webp",
  "mintra-lr-09.png": "assets/img/projects/mintra-09.webp",
  "mintra-lr-10.png": "assets/img/projects/mintra-10.webp",
  "mintra-lr-11.png": "assets/img/projects/mintra-11.webp",
  "mintra-lr-12.png": "assets/img/projects/mintra-12.webp",
  "uploads/poshuk-cover-3x.png": "assets/img/projects/poshuk.webp",
  "uploads/01-hero@3x.png": "assets/img/projects/poshuk-01.webp",
  "uploads/03-overview@3x.png": "assets/img/projects/poshuk-02.webp",
  "uploads/04-challenge@3x.png": "assets/img/projects/poshuk-03.webp",
  "uploads/05-splash@3x.png": "assets/img/projects/poshuk-04.webp",
  "uploads/06-what-i-designed@3x.png": "assets/img/projects/poshuk-05.webp",
  "uploads/07-user-flow@3x.png": "assets/img/projects/poshuk-06.webp",
  "uploads/08-onboarding@3x.png": "assets/img/projects/poshuk-07.webp",
  "uploads/09-home@3x.png": "assets/img/projects/poshuk-08.webp",
  "uploads/10-design-thinking@3x.png": "assets/img/projects/poshuk-09.webp",
  "uploads/11-search-card@3x.png": "assets/img/projects/poshuk-10.webp",
  "uploads/12-impact@3x.png": "assets/img/projects/poshuk-11.webp",
  "uploads/13-physical-display@3x.png": "assets/img/projects/poshuk-12.webp",
  "uploads/14-role@3x.png": "assets/img/projects/poshuk-13.webp",
  "uploads/15-lists@3x.png": "assets/img/projects/poshuk-14.webp",
  "uploads/16-workflow@3x.png": "assets/img/projects/poshuk-15.webp",
  "uploads/17-support@3x.png": "assets/img/projects/poshuk-16.webp",
  "uploads/18-premium@3x.png": "assets/img/projects/poshuk-17.webp",
  "uploads/19-style@3x.png": "assets/img/projects/poshuk-18.webp",
  "uploads/20-thanks@3x.png": "assets/img/projects/poshuk-19.webp",
  "gym-cover2.png": "assets/img/projects/gym-app.webp",
  "gym-lr-01.png": "assets/img/projects/gym-app-01.webp",
  "gym-lr-02.png": "assets/img/projects/gym-app-02.webp",
  "gym-lr-03.png": "assets/img/projects/gym-app-03.webp",
  "gym-lr-04.png": "assets/img/projects/gym-app-04.webp",
  "gym-lr-05.png": "assets/img/projects/gym-app-05.webp",
  "gym-lr-06.png": "assets/img/projects/gym-app-06.webp",
  "gym-lr-07.png": "assets/img/projects/gym-app-07.webp",
  "gym-lr-08.png": "assets/img/projects/gym-app-08.webp",
  "gym-lr-09.png": "assets/img/projects/gym-app-09.webp",
  "gym-lr-10.png": "assets/img/projects/gym-app-10.webp",
  "gym-lr-11.png": "assets/img/projects/gym-app-11.webp",
  "gym-lr-12.png": "assets/img/projects/gym-app-12.webp",
  "gym-lr-13.png": "assets/img/projects/gym-app-13.webp",
  "gym-lr-14.png": "assets/img/projects/gym-app-14.webp",
  "gym-lr-15.png": "assets/img/projects/gym-app-15.webp",
  "gym-lr-16.png": "assets/img/projects/gym-app-16.webp",
  "ifranko-cover2.png": "assets/img/projects/ifranko.webp",
  "ifranko-case2.png": "assets/img/projects/ifranko-01.webp",
  "swissmed-cover.png": "assets/img/projects/swiss-insurance.webp",
  "swissmed-long1.png": "assets/img/projects/swiss-insurance-01.webp",
  "swissmed-long2.png": "assets/img/projects/swiss-insurance-02.webp",
  "uploads/00-cover-f21855b5.png": "assets/img/projects/self-x.webp",
  "uploads/01-cover-39e30cb3.png": "assets/img/projects/self-x-01.webp",
  "uploads/02-overview-cebcc4ae.png": "assets/img/projects/self-x-02.webp",
  "uploads/03-challenge.png": "assets/img/projects/self-x-03.webp",
  "uploads/04-onboarding.png": "assets/img/projects/self-x-04.webp",
  "uploads/05-designed.png": "assets/img/projects/self-x-05.webp",
  "uploads/06-live-game.png": "assets/img/projects/self-x-06.webp",
  "uploads/07-screens.png": "assets/img/projects/self-x-07.webp",
  "uploads/08-thinking.png": "assets/img/projects/self-x-08.webp",
  "uploads/09-full-system.png": "assets/img/projects/self-x-09.webp",
  "uploads/10-impact.png": "assets/img/projects/self-x-10.webp",
  "uploads/11-closing.png": "assets/img/projects/self-x-11.webp",
  "repat-cover4.png": "assets/img/projects/repat-africa.webp",
  "repat-longread.png": "assets/img/projects/repat-africa-01.webp",
  "sefer-cover4.png": "assets/img/projects/sefer.webp",
  "sefer-long1.png": "assets/img/projects/sefer-01.webp",
  "sefer-long2.png": "assets/img/projects/sefer-02.webp",
  "nxtshop-cover.png": "assets/img/projects/nxtshop.webp",
  "nxtshop-longread.png": "assets/img/projects/nxtshop-01.webp",
  "petfeeder-cover.png": "assets/img/projects/pet-feeder.webp",
  "petfeeder-1.png": "assets/img/projects/pet-feeder-01.webp",
  "itfit-cover2.jpg": "assets/img/projects/itfit.webp",
  "itfit-1.jpg": "assets/img/projects/itfit-01.webp",
  "uploads/00-cover@3x-90cd3ccb.png": "assets/img/projects/sousa-tavares.webp",
  "uploads/01 Hero.png": "assets/img/projects/sousa-tavares-01.webp",
  "uploads/02 Meta.png": "assets/img/projects/sousa-tavares-02.webp",
  "uploads/03 Overview.png": "assets/img/projects/sousa-tavares-03.webp",
  "uploads/04 Starting point.png": "assets/img/projects/sousa-tavares-04.webp",
  "uploads/05 Structure.png": "assets/img/projects/sousa-tavares-05.webp",
  "uploads/06a Everything in wood.png": "assets/img/projects/sousa-tavares-06.webp",
  "uploads/06b Everything in wood.png": "assets/img/projects/sousa-tavares-07.webp",
  "uploads/06c Everything in wood.png": "assets/img/projects/sousa-tavares-08.webp",
  "uploads/07 Panel details.png": "assets/img/projects/sousa-tavares-09.webp",
  "uploads/08 Selection of work.png": "assets/img/projects/sousa-tavares-10.webp",
  "uploads/09 Photography.png": "assets/img/projects/sousa-tavares-11.webp",
  "uploads/10 How we work.png": "assets/img/projects/sousa-tavares-12.webp",
  "uploads/11 Builders eye.png": "assets/img/projects/sousa-tavares-13.webp",
  "uploads/12 Reviews and updates.png": "assets/img/projects/sousa-tavares-14.webp",
  "uploads/13 Get a quote.png": "assets/img/projects/sousa-tavares-15.webp",
  "uploads/14 Menu and footer.png": "assets/img/projects/sousa-tavares-16.webp",
  "uploads/15 Motion.png": "assets/img/projects/sousa-tavares-17.webp",
  "uploads/16 Visual language.png": "assets/img/projects/sousa-tavares-18.webp",
  "uploads/17 Thanks.png": "assets/img/projects/sousa-tavares-19.webp",
  "dplab-cover5.png": "assets/img/projects/dplab.webp",
  "dplab-longread.png": "assets/img/projects/dplab-01.webp",
  "dc-cover5.png": "assets/img/projects/defend-and-carry.webp",
  "dc-longread.png": "assets/img/projects/defend-and-carry-01.webp",
  "agm-cover4.png": "assets/img/projects/agm-global-vision.webp",
  "agm-longread.png": "assets/img/projects/agm-global-vision-01.webp",
  "unifood-cover3.png": "assets/img/projects/unifood.webp",
  "unifood-longread-v3.png": "assets/img/projects/unifood-01.webp",
  "kortical-cover.png": "assets/img/projects/kortical.webp",
  "kortical-1.png": "assets/img/projects/kortical-01.webp",
  "laurie-cover.png": "assets/img/projects/laurie-handlers.webp",
  "laurie-longread.png": "assets/img/projects/laurie-handlers-01.webp",
  "wizards-cover.png": "assets/img/projects/online-course-wizards.webp",
  "wizards-longread.png": "assets/img/projects/online-course-wizards-01.webp",
  "subflow-cover.png": "assets/img/projects/subflow.webp",
  "subflow-longread.png": "assets/img/projects/subflow-01.webp",
  "gj-cover-v2.png": "assets/img/projects/georg-jensen.webp",
  "gj-v2-1.png": "assets/img/projects/georg-jensen-01.webp",
  "gj-v2-2.png": "assets/img/projects/georg-jensen-02.webp",
  "gj-v2-3.png": "assets/img/projects/georg-jensen-03.webp",
  "gj-v2-4.png": "assets/img/projects/georg-jensen-04.webp",
  "gj-v2-5.png": "assets/img/projects/georg-jensen-05.webp",
  "ayvens-cover.png": "assets/img/projects/ayvens.webp",
  "ayv-01.png": "assets/img/projects/ayvens-01.webp",
  "ayv-02.png": "assets/img/projects/ayvens-02.webp",
  "ayv-03.png": "assets/img/projects/ayvens-03.webp",
  "ayv-04.png": "assets/img/projects/ayvens-04.webp",
  "ayv-05.png": "assets/img/projects/ayvens-05.webp",
  "ayv-06.png": "assets/img/projects/ayvens-06.webp",
  "ayv-07.png": "assets/img/projects/ayvens-07.webp",
  "ayv-08.png": "assets/img/projects/ayvens-08.webp",
  "ayv-09.png": "assets/img/projects/ayvens-09.webp",
  "tqi-cover.png": "assets/img/projects/the-quantum-insider.webp",
  "olha-photo.png": "assets/img/me/olha-photo.webp",
  "olha-avatar.png": "assets/img/me/olha-avatar.webp",
  "olha-about.webp": "assets/img/me/olha-about.webp",
  "defendcarry-hero.png": "assets/img/projects/defend-and-carry-hero.webp",
  "repat-hero.png": "assets/img/projects/repat-africa-hero.webp",
  "repat-1.png": "assets/img/projects/repat-africa-app.webp",
  "swiss-app.png": "assets/img/projects/swiss-insurance-app.webp",
  "Olha_Tsurika_CV.pdf": "assets/files/Olha_Tsurika_CV.pdf",
  "uploads/Olha_Tsurika_CV-3-1b7cf026.pdf": "assets/files/Olha_Tsurika_CV.pdf"
};

(function installApp() {
  var PROPS = "";
  function OLHA_APP() {
// ---------------------------------------------------------------- app start
const IMG = (n) => (window.OLHA_ASSETS && window.OLHA_ASSETS[n]) || n;

class Component extends DCLogic {
  state = { view: -1, lang: 'en', orient: {}, menuOpen: false, contactOpen: false, flipped: false, openCats: {}, tab: 'all', langOpen: false,
    theme: (() => { let t = 'light'; try { t = localStorage.getItem('olha-theme-v6') || 'light'; } catch (e) {} try { document.documentElement.setAttribute('data-theme', t); } catch (e) {} return t; })() };
  toggleTheme = () => { const t = this.state.theme === 'dark' ? 'light' : 'dark'; document.documentElement.setAttribute('data-theme', t); try { localStorage.setItem('olha-theme-v6', t); } catch (e) {} this.setState({ theme: t }); };
  // Selected Work categories — order = display order. To add a category, add an entry here and use its id in cases[].category.
  categories = [
    { id: 'ecom', tKey: 'catEcom', open: true },
    { id: 'web', tKey: 'catWeb' },
    { id: 'apps', tKey: 'catApps', layout: 'grid' } // layout 'grid' = equal small cards, 2 per row; default = large / two small rhythm
  ];
  toggleCat = (id) => this.setState((s) => { const cur = id in s.openCats ? s.openCats[id] : !!(this.categories.find((c) => c.id === id) || {}).open; return { openCats: { ...s.openCats, [id]: !cur } }; });
  heroRef = React.createRef();
  aiRef = React.createRef();
  bg1Ref = React.createRef();
  startAi() {
    const host = this.aiRef.current;
    if (!host || this._aiOn) return;
    this._aiOn = true;
    const gen = (this._aiGen = (this._aiGen || 0) + 1);
    const ink = 'var(--ink)', soft = 'rgba(var(--ink-rgb),0.38)', bg = 'var(--bg)', acc = 'var(--accent)';
    const P = (d, o) => { o = o || {}; return '<path class="ln" pathLength="1" d="' + d + '" style="fill:' + (o.f || 'none') + ';stroke:' + (o.c || ink) + ';stroke-width:' + (o.w || 1.3) + ';stroke-linecap:round;stroke-linejoin:round;stroke-dasharray:1"></path>'; };
    const T = (x, y, t, c, at) => '<text x="' + x + '" y="' + y + '"' + (at || '') + ' style="font-family:\'Geist Mono\',monospace;font-size:9px;letter-spacing:.04em;fill:' + (c || soft) + '">' + t + '</text>';
    host.innerHTML = '<svg viewBox="0 0 800 500" style="position:absolute;inset:0;width:100%;height:100%;overflow:visible" aria-hidden="true">'
      + T(90, 34, '[01]', acc, ' data-mnum') + T(118, 34, 'WEBSITE', ink, ' data-mode')
      + P('M90 48V42M560 48V42M90 45H560', { c: soft, w: 1 }) + T(300, 40, '1440 PX')
      + P('M610 156V150M720 156V150M610 153H720', { c: soft, w: 1 }) + T(648, 146, '390 PX')
      + P('M20 400H790') + P('M20 408H790', { c: soft, w: 1 }) + P('M56 408V500M764 408V500')
      + P('M90 66Q90 60 96 60H554Q560 60 560 66V354Q560 360 554 360H96Q90 360 90 354Z', { f: bg }) + P('M104 74H546V336H104Z', { c: soft, w: 1 })
      + '<circle cx="325" cy="348" r="2" style="fill:none;stroke:' + soft + '"></circle>'
      + P('M311 360L306 392M339 360L344 392') + P('M266 397Q266 392 271 392H379Q384 392 384 397Z', { f: bg })
      + P('M236 384H414L420 396H230Z', { f: bg }) + P('M244 389H406M240 393H410', { c: soft, w: 0.8 })
      + P('M610 186Q610 170 626 170H704Q720 170 720 186V380Q720 396 704 396H626Q610 396 610 380Z', { f: bg }) + P('M618 186H712V382H618Z', { c: soft, w: 1 }) + P('M655 178H675', { w: 3 })
      + P('M628 396L620 404H710L702 396')
      + '<g data-scr></g><g data-ph></g>'
      + '<g data-live style="opacity:0"><rect x="476" y="80" width="64" height="18" style="fill:' + ink + '"></rect><circle cx="486" cy="89" r="3" style="fill:' + acc + '"></circle>' + T(494, 92, 'LIVE ✓', bg) + '</g>'
      + '<circle data-tap r="8" cx="665" cy="280" style="fill:none;stroke:' + acc + ';stroke-width:1.2;opacity:0"></circle>'
      + '<g data-cur style="opacity:0"><path d="M0 0L0 13L3.6 9.6L6.2 15L8.4 14L5.8 8.8L10.4 8.6Z" style="fill:' + ink + ';stroke:' + bg + ';stroke-width:1"></path><text data-xy x="14" y="22" style="font-family:\'Geist Mono\',monospace;font-size:8px;letter-spacing:.04em;fill:' + acc + '"></text></g>'
      + '</svg>';
    const svg = host.firstChild, q = (x) => svg.querySelector(x);
    const scr = q('[data-scr]'), ph = q('[data-ph]'), sc = q('[data-cur]'), xy = q('[data-xy]'), live = q('[data-live]'), tap = q('[data-tap]'), mode = q('[data-mode]'), mnum = q('[data-mnum]');
    const D = { x: 108, y: 78, w: 434, h: 254 }, M = { x: 621, y: 190, w: 88, h: 188 }, NS = 'http://www.w3.org/2000/svg';
    const el = (tag, at, st) => { const n = document.createElementNS(NS, tag); for (const k in at) n.setAttribute(k, at[k]); if (st) n.setAttribute('style', st); return n; };
    const mk = (L, R, host2) => L.map(([t, x, y, w, h, ac]) => {
      const X = R.x + x / 100 * R.w, Y = R.y + y / 100 * R.h, W = Math.max(2, w / 100 * R.w), H = Math.max(1.5, h / 100 * R.h);
      const g = el('g', {}, 'transform-box:fill-box;transform-origin:0 50%;opacity:0');
      let st = 'fill:none;stroke:rgba(var(--ink-rgb),.45);stroke-width:1';
      if (t === 'h' || t === 'logo') st = 'fill:' + acc;
      else if (t === 'line') st = 'fill:rgba(var(--ink-rgb),.22)';
      else if (t === 'link') st = 'fill:rgba(250,54,0,.5)';
      else if (t === 'btn') st = ac ? 'fill:' + acc : 'fill:none;stroke:' + ink + ';stroke-width:1';
      else if (t === 'nav' || t === 'side') st = 'fill:rgba(var(--ink-rgb),.06)';
      if (t === 'dot') g.appendChild(el('circle', { cx: X + W / 2, cy: Y + H / 2, r: Math.min(W, H) / 2 }, ac ? 'fill:' + acc : 'fill:none;stroke:' + ink + ';stroke-width:1'));
      else g.appendChild(el('rect', { x: X, y: Y, width: W, height: H, rx: t === 'card' && R === M ? 3 : 0 }, st));
      if (t === 'img') g.appendChild(el('path', { d: 'M' + X + ' ' + Y + 'L' + (X + W) + ' ' + (Y + H) + 'M' + (X + W) + ' ' + Y + 'L' + X + ' ' + (Y + H) }, 'fill:none;stroke:rgba(var(--ink-rgb),.25);stroke-width:.8'));
      host2.appendChild(g);
      return { g, t, X, Y, W, H };
    });
    const nav = [['nav', 0, 0, 100, 9], ['logo', 3, 3, 9, 3.4]], pnav = [['nav', 0, 0, 100, 7], ['logo', 8, 2.5, 22, 2.4]];
    const SCENES = [
      { n: '01', name: 'WEBSITE',
        d: [...nav, ['link', 58, 3.6, 7, 2], ['link', 68, 3.6, 7, 2], ['link', 78, 3.6, 7, 2], ['btn', 88, 2.4, 9, 4.6, 1], ['h', 6, 20, 46, 7], ['h', 6, 30, 34, 7], ['line', 6, 42, 40, 2.4], ['line', 6, 47, 32, 2.4], ['btn', 6, 56, 14, 6, 1], ['btn', 22, 56, 14, 6], ['img', 57, 17, 37, 45], ['img', 6, 72, 27, 22], ['img', 36.5, 72, 27, 22], ['img', 67, 72, 27, 22]],
        m: [...pnav, ['line', 76, 3, 14, 1.4], ['h', 8, 14, 76, 4.5], ['h', 8, 20.5, 56, 4.5], ['line', 8, 29, 80, 1.6], ['line', 8, 33, 64, 1.6], ['btn', 8, 39, 44, 5.5, 1], ['img', 8, 50, 84, 22], ['img', 8, 76, 84, 18]] },
      { n: '02', name: 'ONLINE STORE',
        d: [...nav, ['btn', 34, 2.4, 32, 4.6], ['dot', 92, 2.6, 4, 4, 1], ['side', 0, 9, 18, 91], ['line', 3, 16, 11, 2], ['line', 3, 22, 9, 2], ['line', 3, 28, 12, 2], ['line', 3, 34, 8, 2],
          ['img', 22, 14, 23, 32], ['line', 22, 48, 16, 2], ['link', 22, 52, 8, 2.4], ['img', 48.5, 14, 23, 32], ['line', 48.5, 48, 14, 2], ['link', 48.5, 52, 8, 2.4], ['img', 75, 14, 23, 32], ['line', 75, 48, 17, 2], ['link', 75, 52, 8, 2.4],
          ['img', 22, 60, 23, 30], ['img', 48.5, 60, 23, 30], ['img', 75, 60, 23, 30], ['btn', 75, 92, 23, 5, 1]],
        m: [...pnav, ['dot', 80, 2, 10, 3.6, 1], ['btn', 8, 11, 84, 5], ['img', 8, 20, 40, 22], ['img', 52, 20, 40, 22], ['link', 8, 44, 18, 1.8], ['link', 52, 44, 18, 1.8], ['img', 8, 50, 40, 22], ['img', 52, 50, 40, 22], ['link', 8, 74, 18, 1.8], ['link', 52, 74, 18, 1.8], ['btn', 8, 86, 84, 7, 1]] },
      { n: '03', name: 'APP',
        d: [['line', 4, 6, 14, 2.4], ['line', 4, 10, 22, 2], ['card', 6, 18, 18, 74], ['line', 24.5, 52, 5, 0.8], ['card', 30, 18, 18, 74], ['line', 48.5, 52, 5, 0.8], ['card', 54, 18, 18, 74], ['line', 72.5, 52, 5, 0.8], ['card', 78, 18, 18, 74], ['h', 8, 24, 12, 3], ['h', 32, 24, 10, 3], ['h', 56, 24, 13, 3], ['h', 80, 24, 9, 3], ['dot', 64, 80, 5, 5, 1]],
        m: [['line', 8, 2.5, 20, 1.2], ['dot', 80, 1.8, 10, 3, 0], ['h', 8, 9, 54, 4.5], ['line', 8, 15.5, 36, 1.6], ['card', 8, 21, 84, 20], ['h', 14, 25, 40, 3], ['line', 14, 32, 60, 1.6], ['dot', 8, 46, 9, 4, 1], ['line', 22, 47, 48, 1.8], ['dot', 8, 54, 9, 4], ['line', 22, 55, 40, 1.8], ['dot', 8, 62, 9, 4], ['line', 22, 63, 52, 1.8], ['dot', 72, 74, 18, 8.5, 1], ['nav', 0, 89, 100, 11], ['dot', 14, 92, 8, 4], ['dot', 46, 92, 8, 4, 1], ['dot', 78, 92, 8, 4]] }
    ];
    const ez = 'cubic-bezier(.65,0,.35,1)';
    svg.querySelectorAll('.ln').forEach((p, i) => p.animate([{ strokeDashoffset: 1 }, { strokeDashoffset: 0 }], { duration: this._reduce ? 1 : 1400, delay: this._reduce ? 0 : i * 30, easing: ez, fill: 'backwards' }));
    if (this._reduce) { mk(SCENES[0].d, D, scr).concat(mk(SCENES[0].m, M, ph)).forEach((e) => { e.g.style.opacity = '1'; }); live.style.opacity = '1'; return; }
    const cs = { x: D.x + D.w / 2, y: D.y + D.h / 2, tx: D.x + D.w / 2, ty: D.y + D.h / 2 };
    const loop = () => {
      if (!this._aiOn || gen !== this._aiGen) return;
      cs.x += (cs.tx - cs.x) * 0.18; cs.y += (cs.ty - cs.y) * 0.18;
      sc.setAttribute('transform', 'translate(' + cs.x.toFixed(1) + ' ' + cs.y.toFixed(1) + ')');
      this._aiRaf = requestAnimationFrame(loop);
    };
    loop();
    const wait = (ms) => new Promise((r) => { this._aiT = setTimeout(r, ms); });
    const visible = async () => { while (this._aiOn && (this._aiHidden || document.hidden)) await wait(400); };
    this._aiIo = new IntersectionObserver((en) => { this._aiHidden = !en[0].isIntersecting; }, { threshold: 0 });
    this._aiIo.observe(host);
    const show = (e) => { const big = e.t === 'img' || e.t === 'card'; e.g.animate(big ? [{ opacity: 0, transform: 'scale(0.9)' }, { opacity: 1, transform: 'none' }] : [{ opacity: 0, transform: 'scaleX(0.05)' }, { opacity: 1, transform: 'scaleX(1)' }], { duration: big ? 480 : 380, easing: ez, fill: 'forwards' }); };
    let si = 0;
    const run = async () => {
      await wait(1600);
      while (this._aiOn && gen === this._aiGen) {
        await visible();
        if (!this._aiOn) return;
        const sc0 = SCENES[si++ % SCENES.length];
        mode.textContent = sc0.name; mnum.textContent = '[' + sc0.n + ']';
        mode.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 400 });
        const de = mk(sc0.d, D, scr), me = mk(sc0.m, M, ph);
        sc.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 300, fill: 'forwards' });
        const n = Math.max(de.length, me.length);
        for (let i = 0; i < n; i++) {
          if (!this._aiOn || gen !== this._aiGen) return;
          const e = de[i], m = me[i];
          if (e) { cs.tx = e.X + Math.min(e.W, 16); cs.ty = e.Y + e.H / 2; xy.textContent = 'X:' + String(Math.round((cs.tx - D.x) / D.w * 1440)).padStart(4, '0') + ' Y:' + String(Math.round((cs.ty - D.y) / D.h * 900)).padStart(4, '0'); }
          await wait(240);
          if (e) show(e);
          if (m) { show(m); tap.setAttribute('cx', m.X + Math.min(m.W, 10)); tap.setAttribute('cy', m.Y + m.H / 2); tap.animate([{ opacity: 0.9, r: 3 }, { opacity: 0, r: 12 }], { duration: 450, easing: 'ease-out' }); }
          await wait(e && (e.t === 'line' || e.t === 'link') ? 100 : 160);
        }
        cs.tx = D.x + D.w - 60; cs.ty = D.y + 12;
        await wait(450);
        live.animate([{ opacity: 0, transform: 'translateY(4px)' }, { opacity: 1, transform: 'none' }], { duration: 400, easing: ez, fill: 'forwards' });
        sc.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 400, fill: 'forwards' });
        await wait(2400);
        live.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 300, fill: 'forwards' });
        const all = de.concat(me);
        all.forEach((e, i) => e.g.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 380, delay: i * 8, fill: 'forwards' }));
        await wait(450 + all.length * 8);
        all.forEach((e) => e.g.remove());
        await wait(200);
      }
    };
    run();
  }
  stopAi() {
    this._aiOn = false;
    cancelAnimationFrame(this._aiRaf);
    (this._aiAnims || []).forEach((x) => x.cancel());
    clearTimeout(this._aiT);
    if (this._ringAnim) this._ringAnim.cancel();
    if (this._aiIo) this._aiIo.disconnect();
  }
  curRef = React.createRef();
  crossRef = React.createRef();
  coordRef = React.createRef();
  navRef = React.createRef();
  progRef = React.createRef();
  tabsRef = React.createRef();
  splitTitles = () => {
    document.querySelectorAll('h2.q-ht').forEach((el) => {
      const src = el.querySelector('.q-hsrc'), box = el.querySelector('.q-hanim'); if (!src || !box) return;
      const t = src.textContent.trim(); if (box.dataset.hk === t) return;
      box.dataset.hk = t; box.textContent = ''; let i = 0;
      t.split(/\s+/).filter(Boolean).forEach((w, wi) => {
        const ws = document.createElement('span'); ws.className = 'q-hw';
        [...w].forEach((ch) => { const o = document.createElement('span'); o.className = 'q-hc'; const n = document.createElement('span'); n.textContent = ch; n.style.setProperty('--i', i++); o.appendChild(n); ws.appendChild(o); });
        if (wi) box.appendChild(document.createTextNode(' ')); box.appendChild(ws);
      });
      const bar = document.createElement('span'); bar.className = 'q-hbar'; box.appendChild(bar);
      if (!el._hobs && this._hio) { el._hobs = 1; this._hio.observe(el); }
    });
  };
  syncTabs = () => {
    const w = this.tabsRef.current; if (!w) return;
    const on = w.querySelector('.q-tab[data-on="true"]'); const ind = w.querySelector('.q-tind'); if (!on || !ind) return;
    const x = on.offsetLeft, wd = on.offsetWidth;
    if (!this._tabInit) { ind.style.transition = 'none'; this._tabInit = 1; } else ind.style.transition = 'transform .55s cubic-bezier(.77,0,.18,1)';
    ind.style.transform = 'translateX(' + x + 'px) scaleX(' + wd + ')';
    const fade = w.parentElement.querySelector('.q-tfade'); if (fade) fade.style.opacity = w.scrollWidth - w.clientWidth - w.scrollLeft > 4 ? '1' : '0';
    if (this._lastTab !== this.state.tab) { this._lastTab = this.state.tab; const t = x - (w.clientWidth - wd) / 2; w.scrollTo({ left: Math.max(0, t), behavior: 'smooth' }); }
  };
  inkRef = React.createRef();
  dotRef = React.createRef();
  labelRef = React.createRef();

  translations = {
    en: {
      navWork: 'Work', navServices: 'Services', navAbout: 'About', navContact: 'Get in touch',
      ukraineBadge: 'Proudly Ukrainian',
      heroEyebrow: 'Mobile Apps · Startup MVPs · Web Products',
      heroTitle: 'Olha Tsurika.',
      heroRole: 'Lead UI/UX Designer', heroStack2: 'Mobile apps & MVPs', heroStack3: 'Startups',
      heroSub: "15 years turning complex products into interfaces people actually understand. Based in Aarhus, Denmark. Open to a full-time design role or a co-founder seat in an early-stage startup.",
      heroCta1: 'Selected work', heroCta2: 'Get in touch',
      trustLine: 'Open to full-time roles & co-founder opportunities',
      yourProject: 'Your project', liveEyebrow: 'Live Work', liveA: 'Websites · Promo · Corporate', liveB: 'Applications', workEyebrow: 'Selected Work', workTitle: 'Selected case studies, one B2B focus.',
      catApps: 'Mobile Apps & Startups', catWeb: 'Promo & Corporate Websites', catEcom: 'E-commerce', projWord: 'projects', projWord1: 'project',
      svcEyebrow: 'Services', svcTitle: 'Three ways to work together.',
      auditTitle: 'Expert Consultation & Technical Audit', auditDesc: 'In-depth code review, architecture analysis, or strategic advice on your current tech stack.',
      auditCta: 'Book a session',
      aboutEyebrow: 'About me',
      aboutHeading1: 'Complex logic, clear product',
      aboutP1: "I start with structure: flows, states, edge cases. Then I build it in Figma with real components and variables, so a developer opens the file and builds without guessing. Messy brief in, buildable product out.",
      aboutHeading2: 'Designer who prototypes',
      aboutP2: "I don't stop at static screens. With Cursor, v0, Framer and Claude I turn a design into a working, clickable prototype. For a founder that means testing an idea with real users in days, and finding out early whether anyone wants it.",
      readMore: 'Read more', readLess: 'Read less',
      skillsLabel: 'Core skills', experienceLabel: 'Experience',
      experience: [
        { period: 'Mar 2025 — Present', dur: 'Current', place: 'Denmark, Remote', role: 'Lead UI/UX Designer', company: 'Unifood Import A/S', desc: 'Redesigned the website for a Danish B2B food importer. Built the full visual system from scratch: typography, spacing scale, and a component library ready for developer handoff.' },
        { period: 'Jul 2014 — Aug 2023', dur: 'Completed', place: 'Kyiv, Hybrid', role: 'Lead UX/UI Designer & Art Director', company: 'WAMP', desc: 'Grew from designer into a leadership role over 9 years, owning end-to-end product and creative direction for SaaS, e-commerce and B2B clients across the EU and US markets.' },
        { period: 'Feb 2011 — Nov 2013', dur: '2 yrs 10 mos', place: 'Mykolaiv, Ukraine, On-site', role: 'Graphic Designer', company: 'GeeksForLess Inc.', desc: 'First professional design role at a US-based IT outsourcing company serving US and EU clients — branding, print and digital design.' }
      ],
      contactEyebrow: "Let's talk", contactTitle: 'Hiring a designer or building a startup?', contactSub: "I'm looking for a team where design shapes the product, not just decorates it. Whether you need a senior designer on staff or a design partner from day one, let's talk.",
      footerTag: 'Designed at the intersection of design + AI'
    },
    dk: {
      navWork: 'Arbejde', navServices: 'Services', navAbout: 'Om mig', navContact: 'Kontakt',
      ukraineBadge: 'Stolt ukrainer',
      heroEyebrow: 'Mobile apps · Startup MVP\u2019er · Webprodukter',
      heroTitle: 'Olha Tsurika.',
      heroRole: 'Lead UI/UX-designer', heroStack2: 'Mobile apps & MVP’er', heroStack3: 'Startups',
      heroSub: '15 års erfaring i at gøre komplekse produkter forståelige. Baseret i Aarhus, Danmark. Åben for en fuldtidsrolle som designer eller en co-founder-plads i en tidlig startup.',
      heroCta1: 'Se arbejde', heroCta2: 'Kontakt mig',
      trustLine: 'Åben for fuldtidsroller & co-founder-muligheder',
      yourProject: 'Dit projekt', liveEyebrow: 'Live projekter', liveA: 'Websites · Promo · Corporate', liveB: 'Applikationer', workEyebrow: 'Udvalgt arbejde', workTitle: 'Udvalgte cases, ét B2B-fokus.',
      catApps: 'Mobilapps & Startups', catWeb: 'Promo- & virksomhedswebsites', catEcom: 'E-handel', projWord: 'projekter', projWord1: 'projekt',
      svcEyebrow: 'Services', svcTitle: 'Tre måder at samarbejde på.',
      auditTitle: 'Ekspertkonsultation & teknisk audit', auditDesc: 'Dybdegående code review, arkitekturanalyse eller strategisk rådgivning om din nuværende tech stack.',
      auditCta: 'Book en session',
      aboutEyebrow: 'Om mig',
      aboutHeading1: 'Kompleks logik, klart produkt',
      aboutP1: 'Jeg starter med struktur: flows, tilstande, kantsager. Derefter bygger jeg det i Figma med rigtige komponenter og variabler, så en udvikler kan åbne filen og bygge uden at gætte. Rodet brief ind, byggbart produkt ud.',
      aboutHeading2: 'Designer, der prototyper',
      aboutP2: 'Jeg stopper ikke ved statiske skærme. Med Cursor, v0, Framer og Claude omsætter jeg et design til en fungerende, klikbar prototype. For en founder betyder det at teste en idé med rigtige brugere på få dage — og finde ud af tidligt, om nogen vil have den.',
      readMore: 'Læs mere', readLess: 'Læs mindre',
      skillsLabel: 'Kernekompetencer', experienceLabel: 'Erfaring',
      experience: [
        { period: 'Mar 2025 — nu', dur: 'Nuværende', place: 'Danmark, Remote', role: 'Lead UI/UX-designer', company: 'Unifood Import A/S', desc: 'Redesignede hjemmesiden for en dansk B2B-fødevareimportør. Byggede hele det visuelle system fra bunden: typografi, spacing-skala og et komponentbibliotek klar til udviklerhandoff.' },
        { period: 'Jul 2014 — Aug 2023', dur: 'Afsluttet', place: 'Kyiv, Hybrid', role: 'Lead UX/UI Designer & Art Director', company: 'WAMP', desc: 'Voksede fra designer til en ledende rolle over 9 år og stod for produkt- og kreativ ledelse for SaaS-, e-handels- og B2B-kunder i EU og USA.' },
        { period: 'Feb 2011 — Nov 2013', dur: '2 år 10 mdr', place: 'Mykolaiv, Ukraine, On-site', role: 'Grafisk designer', company: 'GeeksForLess Inc.', desc: 'Første professionelle designrolle hos et amerikansk IT-outsourcingfirma med kunder i USA og EU — branding, print- og digitalt design.' }
      ],
      contactEyebrow: 'Lad os tale', contactTitle: 'Ansætter du en designer, eller bygger du en startup?', contactSub: 'Jeg leder efter et team, hvor design former produktet — ikke bare dekorerer det. Uanset om du har brug for en senior designer i teamet eller en designpartner fra dag ét, så lad os tale.',
      footerTag: 'Designet i krydsfeltet mellem design + AI'
    },
    ua: {
      navWork: 'Роботи', navServices: 'Послуги', navAbout: 'Про мене', navContact: "Зв'язатися",
      ukraineBadge: 'З гордістю з України',
      heroEyebrow: 'Мобільні застосунки · MVP для стартапів · Веб-продукти',
      heroTitle: 'Ольга Цурика.',
      heroRole: 'Lead UI/UX Designer', heroStack2: 'Mobile apps & MVPs', heroStack3: 'Startups',
      heroSub: '15 років перетворюю складні продукти на зрозумілі інтерфейси. Базуюся в Орхусі, Данія. Відкрита до full-time ролі дизайнерки або посади кофаундера в стартапі на ранній стадії.',
      heroCta1: 'Мої роботи', heroCta2: "Зв'язатися",
      trustLine: 'Відкрита до full-time ролей і co-founder можливостей',
      yourProject: 'Ваш проєкт', liveEyebrow: 'Живі проєкти', liveA: 'Вебсайти · Промо · Корпоративні', liveB: 'Застосунки', workEyebrow: 'Мої роботи', workTitle: 'Вибрані кейси, один B2B-фокус.',
      catApps: 'Мобільні застосунки та стартапи', catWeb: 'Промо та корпоративні вебсайти', catEcom: 'E-commerce', projWord: 'проєкти', projWord1: 'проєкт',
      svcEyebrow: 'Послуги', svcTitle: 'Три способи працювати разом.',
      auditTitle: 'Експертна консультація та технічний аудит', auditDesc: 'Глибокий code review, аналіз архітектури або стратегічні поради щодо вашого технологічного стеку.',
      auditCta: 'Забронювати сесію',
      aboutEyebrow: 'Про мене',
      aboutHeading1: 'Складна логіка, зрозумілий продукт',
      aboutP1: 'Я починаю зі структури: флоу, стани, крайні випадки. Потім будую це у Figma з реальними компонентами і варіаблами, щоб розробник відкрив файл і зробив усе без вгадування. На вході — хаотичний бриф, на виході — продукт, який можна будувати.',
      aboutHeading2: 'Дизайнерка, яка прототипує',
      aboutP2: 'Я не зупиняюся на статичних екранах. За допомогою Cursor, v0, Framer і Claude перетворюю дизайн на робочий, клікабельний прототип. Для фаундера це означає протестувати ідею на реальних користувачах за кілька днів і рано зрозуміти, чи вона комусь потрібна.',
      readMore: 'Читати далі', readLess: 'Згорнути',
      skillsLabel: 'Ключові навички', experienceLabel: 'Досвід',
      experience: [
        { period: 'бер. 2025 — зараз', dur: 'Наразі', place: 'Данія, віддалено', role: 'Lead UI/UX Designer', company: 'Unifood Import A/S', desc: 'Редизайн сайту для данського B2B-імпортера продуктів харчування. Побудувала візуальну систему з нуля: типографіку, шкалу відступів і бібліотеку компонентів, готову для передачі розробникам.' },
        { period: 'лип. 2014 — серп. 2023', dur: 'Завершено', place: 'Київ, гібрид', role: 'Lead UX/UI Designer & Art Director', company: 'WAMP', desc: 'Виросла з дизайнерки до керівної ролі за 9 років, відповідала за продуктовий і креативний напрямок для SaaS, e-commerce та B2B клієнтів у ЄС і США.' },
        { period: 'лют. 2011 — лист. 2013', dur: '2 р. 10 міс.', place: 'Миколаїв, Україна, офіс', role: 'Графічна дизайнерка', company: 'GeeksForLess Inc.', desc: 'Перша професійна посада дизайнерки в американській ІТ-аутсорсинговій компанії з клієнтами у США та ЄС — брендинг, друкований і цифровий дизайн.' }
      ],
      contactEyebrow: 'Поговоримо', contactTitle: 'Шукаєте дизайнерку або будуєте стартап?', contactSub: 'Я шукаю команду, де дизайн формує продукт, а не просто прикрашає його. Потрібен senior-дизайнер у штат чи дизайн-партнер з першого дня — напишіть, обговоримо.',
      footerTag: 'Створено на перетині дизайну + AI'
    }
  };

  // v6 strings (hero, live, about, process, services) — EN / DK / UA
  T6 = {"en":{"nav_services":"Services","nav_contact2":"Contact","cta_touch":"Get in touch","cta_work":"See my work","menu":"Menu","close":"Close ✕","aria_top":"Olha Tsurika — back to top","theme_aria":"Dark mode","lang_aria":"Language","on":"On","off":"Off","aria_filter":"Filter work by type","tags_aria":"Role, platform and tools","hero_eb":"AI Architect & Senior Product Designer","hero_loc":"Aarhus, Denmark","yrs_short":"years in design","hero_h":"I design how AI is built into products and workflows.","hero_l1":"I design how AI","hint_hover":"Hover to preview","m_role":"Role","m_loc":"Location","cursor_more":"View","hero_l2":"is built into products","hero_l3":"and workflows.","hint_scroll":"Scroll to continue","hero_sub":"UX/UI, web, apps and design systems. 15+ years in design and an AI-native workflow that takes an idea all the way to a deployed product. I work with Danish and European clients.","photo_alt":"Portrait of Olha Tsurika","work_h":"Selected work","work_eb":"Case studies · apps, websites and e-commerce","tab_all":"All","view_case":"View case study","live_h":"Live projects","live_eb":"Sites and apps in production · open in a new tab","live_site":"Website","live_app":"App · Google Play","new_tab":" (opens in a new tab)","approach":"My approach","about_story":"I'm a Ukrainian designer based in Aarhus, Denmark, with 15+ years in design. I started as a graphic designer at GeeksForLess, spent 9 years at WAMP growing into Lead UX/UI Designer and Art Director, and today design for Danish and European clients, including Unifood Import A/S. My focus now is AI: where it belongs in a product or workflow, and how to design it so people understand it and use it.","stat1":"Years in design","stat2":"Live sites and apps in this portfolio","stat3":"Countries my clients come from","tools_h":"Tools I use","lang_h":"Languages","langs_v":["Ukrainian","Russian","English","Danish (learning)"],"how_h":"How I work","how_eb":"An AI-augmented process, from brief to launch","steps":[{"n":"01","h":"Research","t":"I start with structure: the business goal, users, flows, states and edge cases. I benchmark comparable products to see where they ask too much, too soon."},{"n":"02","h":"AI-assisted concepts","t":"I build concepts as working prototypes in Claude, v0 and Cursor, so an idea becomes clickable screens in days and can be tested with real users early."},{"n":"03","h":"Design system","t":"Real components, tokens and variables in Figma, so a developer opens the file and builds without guessing."},{"n":"04","h":"Build & launch","t":"Front-end build with Framer, v0 or Cursor, deployed to your domain, or a clean handoff to your developers."}],"svc_h":"Services","svc_eb":"What you can hire me for","svc_cta":"Discuss a project","services":[{"n":"01","h":"Product design","t":"End-to-end UX/UI for apps and digital products: research, flows, interface and a prototype people can click through.","b":["UX research and user flows","Interface design in Figma","Interactive prototype"]},{"n":"02","h":"AI integration design","t":"Where AI belongs in your product or workflow and how it should behave: onboarding, assistants, generation and review.","b":["AI feature mapping","Interaction patterns for AI","Working prototype in Claude or v0"]},{"n":"03","h":"Website & app redesign","t":"Redesigns of websites, online stores and apps with a clearer structure and a shorter path to the key action.","b":["UX audit of the current product","New structure and visual design","Responsive web and mobile"]},{"n":"04","h":"Design systems","t":"Component libraries with tokens and variables, ready for developer handoff and for the product to grow.","b":["Tokens and variables","Component library","Handoff specs"]},{"n":"05","h":"Consulting","t":"Design and AI-workflow advice for founders and teams: product reviews, workshops and a second opinion.","b":["Product and UX review","AI workflow setup","Workshops for teams"]}],"cv":"CV — PDF ↓","back_work":"← Back to work"},"dk":{"nav_services":"Ydelser","nav_contact2":"Kontakt","cta_touch":"Kontakt mig","cta_work":"Se mit arbejde","menu":"Menu","close":"Luk ✕","aria_top":"Olha Tsurika — tilbage til toppen","theme_aria":"Mørk tilstand","lang_aria":"Sprog","on":"Til","off":"Fra","aria_filter":"Filtrér arbejde efter type","tags_aria":"Rolle, platform og værktøjer","hero_eb":"AI-arkitekt og senior produktdesigner","hero_loc":"Aarhus, Danmark","yrs_short":"år med design","hero_h":"Jeg designer, hvordan AI bygges ind i produkter og arbejdsgange.","hero_l1":"Jeg designer, hvordan","hint_hover":"Hold musen over for preview","m_role":"Rolle","m_loc":"Lokation","cursor_more":"Se","hero_l2":"AI bygges ind i produkter","hero_l3":"og arbejdsgange.","hint_scroll":"Scroll for at fortsætte","hero_sub":"UX/UI, web, apps og designsystemer. Mere end 15 års erfaring med design og et AI-native workflow, der fører en idé hele vejen til et lanceret produkt. Jeg arbejder med danske og europæiske kunder.","photo_alt":"Portræt af Olha Tsurika","work_h":"Udvalgt arbejde","work_eb":"Cases · apps, websites og e-handel","tab_all":"Alle","view_case":"Se casen","live_h":"Live projekter","live_eb":"Sites og apps i drift · åbner i en ny fane","live_site":"Website","live_app":"App · Google Play","new_tab":" (åbner i en ny fane)","approach":"Min tilgang","about_story":"Jeg er ukrainsk designer med base i Aarhus og har arbejdet med design i mere end 15 år. Jeg startede som grafisk designer hos GeeksForLess, var 9 år hos WAMP, hvor jeg voksede til Lead UX/UI Designer og Art Director, og designer i dag for danske og europæiske kunder, bl.a. Unifood Import A/S. Mit fokus nu er AI: hvor det hører hjemme i et produkt eller en arbejdsgang, og hvordan man designer det, så folk forstår det og bruger det.","stat1":"År med design","stat2":"Live sites og apps i porteføljen","stat3":"Lande, mine kunder kommer fra","tools_h":"Værktøjer","lang_h":"Sprog","langs_v":["Ukrainsk","Russisk","Engelsk","Dansk (lærer)"],"how_h":"Sådan arbejder jeg","how_eb":"En AI-understøttet proces, fra brief til lancering","steps":[{"n":"01","h":"Research","t":"Jeg starter med strukturen: forretningsmålet, brugerne, flows, tilstande og kantsager. Jeg sammenligner med lignende produkter for at se, hvor de beder om for meget for tidligt."},{"n":"02","h":"AI-understøttede koncepter","t":"Jeg bygger koncepter som fungerende prototyper i Claude, v0 og Cursor, så en idé bliver til klikbare skærme på få dage og kan testes med rigtige brugere tidligt."},{"n":"03","h":"Designsystem","t":"Rigtige komponenter, tokens og variabler i Figma, så en udvikler kan åbne filen og bygge uden at gætte."},{"n":"04","h":"Udvikling og lancering","t":"Frontend bygget i Framer, v0 eller Cursor og lagt på dit domæne, eller en ren overdragelse til dine udviklere."}],"svc_h":"Ydelser","svc_eb":"Det kan du hyre mig til","svc_cta":"Tal om et projekt","services":[{"n":"01","h":"Produktdesign","t":"UX/UI fra start til slut for apps og digitale produkter: research, flows, interface og en prototype, man kan klikke sig igennem.","b":["UX-research og brugerflows","Interfacedesign i Figma","Interaktiv prototype"]},{"n":"02","h":"Design af AI-integration","t":"Hvor AI hører hjemme i dit produkt eller din arbejdsgang, og hvordan det skal opføre sig: onboarding, assistenter, generering og gennemsyn.","b":["Kortlægning af AI-funktioner","Interaktionsmønstre for AI","Fungerende prototype i Claude eller v0"]},{"n":"03","h":"Redesign af website og app","t":"Redesign af websites, webshops og apps med en klarere struktur og en kortere vej til den vigtigste handling.","b":["UX-audit af det nuværende produkt","Ny struktur og visuelt design","Responsivt web og mobil"]},{"n":"04","h":"Designsystemer","t":"Komponentbiblioteker med tokens og variabler, klar til overdragelse til udviklere og til at produktet kan vokse.","b":["Tokens og variabler","Komponentbibliotek","Handoff-specifikationer"]},{"n":"05","h":"Rådgivning","t":"Rådgivning om design og AI-workflow til founders og teams: produktgennemgang, workshops og en second opinion.","b":["Produkt- og UX-gennemgang","Opsætning af AI-workflow","Workshops for teams"]}],"cv":"CV — PDF ↓","back_work":"← Tilbage til arbejde"},"ua":{"nav_services":"Послуги","nav_contact2":"Контакти","cta_touch":"Зв'язатися","cta_work":"Мої роботи","menu":"Меню","close":"Закрити ✕","aria_top":"Ольга Цурика — на початок","theme_aria":"Темна тема","lang_aria":"Мова","on":"Увімк.","off":"Вимк.","aria_filter":"Фільтр робіт за типом","tags_aria":"Роль, платформа та інструменти","hero_eb":"AI-архітекторка та Senior Product Designer","hero_loc":"Орхус, Данія","yrs_short":"років у дизайні","hero_h":"Я проєктую, як AI вбудовується в продукти та робочі процеси.","hero_l1":"Я проєктую, як AI","hint_hover":"Наведіть для перегляду","m_role":"Роль","m_loc":"Локація","cursor_more":"Дивитись","hero_l2":"вбудовується в продукти","hero_l3":"та робочі процеси.","hint_scroll":"Гортайте далі","hero_sub":"UX/UI, веб, застосунки та дизайн-системи. Понад 15 років у дизайні та AI-native процес, який доводить ідею до запущеного продукту. Працюю з данськими та європейськими клієнтами.","photo_alt":"Портрет Ольги Цурики","work_h":"Мої роботи","work_eb":"Кейси · застосунки, сайти та e-commerce","tab_all":"Усі","view_case":"Дивитися кейс","live_h":"Живі проєкти","live_eb":"Сайти та застосунки в роботі · відкриваються в новій вкладці","live_site":"Сайт","live_app":"Застосунок · Google Play","new_tab":" (відкривається в новій вкладці)","approach":"Мій підхід","about_story":"Я українська дизайнерка, живу в Орхусі (Данія) і понад 15 років працюю в дизайні. Починала графічною дизайнеркою в GeeksForLess, 9 років працювала у WAMP, де виросла до Lead UX/UI Designer та арт-директорки, а сьогодні проєктую для данських і європейських клієнтів, зокрема Unifood Import A/S. Зараз мій фокус — AI: де йому місце в продукті чи процесі і як спроєктувати його так, щоб люди його розуміли й користувалися ним.","stat1":"Років у дизайні","stat2":"Живих сайтів і застосунків у портфоліо","stat3":"Країн, звідки мої клієнти","tools_h":"Інструменти","lang_h":"Мови","langs_v":["Українська","Російська","Англійська","Данська (вивчаю)"],"how_h":"Як я працюю","how_eb":"Процес з AI, від брифу до запуску","steps":[{"n":"01","h":"Дослідження","t":"Починаю зі структури: бізнес-мета, користувачі, флоу, стани та крайні випадки. Аналізую схожі продукти, щоб побачити, де вони просять забагато й зарано."},{"n":"02","h":"Концепції з AI","t":"Будую концепції як робочі прототипи в Claude, v0 і Cursor, тож ідея за кілька днів стає клікабельними екранами й рано тестується на реальних користувачах."},{"n":"03","h":"Дизайн-система","t":"Справжні компоненти, токени та змінні у Figma, щоб розробник відкрив файл і будував без здогадок."},{"n":"04","h":"Розробка та запуск","t":"Фронтенд у Framer, v0 або Cursor з розгортанням на вашому домені або чиста передача вашим розробникам."}],"svc_h":"Послуги","svc_eb":"Для чого мене можна найняти","svc_cta":"Обговорити проєкт","services":[{"n":"01","h":"Продуктовий дизайн","t":"UX/UI від початку до кінця для застосунків і цифрових продуктів: дослідження, флоу, інтерфейс і прототип, який можна прокликати.","b":["UX-дослідження та флоу","Дизайн інтерфейсу у Figma","Інтерактивний прототип"]},{"n":"02","h":"Дизайн AI-інтеграцій","t":"Де AI доречний у вашому продукті чи процесі і як він має поводитися: онбординг, асистенти, генерація та перевірка.","b":["Мапа AI-функцій","Патерни взаємодії з AI","Робочий прототип у Claude або v0"]},{"n":"03","h":"Редизайн сайту та застосунку","t":"Редизайн сайтів, інтернет-магазинів і застосунків із чіткішою структурою та коротшим шляхом до головної дії.","b":["UX-аудит поточного продукту","Нова структура та візуальний дизайн","Адаптивний веб і мобайл"]},{"n":"04","h":"Дизайн-системи","t":"Бібліотеки компонентів з токенами та змінними, готові до передачі розробникам і до зростання продукту.","b":["Токени та змінні","Бібліотека компонентів","Специфікації для передачі"]},{"n":"05","h":"Консультації","t":"Поради щодо дизайну та AI-процесів для фаундерів і команд: рев’ю продукту, воркшопи та друга думка.","b":["Рев’ю продукту та UX","Налаштування AI-процесу","Воркшопи для команд"]}],"cv":"CV — PDF ↓","back_work":"← Назад до робіт"}};

  cases = [
      {
        category: 'apps', kind: 'iOS · Mental Health', cover: IMG('mintra-cover2.png'), order: -2, seamlessShots: true,
        title: 'Mintra — Fast Psychological Relief & Daily Mental Recovery',
        badges: ['Mental Health', 'iOS'],
        meta: [{ k: 'Role', v: 'Product & UX/UI Design' }, { k: 'Year', v: '2026' }, { k: 'Scope', v: '20+ screen prototype' }, { k: 'Platform', v: 'iOS' }, { k: 'Status', v: 'Prototype — scaling to MVP' }],
        challenge: 'Most mental health apps ask for 20–30 minutes a day, front-load long assessments, and treat anxiety and racing thoughts as something to journal about at length. People in acute stress do not have that time or focus — they need relief in minutes, and a way to offload the mental clutter (tasks, worries, half-finished thoughts) that is actually causing the overwhelm.',
        overview: 'Mintra is a 5–10 minute daily app for mental recovery — anxiety relief, sleep tracking, affirmations and breathing exercises, built around a signature feature called Brain Dump: unload everything on your mind, categorize it, then pick just one task that matters today. Reducing cognitive load, not adding another to-do list, is the core mechanic.',
        solutionShown: true,
        solution: [
          { h: 'Brain Dump', t: 'A free-form unload of tasks and worries, auto-categorized, ending in a forced choice of one priority — the single mechanic the rest of the app supports.' },
          { h: 'Rituals library', t: 'Breathing, CBT and meditation techniques filtered by time (2–20 min) and need, from acute stress to wind-down.' },
          { h: 'Progress dashboard', t: 'Stress trend, sleep score and streaks pulled from wearable data (HRV, sleep, activity), framed around recovery rather than gamified streaks.' },
          { h: 'Guided onboarding', t: 'A short, empathetic intake — what\u2019s been weighing on you — that personalizes the first Home screen before any setup friction.' }
        ],
        shots: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((n) => ({ img: IMG('mintra-lr-' + String(n).padStart(2, '0') + '.png'), label: 'Mintra — case study, part ' + n, long: true })),
        thinking: [
          { i: '01', t: 'Started from research: benchmarked mental-health app patterns to find where existing apps ask too much, too soon.' },
          { i: '02', t: 'Designed Brain Dump as the anchor feature — one unload, one forced choice — instead of another open-ended journal.' },
          { i: '03', t: 'Built and iterated the full prototype directly in Claude, screen by screen, before any handoff to Figma.' },
          { i: '04', t: 'Exported the code-based prototype to Figma via the HTML-to-Design plugin to scale toward MVP without redrawing screens.' }
        ],
        impact: [{ n: '5\u201310 min', l: 'target daily session length' }, { n: '20+', l: 'screens in the clickable prototype' }, { n: '1 task', l: 'forced daily priority from Brain Dump' }, { n: '4 phases', l: 'research \u2192 prototype \u2192 Figma handoff \u2192 UI guideline' }],
        roleShown: true,
        role: [
          'Researched the mental health niche and benchmarked comparable apps to find the gap Mintra fills.',
          'Designed the Brain Dump mechanic and the information architecture around it — onboarding, Home, Rituals, Sleep, Progress.',
          'Iteratively built and refined the interactive prototype in Claude, screen by screen, before considering handoff.',
          'Exported the code-based design to Figma via the HTML-to-Design plugin to prepare for MVP scaling.',
          'Building the UI guideline in Figma + Claude, with real links and button states in the interactive prototype.'
        ],
        note: 'Built iteratively in Claude across four phases: research and benchmarking, prototype iteration, exporting to Figma via the HTML-to-Design plugin for MVP scaling, and now a UI guideline built in Figma + Claude with real links and button states.',
        tools: ['Claude Artifacts', 'Figma', 'HTML to Design', 'HTML/CSS/JS']
      },
      {
        category: 'apps', kind: 'iOS · Humanitarian Tech', cover: IMG('uploads/poshuk-cover-3x.png'), focus: '50% 50%', order: 7, seamlessShots: true,
        title: 'Poshuk — Fast, Remote Search Support for Missing Persons in Ukraine',
        badges: ['Humanitarian Tech', 'iOS'],
        meta: [{ k: 'Role', v: 'Product & UX Design' }, { k: 'Year', v: '2026' }, { k: 'Scope', v: '15+ screen prototype' }, { k: 'Platform', v: 'iOS' }, { k: 'Status', v: 'Concept — seeking collaborators' }],
        challenge: 'Searching for a missing person in Ukraine means retyping the same facts across Telegram, Facebook, registries, police and the Red Cross, with no shared record.',
        overview: 'One guided 3-step intake that generates ready-to-send requests and a shareable QR search card anyone can scan and respond to.',
        solutionShown: true,
        solution: [
          { h: '3-step onboarding', t: 'Photo, location and date, status. Unknowns can stay blank.' },
          { h: 'Auto-generated requests', t: 'Ready-to-send text for each organisation, tracked in one place.' },
          { h: 'QR search card', t: 'Shareable to messengers or shown full-screen in person.' }
        ],
        wideShots: true,
        shots: [
          { img: IMG('uploads/01-hero@3x.png'), label: 'Poshuk — case study, part 2', long: true },
          { img: IMG('uploads/03-overview@3x.png'), label: 'Poshuk — case study, part 3', long: true },
          { img: IMG('uploads/04-challenge@3x.png'), label: 'Poshuk — case study, part 4', long: true },
          { img: IMG('uploads/05-splash@3x.png'), label: 'Poshuk — case study, part 5', long: true },
          { img: IMG('uploads/06-what-i-designed@3x.png'), label: 'Poshuk — case study, part 6', long: true },
          { img: IMG('uploads/07-user-flow@3x.png'), label: 'Poshuk — case study, part 7', long: true },
          { img: IMG('uploads/08-onboarding@3x.png'), label: 'Poshuk — case study, part 8', long: true },
          { img: IMG('uploads/09-home@3x.png'), label: 'Poshuk — case study, part 9', long: true },
          { img: IMG('uploads/10-design-thinking@3x.png'), label: 'Poshuk — case study, part 10', long: true },
          { img: IMG('uploads/11-search-card@3x.png'), label: 'Poshuk — case study, part 11', long: true },
          { img: IMG('uploads/12-impact@3x.png'), label: 'Poshuk — case study, part 12', long: true },
          { img: IMG('uploads/13-physical-display@3x.png'), label: 'Poshuk — case study, part 13', long: true },
          { img: IMG('uploads/14-role@3x.png'), label: 'Poshuk — case study, part 14', long: true },
          { img: IMG('uploads/15-lists@3x.png'), label: 'Poshuk — case study, part 15', long: true },
          { img: IMG('uploads/16-workflow@3x.png'), label: 'Poshuk — case study, part 16', long: true },
          { img: IMG('uploads/17-support@3x.png'), label: 'Poshuk — case study, part 17', long: true },
          { img: IMG('uploads/18-premium@3x.png'), label: 'Poshuk — case study, part 18', long: true },
          { img: IMG('uploads/19-style@3x.png'), label: 'Poshuk — case study, part 19', long: true },
          { img: IMG('uploads/20-thanks@3x.png'), label: 'Poshuk — case study, part 20', long: true }
        ],
        thinking: [
          { i: '01', t: 'One guided flow instead of another form.' },
          { i: '02', t: '"I don\u2019t know" is a valid answer.' },
          { i: '03', t: 'The QR card connects every channel.' }
        ],
        impact: [{ n: '15+', l: 'clickable screens' }, { n: '3 steps', l: 'to a shareable search card' }, { n: 'EN + UA', l: 'full localization' }],
        note: '',
        tools: ['Claude Artifacts', 'Figma', 'HTML/CSS/JS', 'QR Generation']
      },
      {
        category: 'apps', kind: 'iOS · AI Onboarding', cover: IMG('gym-cover2.png'), focus: '50% 50%', order: 8, seamlessShots: true,
        title: 'Gym App — AI Fitness Coach & Personalised Training Platform',
        badges: ['AI Onboarding', 'iOS'],
        meta: [{ k: 'Role', v: 'UX/UI Design' }, { k: 'Year', v: '2025' }, { k: 'Scope', v: '22-screen system' }, { k: 'Platform', v: 'iOS' }, { k: 'Client', v: 'Fitness startup' }],
        challenge: 'Intermediate gym-goers were frustrated with generic apps — one-size-fits-all programs, no real-time feedback during sets, and no sense of progression. The startup needed a product that felt premium, motivating and genuinely personalised, not another calorie counter.',
        overview: 'Gym App is a dark-aesthetic iOS fitness platform built from scratch. It uses AI to generate personalised 14-day workout plans, adapts sessions to the user\u2019s goal and fitness level, and delivers a premium coaching experience through a coach feedback loop, rest timers and progress analytics — 22 screens across onboarding, dashboard, workout execution and progress, built on a bold black system.',
        solutionShown: true,
        solution: [
          { h: 'AI-powered onboarding', t: 'A 6-step questionnaire — goal, gender, body metrics, weekly schedule — feeding an AI generator that shows a real-time build animation before revealing the personalised 14-day programme.' },
          { h: 'Coach marketplace', t: 'Browse programmes by coach and specialty (strength, mobility, cardio, cut); a paywall that communicates value before asking for payment.' },
          { h: 'Workout execution', t: 'Set-by-set logging with weight/reps adjusters, coach video demo, form upload for AI review and an auto-advancing “Set Done” CTA.' },
          { h: 'Progress module', t: 'A private personal archive — photo timeline by week and per-exercise trend charts (Bench, Squat, Deadlift, OHP); measurements always private.' }
        ],
        wideShots: true,
        shots: Array.from({ length: 16 }, (_, i) => ({ img: IMG('gym-lr-' + String(i + 1).padStart(2, '0') + '.png'), label: 'Gym App — case study, part ' + (i + 1), long: true })),
        thinking: [
          { i: '01', t: 'Front-loaded the value: a short, visual 6-step flow that asks only what the AI needs — goal, body metrics, weekly schedule.' },
          { i: '02', t: 'Turned the wait into delight — a real-time build animation that makes the AI feel like it\u2019s working for you before the reveal.' },
          { i: '03', t: 'Designed the reveal as a moment, not a screen — the personalised programme lands as a payoff, not a settings page.' },
          { i: '04', t: 'Grounded everything in research — 8-app competitive audit, 5 interviews (ages 24–38) and two personas: “Consistent Alex” and “Result-Driven Max”.' }
        ],
        impact: [{ n: '22', l: 'screens delivered, ready for developer handoff' }, { n: '>80%', l: 'modelled onboarding completion in usability tests' }, { n: '6 steps', l: 'from cold start to a personalised plan' }, { n: '“real trainer”', l: 'how testers described the premium feel' }, { n: '×3', l: 'testers re-watched the AI build animation' }],
        note: 'The first hi-fi interactive prototype was built entirely in Claude Artifacts as a single HTML file — 3 iterations, 17→22 screens. It became the source of truth for interaction specs before any Figma work began. Workflow: design in Figma → prototype in Claude → test in Figma Make → finalize in Claude.',
        tools: ['Claude Artifacts', 'Figma', 'HTML/CSS/JS', 'Midjourney']
      },
      {
        category: 'ecom', kind: 'E-commerce · Apple Retail', cover: IMG('ifranko-cover2.png'), order: 1.5,
        title: 'iFranko — Apple Store E-commerce Redesign',
        badges: ['E-commerce', 'Apple Products', 'Redesign'],
        meta: [{ k: 'Role', v: 'Product & UX/UI Design' }, { k: 'Year', v: '2026' }, { k: 'Scope', v: 'Full store redesign' }, { k: 'Client', v: 'iFranko' }, { k: 'Status', v: 'Shipped' }],
        challenge: 'Apple resellers compete on a product range they do not control — the differentiator is the buying experience. iFranko\u2019s store made that harder than it needed to be: a dense navigation covering iPhone, iPad, Mac, Watch, gadgets, accessories and refurbished stock, product pages that buried the specs buyers actually compare, and repair and trade-in services hidden behind the catalogue rather than sold alongside it.',
        overview: 'A full redesign of the iFranko storefront around a dark, product-forward system. Category navigation is persistent and scannable, product pages lead with imagery and the specs that drive a decision, and the catalogue grid supports the rating and price comparison people actually shop by. Repair and trade-in sit in the primary navigation as services, not afterthoughts.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Persistent category bar', t: 'iPhone, iPad, Mac, Watch, gadgets, accessories and refurbished Apple always one click away, under the main nav.' },
          { h: 'Product-forward pages', t: 'Large product imagery with a colour and configuration strip, so the decision happens above the fold.' },
          { h: 'Comparable catalogue grid', t: 'Sort by rating and price with consistent cards, built for the side-by-side comparison Apple buyers do.' },
          { h: 'Services in the nav', t: 'Repair and Trade-In promoted to primary navigation instead of being buried under the catalogue.' },
          { h: 'Dark product-first system', t: 'A deep teal-to-black palette that lets Apple product photography carry the page.' }
        ],
        shots: [
          { img: IMG('ifranko-case2.png'), label: 'Home, catalogue, product & checkout flows', long: true }
        ],
        thinking: [
          { i: '01', t: 'Started from the reseller\u2019s real problem: the product range is fixed, so the experience is the only lever.' },
          { i: '02', t: 'Made the category bar persistent — an Apple store is browsed by device type, not by search.' },
          { i: '03', t: 'Let product photography lead and kept chrome dark and quiet so nothing competes with it.' },
          { i: '04', t: 'Pulled repair and trade-in up into the nav, turning services into a reason to choose iFranko over a bigger reseller.' }
        ],
        impact: [{ n: '7', l: 'device categories navigable from any page' }, { n: 'Services', l: 'repair & trade-in promoted to primary nav' }, { n: 'One system', l: 'consistent cards across catalogue, category and product pages' }],
        roleShown: true,
        role: [
          'Led product and UX/UI design for the full storefront redesign.',
          'Ran UX research on how Apple buyers compare configurations and prices before purchase.',
          'Restructured the information architecture so device categories and services are always reachable.',
          'Designed the dark, product-forward visual system and the component set behind it.',
          'Built the design system covering navigation, product, catalogue and checkout.'
        ],
        note: '',
        tools: ['Figma', 'Design System', 'UX Research', 'Prototyping']
      },
      {
        category: 'apps', kind: 'FinTech · Enterprise', cover: IMG('swissmed-cover.png'), order: -1,
        title: 'Swiss Insurance',
        badges: ['FinTech', 'Enterprise', 'AI Architecture'],
        meta: [{ k: 'Client', v: 'Swiss B2B Insurance Ecosystem' }, { k: 'Role', v: 'UX/UI Design' }, { k: 'Year', v: '2025' }, { k: 'Focus', v: 'Enterprise onboarding + activation' }, { k: 'Platform', v: 'iOS' }],
        challenge: 'Complex legacy insurance logic, slow multi-step onboarding, and low conversion in enterprise sales were costing real revenue — every extra form field meant another dropped applicant.',
        overview: 'Engineered a high-velocity, intuitive AI-driven interface that collapsed complex legacy logic and multi-step forms into a flawless, guided 2-minute workflow — without losing compliance coverage or account depth.',
        solutionShown: true,
        solution: [
          { h: 'Guided enterprise onboarding', t: 'Legacy multi-step forms compressed into a single guided flow — one decision per screen, plan selection to family coverage.' },
          { h: 'Unified policy dashboard', t: 'Linked policies, emergency assistance and documents surfaced in one view instead of scattered legacy portals.' },
          { h: 'Instant appointment & care access', t: 'Booking, provider messaging and appointment history consolidated for faster time-to-value after signup.' },
          { h: 'Built for enterprise scale', t: 'A component system designed to extend across new insurance products without re-engineering the core flow.' }
        ],
        wideShots: true,
        shots: [
          { img: IMG('swissmed-long1.png'), label: 'Swissmed — case study, part 1', long: true },
          { img: IMG('swissmed-long2.png'), label: 'Swissmed — case study, part 2', long: true }
        ],
        thinking: [
          { i: '01', t: 'Reframed onboarding as one guided decision at a time, not a legacy form dump — cutting time-to-activation.' },
          { i: '02', t: 'Unified fragmented legacy account, policy and support data into a single coherent dashboard.' },
          { i: '03', t: 'Designed the system to scale — new products and plans slot into the same guided pattern.' }
        ],
        impact: [{ n: '2 min', l: 'average enterprise onboarding time, down from multi-step legacy forms' }, { n: '↑', l: 'boosted enterprise sales velocity and activation rate' }, { n: '1 flow', l: 'onboarding, policy, claims & support unified end-to-end' }],
        note: '',
        tools: ['Figma', 'Component Library', 'Prototyping']
      },
      {
        category: 'apps', kind: 'Web3 · SocialTech', cover: IMG('uploads/00-cover-f21855b5.png'), focus: '50% 50%', order: 9, seamlessShots: true,
        title: 'Interactive Social Game Up',
        badges: ['Web3', 'SocialTech', 'Gamification Ecosystem'],
        meta: [{ k: 'Client', v: 'Interactive Social Game Platform / Web3 Gamified App' }, { k: 'Role', v: 'UX/UI Design' }, { k: 'Year', v: '2025' }, { k: 'Deliverable', v: 'Design system + handoff' }, { k: 'Platform', v: 'iOS' }],
        challenge: 'Complex mechanics confused new users before their first game, causing low engagement and high churn.',
        overview: 'A fast onboarding flow and clear social loops that get players into a live game in seconds.',
        solutionShown: true,
        solution: [
          { h: 'Instant-start onboarding', t: 'A live game in seconds, not screens of rules.' },
          { h: 'Social loop', t: 'Invite, match and play flows that bring groups back.' },
          { h: 'Scalable game library', t: 'New game modes without redesigning the core loop.' }
        ],
        shots: ['01-cover-39e30cb3', '02-overview-cebcc4ae', '03-challenge', '04-onboarding', '05-designed', '06-live-game', '07-screens', '08-thinking', '09-full-system', '10-impact', '11-closing'].map((f, i) => ({ img: IMG('uploads/' + f + '.png'), label: 'Self X — case study, part ' + (i + 2), long: true })),
        thinking: [
          { i: '01', t: 'Cut time-to-first-play to seconds.' },
          { i: '02', t: 'Social loop as the retention engine.' }
        ],
        impact: [{ n: 'DAU ↑', l: 'faster activation' }, { n: 'Retention', l: 'longer-term engagement' }],
        note: '',
        tools: ['Figma', 'Design Tokens', 'Charts', 'Handoff Specs']
      },
      {
        category: 'apps', kind: 'iOS · Community', cover: IMG('repat-cover4.png'), order: 1, stores: [{ label: 'Visit live site', url: 'https://www.repat.africa/fr/' }, { label: 'Open app on Google Play', url: 'https://play.google.com/store/apps/details?id=africa.repat.app' }],
        title: 'Community App & Site for African Repatriates',
        badges: ['iOS', 'AI Integration', 'Startup MVP'],
        meta: [{ k: 'Role', v: 'Product & UX/UI Design' }, { k: 'Year', v: '2026' }, { k: 'Scope', v: 'App + web platform' }, { k: 'Platform', v: 'iOS' }, { k: 'Status', v: 'Shipped' }],
        challenge: 'Returning African repatriates often face social and professional isolation, making it difficult to reconnect with peers, find like-minded friends, or access career opportunities in a new or home environment.',
        overview: 'I led the UX strategy and product design to create a community-driven platform that combines dating, friendship, and business networking in one cohesive ecosystem — designed so a single profile serves all three intents without fragmenting the experience.',
        solutionShown: true,
        solution: [
          { h: 'User-friendly connections', t: 'Helping users find and engage with like-minded individuals across dating, friendship and professional intent.' },
          { h: 'Trust-based relationship building', t: 'Profile validation, recommendations and verified interactions that make first contact feel safe.' },
          { h: 'One profile, three intents', t: 'A single identity that adapts context — social, romantic or professional — without forcing users to maintain separate accounts.' },
          { h: 'Design system for scale', t: 'A shared component library covering both the app and the web platform, built to extend as the community grows.' }
        ],
        wideShots: true,
        shots: [
          { img: IMG('repat-longread.png'), label: 'Repat Africa — case study', long: true }
        ],
        thinking: [
          { i: '01', t: 'Started from the isolation problem itself — the product had to solve reconnection, not just matching.' },
          { i: '02', t: 'Merged dating, friendship and business networking into one ecosystem instead of three disconnected apps.' },
          { i: '03', t: 'Made trust the design constraint — validation and recommendations built into the connection flow, not bolted on.' },
          { i: '04', t: 'Built a shared design system so app and web stay consistent as the community scales.' }
        ],
        impact: [{ n: '3-in-1', l: 'dating, friendship & business networking in one platform' }, { n: 'Trust-first', l: 'profile validation & verified interactions' }, { n: 'App + web', l: 'cohesive ecosystem across both surfaces' }],
        roleShown: true,
        role: [
          'Led the UX strategy and product design for the full platform, app and web.',
          'Ran UX research with the repatriate community to understand the real barriers to reconnection.',
          'Designed the trust layer — profile validation, recommendations and verified interactions.',
          'Integrated AI to surface relevant connections across social and professional intent.',
          'Built the design system covering both app and web for consistent scaling.'
        ],
        note: '',
        tools: ['Figma', 'Design System', 'AI Integration', 'Prototyping']
      },
      {
        category: 'apps', kind: 'iOS · Music Community', cover: IMG('sefer-cover4.png'), order: 10,
        title: 'Sefer — Music Community for Finding & Collaborating with Talent',
        badges: ['iOS', 'AI Integration', 'Startup MVP'],
        meta: [{ k: 'Role', v: 'Product & UX/UI Design' }, { k: 'Year', v: '2026' }, { k: 'Scope', v: 'MVP + design system' }, { k: 'Platform', v: 'iOS' }, { k: 'Status', v: 'Shipped' }],
        challenge: 'Independent musicians, producers and songwriters have no single place to be found. Talent is scattered across Instagram grids, SoundCloud links and DM threads — none of which show what an artist actually does, who they work well with, or what they are available for. Labels, scouts and bookers looking for the right voice or the right beat have to hunt across the same broken channels.',
        overview: 'Sefer is a music community built around one thing: a public artist profile that works as a real portfolio. Tracks, credits, style and availability live in one place, so an artist is discoverable by collaborators, scouts and bookers alike — and can sell beats and samples or take paid session work from the same profile.',
        solutionShown: true,
        solution: [
          { h: 'Artist profile as portfolio', t: 'Tracks, credits, genre and availability in one public profile — the core object the whole product is built around.' },
          { h: 'AI collaborator matching', t: 'Suggests collaborators by style and genre, so a songwriter finds the right producer without cold-DMing dozens of accounts.' },
          { h: 'Automatic track tagging', t: 'Uploaded tracks are analysed to tag genre and mood, making artists discoverable without manual metadata work.' },
          { h: 'Scout recommendations', t: 'Surfaces relevant talent to labels and A&R scouts based on style fit rather than follower count.' },
          { h: 'Sell beats & book sessions', t: 'Beats and samples sold directly from the profile, alongside paid collaboration and session fees.' },
          { h: 'Design system for scale', t: 'A component library covering profile, discovery, upload and commerce flows, built to extend as the catalogue grows.' }
        ],
        wideShots: true,
        shots: [
          { img: IMG('sefer-long1.png'), label: 'Séfer — case study, part 1', long: true },
          { img: IMG('sefer-long2.png'), label: 'Séfer — case study, part 2', long: true }
        ],
        thinking: [
          { i: '01', t: 'Made the profile the product — everything else (matching, commerce, scouting) hangs off one well-built object.' },
          { i: '02', t: 'Used AI to remove metadata busywork: tracks get tagged on upload so artists stay discoverable without extra effort.' },
          { i: '03', t: 'Designed discovery around style fit, not follower count, so smaller artists surface to the right scouts.' },
          { i: '04', t: 'Kept commerce native to the profile — selling beats and booking sessions are not a separate destination.' }
        ],
        impact: [{ n: '1 profile', l: 'serves collaborators, scouts and bookers alike' }, { n: 'Auto-tagged', l: 'genre and mood detected on upload' }, { n: 'Beats + sessions', l: 'both revenue paths native to the profile' }],
        roleShown: true,
        role: [
          'Led product and UX/UI design for the full MVP, from profile architecture to commerce flows.',
          'Ran UX research with musicians, producers and songwriters to understand how talent actually gets found today.',
          'Designed the AI layer — collaborator matching, track tagging and scout recommendations — into the core flows rather than as a separate feature.',
          'Built the design system covering profile, discovery, upload and commerce.',
          'Scoped and shipped the MVP with the artist profile as the anchor.'
        ],
        note: '',
        tools: ['Figma', 'Design System', 'AI Integration', 'Prototyping']
      },
      {
        category: 'ecom', kind: 'iOS · AR Commerce', cover: IMG('nxtshop-cover.png'), order: 2.5,
        title: 'NxtShop — Beauty App with AR Try-On',
        badges: ['iOS', 'E-commerce', 'AR Try-On'],
        meta: [{ k: 'Role', v: 'Lead UX/UI Design' }, { k: 'Type', v: 'Mobile app + AR' }, { k: 'Platform', v: 'iOS' }],
        overview: 'NxtShop is a beauty shopping app with AR try-on: users test makeup on their own face in real time before they buy.',
        challenge: 'Choosing makeup online is difficult because users cannot see how products will look on them. In the app, shoppers try on lips, blush, eyeliner and mascara, save looks as personal filters and buy the products in one flow.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'From wireframe to UI', t: 'The home screen started as a low-fidelity wireframe and became a branded layout with category shortcuts and featured products.' },
          { h: 'AR try-on', t: 'The camera view switches between makeup and filters, with lighting modes, shade swatches, finish options and an intensity slider.' },
          { h: 'Home, promo and cart', t: 'Promo banners, new arrivals and product lists lead into a cart with quantity controls.' },
          { h: 'Profile and filters', t: 'Users keep favourites, saved filters and orders in their profile.' }
        ],
        shots: [
          { img: IMG('nxtshop-longread.png'), label: 'NxtShop — case study', long: true }
        ],
        thinking: [
          { i: '01', t: 'Treated the try-on as the storefront — discovery happens inside the video feed, not in a separate catalogue.' },
          { i: '02', t: 'Allowed cross-brand mixing so users can build a full look rather than evaluate one product at a time.' },
          { i: '03', t: 'Kept AR interactions intuitive and visually light, so the effect stays the focus and the UI recedes.' }
        ],
        impact: [{ n: 'Real-time', l: 'virtual try-on with realistic AR effects' }, { n: 'Cross-brand', l: 'custom looks mixing products from multiple brands' }, { n: 'In-video', l: 'store filters for interactive product discovery' }],
        roleShown: true,
        role: [
          'Served as Lead UX/UI Designer for the AR makeup app, owning the full interface and interaction design.',
          'Led the web architecture alongside the app design.',
          'Designed the real-time try-on flow — ready-made masks, custom looks and cross-brand product mixing.',
          'Integrated the cosmetic store with in-video filters so discovery and try-on stay a single experience.',
          'Shaped the AR interaction patterns to stay intuitive, visually appealing and immersive.'
        ],
        note: '',
        tools: ['Figma', 'AR Prototyping', 'Design System', 'HTML/CSS/JS']
      },
      {
        category: 'apps', kind: 'iOS · Connected Device', cover: IMG('petfeeder-cover.png'), focus: '35% 50%', order: 4, hidden: true,
        title: 'Smart Pet Feeder App — Remote Control & Interaction',
        badges: ['iOS', 'AI Integration', 'Startup MVP'],
        meta: [{ k: 'Role', v: 'Lead UX/UI Design & Web Architecture' }, { k: 'Year', v: '2026' }, { k: 'Scope', v: 'App + web architecture' }, { k: 'Platform', v: 'iOS' }, { k: 'Status', v: 'Shipped' }],
        challenge: 'Pet owners often worry about feeding and caring for their pets when they are away. Traditional solutions offer limited interaction and control, leaving owners anxious and pets less engaged.',
        overview: 'The Smart Pet Feeder App lets pet owners feed, monitor, and interact with their pets remotely. Connected to a feeder with a camera and microphone, users can dispense food or water manually or automatically, watch their pets in real time, and talk to them through the app. The solution delivers a fun, intuitive, and reliable experience, keeping pets fed, entertained, and cared for from anywhere.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Remote feeding', t: 'Dispense food or water manually or on a schedule, from anywhere.' },
          { h: 'Real-time monitoring', t: 'Watch pets live through the feeder\u2019s built-in camera.' },
          { h: 'Two-way interaction', t: 'Talk to pets through the app\u2019s microphone, turning a feeder into a way to stay connected.' },
          { h: 'Fun and intuitive controls', t: 'Easy navigation designed for all pet owners, not just technical users.' }
        ],
        shots: [
          { img: IMG('petfeeder-1.png'), label: 'Feeding, monitoring & interaction flows' }
        ],
        thinking: [
          { i: '01', t: 'Designed around owner anxiety — the product\u2019s job is reassurance, not just scheduling.' },
          { i: '02', t: 'Made live video and voice first-class alongside feeding, so the app is a connection, not a control panel.' },
          { i: '03', t: 'Balanced reliability with playfulness — controls stay dependable while the experience stays fun.' }
        ],
        impact: [{ n: 'Remote', l: 'manual and scheduled feeding from anywhere' }, { n: 'Live', l: 'real-time camera monitoring' }, { n: 'Two-way', l: 'voice interaction with pets through the app' }],
        roleShown: true,
        role: [
          'Served as Lead UX/UI Designer & Web Architect for the product.',
          'Designed the intuitive interface and remote controls.',
          'Prototyped real-time feeding, monitoring, and interaction flows.',
          'Ensured seamless usability across mobile devices.',
          'Balanced reliability, fun, and engagement in the user experience.'
        ],
        note: '',
        tools: ['Figma', 'App Store Design', 'Design System', 'Prototyping']
      },
      {
        category: 'apps', kind: 'iOS · Fitness & Health', cover: IMG('itfit-cover2.jpg'), focus: '18% 50%', order: 2, hidden: true,
        title: 'ItFit — Personalized Training, Nutrition & Safety Monitoring',
        badges: ['iOS', 'Health & Fitness', 'AI Integration'],
        meta: [{ k: 'Role', v: 'UI/UX Designer' }, { k: 'Year', v: '2026' }, { k: 'Scope', v: 'App design' }, { k: 'Platform', v: 'iOS' }, { k: 'Status', v: 'Shipped' }],
        challenge: 'Traditional fitness apps often provide generic workout and nutrition plans with limited safety guidance, making training less effective and sometimes unsafe for users.',
        overview: 'ItFit is a comprehensive fitness app that helps users track workouts, nutrition, and personalized training plans. It generates custom daily workout and meal plans, monitors heart rate to ensure safe exercise, and allows progress tracking and consultations, giving every user an efficient, tailored, and engaging fitness experience.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Personalized plans', t: 'Daily training and meal plans tailored to individual goals.' },
          { h: 'Progress tracking', t: 'Tracks workouts, nutrition, and overall performance over time.' },
          { h: 'Heart rate monitoring', t: 'Automatically pauses exercises if safe limits are exceeded.' },
          { h: 'Consultation & guidance', t: 'Built-in features for safe, efficient, and tailored fitness support.' }
        ],
        shots: [
          { img: IMG('itfit-1.jpg'), label: 'Registration, onboarding & training flows' }
        ],
        thinking: [
          { i: '01', t: 'Made safety a first-class feature — heart rate monitoring gates the workout, not an afterthought stat.' },
          { i: '02', t: 'Personalized plans from the first session, so users never face a generic, one-size-fits-all program.' },
          { i: '03', t: 'Kept onboarding and daily flows simple, so tracking and consultation stay effortless to use.' }
        ],
        impact: [{ n: 'Personalized', l: 'daily workout and meal plans' }, { n: 'Safe', l: 'heart rate–guided workouts' }, { n: 'All-in-one', l: 'training, nutrition & consultation' }],
        roleShown: true,
        role: [
          'Served as UI/UX Designer for the ItFit app.',
          'Designed intuitive interfaces for workouts, meal tracking, and consultations.',
          'Created personalized training and nutrition flows.',
          'Integrated heart rate monitoring and safety features into the core experience.',
          'Prototyped and mapped user journeys for a seamless fitness experience.'
        ],
        note: '',
        tools: ['Prototyping', 'Interaction Design', 'Mobile App UI/UX', 'UX Writing', 'Journey Mapping']
      },
      {
        category: 'web', kind: 'Web · Corporate Site', cover: IMG('dplab-cover5.png'),
        title: 'DPlab — Digital Agency Website Redesign, Vilnius',
        badges: ['Web', 'Corporate', 'Redesign'],
        meta: [{ k: 'Client', v: 'DPlab' }, { k: 'Role', v: 'Lead UX/UI Designer' }, { k: 'Year', v: '2026' }, { k: 'Type', v: 'Website redesign' }, { k: 'Platform', v: 'Web' }],
        overview: 'Redesign of the website of a digital agency in Vilnius: design, web development, marketing and SEO.',
        challenge: 'DPlab is a digital agency based in Vilnius. It builds digital strategies that help businesses become more visible and reach more customers. Its services cover design, website development, digital marketing, social media, eCommerce and SEO, from a first consultation to a finished project.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Before and after', t: 'A text-heavy template with plain service cards becomes a soft periwinkle layout with glass 3D forms, project previews and a clear path to contact.' },
          { h: 'Service cards', t: 'Services sit as cards over live project previews, each with an arrow link.' },
          { h: 'Portfolio showcase', t: 'A mobile app is presented in angled phone mockups.' }
        ],
        shots: [
          { img: IMG('dplab-longread.png'), label: 'DPlab — case study', long: true }
        ],
        thinking: [
          { i: '01', t: 'Treated typography as the main visual driver, letting bold type carry brand personality without heavy imagery.' },
          { i: '02', t: 'Used micro-interactions sparingly, placed where they reinforce structure rather than decorate it.' },
          { i: '03', t: 'Kept every section conversion-oriented, so creativity never comes at the cost of clarity.' }
        ],
        impact: [{ n: 'Stronger', l: 'digital brand presence' }, { n: 'Higher', l: 'user engagement through interaction' }, { n: 'Responsive', l: 'structure optimized for all devices' }],
        roleShown: true,
        role: [
          'Served as Lead UX/UI Designer for the corporate website.',
          'Created the interactive visual concept.',
          'Designed structured user flows and layouts.',
          'Prototyped dynamic transitions and interactions.',
          'Ensured responsive and conversion-oriented design.'
        ],
        note: '',
        tools: ['Interactive Design', 'UX & UI', 'Landing Page Design', 'Responsive Web Design']
      },
      {
        category: 'ecom', kind: 'Web · Ecommerce', cover: IMG('dc-cover5.png'), order: 2, visit: { url: 'https://www.defendandcarry.com', label: 'Visit site ↗' }, stores: [{ label: 'Visit live site', url: 'https://www.defendandcarry.com' }],
        title: 'Defend & Carry — Tactical & Optics Gear E-commerce',
        badges: ['Web', 'E-commerce', 'Tactical Gear'],
        meta: [{ k: 'Client', v: 'Defend & Carry' }, { k: 'Parent company', v: 'Apache Industries' }, { k: 'Role', v: 'UX/UI Designer' }, { k: 'Type', v: 'E-commerce website' }, { k: 'Platform', v: 'Web' }],
        overview: 'An online store for sport optics, tactical and military gear, hunting gear and eyewear.',
        challenge: 'Defend & Carry is an online retailer of sport optics, tactical and military gear, scientific products, hunting gear, professional-grade products and eyewear. It is a subsidiary of Apache Industries. Next to the shop, the site runs a blog with gear reviews, the Gun of the Week series and articles on concealed carry.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Catalog and filters', t: 'Category tabs, a filter sidebar with price range, manufacturer, lens diameter and magnification, and product cards with discount badges.' },
          { h: 'Two homepage versions', t: 'One with a \u201cFor your first hunt\u201d selection and accessory banners, one with promo banners, a special offer and an Apache Industries block.' }
        ],
        shots: [
          { img: IMG('dc-longread.png'), label: 'Defend & Carry — case study', long: true }
        ],
        thinking: [
          { i: '01', t: 'Prioritized technical hierarchy on product pages, so specs read clearly instead of overwhelming the buyer.' },
          { i: '02', t: 'Built filtering and comparison to match how tactical buyers actually shop — by generation, manufacturer, and spec.' },
          { i: '03', t: 'Kept the visual identity tactical and professional, reinforcing trust in a high-stakes purchase category.' }
        ],
        impact: [{ n: 'Clearer', l: 'product specifications and features' }, { n: 'Streamlined', l: 'navigation and product discovery' }, { n: 'Responsive', l: 'user-focused ecommerce experience' }],
        roleShown: true,
        role: [
          'Served as UX/UI Designer for the ecommerce platform.',
          'Designed product page layouts and technical hierarchy.',
          'Built navigation systems and information architecture.',
          'Developed conversion optimization strategies.',
          'Ensured usability and clarity in a highly technical ecommerce environment.'
        ],
        note: '',
        tools: ['UX & UI Design', 'Ecommerce Optimization', 'Responsive Design', 'Information Architecture']
      },
      {
        category: 'ecom', kind: 'Web · Ecommerce', cover: IMG('agm-cover4.png'), order: 3, stores: [{ label: 'Visit live site', url: 'https://www.agmglobalvision.com' }],
        title: 'AGM Global Vision — E-commerce Platform for Defense Equipment',
        badges: ['E-commerce', 'Optics', 'Live website'],
        meta: [{ k: 'Client', v: 'AGM Global Vision' }, { k: 'Role', v: 'UX/UI Design' }, { k: 'Year', v: '2025' }, { k: 'Platform', v: 'Web' }, { k: 'Status', v: 'Live' }],
        overview: 'An e-commerce platform for a US supplier of thermal imaging, night vision and defense equipment.',
        challenge: 'AGM Global Vision supplies customers in the United States and around the world with thermal imaging and digital night vision devices, from handheld units to vehicle-mounted systems. Buyers need to compare technical specifications and purchase with confidence.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Homepage and promo', t: 'A homepage built around product categories, news and seasonal promo banners such as Black Friday and Cyber Monday.' },
          { h: 'Product and catalog', t: 'Product pages with gallery and specs, a catalog grouped by category, and a list view for quick ordering.' },
          { h: 'Mobile and compare', t: 'A compare tray that holds up to four devices and a side-by-side comparison table on mobile.' }
        ],
        shots: [
          { img: IMG('agm-longread.png'), label: 'AGM Global Vision — case study', long: true }
        ],
        tools: ['Figma', 'UX & UI Design', 'Ecommerce']
      },
      {
        category: 'ecom', kind: 'Web · B2B Wholesale', cover: IMG('unifood-cover3.png'), order: 4, seamlessShots: true, visit: { url: 'https://claude.ai/artifact/BDgonfSoSmkDCVLWVQLoEd', label: 'View prototype ↗' }, stores: [{ label: 'Open interactive prototype', url: 'https://claude.ai/artifact/BDgonfSoSmkDCVLWVQLoEd' }], order: 1,
        title: 'Unifood — Website Redesign for unifood.dk',
        badges: ['E-commerce', 'B2B', 'Wholesale', 'Responsive'],
        meta: [{ k: 'Role', v: 'UX/UI Designer' }, { k: 'Year', v: '2026' }, { k: 'Scope', v: 'Responsive website prototype' }, { k: 'Platform', v: 'Desktop, tablet, mobile' }, { k: 'Status', v: 'Design concept' }],
        challenge: 'The current site lists products in one long, dense grid. Search, categories, contacts and pickup information compete for attention. Quantities are hard to enter for wholesale orders, and it is not clear how an order reaches the warehouse.',
        overview: 'A catalog-first redesign of the website for Unifood Import A/S, a Danish wholesale food importer with over 1,400 products. Customers open the site, find a product in two clicks, set the quantity in units, cases or pallets, and send a pickup order to the warehouse. No online payment.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Catalog first', t: 'A low banner slider (three slides) with a headline and two actions, followed directly by the catalog. The banner scales with the screen so the first row of products stays visible on laptop and tablet.' },
          { h: 'Category sidebar', t: 'All categories in one column next to compact product cards of equal size. Each card shows brand, item number, quantity and case size, with the add button on one baseline. Pagination below.' },
          { h: 'Bulk-ready pop-up', t: 'Product details in one table, a unit selector (stk / kolli / palle), a typed quantity field and quick-add chips (+10, +50, +100). On mobile the "Læg i kurv" button stays fixed at the bottom.' },
          { h: 'Cart without payment', t: 'The customer edits quantities, chooses the pickup warehouse, adds a note and sends the order. A confirmation shows the order lines and the pickup address.' },
          { h: 'Structured menu', t: 'Opening hours, pickup information and contacts are one click away in the header, with all three locations in one dropdown. Only the current page is highlighted.' },
          { h: 'Same flow on mobile', t: 'The whole flow works at 390 px: home, menu with search, catalog, product and cart, with touch targets sized for one hand.' }
        ],
        shots: [
          { img: IMG('unifood-longread-v3.png'), label: 'Unifood — case study', long: true }
        ],
        tools: ['Figma', 'UX & UI Design', 'Responsive design']
      },
      {
        category: 'web', kind: 'Web · Corporate Site', cover: IMG('kortical-cover.png'),
        title: 'Kortical — Website Redesign',
        badges: ['Web', 'Corporate Site', 'Redesign', 'Design system'],
        meta: [{ k: 'Role', v: 'UI/UX design, website redesign, design system, responsive design, prototyping' }, { k: 'Platform', v: 'Desktop, mobile' }],
        challenge: 'Kortical is a UK enterprise AI company that builds AI agents to automate complex business workflows end to end, securely and reliably. Its clients include the NHS, Deloitte, Santander and Reed.',
        overview: 'I redesigned the AI Agents homepage for desktop and mobile, along with the mobile menu, the 404 page and a shared design system: colour palette, Work Sans typography, buttons and their states, cards and forms. The layout keeps a strict light structure, with a cyan-to-aqua gradient for key sections and yellow kept for the main actions.',
        wideShots: true,
        shots: [
          { img: IMG('kortical-1.png'), label: 'Desktop, mobile, navigation, details & style guide', long: true }
        ],
        tools: ['UI/UX design', 'Design system', 'Responsive design', 'Prototyping']
      },
      {
        category: 'web', kind: 'Web · Promo Site', cover: IMG('laurie-cover.png'),
        title: 'Laurie Handlers — Website Redesign for an Intimacy Speaker & Author',
        badges: ['Web', 'Promo Site', 'Redesign'],
        meta: [{ k: 'Client', v: 'Laurie Handlers' }, { k: 'Role', v: 'UI/UX Design' }, { k: 'Pages', v: 'Homepage, Retreats' }, { k: 'Platform', v: 'Web' }],
        overview: 'A dark, cinematic redesign of the website of an international speaker and bestselling author on intimacy and relationships.',
        challenge: 'Laurie Handlers, MA, is an international speaker, bestselling author and a four-decade pioneer in sacred sexuality. She has guided people in more than 50 countries. She is the author of two Amazon international bestsellers, Sex & Happiness: The Tantric Laws of Intimacy and Sex & Happiness: It Gets Better with Age, and runs retreats and trainings on intimacy and relationships. The website presents her work, books, retreats and newsletter.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Homepage', t: 'The homepage moves from bright red and white blocks to a dark photographic layout with one red accent and a script typeface for emphasis.' },
          { h: 'Retreats page', t: 'Each retreat is a card with a landscape photo, dates, location and a single outlined button. Shown in two background tones.' }
        ],
        shots: [
          { img: IMG('laurie-longread.png'), label: 'Laurie Handlers — case study' }
        ],
        tools: ['Figma', 'Illustrator', 'UI/UX Design']
      },
      {
        category: 'web', kind: 'Web · Branding & Platform', cover: IMG('wizards-cover.png'), hidden: true,
        title: 'Online Course Wizards — Branding and Website',
        badges: ['Web', 'Branding', 'E-learning', 'Responsive'],
        meta: [{ k: 'Role', v: 'UI/UX Design' }, { k: 'Year', v: '2022' }, { k: 'Process', v: 'Logo, branding, wireframes, UI design, interaction, social media templates' }],
        overview: 'Online Course Wizards is a service for fast-growing small and medium-sized businesses that need to train their employees online. The platform creates courses in many areas for employers who want to raise their team\u2019s skills and qualifications.',
        challenge: 'The client had no branding and an old long-read website with awkward navigation, no quick application forms and little information on cases and products.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Branding', t: 'I developed the brand with several logo compositions and a guideline for fonts and colours.' },
          { h: 'Platform', t: 'I then built a prototype and designed the final platform around visitors\u2019 needs, with quick request forms, a full component library and tablet and mobile versions.' }
        ],
        shots: [
          { img: IMG('wizards-longread.png'), label: 'Online Course Wizards — case study', long: true }
        ]
      },
      {
        category: 'apps', kind: 'iOS · Creator Subscriptions', cover: IMG('subflow-cover.png'), order: 0,
        title: 'Subflow — Creator Subscription App',
        badges: ['iOS', 'Subscriptions', 'Community'],
        meta: [{ k: 'Platform', v: 'iOS mobile app' }, { k: 'Process', v: 'UX flows, UI design, design system' }],
        overview: 'Subflow is a mobile platform where creators sell subscriptions to their content, courses and communities. Members join through an invitation link, browse the marketplace by topic, and subscribe monthly to get access to collections, pages, courses and podcasts.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Full mobile flow', t: 'I designed the full mobile flow: sign-in from an invite, the marketplace with filters and product landing pages, a subscribe form, the content library with a podcast player, community chat with channels and direct messages, and a profile for managing active, paused and cancelled subscriptions.' },
          { h: 'Interface and components', t: 'The UI uses a dark interface with a blue accent and a component library of buttons, inputs, dropdowns and chips.' }
        ],
        shots: [
          { img: IMG('subflow-longread.png'), label: 'Subflow — case study', long: true }
        ]
      },
      {
        category: 'ecom', kind: 'Mobile · Fine Jewellery', cover: IMG('gj-cover-v2.png'), order: -1, seamlessShots: true,
        title: 'Georg Jensen — Concept Mobile Store',
        badges: ['Mobile', 'E-commerce', 'Concept'],
        meta: [{ k: 'Role', v: 'UI/UX design' }, { k: 'Platform', v: 'Mobile' }, { k: 'Note', v: 'Personal concept, not an official Georg Jensen project' }],
        overview: 'This is a personal concept for a Georg Jensen mobile store, built around the brand\u2019s handcrafted 18k gold and certified sustainable diamonds. The aim was to make shopping for fine jewellery on a phone feel as calm and considered as visiting the maison in Copenhagen.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Type and palette', t: 'The interface pairs the Cormorant Garamond serif with a light sans-serif. It uses a quiet palette of deep cyan, warm gold and cream, and arch-shaped frames inspired by Scandinavian silverwork.' },
          { h: 'Discovery to purchase', t: 'Each screen leaves the jewellery and photography plenty of space. Short editorial pages and a reservation flow guide the visitor from discovery to purchase.' }
        ],
        shots: [
          { img: IMG('gj-v2-1.png'), label: 'Georg Jensen — case study, part 1', long: true },
          { img: IMG('gj-v2-2.png'), label: 'Georg Jensen — case study, part 2', long: true },
          { img: IMG('gj-v2-3.png'), label: 'Georg Jensen — case study, part 3', long: true },
          { img: IMG('gj-v2-4.png'), label: 'Georg Jensen — case study, part 4', long: true },
          { img: IMG('gj-v2-5.png'), label: 'Georg Jensen — case study, part 5', long: true }
        ]
      },
      {
        category: 'ecom', kind: 'Web · Automotive', cover: IMG('ayvens-cover.png'), order: 0, seamlessShots: true,
        visit: { url: 'https://claude.ai/artifact/4gGpNpj1heE36eCi3ZoGhh', label: 'View prototype ↗' },
        stores: [{ label: 'View prototype', url: 'https://claude.ai/artifact/4gGpNpj1heE36eCi3ZoGhh' }],
        title: 'Ayvens — Used-Car Product Page Concept',
        badges: ['Web', 'Mobile', 'Automotive', 'Concept'],
        meta: [{ k: 'Client', v: 'Ayvens (concept)' }, { k: 'Type', v: 'Product page · UI / UX' }, { k: 'Platforms', v: 'Desktop & mobile' }],
        overview: 'A concept product page for Ayvens used cars, shown on a 2023 Tesla Model Y Long Range Dual Motor from Fredericia. The page brings the whole purchase into one calm scroll: the car on a studio stage with three views, the cash price and monthly leasing, equipment, specifications, service history, financing options, other cars and a contact form.',
        solutionShown: true,
        wideShots: true,
        solution: [
          { h: 'Visual language', t: 'The visual language borrows from premium automotive sites: a light grey studio, thin Jost type, black pill buttons and a single black specification panel.' },
          { h: 'Desktop & mobile', t: 'Each section opens with a centred title and a short line, then one glass card or grid. On mobile the same sections stack into one column, with the price card pinned under the car.' }
        ],
        shots: [1, 2, 3, 4, 5, 6, 7, 8, 9].map((n) => ({ img: IMG('ayv-0' + n + '.png'), label: 'Ayvens — case study, part ' + n, long: true }))
      }
    ];

  slugOf(p) { return p.title.split(' — ')[0].toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, ''); }

  readHash = () => {
    const m = (location.hash || '').match(/^#\/case\/([\w-]+)/);
    if (m) {
      const i = this.cases.findIndex((p) => this.slugOf(p) === m[1]);
      if (i >= 0) { this.setState({ view: i }, () => window.scrollTo({ top: 0, behavior: 'instant' })); return; }
    }
    if (this.state.view !== -1) {
      this.setState({ view: -1 }, () => {
        const el = document.getElementById((location.hash || '#work').slice(1)) || document.getElementById('work');
        if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'instant' });
      });
    }
  };
  openCase = (i) => { location.hash = '#/case/' + this.slugOf(this.cases[i]); };
  goHome = () => { location.hash = '#work'; };
  setLang = (code) => { this.setState({ lang: code }); try { localStorage.setItem('olha-portfolio-lang', code); } catch (e) {} };

  onImgLoad = (src, e) => {
    const im = e.currentTarget;
    const o = im.naturalHeight > im.naturalWidth ? 'v' : 'h';
    if (this.state.orient[src] !== o) this.setState((s) => ({ orient: { ...s.orient, [src]: o } }));
  };

  splitLines(el) {
    const txt = el.getAttribute('data-lines') || '';
    el.textContent = '';
    const spans = txt.split(/\s+/).filter(Boolean).map((w) => { const sp = document.createElement('span'); sp.style.whiteSpace = 'nowrap'; sp.textContent = w + ' '; el.appendChild(sp); return sp; });
    const lines = [];
    let top = null;
    spans.forEach((sp) => { const t = sp.offsetTop; if (top === null || Math.abs(t - top) > 2) { lines.push([]); top = t; } lines[lines.length - 1].push(sp.textContent); });
    el.textContent = '';
    lines.forEach((ws, i) => {
      const outer = document.createElement('span'); outer.style.display = 'block';
      const inner = document.createElement('span'); inner.className = 'q-li'; inner.style.transitionDelay = (i * 60) + 'ms';
      inner.textContent = ws.join('').trimEnd();
      outer.appendChild(inner); el.appendChild(outer);
    });
    el.setAttribute('aria-label', txt);
    el.dataset.split = txt + '|' + el.clientWidth;
  }
  processLines() {
    document.querySelectorAll('[data-lines]').forEach((el) => {
      const key = (el.getAttribute('data-lines') || '') + '|' + el.clientWidth;
      if (el.dataset.split !== key) this.splitLines(el);
    });
  }
  onKey = (e) => { if (e.key === 'Escape' && (this.state.contactOpen || this.state.menuOpen || this.state.langOpen)) this.setState({ contactOpen: false, menuOpen: false, langOpen: false }); };
  onScroll = () => {
    if (this._sraf) return;
    this._sraf = requestAnimationFrame(() => {
      this._sraf = null;
      this.revealVisible();
      const sy = window.scrollY || 0;
      const nv = this.navRef.current;
      if (nv) { const ly = this._lastY || 0; if (sy > 160 && sy > ly + 4 && !this.state.langOpen && !this.state.menuOpen) nv.classList.add('q-hid'); else if (sy < ly - 4 || sy < 160) nv.classList.remove('q-hid'); this._lastY = sy; }
      const pr = this.progRef.current; if (pr) pr.style.transform = 'scaleX(' + Math.min(1, sy / Math.max(1, document.documentElement.scrollHeight - window.innerHeight)) + ')';
      let act = ''; ['work', 'about', 'services', 'contact'].forEach((id) => { const el = document.getElementById(id); if (el && el.getBoundingClientRect().top <= 140) act = id; });
      if (act !== this._act) { this._act = act; document.querySelectorAll('[data-nav]').forEach((a) => a.classList.toggle('q-act', a.getAttribute('data-nav') === act)); }
      if (this._reduce) return;
      const h = this.heroRef.current;
      const y = Math.min(window.scrollY || 0, window.innerHeight * 1.5);
      if (h) h.style.transform = 'translate3d(' + (y * 0.18) + 'px,' + (y * 0.06) + 'px,0)';
      const b1 = this.bg1Ref.current; if (b1) b1.style.transform = 'translate3d(' + (y * -0.06) + 'px,' + (y * -0.08) + 'px,0)';
      const vh = window.innerHeight, vw = window.innerWidth;
      document.querySelectorAll('[data-recede]').forEach((el) => {
        const top = el.parentElement.getBoundingClientRect().top;
        const p = Math.max(0, Math.min(1, (vh - top) / (vh * 0.75)));
        const e = 1 - Math.pow(1 - p, 3);
        el.style.transform = 'translate3d(' + ((1 - e) * vw * 0.18) + 'px,0,0) scale(' + (1.6 - 0.6 * e) + ')';
        el.style.opacity = String(0.25 + 0.75 * e);
      });
    });
  };
  onResize = () => { clearTimeout(this._rt); this._rt = setTimeout(() => this.processLines(), 150); };

  observeReveal() {
    if (!this.io) return;
    this.processLines();
    document.querySelectorAll('.q-rev:not([data-obs]),.q-slide:not([data-obs]),.q-slide-s:not([data-obs]),.q-xl:not([data-obs]),.q-lines:not([data-obs]),.q-eb:not([data-obs]),.q-stg:not([data-obs]),.q-stat:not([data-obs]),.q-hl:not([data-obs])').forEach((el) => { el.setAttribute('data-obs', ''); this.io.observe(el); });
    clearTimeout(this._revT); this._revT = setTimeout(this.revealVisible, 80);
  }
  revealVisible = () => {
    const vh = window.innerHeight;
    document.querySelectorAll('[data-obs]:not(.q-in)').forEach((el) => { const r = el.getBoundingClientRect(); if (r.top < vh * 0.94 && r.bottom > 0 && (r.width || r.height)) { el.classList.add('q-in', 'q-done'); if (this.io) this.io.unobserve(el); } });
  };

  initCursor() {
    if (!window.matchMedia || !window.matchMedia('(pointer:fine)').matches) return;
    const el = this.curRef.current, dot = this.dotRef.current, label = this.labelRef.current, cross = this.crossRef.current, coord = this.coordRef.current;
    if (!el) return;
    document.documentElement.classList.add('q-fine');
    el.style.display = 'block';
    const pv = document.createElement('div');
    pv.setAttribute('aria-hidden', 'true');
    pv.style.cssText = 'position:fixed;left:0;top:0;z-index:9998;pointer-events:none;width:min(340px,28vw);aspect-ratio:4/3;border:1px solid rgba(var(--ink-rgb),.5);background:var(--bg2);overflow:hidden;opacity:0;transition:opacity .3s ease,clip-path .5s cubic-bezier(.77,0,.18,1);clip-path:inset(0 0 100% 0);will-change:transform';
    pv.innerHTML = '<img alt="" style="position:absolute;inset:0;width:100%;height:100%;object-fit:cover;display:none"><div data-pv-ph style="position:absolute;inset:0;display:none;background:linear-gradient(to top right,transparent calc(50% - .6px),rgba(var(--ink-rgb),.18) 50%,transparent calc(50% + .6px)),linear-gradient(to bottom right,transparent calc(50% - .6px),rgba(var(--ink-rgb),.18) 50%,transparent calc(50% + .6px))"></div><span data-pv-dom style="position:absolute;left:10px;bottom:8px;font-family:var(--font-mono);font-size:10px;letter-spacing:.04em;text-transform:uppercase;color:var(--ink);background:var(--bg);padding:3px 5px"></span><span style="position:absolute;right:8px;top:6px;width:6px;height:6px;background:var(--accent)"></span>';
    document.body.appendChild(pv);
    this._pv = pv;
    const pvImg = pv.querySelector('img'), pvPh = pv.querySelector('[data-pv-ph]'), pvDom = pv.querySelector('[data-pv-dom]');
    const t = { x: -100, y: -100 }, p = { x: -100, y: -100 }, q = { x: -100, y: -100 };
    let mode = '', prev = null, lx = -1, ly = -1;
    const setMode = (m) => {
      if (m === mode) return; mode = m;
      const s = m === 'case' ? 88 : m === 'link' || m === 'row' ? 30 : 9;
      dot.style.width = s + 'px'; dot.style.height = s + 'px';
      dot.style.background = m === 'case' ? 'rgba(var(--bg-rgb),0.9)' : m ? 'transparent' : 'var(--accent)';
      dot.style.borderColor = m === 'link' || m === 'case' ? 'var(--ink)' : m === 'row' ? 'var(--accent)' : 'transparent';
      label.style.opacity = m === 'case' ? '1' : '0';
      const o = m === 'case' ? 36 : m ? 12 : 0;
      coord.style.transform = 'translate(' + o + 'px,' + o + 'px)';
    };
    const showPrev = (row) => {
      if (row === prev) return; prev = row;
      if (!row) { pv.style.opacity = '0'; pv.style.clipPath = 'inset(0 0 100% 0)'; return; }
      const src = row.getAttribute('data-prev');
      pvImg.style.display = src ? 'block' : 'none'; pvPh.style.display = src ? 'none' : 'block';
      if (src) pvImg.src = src;
      pvDom.textContent = row.getAttribute('data-dom') || '';
      pv.style.opacity = '1'; pv.style.clipPath = 'inset(0 0 0 0)';
    };
    this._move = (e) => { t.x = e.clientX; t.y = e.clientY; };
    this._over = (e) => {
      const g = e.target.closest ? e.target : null;
      const row = g && g.closest('[data-prev]');
      showPrev(row || null);
      setMode(row ? 'row' : g && g.closest('[data-case],[data-svc],.q-yp') ? 'case' : g && g.closest('a,button,[role="tab"]') ? 'link' : '');
    };
    this._leave = () => { t.x = -100; t.y = -100; showPrev(null); };
    this._down = () => { cross.style.opacity = '1'; cross.style.transform = 'scale(0.7)'; };
    this._up = () => { cross.style.opacity = '0'; cross.style.transform = 'scale(1.4)'; };
    window.addEventListener('mousedown', this._down); window.addEventListener('mouseup', this._up);
    const cv = document.createElement('canvas'), dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.setAttribute('aria-hidden', 'true'); cv.style.cssText = 'position:fixed;inset:0;width:100vw;height:100vh;z-index:9997;pointer-events:none';
    const fit = () => { cv.width = window.innerWidth * dpr; cv.height = window.innerHeight * dpr; };
    fit(); window.addEventListener('resize', fit); document.body.appendChild(cv); this._cv = cv;
    const ctx = cv.getContext('2d'), trail = []; let speed = 0, drawn = false;
    const accent = getComputedStyle(document.documentElement).getPropertyValue('--accent').trim() || '#FA3600';
    window.addEventListener('mousemove', this._move, { passive: true });
    document.addEventListener('mouseover', this._over);
    document.addEventListener('mouseleave', this._leave);
    const pad = (n) => String(Math.max(0, Math.round(n))).padStart(4, '0');
    const loop = () => {
      p.x += (t.x - p.x) * 0.24; p.y += (t.y - p.y) * 0.24;
      q.x += (t.x - q.x) * 0.12; q.y += (t.y - q.y) * 0.12;
      const px = p.x, py = p.y;
      el.style.transform = 'translate3d(' + p.x + 'px,' + p.y + 'px,0)';
      const mv = Math.hypot(t.x - px, t.y - py) * 0.24; speed += (mv - speed) * 0.2;
      if (mv > 0.05) { trail.push({ x: px, y: py }); if (trail.length > 14) trail.shift(); } else if (trail.length) trail.shift();
      if (speed > 1.5 && trail.length > 2) {
        ctx.setTransform(dpr, 0, 0, dpr, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height);
        for (let i = 1; i < trail.length; i++) { ctx.globalAlpha = (i / trail.length) * Math.min(1, speed / 12); ctx.strokeStyle = accent; ctx.lineWidth = 1 + (i / trail.length) * 6; ctx.lineCap = 'square'; ctx.beginPath(); ctx.moveTo(trail[i - 1].x, trail[i - 1].y); ctx.lineTo(trail[i].x, trail[i].y); ctx.stroke(); }
        drawn = true;
      } else if (drawn) { ctx.setTransform(1, 0, 0, 1, 0, 0); ctx.clearRect(0, 0, cv.width, cv.height); drawn = false; }
      if (prev) { const w = pv.offsetWidth, h = pv.offsetHeight; const x = Math.min(window.innerWidth - w - 16, q.x + 28), y = Math.max(16, Math.min(window.innerHeight - h - 16, q.y - h / 2)); pv.style.transform = 'translate3d(' + x + 'px,' + y + 'px,0)'; }
      const rx = Math.round(t.x), ry = Math.round(t.y);
      if (rx !== lx || ry !== ly) { lx = rx; ly = ry; coord.textContent = 'X:' + pad(rx) + 'PX / Y:' + pad(ry) + 'PX'; }
      this._raf = requestAnimationFrame(loop);
    };
    loop();
  }

  componentDidMount() {
    try { const l = localStorage.getItem('olha-portfolio-lang'); if (l && this.translations[l]) this.setState({ lang: l }); } catch (e) {}
    this.io = new IntersectionObserver((entries) => {
      entries.forEach((en) => { if (en.isIntersecting) { en.target.classList.add('q-in', 'q-done'); this.io.unobserve(en.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    this.observeReveal();
    window.addEventListener('hashchange', this.readHash);
    this.readHash();
    this._reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.addEventListener('keydown', this.onKey);
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize);
    this.startAi();
    this.initInk();
    this._hio = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('q-in'); this._hio.unobserve(e.target); } }), { threshold: 0.35 });
    this.splitTitles();
    requestAnimationFrame(this.syncTabs); setTimeout(this.syncTabs, 600);
    this._tabRs = () => this.syncTabs(); window.addEventListener('resize', this._tabRs);
    if (this.tabsRef.current) this.tabsRef.current.addEventListener('scroll', this._tabRs, { passive: true });
    if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => { document.querySelectorAll('[data-lines]').forEach((el) => { el.dataset.split = ''; }); this.processLines(); });
    this.initCursor();
    this.onScroll();
    this.syncLang();
  }
  componentDidUpdate() { this.splitTitles(); this.syncTabs(); this.initInk(); this.observeReveal(); this.onScroll(); this.syncLang(); if (this.aiRef.current && !this._aiOn) this.startAi(); if (!this.aiRef.current && this._aiOn) this.stopAi(); }
  syncLang() { const l = ({ en: 'en', dk: 'da', ua: 'uk' })[this.state.lang] || 'en'; if (document.documentElement.lang !== l) document.documentElement.lang = l; }
  initInk() {
    const host = this.inkRef.current; if (!host || host._ink || this._reduce) return; host._ink = 1;
    const top = host.querySelector('[data-ink-top]'), ring = host.querySelector('[data-ink-ring]'), box = top.parentElement;
    const c = { x: 0, y: 0 }, p = { x: 0, y: 0 }, t = { x: 0, y: 0 }; let r = 0, rt = 0, raf = 0;
    const render = () => {
      raf = 0; c.x += (t.x - c.x) * 0.09; c.y += (t.y - c.y) * 0.09; p.x += (t.x - p.x) * 0.15; p.y += (t.y - p.y) * 0.15; r += (rt - r) * 0.12;
      top.style.clipPath = 'circle(' + r.toFixed(1) + 'px at ' + c.x.toFixed(1) + 'px ' + c.y.toFixed(1) + 'px)';
      const d = r * 2.1; ring.style.width = ring.style.height = d + 'px'; ring.style.transform = 'translate(' + (p.x - d / 2) + 'px,' + (p.y - d / 2) + 'px)'; ring.style.opacity = r > 2 ? '0.5' : '0';
      if (Math.abs(t.x - c.x) > 0.3 || Math.abs(t.y - c.y) > 0.3 || Math.abs(rt - r) > 0.3) raf = requestAnimationFrame(render);
    };
    const wake = () => { if (!raf) raf = requestAnimationFrame(render); };
    const pos = (e) => { const b = box.getBoundingClientRect(); t.x = e.clientX - b.left; t.y = e.clientY - b.top; };
    box.addEventListener('pointerenter', (e) => { pos(e); if (r < 1) { c.x = p.x = t.x; c.y = p.y = t.y; } rt = Math.max(90, box.clientHeight * 0.45); wake(); });
    box.addEventListener('pointermove', (e) => { pos(e); wake(); });
    box.addEventListener('pointerleave', () => { rt = 0; wake(); });
  }
  componentWillUnmount() {
    if (this._hio) this._hio.disconnect();
    window.removeEventListener('resize', this._tabRs);
    this.stopAi();
    window.removeEventListener('hashchange', this.readHash);
    window.removeEventListener('keydown', this.onKey);
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    if (this.io) this.io.disconnect();
    if (this._raf) cancelAnimationFrame(this._raf);
    window.removeEventListener('mousemove', this._move);
    document.removeEventListener('mouseover', this._over);
    document.removeEventListener('mouseleave', this._leave);
    document.documentElement.classList.remove('q-fine');
    window.removeEventListener('mousedown', this._down); window.removeEventListener('mouseup', this._up);
    if (this._pv) this._pv.remove(); if (this._cv) this._cv.remove();
  }

  renderVals() {
    const L6 = this.state.lang;
    const T = { ...this.translations.en, ...(this.translations[L6] || {}), ...this.T6.en, ...(this.T6[L6] || {}) };
    const catLabel = { apps: T.catApps, web: T.catWeb, ecom: T.catEcom };
    const projects = this.cases.map((p, i) => {
      const filled = (v) => v != null && String(v).trim() !== '' && String(v).trim().toUpperCase() !== 'TODO';
      const meta = (p.meta || []).filter((m) => filled(m.v));
      const y = meta.find((m) => m.k === 'Year');
      const cl = catLabel[p.category] || p.kind;
      const parts = p.title.split(' — ');
      return {
        ...p, meta, num: String(i + 1).padStart(2, '0'), year: y ? y.v : '',
        catLabel: cl, metaLine: [cl, y ? y.v : ''].filter(filled).join(' — '), head: parts[0], sub: parts.slice(1).join(' — '),
        desc: p.desc || p.overview || '', focus: p.focus || '50% 50%', heroImg: '', badgeList: p.badges || [p.kind], hasStores: !!(p.stores && p.stores.length), open: () => this.openCase(i)
      };
    });

    const onCta = () => this.setState({ contactOpen: true });
    const rhythm = (list, layout) => {
      const rows = []; let i = 0;
      if (true) {
        for (; i < list.length; i += 2) rows.push(list.slice(i, i + 2));
        return rows.map((keys) => ({ cells: keys.map((p) => ({ p, noImg: !p.cover, span: 1, sz: 's', isS: true, isL: false, ar: '4 / 3', link: p.visit || null })) }));
      }
      while (i < list.length) {
        rows.push([list[i++]]);
        if (i < list.length) { if (list.length - i >= 2) { rows.push([list[i], list[i + 1]]); i += 2; } else rows.push([list[i++]]); }
      }
      return rows.map((keys) => ({ cells: keys.map((p) => {
        const big = keys.length === 1;
        return { p, noImg: !p.cover, span: big ? 2 : 1, sz: big ? 'l' : 's', isL: big, isS: !big, ar: big ? '16 / 9' : '4 / 3', link: p.visit || null };
      }) }));
    };
    const groups = this.categories.map((cat) => {
      const list = projects.map((p, i) => ({ p, i })).filter((x) => x.p.category === cat.id && !x.p.hidden)
        .sort((a, b) => ((a.p.order ?? 999) - (b.p.order ?? 999)) || (a.i - b.i)).map((x) => x.p);
      const open = cat.id in this.state.openCats ? this.state.openCats[cat.id] : !!cat.open;
      return {
        id: cat.id, title: T[cat.tKey] || cat.title || cat.id, count: list.length,
        countLabel: list.length + ' ' + (list.length === 1 ? T.projWord1 : T.projWord),
        btnId: 'cat-btn-' + cat.id, panelId: 'cat-panel-' + cat.id,
        expanded: open, hidden: !open, gridRows: open ? '1fr' : '0fr', vis: open ? 'visible' : 'hidden',
        rot: open ? 'rotate(135deg)' : 'rotate(0deg)', toggle: () => this.toggleCat(cat.id), rows: rhythm(list, cat.layout)
      };
    }).filter((g) => g.count > 0);
    const reduce = this._reduce, fl = this.state.flipped;
    const flip = reduce ? { inner: 'none', back: 'none', backOp: fl ? 1 : 0 } : { inner: fl ? 'rotateY(180deg)' : 'rotateY(0deg)', back: 'rotateY(180deg)', backOp: 1 };
    const site = 'Visit site ↗', play = 'Open on Google Play ↗';
    const mk = (title, label, url, img, cta) => ({ title, label, url, img, noImg: !img, cta, aria: title + ' — ' + label + ' (opens in new tab)' });
    const liveSites = [
      mk('AGM Global Vision', 'E-commerce · Live website', 'https://www.agmglobalvision.com', '', site),
      mk('Defend and Carry', 'E-commerce · Live website', 'https://www.defendandcarry.com', IMG('defendcarry-hero.png'), site),
      mk('Repat Africa', 'Website · Live', 'https://www.repat.africa/fr/', IMG('repat-hero.png'), site),
      mk('Kortical', 'Website · Live', 'https://kortical.com', '', site),
      mk('The Quantum Insider', 'Website · Live', 'https://thequantuminsider.com', '', site),
      mk('Instalettings', 'Website · Live', 'https://instalettings.co', '', site),
      mk('Kochi Dubai', 'Website · Live', 'https://kochidubai.com', '', site)
    ];
    const liveApps = [
      mk('Repat Africa', 'Mobile app · Google Play', 'https://play.google.com/store/apps/details?id=africa.repat.app', IMG('repat-1.png'), play),
      mk('Swiss Medical', 'Mobile app · Google Play', 'https://play.google.com/store/apps/details?id=com.swissmedical.clientes', IMG('swiss-app.png'), play)
    ];

    const v = this.state.view;
    const c = v >= 0 ? projects[v] : null;
    let blocks = [];
    if (c) {
      const texts = [{ isText: true, label: 'The challenge', body: c.challenge }];
      if (c.solutionShown && c.solution) texts.push({ isSolution: true, label: 'What I designed', items: c.solution });
      if (c.thinking && c.thinking.length) texts.push({ isThinking: true, label: 'Design thinking', items: c.thinking });
      if (c.impact && c.impact.length) texts.push({ isImpact: true, label: 'Impact', items: c.impact });
      if (c.roleShown && c.role) texts.push({ isRole: true, label: 'My role & idea', items: c.role });
      if (c.note) texts.push({ isText: true, label: 'AI-augmented workflow', body: c.note });
      const imgs = (c.shots || []).filter((s) => s.img).map((s) => {
        const o = this.state.orient[s.img] || (c.wideShots ? 'h' : 'v');
        return { img: s.img, label: s.label, isBleed: !!s.long || o === 'h', isTall: !s.long && o === 'v', onLoad: (e) => this.onImgLoad(s.img, e) };
      });
      const n = Math.max(texts.length, imgs.length);
      if (c.seamlessShots) { blocks = texts.concat(imgs.length ? [{ isStack: true, stack: imgs }] : []); } else
      for (let i = 0; i < n; i++) { if (texts[i]) blocks.push(texts[i]); if (imgs[i]) blocks.push(imgs[i]); }
    }

    const isDark = this.state.theme === 'dark';
    const htmlLang = { en: 'en', dk: 'da', ua: 'uk' };
    const LANGS6 = [['en', 'EN', 'English'], ['dk', 'DK', 'Dansk'], ['ua', 'UA', 'Українська']];
    const aiRe = /Claude|Midjourney|Higgsfield|Figma AI|Figma Make|\bv0\b|Cursor|HTML to Design|AI/i;
    const vis = projects.filter((p) => !p.hidden);
    const catOrder = { ecom: 0, web: 1, apps: 2 };
    const featured = ['Mintra', 'Swiss Insurance', 'Subflow', 'Poshuk', 'Georg Jensen', 'Ayvens', 'Sefer', 'Unifood', 'Laurie Handlers', 'NxtShop', 'DPlab', 'Gym App', 'Defend & Carry', 'AGM Global Vision'];
    const toCard = (p) => {
      const mv = (k) => (p.meta.find((m) => m.k === k) || {}).v;
      const plat = mv('Platform') || mv('Platforms') || (p.kind || '').split(' · ')[0];
      const tags = [mv('Role'), plat].concat((p.tools || []).filter((t) => aiRe.test(t))).filter(Boolean).filter((t, i, a) => a.indexOf(t) === i).slice(0, 5);
      const st = (p.stores && p.stores[0]) || p.visit || null;
      const stLabel = st ? String(st.label || '').replace(/\s*↗\s*$/, '') : '';
      return { isCase: true, isPh: false, cat: p.category, head: p.head, desc: p.desc, cover: p.cover, focus: p.focus,
        alt: p.head + (p.sub ? ' — ' + p.sub : '') + ', cover image', label: [p.catLabel, p.year].filter(Boolean).join(' · '), tags, open: p.open,
        aria: T.view_case + ': ' + p.head, live: st ? { url: st.url, label: stLabel + ' ↗', aria: p.head + ' — ' + stLabel + T.new_tab } : null };
    };
    const rest = vis.filter((p) => featured.indexOf(p.head) < 0).sort((a, b) => (catOrder[a.category] - catOrder[b.category]) || ((a.order ?? 999) - (b.order ?? 999)));
    const allCards = featured.map((k) => { const p = vis.find((x) => x.head === k); return p ? toCard(p) : null; }).filter(Boolean).concat(rest.map(toCard));
    const tab = this.state.tab || 'all';
    const workTabs = [['all', T.tab_all], ['ecom', T.catEcom], ['web', T.catWeb], ['apps', T.catApps]].map(([id, title]) => {
      const n = id === 'all' ? allCards.length : allCards.filter((c) => c.cat === id).length; const on = tab === id;
      return { title, count: String(n).padStart(2, '0'), on, line: on ? 'var(--accent)' : 'transparent', color: on ? 'var(--ink)' : 'var(--mute)', pick: () => this.setState({ tab: id }) };
    });
    const lv = (title, url, app) => { const type = app ? T.live_app : T.live_site; return { title, url, type, domain: app ? 'Google Play' : url.replace(/^https?:\/\/(www\.)?/, '').replace(/\/.*$/, ''), aria: title + ' — ' + type + T.new_tab }; };
    const liveList = [
      lv('Kortical', 'https://kortical.com'), lv('Defend & Carry', 'https://www.defendandcarry.com'), lv('AGM Global Vision', 'https://www.agmglobalvision.com'),
      lv('The Quantum Insider', 'https://thequantuminsider.com'), lv('Instalettings', 'https://instalettings.co'), lv('Kochi Dubai', 'https://kochidubai.com'),
      lv('Repat Africa', 'https://www.repat.africa/fr/'), lv('Repat Africa', 'https://play.google.com/store/apps/details?id=africa.repat.app', true),
      lv('Swiss Medical Clientes', 'https://play.google.com/store/apps/details?id=com.swissmedical.clientes', true)
    ];
    const V6 = {
      isDark, themeKnob: isDark ? 'translateX(28px)' : 'none', sunC: isDark ? 'var(--mute)' : 'var(--bg)', moonC: isDark ? 'var(--bg)' : 'var(--mute)', themeLabel: isDark ? T.on : T.off, toggleTheme: this.toggleTheme,
      langOpen: !!this.state.langOpen, toggleLang: () => this.setState((s) => ({ langOpen: !s.langOpen })), langArrow: this.state.langOpen ? 'rotate(180deg)' : 'none',
      curLang: (LANGS6.find((l) => l[0] === this.state.lang) || LANGS6[0])[1],
      langOpts: LANGS6.map(([code, label, name]) => { const on = this.state.lang === code; return { label, name, on, html: htmlLang[code], color: on ? 'var(--ink)' : 'var(--mute)', line: on ? 'var(--ink)' : 'var(--line2)', pick: () => { this.setLang(code); this.setState({ langOpen: false }); } }; }),
      workTabs, workList: tab === 'all' ? allCards : allCards.filter((c) => c.cat === tab), liveList, liveCount: String(liveList.length),
      steps: T.steps, services: T.services, st1: T.steps[0], st2: T.steps[1], st3: T.steps[2], st4: T.steps[3], sv1: T.services[0], sv2: T.services[1], sv3: T.services[2], sv4: T.services[3], sv5: T.services[4], toolsList: ['Claude', 'Figma + Figma AI', 'Framer', 'v0', 'Cursor', 'Midjourney', 'Higgsfield']
    };

    return {
      ...V6,
      curRef: this.curRef, dotRef: this.dotRef, labelRef: this.labelRef, crossRef: this.crossRef, coordRef: this.coordRef, navRef: this.navRef, progRef: this.progRef, tabsRef: this.tabsRef, tabKey: this.state.tab || 'all', inkRef: this.inkRef,
      isHome: v < 0, isCase: v >= 0, c: c || {}, blocks, groups, onCta, projects, total: String(projects.filter((p) => !p.hidden).length).padStart(2, '0'),
      T, goHome: this.goHome, heroRef: this.heroRef, aiRef: this.aiRef, bg1Ref: this.bg1Ref, flip, liveSites, liveApps,
      flipClick: () => { if (this.state.flipped) this.setState({ contactOpen: true }); else this.setState({ flipped: true }); },
      flipEnter: (e) => { if (e.pointerType === 'mouse') this.setState({ flipped: true }); },
      flipLeave: (e) => { if (e.pointerType === 'mouse') this.setState({ flipped: false }); },
      flipFocus: (e) => { let kb = false; try { kb = e.currentTarget.matches(':focus-visible'); } catch (x) {} if (kb) this.setState({ flipped: true }); }, flipBlur: () => this.setState({ flipped: false }),
      menuOpen: this.state.menuOpen, contactOpen: this.state.contactOpen,
      openMenu: () => this.setState({ menuOpen: true }), closeMenu: () => this.setState({ menuOpen: false }),
      menuContact: () => this.setState({ menuOpen: false, contactOpen: true }),
      openContact: () => this.setState({ contactOpen: true }), closeContact: () => this.setState({ contactOpen: false }),
      stop: (e) => e.stopPropagation(),
      contacts: [
        { k: 'Phone', v: '+45 91 92 79 80', url: 'tel:+4591927980' },
        { k: 'LinkedIn', v: 'olga-tsurika', url: 'https://www.linkedin.com/in/olga-tsurika/' },
        { k: 'WhatsApp', v: '+45 91 92 79 80', url: 'https://wa.me/4591927980' },
        { k: 'Telegram', v: '+45 91 92 79 80', url: 'https://t.me/+4591927980' },
        { k: 'Email', v: 'olhatsurika@gmail.com', url: 'mailto:olhatsurika@gmail.com' }
      ],
      langs: [['en', 'EN'], ['dk', 'DK'], ['ua', 'UA']].map(([code, label]) => ({ label, color: this.state.lang === code ? '#F2F1EF' : '#6E6D6A', set: () => this.setLang(code) })),
      webLinks: [
        { title: 'Kortical', domain: 'kortical.com', url: 'https://kortical.com' },
        { title: 'The Quantum Insider', domain: 'thequantuminsider.com', url: 'https://thequantuminsider.com' },
        { title: 'Instalettings', domain: 'instalettings.co', url: 'https://instalettings.co' },
        { title: 'Kochi Dubai', domain: 'kochidubai.com', url: 'https://kochidubai.com' }
      ],
      skills: ['AI Product Development', 'iOS Development', 'MVP Development', 'Claude', 'ChatGPT', 'Cursor', 'GitHub Copilot', 'VS Code', 'Vercel', 'OpenAI APIs', 'Prompt Engineering', 'AI Agents', 'Automation', 'Swift', 'React', 'Next.js', 'API Integration', 'Cloud Deployment', 'Product Strategy', 'UI/UX', 'Agile']
    };
  }
}
// ---------------------------------------------------------------- app end
  }
  var src = OLHA_APP.toString();
  src = src.slice(src.indexOf('{') + 1, src.lastIndexOf('}'));
  var el = document.createElement('script');
  el.type = 'text/x-dc';
  el.setAttribute('data-dc-script', '');
  if (PROPS) el.setAttribute('data-props', PROPS);
  el.textContent = src;
  document.body.appendChild(el);
})();

// ---------------------------------------------------------------- renderer
// GENERATED from dc-runtime/src/*.ts — do not edit. Rebuild with `cd dc-runtime && bun run build`.
"use strict";
(() => {
  var __defProp = Object.defineProperty;
  var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
  var __publicField = (obj, key, value) => __defNormalProp(obj, typeof key !== "symbol" ? key + "" : key, value);

  // src/react.ts
  function getReact() {
    const R = window.React;
    if (!R) throw new Error("dc-runtime: window.React is not available yet");
    return R;
  }
  function getReactDOM() {
    const RD = window.ReactDOM;
    if (!RD) throw new Error("dc-runtime: window.ReactDOM is not available yet");
    return RD;
  }
  var h = ((...args) => getReact().createElement(
    ...args
  ));

  // src/parse.ts
  function parseDcDocument(doc) {
    const dc = doc.querySelector("x-dc");
    if (!dc) return null;
    const scriptEl = doc.querySelector("script[data-dc-script]");
    const { props, preview } = parseDataProps(
      scriptEl?.getAttribute("data-props") ?? null
    );
    return {
      template: dc.innerHTML,
      js: scriptEl ? scriptEl.textContent || "" : "",
      props,
      preview
    };
  }
  function parseDcText(src) {
    const openMatch = /<x-dc(?:\s[^>]*)?>/.exec(src);
    if (!openMatch) return null;
    const close = src.lastIndexOf("</x-dc>");
    if (close === -1 || close < openMatch.index) return null;
    const template = src.slice(openMatch.index + openMatch[0].length, close);
    const doc = new DOMParser().parseFromString(src, "text/html");
    const scriptEl = doc.querySelector("script[data-dc-script]");
    const { props, preview } = parseDataProps(
      scriptEl?.getAttribute("data-props") ?? null
    );
    return {
      template,
      js: scriptEl ? scriptEl.textContent || "" : "",
      props,
      preview
    };
  }
  function parseDataProps(raw) {
    if (!raw) return { props: null, preview: null };
    let parsed;
    try {
      parsed = JSON.parse(raw);
    } catch {
      return { props: null, preview: null };
    }
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) {
      return { props: null, preview: null };
    }
    const obj = parsed;
    const preview = obj.$preview && typeof obj.$preview === "object" ? obj.$preview : null;
    const rest = {};
    for (const k of Object.keys(obj)) {
      if (k[0] !== "$") rest[k] = obj[k];
    }
    return { props: Object.keys(rest).length ? rest : null, preview };
  }
  function dcNameFromPath(pathname) {
    let p = pathname || "";
    try {
      p = decodeURIComponent(p);
    } catch {
    }
    const base = p.split("/").pop() || "Root";
    return base.replace(/\.dc\.html$/, "").replace(/\.html?$/, "") || "Root";
  }

  // src/boot.ts
  var BASE_CSS = `
    .sc-placeholder{background:color-mix(in srgb,currentColor 8%,transparent);
      border:1px solid color-mix(in srgb,currentColor 50%,transparent);
      border-radius:2px;box-sizing:border-box;overflow:hidden}
    @keyframes sc-shine{0%{background-position:100% 50%}100%{background-position:0% 50%}}
    html.sc-dc-streaming .sc-placeholder,
    html.sc-dc-streaming .sc-interp.sc-missing{position:relative;
      background:color-mix(in srgb,currentColor 5%,transparent);
      border-color:transparent}
    html.sc-dc-streaming .sc-placeholder::before,
    html.sc-dc-streaming .sc-interp.sc-missing::before{content:'';
      position:absolute;inset:0;pointer-events:none;
      background:linear-gradient(90deg,rgba(217,119,87,0) 25%,rgba(247,225,211,.95) 37%,rgba(217,119,87,0) 63%);
      background-size:400% 100%;animation:sc-shine 1.4s ease infinite}
    html.sc-dc-streaming .sc-placeholder:nth-child(n+9 of .sc-placeholder)::before,
    html.sc-dc-streaming .sc-interp.sc-missing:nth-child(n+9 of .sc-interp.sc-missing)::before{animation:none;
      background:color-mix(in srgb,currentColor 8%,transparent)}
    .sc-placeholder-error{padding:4px 8px;font:11px/1.4 ui-monospace,monospace;
      color:color-mix(in srgb,currentColor 70%,transparent);word-break:break-word}
    .sc-interp.sc-missing{display:inline-block;width:2em;height:1em;overflow:hidden;
      vertical-align:text-bottom;background:rgba(255,255,255,.3);border:1px solid rgba(0,0,0,.5);
      border-radius:2px;box-sizing:border-box;color:transparent;
      user-select:none}
    .sc-interp.sc-unresolved{font-family:ui-monospace,monospace;font-size:.85em;
      color:color-mix(in srgb,currentColor 50%,transparent);
      background:color-mix(in srgb,currentColor 10%,transparent);border-radius:3px;
      padding:0 3px}
    .sc-host.sc-has-error{position:relative}
    .sc-logic-error{position:absolute;top:8px;left:8px;z-index:2147483647;max-width:60ch;
      padding:6px 10px;background:#b00020;color:#fff;font:12px/1.4 ui-monospace,monospace;
      border-radius:4px;white-space:pre-wrap;pointer-events:none}
    /* Mirrors PRINT_BASELINE_CSS in apps/web deck-stage-export.ts \u2014 keep both
       in sync until dc-runtime regains a build step. */
    @media print {
      @page { margin: 0.5cm; }
      figure, table { break-inside: avoid; }
      #dc-root, #dc-root > .sc-host { height: auto; }
      *, *::before, *::after {
        print-color-adjust: exact; -webkit-print-color-adjust: exact;
        backdrop-filter: none !important; -webkit-backdrop-filter: none !important;
        animation-delay: -99s !important; animation-duration: .001s !important;
        animation-iteration-count: 1 !important; animation-fill-mode: both !important;
        animation-play-state: running !important; transition-duration: 0s !important;
      }
    }
  `;
  var FULL_PAGE_CSS = "html,body{height:100%;margin:0}#dc-root,#dc-root>.sc-host{height:100%}";
  function rootNameForDocument(doc, loc) {
    let bootPath = loc.pathname || "";
    if (!/\.dc\.html?$/i.test(safeDecode(bootPath))) {
      try {
        bootPath = new URL(doc.baseURI || "/").pathname;
      } catch {
      }
    }
    return dcNameFromPath(bootPath);
  }
  function safeDecode(s) {
    try {
      return decodeURIComponent(s);
    } catch {
      return s;
    }
  }
  function boot(runtime, doc = document) {
    const parsed = parseDcDocument(doc);
    if (!parsed) return null;
    const React = getReact();
    const rootName = rootNameForDocument(doc, location);
    runtime.markFetched(rootName);
    runtime.setRootName(rootName);
    runtime.adoptParsed(rootName, parsed);
    if (!window.__resources) {
      fetch(location.href).then((res) => res.ok ? res.text() : "").then((t) => {
        const raw = t ? parseDcText(t) : null;
        if (raw?.template) runtime.updateHtml(rootName, raw.template);
      }).catch(() => {
      });
    }
    const dc = doc.querySelector("x-dc");
    const hostEl = doc.createElement("div");
    hostEl.id = "dc-root";
    dc.replaceWith(hostEl);
    if (!parsed.preview) {
      const s = doc.createElement("style");
      s.textContent = FULL_PAGE_CSS;
      doc.head.appendChild(s);
    }
    const Root = runtime.getDC(rootName);
    const entry = runtime.registry.get(rootName);
    function StandaloneRoot() {
      const [, setTick] = React.useState(0);
      React.useEffect(() => {
        const sub = () => setTick((n) => n + 1);
        entry.subs.add(sub);
        return () => {
          entry.subs.delete(sub);
        };
      }, []);
      const defaults = React.useMemo(() => {
        const d = {};
        for (const k in entry.propsMeta || {}) {
          const v = entry.propsMeta?.[k]?.default;
          if (v !== void 0) d[k] = v;
        }
        return d;
      }, [entry.propsMeta]);
      return h(Root, { ...defaults, ...entry.propOverrides || {} });
    }
    const ReactDOM = getReactDOM();
    if (ReactDOM.createRoot)
      ReactDOM.createRoot(hostEl).render(h(StandaloneRoot));
    else ReactDOM.render(h(StandaloneRoot), hostEl);
    return rootName;
  }

  // src/expr.ts
  var IDENT_RE = /^[A-Za-z_$][A-Za-z0-9_$]*/;
  var NUMBER_RE = /^-?\d+(\.\d+)?$/;
  function resolve(vals, src) {
    const expr = String(src).trim();
    if (!expr) return void 0;
    if (expr[0] === "(" && expr[expr.length - 1] === ")" && parensWrapWhole(expr)) {
      return resolve(vals, expr.slice(1, -1));
    }
    const eq = findTopLevelEquality(expr);
    if (eq) {
      const lv = resolve(vals, expr.slice(0, eq.index));
      const rv = resolve(vals, expr.slice(eq.index + eq.op.length));
      switch (eq.op) {
        case "===":
          return lv === rv;
        case "!==":
          return lv !== rv;
        case "==":
          return lv == rv;
        default:
          return lv != rv;
      }
    }
    if (expr[0] === "!") return !resolve(vals, expr.slice(1));
    if (expr === "true") return true;
    if (expr === "false") return false;
    if (expr === "null") return null;
    if (expr === "undefined") return void 0;
    if (NUMBER_RE.test(expr)) return Number(expr);
    if (expr.length >= 2 && (expr[0] === '"' || expr[0] === "'") && expr[expr.length - 1] === expr[0]) {
      return expr.slice(1, -1);
    }
    return resolvePath(vals, expr);
  }
  function parensWrapWhole(expr) {
    let depth = 0;
    for (let i = 0; i < expr.length - 1; i++) {
      if (expr[i] === "(") depth++;
      else if (expr[i] === ")") {
        depth--;
        if (depth === 0) return false;
      }
    }
    return true;
  }
  function findTopLevelEquality(expr) {
    let depth = 0;
    for (let i = 0; i < expr.length; i++) {
      const c = expr[i];
      if (c === "[" || c === "(") depth++;
      else if (c === "]" || c === ")") depth--;
      else if (depth === 0 && (c === "=" || c === "!") && expr[i + 1] === "=") {
        if (i > 0 && (expr[i - 1] === "=" || expr[i - 1] === "!")) continue;
        if (!expr.slice(0, i).trim()) continue;
        const op = expr[i + 2] === "=" ? c + "==" : c + "=";
        return { index: i, op };
      }
    }
    return null;
  }
  function resolvePath(vals, expr) {
    const head = expr.match(IDENT_RE);
    if (!head) return void 0;
    let cur = vals == null ? void 0 : vals[head[0]];
    let i = head[0].length;
    while (i < expr.length) {
      if (expr[i] === ".") {
        const m = expr.slice(i + 1).match(IDENT_RE) || expr.slice(i + 1).match(/^\d+/);
        if (!m) return void 0;
        cur = cur == null ? void 0 : cur[m[0]];
        i += 1 + m[0].length;
      } else if (expr[i] === "[") {
        let depth = 1;
        let j = i + 1;
        while (j < expr.length && depth > 0) {
          if (expr[j] === "[") depth++;
          else if (expr[j] === "]") {
            depth--;
            if (depth === 0) break;
          }
          j++;
        }
        if (depth !== 0) return void 0;
        const key = resolve(vals, expr.slice(i + 1, j));
        cur = cur == null ? void 0 : cur[key];
        i = j + 1;
      } else {
        return void 0;
      }
    }
    return cur;
  }

  // src/encode.ts
  var CAMEL_ATTR = "sc-camel-";
  var INLINE_TEXT_TAGS = new Set(
    "a abbr b bdi bdo br cite code del dfn em i ins kbd mark q s samp small span strike strong sub sup u var wbr".split(
      " "
    )
  );
  var RAW_WRAP = {
    select: "sc-raw-select",
    table: "sc-raw-table",
    tbody: "sc-raw-tbody",
    thead: "sc-raw-thead",
    tfoot: "sc-raw-tfoot",
    tr: "sc-raw-tr",
    td: "sc-raw-td",
    th: "sc-raw-th",
    caption: "sc-raw-caption"
  };
  var RAW_UNWRAP = Object.fromEntries(
    Object.entries(RAW_WRAP).map(([k, v]) => [v, k])
  );
  var EVENT_MAP = {
    onclick: "onClick",
    onchange: "onChange",
    oninput: "onInput",
    onsubmit: "onSubmit",
    onkeydown: "onKeyDown",
    onkeyup: "onKeyUp",
    onkeypress: "onKeyPress",
    onmousedown: "onMouseDown",
    onmouseup: "onMouseUp",
    onmouseenter: "onMouseEnter",
    onmouseleave: "onMouseLeave",
    onfocus: "onFocus",
    onblur: "onBlur",
    ondoubleclick: "onDoubleClick",
    oncontextmenu: "onContextMenu",
    onmousemove: "onMouseMove",
    onmouseover: "onMouseOver",
    onmouseout: "onMouseOut",
    onpointerdown: "onPointerDown",
    onpointerup: "onPointerUp",
    onpointermove: "onPointerMove",
    onpointerenter: "onPointerEnter",
    onpointerleave: "onPointerLeave",
    onpointercancel: "onPointerCancel",
    onpointerover: "onPointerOver",
    onpointerout: "onPointerOut",
    ongotpointercapture: "onGotPointerCapture",
    onlostpointercapture: "onLostPointerCapture",
    ontouchstart: "onTouchStart",
    ontouchend: "onTouchEnd",
    ontouchmove: "onTouchMove",
    ontouchcancel: "onTouchCancel",
    ondragstart: "onDragStart",
    ondragend: "onDragEnd",
    ondragenter: "onDragEnter",
    ondragleave: "onDragLeave",
    ondragover: "onDragOver",
    onanimationstart: "onAnimationStart",
    onanimationend: "onAnimationEnd",
    onanimationiteration: "onAnimationIteration",
    ontransitionend: "onTransitionEnd"
  };
  var ATTRS = `(?:[^>"']|"[^"]*"|'[^']*')*`;
  var IMPORT_SELF_CLOSE_RE = new RegExp(
    "<(x-import|dc-import)(" + ATTRS + ")/>",
    "gi"
  );
  var CAMEL_ATTR_RE = /(\s)([a-z]+[A-Z][A-Za-z0-9]*)(\s*=)/g;
  function encodeCamelAttrs(html) {
    return html.replace(
      CAMEL_ATTR_RE,
      (_, sp, name, eq) => sp + CAMEL_ATTR + name.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase()) + eq
    );
  }
  function encodeCase(html) {
    html = html.replace(
      IMPORT_SELF_CLOSE_RE,
      (_, t, a) => "<" + t + a + "></" + t + ">"
    );
    html = html.replace(/<helmet(\s|>)/gi, "<sc-helmet$1");
    html = html.replace(/<\/helmet\s*>/gi, "</sc-helmet>");
    html = encodeCamelAttrs(html);
    for (const [real, alias] of Object.entries(RAW_WRAP)) {
      html = html.replace(
        new RegExp("(</?)" + real + "(?=[\\s>])", "gi"),
        "$1" + alias
      );
    }
    return html;
  }
  function kebabToCamel(s) {
    return s.replace(/-([a-z])/g, (_, c) => c.toUpperCase());
  }
  function cssToObj(css) {
    const o = {};
    for (const decl of css.split(";")) {
      const i = decl.indexOf(":");
      if (i < 0) continue;
      const prop = decl.slice(0, i).trim();
      o[prop.startsWith("--") ? prop : kebabToCamel(prop)] = decl.slice(i + 1).trim();
    }
    return o;
  }
  function compileAttr(raw) {
    const whole = raw.match(/^\s*\{\{([\s\S]+?)\}\}\s*$/);
    if (whole) {
      const path = whole[1];
      return (vals) => resolve(vals, path);
    }
    if (raw.includes("{{")) {
      const parts = raw.split(/\{\{([\s\S]+?)\}\}/g);
      return (vals) => parts.map((s, i) => i & 1 ? resolve(vals, s) ?? "" : s).join("");
    }
    return () => raw;
  }

  // src/compile.ts
  function collectProps(node, kind, host) {
    const propGetters = [];
    const pseudoClasses = [];
    let hintSize = null;
    for (const { name, value } of [...node.attributes]) {
      if (name === "sc-name" || name === "data-dc-tpl") continue;
      let key = name;
      if (key.startsWith(CAMEL_ATTR))
        key = kebabToCamel(key.slice(CAMEL_ATTR.length));
      if (key === "hint-size") {
        hintSize = value;
        continue;
      }
      if (key.startsWith("style-")) {
        pseudoClasses.push(host.pseudoClass(key.slice(6), value));
        continue;
      }
      if (kind !== "dom") {
        if (key.includes("-") && !(kind === "x-import" && (key.startsWith("aria-") || key.startsWith("data-"))))
          key = kebabToCamel(key);
      } else {
        if (key === "class") key = "className";
        else if (key === "for") key = "htmlFor";
        else if (key.startsWith("on"))
          key = EVENT_MAP[key] || "on" + key[2].toUpperCase() + key.slice(3);
      }
      propGetters.push([key, compileAttr(value)]);
    }
    return { propGetters, pseudoClasses, hintSize };
  }
  var HOST_STYLE_PROPS = /* @__PURE__ */ new Set([
    "position",
    "left",
    "right",
    "top",
    "bottom",
    "inset",
    "width",
    "height",
    "z-index",
    "transform"
  ]);
  function hostPositionStyle(style) {
    const all = typeof style === "string" ? cssToObj(style) : style != null && typeof style === "object" ? style : null;
    if (!all) return void 0;
    const out = {};
    for (const [k, v] of Object.entries(all)) {
      const kebab = k.replace(/[A-Z]/g, (c) => "-" + c.toLowerCase());
      if (HOST_STYLE_PROPS.has(kebab)) out[k] = v;
    }
    return Object.keys(out).length ? out : void 0;
  }
  function compileTemplate(html, host) {
    const tpl = document.createElement("template");
    //! nosemgrep: direct-inner-html-assignment
    tpl.innerHTML = encodeCase(html);
    let tplN = 0;
    (function stamp(node) {
      if (node.nodeType === Node.ELEMENT_NODE) {
        node.setAttribute("data-dc-tpl", String(tplN++));
      }
      for (const c of node.childNodes) stamp(c);
    })(tpl.content);
    const builders = walkChildren(tpl.content, host);
    const render = ((vals, ctx) => builders.map((b, i) => b(vals || {}, ctx, i)));
    render.__annotated = tpl.innerHTML;
    return render;
  }
  function walkChildren(node, host) {
    return [...node.childNodes].map((c) => walk(c, host)).filter((b) => b != null);
  }
  var SLIDE_ID_VALUE_RE = /^[0-9a-f]{8}$/;
  var DECK_CONTROL_FLOW_RE = /^(sc-if|sc-for|sc-else|dc-import|x-import)$/;
  var DECK_AUX_RE = /^(template|script|style|sc-helmet|helmet)$/;
  function isDeckMountTag(el) {
    if (el.localName === "deck-stage") return true;
    return el.localName === "x-import" && (el.getAttribute("component-from-global-scope") || "") === "deck-stage";
  }
  function walkDeckChildren(el, host) {
    const pairs = [...el.childNodes].map((c) => ({ c, b: walk(c, host) })).filter((p) => p.b !== null);
    const kids = pairs.map((p) => p.b);
    const seen = /* @__PURE__ */ new Set();
    const wsSeen = /* @__PURE__ */ new Map();
    const keys = [];
    const nextSlideId = new Array(pairs.length);
    {
      let upcoming = null;
      for (let j = pairs.length - 1; j >= 0; j--) {
        const n = pairs[j].c;
        if (n.nodeType === Node.ELEMENT_NODE) {
          const t = n.localName;
          upcoming = !DECK_AUX_RE.test(t) && !DECK_CONTROL_FLOW_RE.test(t) ? n.getAttribute("data-om-slide-id") : null;
        }
        nextSlideId[j] = upcoming;
      }
    }
    for (let j = 0; j < pairs.length; j++) {
      const { c } = pairs[j];
      if (c.nodeType === Node.TEXT_NODE) {
        if ((c.nodeValue ?? "").trim() === "") {
          const base = nextSlideId[j] ? "omid-ws:" + nextSlideId[j] : "omid-ws:aux";
          const n = wsSeen.get(base) ?? 0;
          wsSeen.set(base, n + 1);
          keys.push(n === 0 ? base : base + ":" + n);
          continue;
        }
        return { kids, keys: null };
      }
      if (c.nodeType !== Node.ELEMENT_NODE) {
        keys.push(j);
        continue;
      }
      const child = c;
      const tag = child.localName;
      if (DECK_AUX_RE.test(tag)) {
        keys.push(j);
        continue;
      }
      if (DECK_CONTROL_FLOW_RE.test(tag)) return { kids, keys: null };
      const v = child.getAttribute("data-om-slide-id");
      if (!v || !SLIDE_ID_VALUE_RE.test(v) || seen.has(v)) {
        return { kids, keys: null };
      }
      seen.add(v);
      keys.push("omid:" + v);
    }
    return { kids, keys };
  }
  function renderDeckKids(kids, kidKeys, vals, ctx) {
    return kids.map((b, j) => {
      const k = kidKeys ? kidKeys[j] : j;
      const out = b(vals, ctx, k);
      return kidKeys != null && typeof out === "string" ? h(getReact().Fragment, { key: k }, out) : out;
    });
  }
  function walk(node, host) {
    if (node.nodeType === Node.TEXT_NODE) return walkText(node);
    if (node.nodeType !== Node.ELEMENT_NODE) return null;
    const el = node;
    const tag = el.tagName.toLowerCase();
    if (tag === "sc-for") return walkFor(el, host);
    if (tag === "sc-if") return walkIf(el, host);
    if (tag === "x-import") return walkXImport(el, host);
    if (tag === "sc-helmet") return host.helmet(el);
    if (tag === "dc-import") return walkComponent(el, host);
    return walkElement(el, host);
  }
  var warnedHoles = /* @__PURE__ */ new Set();
  function warnUnresolved(ctx, what) {
    const key = (ctx?.__name || "?") + "\0" + what;
    if (warnedHoles.has(key)) return;
    warnedHoles.add(key);
    console.warn("[dc-runtime] " + (ctx?.__name || "template") + ": " + what);
  }
  function walkText(node) {
    const txt = node.nodeValue ?? "";
    if (!txt.includes("{{")) {
      if (!txt.trim() && !txt.includes(" ")) return null;
      return () => txt;
    }
    const parts = txt.split(/\{\{([\s\S]+?)\}\}/g);
    return (vals, ctx, key) => h(
      getReact().Fragment,
      { key },
      ...parts.map((p, i) => {
        if (!(i & 1)) return p;
        const v = resolve(vals, p);
        if (v === void 0) {
          if (!ctx?.__streamingNow) {
            if (document.body?.hasAttribute("data-dc-editor-on")) {
              return h(
                "span",
                { key: i, className: "sc-interp sc-unresolved" },
                "{{ " + p.trim() + " }}"
              );
            }
            warnUnresolved(
              ctx,
              "{{ " + p.trim() + " }} never resolved \u2014 rendered as empty"
            );
            return null;
          }
          return h(
            "span",
            { key: i, className: "sc-interp sc-missing" },
            p.trim()
          );
        }
        if (getReact().isValidElement(v) || Array.isArray(v)) {
          return h(getReact().Fragment, { key: i }, v);
        }
        if (v === null || typeof v === "boolean") return null;
        return h("span", { key: i, className: "sc-interp" }, String(v));
      })
    );
  }
  function walkFor(el, host) {
    const listGet = compileAttr(el.getAttribute("list") || "");
    const asName = el.getAttribute("as") || "item";
    const hintN = parseInt(el.getAttribute("hint-placeholder-count") || "0", 10);
    const kids = walkChildren(el, host);
    const listSrc = el.getAttribute("list") || "";
    return (vals, ctx, key) => {
      let list = listGet(vals);
      if (!Array.isArray(list)) {
        if (!ctx?.__streamingNow) {
          if (list !== void 0 && list !== null) {
            warnUnresolved(
              ctx,
              'sc-for list="' + listSrc + '" is not an array (' + typeof list + ")"
            );
          }
          list = [];
        } else {
          list = hintN > 0 ? Array(hintN).fill(void 0) : [];
        }
      }
      return h(
        getReact().Fragment,
        { key },
        list.map((item, i) => {
          const sub = { ...vals, [asName]: item, $index: i };
          return h(
            getReact().Fragment,
            { key: i },
            kids.map((b, j) => b(sub, ctx, j))
          );
        })
      );
    };
  }
  function walkIf(el, host) {
    const valGet = compileAttr(el.getAttribute("value") || "");
    const hintRaw = el.getAttribute("hint-placeholder-val");
    const hintGet = hintRaw != null ? compileAttr(hintRaw) : null;
    const kids = walkChildren(el, host);
    return (vals, ctx, key) => {
      let v = valGet(vals);
      if (v === void 0 && hintGet && ctx?.__streamingNow) v = hintGet(vals);
      return v ? h(
        getReact().Fragment,
        { key },
        kids.map((b, j) => b(vals, ctx, j))
      ) : null;
    };
  }
  function walkComponent(el, host) {
    const name = el.getAttribute("name") || el.getAttribute("component") || "";
    el.removeAttribute("name");
    el.removeAttribute("component");
    const tplId = el.getAttribute("data-dc-tpl");
    const styleRaw = el.getAttribute("style");
    el.removeAttribute("style");
    const styleGet = styleRaw != null ? compileAttr(styleRaw) : null;
    const { propGetters, hintSize } = collectProps(el, "dc-import", host);
    const kids = walkChildren(el, host);
    return (vals, ctx, key) => {
      const props = {
        key,
        __hintSize: hintSize,
        __tplId: tplId,
        __hostStyle: styleGet ? hostPositionStyle(styleGet(vals)) : void 0
      };
      for (const [k, g] of propGetters) {
        const v = g(vals);
        if (k === "dcProps") {
          if (v && typeof v === "object") Object.assign(props, v);
          continue;
        }
        props[k] = v;
      }
      if (kids.length) props.children = kids.map((b, j) => b(vals, ctx, j));
      return h(host.component(name), props);
    };
  }
  function walkXImport(el, host) {
    const globalNameGet = compileAttr(
      el.getAttribute("component-from-global-scope") || ""
    );
    const exportNameGet = compileAttr(
      el.getAttribute("component") || el.getAttribute("name") || ""
    );
    const fromRaw = el.getAttribute("from") || (el.getAttribute("component-from-global-scope") ? "" : el.getAttribute("src") || el.getAttribute("import") || "");
    const urls = fromRaw.trim() ? fromRaw.trim().split(/\s+/) : [];
    const url = urls.length ? urls[urls.length - 1] : "";
    const kindOf = (u) => /\.(jsx|tsx)(\?|#|$)/i.test(u) ? "jsx" : "js";
    const tplId = el.getAttribute("data-dc-tpl");
    const styleRaw = el.getAttribute("style");
    el.removeAttribute("style");
    const styleGet = styleRaw != null ? compileAttr(styleRaw) : null;
    const wrap = tplId != null || styleGet != null;
    const { propGetters, hintSize } = collectProps(el, "x-import", host);
    const hasContent = el.children.length > 0 || !!(el.textContent || "").trim();
    const deckKeyed = hasContent && isDeckMountTag(el) ? walkDeckChildren(el, host) : null;
    const kids = deckKeyed ? deckKeyed.kids : hasContent ? walkChildren(el, host) : [];
    const kidKeys = deckKeyed?.keys ?? null;
    const urlBindable = fromRaw.includes("{{");
    if (urls.length && !urlBindable) {
      let prev;
      for (const u of urls) prev = host.loadExternal(kindOf(u), u, prev);
    }
    const evalName = (g, vals) => {
      const v = g(vals);
      const s = v == null ? "" : String(v);
      return s.includes("{{") ? "" : s;
    };
    return (vals, ctx, key) => {
      const globalName = evalName(globalNameGet, vals);
      const name = globalName || evalName(exportNameGet, vals);
      const C = !name || urlBindable ? null : globalName ? host.resolveExternalGlobal(url, globalName) : host.resolveExternal(url, name);
      const hostStyle = styleGet ? hostPositionStyle(styleGet(vals)) : void 0;
      const wrapper = wrap ? {
        key,
        className: "sc-host-x",
        "data-dc-tpl": tplId,
        style: hostStyle || { display: "contents" }
      } : null;
      if (!C) {
        const error = urlBindable ? "x-import `from` cannot contain {{ \u2026 }} \u2014 module URLs are resolved at parse time; use a literal URL" : host.resolveExternalError(url, name);
        const ph = host.placeholder({
          key: wrapper ? void 0 : key,
          name,
          hintSize,
          error
        });
        return wrapper ? h("div", wrapper, ph) : ph;
      }
      const props = wrapper ? {} : { key };
      let unresolvedHole = false;
      for (const [k, g] of propGetters) {
        if (k === "component" || k === "componentFromGlobalScope" || k === "from") {
          continue;
        }
        const v = g(vals);
        if (v === void 0) unresolvedHole = true;
        if (k === "dcProps") {
          if (v && typeof v === "object") Object.assign(props, v);
          continue;
        }
        props[k] = v;
      }
      if (unresolvedHole && ctx?.__htmlStreamingNow) {
        const ph = host.placeholder({
          key: wrapper ? void 0 : key,
          name,
          hintSize,
          error: null
        });
        return wrapper ? h("div", wrapper, ph) : ph;
      }
      if (kids.length) {
        props.children = renderDeckKids(kids, kidKeys, vals, ctx);
      }
      return wrapper ? h("div", wrapper, h(C, props)) : h(C, props);
    };
  }
  function contentKey(el) {
    const clone = el.cloneNode(true);
    for (const d of clone.querySelectorAll("*")) {
      while (d.attributes.length) d.removeAttribute(d.attributes[0].name);
    }
    const s = clone.innerHTML;
    let h2 = 5381;
    for (let i = 0; i < s.length; i++) h2 = (h2 << 5) + h2 + s.charCodeAt(i) | 0;
    return s.length + "." + (h2 >>> 0).toString(36);
  }
  var NEVER_CONTENT_KEYED = new Set(
    "script style textarea option title select canvas iframe video audio".split(
      " "
    )
  );
  var NOT_INLINE_SELECTOR = ":not(" + [...INLINE_TEXT_TAGS].join(",") + ")";
  function walkElement(el, host) {
    const realTag = RAW_UNWRAP[el.localName] || el.localName;
    const tplId = el.getAttribute("data-dc-tpl");
    const inlineOnly = el.childNodes.length > 0 && !NEVER_CONTENT_KEYED.has(realTag) && el.querySelector(NOT_INLINE_SELECTOR) === null;
    const keySuffix = inlineOnly ? "|" + contentKey(el) : "";
    const { propGetters, pseudoClasses } = collectProps(el, "dom", host);
    const deckKeyed = isDeckMountTag(el) ? walkDeckChildren(el, host) : null;
    const kids = deckKeyed ? deckKeyed.kids : walkChildren(el, host);
    const kidKeys = deckKeyed?.keys ?? null;
    return (vals, ctx, key) => {
      const props = {
        key: key + keySuffix,
        "data-dc-tpl": tplId
      };
      for (const [k, g] of propGetters) {
        let v = g(vals);
        if (k === "style" && typeof v === "string") v = cssToObj(v);
        if ((k === "value" || k === "checked") && v === void 0) {
          v = k === "checked" ? false : "";
        }
        props[k] = v;
      }
      if (pseudoClasses.length) {
        props.className = [props.className, ...pseudoClasses].filter(Boolean).join(" ");
      }
      return h(realTag, props, ...renderDeckKids(kids, kidKeys, vals, ctx));
    };
  }

  // src/logic.ts
  var StreamableLogic = class {
    constructor(props) {
      __publicField(this, "props");
      __publicField(this, "state", {});
      /** Back-pointer to the wrapper component, installed after construction. */
      __publicField(this, "__host");
      this.props = props || {};
    }
    setState(update, cb) {
      this.__host && this.__host.__setLogicState(update, cb);
    }
    forceUpdate() {
      this.__host && this.__host.forceUpdate();
    }
    componentDidMount() {
    }
    componentDidUpdate(_prevProps) {
    }
    componentWillUnmount() {
    }
    /** The flat object the template renders against (merged over props). */
    renderVals() {
      return {};
    }
  };
  function evalDcLogic(src) {
    //! nosemgrep: eval-and-function-constructor
    const fn = new Function(
      "DCLogic",
      "StreamableLogic",
      "React",
      src + '\n;return (typeof Component!=="undefined"&&Component)||undefined;'
    );
    return fn(StreamableLogic, StreamableLogic, getReact());
  }

  // src/component.ts
  function shallowEqual(a, b) {
    if (!b) return false;
    const ak = Object.keys(a).filter((k) => k !== "children");
    const bk = Object.keys(b).filter((k) => k !== "children");
    if (ak.length !== bk.length) return false;
    for (const k of ak) if (a[k] !== b[k]) return false;
    return true;
  }
  function Placeholder({
    name,
    hintSize,
    streaming,
    error
  }) {
    const [w, hgt] = (hintSize || "100%,60px").split(",");
    return h(
      "div",
      {
        className: "sc-placeholder" + (streaming ? " sc-streaming" : ""),
        style: { width: w.trim(), height: hgt && hgt.trim() },
        title: name
      },
      error ? h(
        "div",
        { className: "sc-placeholder-error" },
        (name ? name + ": " : "") + error
      ) : null
    );
  }
  function hintToMin(hint) {
    if (!hint) return void 0;
    const [w, hgt] = hint.split(",");
    return { minWidth: w.trim(), minHeight: hgt && hgt.trim() };
  }
  function createComponentFactory(registry, ensureFetched) {
    const React = getReact();
    const AncestorContext = React.createContext([]);
    class StreamableComponent extends React.Component {
      constructor(props) {
        super(props);
        __publicField(this, "__name");
        __publicField(this, "__sub");
        __publicField(this, "__needsDidMount", false);
        /** Snapshot of the registry's streaming flags taken at render time —
         *  builders read it off the RenderCtx (this) to pick placeholder vs
         *  render-nothing for unresolved values. */
        __publicField(this, "__streamingNow", false);
        __publicField(this, "__htmlStreamingNow", false);
        /** When a construct throws, remember the (class, registry.ver, props)
         *  triple so render-time reconcile doesn't re-attempt it on every parent
         *  re-render. A registry bump (new class, template, external module
         *  resolving via bumpAll) changes `ver` and breaks the memo so an
         *  env-dependent constructor can self-heal. */
        __publicField(this, "__failedLogic", null);
        __publicField(this, "__failedUserProps", null);
        __publicField(this, "__failedVer", -1);
        /** Per-instance constructor error — kept here (not on the registry entry)
         *  so one instance's successful construct can't hide a sibling's failure,
         *  and a construct can never wipe an eval error `updateJs` recorded on
         *  `r.logicError`. */
        __publicField(this, "__ctorError", null);
        __publicField(this, "logic");
        this.__name = props.__name;
        this.state = { __v: 0, __err: null };
        this.__sub = () => {
          if (this.state.__err) this.setState({ __err: null });
          this.forceUpdate();
        };
        this.__makeLogic(registry.get(this.__name).Logic, null);
        ensureFetched(this.__name);
      }
      /** Error-boundary hook: a render crash anywhere in this DC's subtree
       *  (its own template, an x-import'd component, a child DC without its
       *  own deeper boundary) lands here instead of unmounting the page. */
      static getDerivedStateFromError(e) {
        return { __err: e instanceof Error && e.message ? e.message : String(e) };
      }
      componentDidCatch(e, info) {
        console.error(
          "[dc-runtime] render error in <" + this.__name + ">:",
          e,
          info?.componentStack || ""
        );
      }
      /** Instantiate the logic class (or the no-op base) and adopt `prevState`
       *  over its initial state — used both at mount and on hot-swap. */
      __makeLogic(Logic, prevState) {
        const L = Logic || StreamableLogic;
        try {
          this.logic = new L(this.__userProps());
          this.__failedLogic = null;
          this.__failedUserProps = null;
          this.__ctorError = null;
        } catch (e) {
          console.error(e);
          this.__failedLogic = Logic;
          this.__failedUserProps = this.__userProps();
          this.__failedVer = registry.get(this.__name).ver;
          this.__ctorError = this.__name + ": " + (e instanceof Error && e.message ? e.message : String(e));
          this.logic = new StreamableLogic(
            this.__userProps()
          );
        }
        this.logic.__host = this;
        if (prevState)
          this.logic.state = { ...this.logic.state || {}, ...prevState };
      }
      /** The props the author's logic + template see — internal __-prefixed
       *  wiring stripped. */
      __userProps() {
        const { __name, __hintSize, __tplId, __hostStyle, ...rest } = this.props;
        return rest;
      }
      __setLogicState(update, cb) {
        const prev = this.logic.state;
        const patch = typeof update === "function" ? update(prev) : update;
        this.logic.state = { ...prev, ...patch };
        this.setState((s) => ({ __v: s.__v + 1 }), cb);
      }
      /** Swap the logic instance when the registry's Logic class changed
       *  (streaming completion, hot reload). State carries over; didMount
       *  re-fires after the swap commits so refs exist. */
      __reconcileLogic() {
        const r = registry.get(this.__name);
        const Next = r.Logic;
        const Cur = this.logic.constructor;
        if (Next === Cur || !Next && Cur === StreamableLogic || Next === this.__failedLogic && r.ver === this.__failedVer && shallowEqual(this.__userProps(), this.__failedUserProps)) {
          return;
        }
        if (!this.__needsDidMount) {
          try {
            this.logic.componentWillUnmount();
          } catch (e) {
            console.error(e);
          }
        }
        this.__makeLogic(Next, this.logic.state);
        this.__needsDidMount = true;
      }
      componentDidMount() {
        registry.get(this.__name).subs.add(this.__sub);
        try {
          this.logic.componentDidMount();
        } catch (e) {
          console.error(e);
        }
      }
      componentDidUpdate(prevProps) {
        this.logic.props = this.__userProps();
        if (this.__needsDidMount) {
          if (this.state.__err || !registry.get(this.__name).tpl) return;
          this.__needsDidMount = false;
          try {
            this.logic.componentDidMount();
          } catch (e) {
            console.error(e);
          }
        } else {
          try {
            this.logic.componentDidUpdate(prevProps);
          } catch (e) {
            console.error(e);
          }
        }
      }
      componentWillUnmount() {
        registry.get(this.__name).subs.delete(this.__sub);
        if (!this.__needsDidMount) {
          try {
            this.logic.componentWillUnmount();
          } catch (e) {
            console.error(e);
          }
        }
      }
      render() {
        const r = registry.get(this.__name);
        const cls = "sc-host" + (r.htmlStreaming ? " sc-streaming-html" : "") + (r.jsStreaming ? " sc-streaming-js" : "");
        const hintStyle = r.htmlStreaming ? hintToMin(this.props.__hintSize) : void 0;
        const hostStyle = this.props.__hostStyle || hintStyle ? { ...hintStyle || {}, ...this.props.__hostStyle || {} } : void 0;
        const hostBase = {
          className: cls,
          style: hostStyle,
          "data-sc-name": this.__name,
          "data-dc-tpl": this.props.__tplId
        };
        const chain = Array.isArray(this.context) ? this.context : [];
        if (chain.includes(this.__name)) {
          const cycle = [
            ...chain.slice(chain.indexOf(this.__name)),
            this.__name
          ].join(" \u2192 ");
          return h(
            "div",
            { ...hostBase, className: cls + " sc-has-error" },
            h(Placeholder, {
              name: this.__name,
              hintSize: this.props.__hintSize,
              error: "circular import: " + cycle
            })
          );
        }
        if (this.state.__err) {
          return h(
            "div",
            { ...hostBase, className: cls + " sc-has-error" },
            h(
              "div",
              { className: "sc-logic-error", "data-omelette-chrome": "" },
              this.__name + ": " + this.state.__err
            ),
            h(Placeholder, {
              name: this.__name,
              hintSize: this.props.__hintSize,
              error: this.state.__err
            })
          );
        }
        this.__reconcileLogic();
        if (!r.tpl) {
          return h(
            "div",
            hostBase,
            h(Placeholder, { name: this.__name, hintSize: this.props.__hintSize })
          );
        }
        const userProps = this.__userProps();
        this.logic.props = userProps;
        let vals = userProps;
        let renderErr = r.logicError || this.__ctorError;
        try {
          vals = { ...userProps, ...this.logic.renderVals() || {} };
        } catch (e) {
          console.error(e);
          renderErr = this.__name + ".renderVals(): " + (e instanceof Error && e.message ? e.message : String(e));
        }
        this.__streamingNow = !!(r.htmlStreaming || r.jsStreaming);
        this.__htmlStreamingNow = !!r.htmlStreaming;
        return h(
          "div",
          { ...hostBase, className: cls + (renderErr ? " sc-has-error" : "") },
          renderErr && h(
            "div",
            { className: "sc-logic-error", "data-omelette-chrome": "" },
            renderErr
          ),
          h(
            AncestorContext.Provider,
            { value: [...chain, this.__name] },
            r.tpl(vals, this)
          )
        );
      }
    }
    __publicField(StreamableComponent, "contextType", AncestorContext);
    const named = /* @__PURE__ */ new Map();
    function getDC(name) {
      const hit = named.get(name);
      if (hit) return hit;
      function Dispatcher(p) {
        const [, setTick] = React.useState(0);
        React.useEffect(() => {
          const sub = () => setTick((n) => n + 1);
          registry.get(name).subs.add(sub);
          return () => {
            registry.get(name).subs.delete(sub);
          };
        }, []);
        ensureFetched(name);
        return h(StreamableComponent, { ...p, __name: name });
      }
      Dispatcher.displayName = name;
      named.set(name, Dispatcher);
      return Dispatcher;
    }
    return {
      getDC,
      StreamableComponent
    };
  }

  // src/bundled.ts
  function bundledBlob(url) {
    const blobs = window.__resourceBlobs;
    const b = blobs ? blobs[url.split("#")[0]] : void 0;
    return b instanceof Blob ? b : null;
  }

  // src/cdn.ts
  var REACT_URL = "https://unpkg.com/react@18.3.1/umd/react.production.min.js";
  var REACT_SRI = "sha384-DGyLxAyjq0f9SPpVevD6IgztCFlnMF6oW/XQGmfe+IsZ8TqEiDrcHkMLKI6fiB/Z";
  var REACT_DOM_URL = "https://unpkg.com/react-dom@18.3.1/umd/react-dom.production.min.js";
  var REACT_DOM_SRI = "sha384-gTGxhz21lVGYNMcdJOyq01Edg0jhn/c22nsx0kyqP0TxaV5WVdsSH1fSDUf5YJj1";
  var BABEL_URL = "https://unpkg.com/@babel/standalone@7.29.0/babel.min.js";
  var BABEL_SRI = "sha384-m08KidiNqLdpJqLq95G/LEi8Qvjl/xUYll3QILypMoQ65QorJ9Lvtp2RXYGBFj1y";
  function cdnScriptFor(url, sri) {
    const res = window.__resources;
    const v = res ? res[url] : void 0;
    return typeof v === "string" && v ? { src: v } : { src: url, integrity: sri };
  }

  // src/external.ts
  var isCustomElementName = (n) => !n.includes(".") && n.includes("-");
  function isRenderableType(g) {
    if (typeof g === "function") return !isElementClass(g);
    return typeof g === "object" && g !== null && typeof g.$$typeof === "symbol";
  }
  function resolveDottedPath(root, name) {
    let cur = root;
    for (const seg of name.split(".")) {
      if (cur == null) return void 0;
      cur = cur[seg];
    }
    return cur;
  }
  var GLOBAL_POLL_INTERVAL_MS = 50;
  var GLOBAL_POLL_TIMEOUT_MS = 3e4;
  function createExternalModules(onResolved) {
    const cache = /* @__PURE__ */ new Map();
    let babelLoading = null;
    const reportedMissing = /* @__PURE__ */ new Map();
    const polling = /* @__PURE__ */ new Set();
    function ensureBabel() {
      if (window.Babel) return Promise.resolve();
      if (babelLoading) return babelLoading;
      const babel = cdnScriptFor(BABEL_URL, BABEL_SRI);
      babelLoading = new Promise((res, rej) => {
        const s = document.createElement("script");
        s.src = babel.src;
        if (babel.integrity) {
          s.integrity = babel.integrity;
          s.crossOrigin = "anonymous";
        }
        s.onload = () => res();
        s.onerror = rej;
        document.head.appendChild(s);
      });
      return babelLoading;
    }
    const pending = /* @__PURE__ */ new Map();
    function load(kind, url, after) {
      const existing = pending.get(url);
      if (existing) return existing;
      cache.set(url, null);
      console.info("[dc-runtime] x-import: loading", url, "(" + kind + ")");
      const ready = Promise.all([
        kind === "jsx" ? ensureBabel() : Promise.resolve(),
        after ?? Promise.resolve()
      ]);
      const p = ready.then(() => {
        const pre = bundledBlob(url);
        if (pre) return pre.text();
        return fetch(url).then((r) => {
          if (!r.ok) throw new Error("HTTP " + r.status);
          return r.text();
        });
      }).then((src) => {
        const code = kind === "jsx" ? window.Babel.transform(src, {
          filename: url,
          presets: ["react", "typescript"]
        }).code : src;
        const module = { exports: {} };
        const before = new Set(Object.keys(window));
        //! nosemgrep: eval-and-function-constructor
        new Function("React", "module", "exports", "require", code)(
          getReact(),
          module,
          module.exports,
          () => ({})
        );
        const globals = {};
        for (const k of Object.keys(window)) {
          if (!before.has(k) && typeof window[k] === "function") {
            globals[k] = window[k];
          }
        }
        cache.set(url, { mod: module.exports, globals });
        console.info(
          "[dc-runtime] x-import: loaded",
          url,
          "\u2014 exports:",
          Object.keys(module.exports),
          "window globals:",
          Object.keys(globals)
        );
        onResolved();
      }).catch((e) => {
        cache.set(url, {
          mod: {},
          globals: {},
          error: "failed to load: " + (e instanceof Error && e.message ? e.message : String(e))
        });
        console.error(
          "[dc-runtime] x-import: FAILED to load",
          url,
          "(" + kind + ")",
          e
        );
        onResolved();
      });
      pending.set(url, p);
      return p;
    }
    function resolve2(url, name) {
      const entry = cache.get(url);
      if (!entry) return null;
      const { mod, globals } = entry;
      const C = mod && mod[name] || globals && globals[name] || typeof window !== "undefined" && window[name] || mod && mod.default;
      if (typeof C === "function") return C;
      const key = url + "\0" + name;
      if (!reportedMissing.has(key)) {
        reportedMissing.set(
          key,
          entry.error || 'no export named "' + name + '" (has: ' + Object.keys(mod).join(", ") + ")"
        );
        console.error(
          "[dc-runtime] x-import: module",
          url,
          "loaded but has no component named",
          JSON.stringify(name),
          "\u2014 available exports:",
          Object.keys(mod),
          "window globals:",
          Object.keys(globals),
          ". The module must `module.exports = {" + name + "}` or set `window." + name + "`."
        );
      }
      return null;
    }
    function waitForGlobal(name) {
      if (polling.has(name)) return;
      polling.add(name);
      const started = Date.now();
      const isCE = isCustomElementName(name);
      const tick = () => {
        const found = isCE ? customElements.get(name) : isRenderableType(resolveDottedPath(window, name));
        if (found) {
          polling.delete(name);
          onResolved();
          return;
        }
        if (Date.now() - started >= GLOBAL_POLL_TIMEOUT_MS) {
          console.warn(
            "[dc-runtime] x-import: global",
            JSON.stringify(name),
            "never appeared on window after " + GLOBAL_POLL_TIMEOUT_MS + "ms"
          );
          return;
        }
        setTimeout(tick, GLOBAL_POLL_INTERVAL_MS);
      };
      setTimeout(tick, GLOBAL_POLL_INTERVAL_MS);
    }
    function resolveGlobal(url, name) {
      const isCE = isCustomElementName(name);
      if (!url) {
        if (isCE) {
          if (customElements.get(name)) return name;
          waitForGlobal(name);
          return null;
        }
        const g2 = resolveDottedPath(window, name);
        if (isRenderableType(g2)) return g2;
        waitForGlobal(name);
        return null;
      }
      const entry = cache.get(url);
      if (!entry) return null;
      if (isCE && customElements.get(name)) return name;
      const g = entry.globals[name] ?? resolveDottedPath(window, name);
      if (isRenderableType(g)) return g;
      if (name.includes(".")) return null;
      const key = url + "\0global\0" + name;
      if (!reportedMissing.has(key)) {
        reportedMissing.set(key, null);
        if (isCE && !customElements.get(name)) {
          console.warn(
            "[dc-runtime] x-import:",
            url,
            "loaded but no custom element",
            JSON.stringify(name),
            "is registered and window." + name + " is not a function \u2014 rendering <" + name + "> as an unknown element."
          );
        }
      }
      return name;
    }
    function getError(url, name) {
      const entry = cache.get(url);
      if (entry?.error) return entry.error;
      return reportedMissing.get(url + "\0" + name) || null;
    }
    return { load, resolve: resolve2, resolveGlobal, getError };
  }
  function isElementClass(g) {
    try {
      return typeof g === "function" && typeof HTMLElement !== "undefined" && g.prototype instanceof HTMLElement;
    } catch {
      return false;
    }
  }

  // src/atomics.ts
  var ATOMIC_CSS = (
    // layout
    ".fx{display:flex}.col{display:flex;flex-direction:column}.grid{display:grid}.ac{align-items:center}.jc{justify-content:center}.jb{justify-content:space-between}.f1{flex:1}.noshrink{flex-shrink:0}.wrap{flex-wrap:wrap}.fw5{font-weight:500}.fw6{font-weight:600}.fw7{font-weight:700}.fw8{font-weight:800}.fs11{font-size:11px}.fs12{font-size:12px}.fs13{font-size:13px}.fs14{font-size:14px}.fs15{font-size:15px}.fs16{font-size:16px}.fs20{font-size:20px}.fs22{font-size:22px}.upper{text-transform:uppercase}.tc{text-align:center}.nowrap{white-space:nowrap}.gap8{gap:8px}.gap10{gap:10px}.gap12{gap:12px}.gap16{gap:16px}.gap24{gap:24px}.m0{margin:0}.mt8{margin-top:8px}.mt12{margin-top:12px}.mt16{margin-top:16px}.mb8{margin-bottom:8px}.mb12{margin-bottom:12px}.mb16{margin-bottom:16px}.posrel{position:relative}.posabs{position:absolute}.round{border-radius:50%}.ohide{overflow:hidden}.bbox{box-sizing:border-box}.pointer{cursor:pointer}.w100{width:100%}.b0{border:none}"
  );

  // src/helmet.ts
  var DESIGN_DOC_MODE_RE = /<meta\b[^>]*\bname\s*=\s*["']design_doc_mode["'][^>]*\b(?:content|value)\s*=\s*["'](\w+)["']/i;
  var CANVAS_BG_LIGHT = "#f0eee6";
  var CANVAS_BG_DARK = "#2e2c26";
  function createHelmetManager(doc, isStreaming) {
    const mounted = /* @__PURE__ */ new Set();
    const live = /* @__PURE__ */ new Map();
    let designDocMode = null;
    let canvasStyleEl = null;
    let appTheme = "light";
    try {
      const ds = doc.documentElement.dataset.theme;
      appTheme = ds === "dark" || ds === "light" ? ds : new URLSearchParams(doc.defaultView?.location.search ?? "").get(
        "theme"
      ) === "dark" ? "dark" : "light";
    } catch {
    }
    function applyCanvasBg() {
      if (!canvasStyleEl) return;
      const bg = appTheme === "dark" ? CANVAS_BG_DARK : CANVAS_BG_LIGHT;
      canvasStyleEl.textContent = `html,body{background:${bg}}#dc-root>.sc-host{position:relative}`;
    }
    function postDesignMode(mode) {
      if (window.parent === window) return;
      try {
        window.parent.postMessage({ type: "__dc_design_mode", mode }, "*");
      } catch {
      }
    }
    function setDesignDocMode(mode) {
      if (mode === designDocMode) return;
      designDocMode = mode;
      postDesignMode(mode);
      if (mode === "canvas") {
        doc.documentElement.setAttribute("data-dc-canvas", "");
        canvasStyleEl = doc.createElement("style");
        canvasStyleEl.setAttribute("data-dc-canvas", "");
        applyCanvasBg();
        doc.head.appendChild(canvasStyleEl);
      } else {
        doc.documentElement.removeAttribute("data-dc-canvas");
        canvasStyleEl?.remove();
        canvasStyleEl = null;
      }
    }
    window.addEventListener("message", (e) => {
      const type = e.data && e.data.type;
      if (type === "__dc_theme") {
        const t = e.data.theme;
        if (t === "light" || t === "dark") {
          appTheme = t;
          applyCanvasBg();
        }
        return;
      }
      if (!designDocMode || type !== "__dc_probe") return;
      postDesignMode(designDocMode);
    });
    function compile(node) {
      const raw = [...node.children];
      const helmetClosed = node.nextSibling != null || node.parentNode?.nextSibling != null;
      if (node.hasAttribute("data-dc-atomics") && !mounted.has("__dc-atomics")) {
        mounted.add("__dc-atomics");
        const el = doc.createElement("style");
        el.id = "__dc-atomics";
        el.textContent = ATOMIC_CSS;
        doc.head.appendChild(el);
      }
      return (_vals, ctx) => {
        const name = ctx && ctx.__name || "";
        const streaming = !!(name && isStreaming(name));
        for (let i = 0; i < raw.length; i++) {
          const child = raw[i];
          const tag = child.tagName;
          const mayBePartial = streaming && !helmetClosed && i === raw.length - 1;
          if (tag === "SCRIPT") {
            if (mayBePartial) continue;
            const key = "SCRIPT|" + (child.getAttribute("src") || child.textContent || "");
            if (mounted.has(key)) continue;
            mounted.add(key);
            const el = doc.createElement("script");
            for (const { name: an, value } of [...child.attributes])
              el.setAttribute(an, value);
            if (child.textContent) el.textContent = child.textContent;
            doc.head.appendChild(el);
          } else if (tag === "LINK" || tag === "META") {
            if (mayBePartial) continue;
            const key = tag + "|" + (child.getAttribute("href") || child.getAttribute("src") || child.outerHTML);
            if (mounted.has(key)) continue;
            mounted.add(key);
            if (tag === "LINK") {
              const rel = (child.getAttribute("rel") || "").toLowerCase().split(/\s+/);
              const href = (child.getAttribute("href") || "").trim();
              const res = window.__resources;
              const pre = res && rel.includes("stylesheet") && !rel.includes("alternate") ? res[href] : void 0;
              const blob = typeof pre === "string" && pre ? bundledBlob(pre) : null;
              if (blob) {
                const el = doc.createElement("style");
                if (child.hasAttribute("disabled")) {
                  el.setAttribute("media", "not all");
                } else if (child.getAttribute("media")) {
                  el.setAttribute("media", child.getAttribute("media"));
                }
                if (child.getAttribute("title"))
                  el.setAttribute("title", child.getAttribute("title"));
                void blob.text().then((css) => {
                  el.textContent = css;
                });
                doc.head.appendChild(el);
                continue;
              }
            }
            doc.head.appendChild(child.cloneNode(true));
          } else {
            const key = name + "|" + i;
            let el = live.get(key);
            if (!el || el.tagName !== tag) {
              if (el) el.remove();
              el = doc.createElement(tag.toLowerCase());
              live.set(key, el);
              doc.head.appendChild(el);
            }
            for (const { name: an, value } of [...child.attributes]) {
              if (el.getAttribute(an) !== value) el.setAttribute(an, value);
            }
            if (el.textContent !== child.textContent)
              el.textContent = child.textContent;
          }
        }
        return null;
      };
    }
    return { compile, setDesignDocMode };
  }

  // src/pseudo.ts
  function scanUnquotedUrl(css, i) {
    if (css[i] !== "u" && css[i] !== "U" || css.slice(i, i + 4).toLowerCase() !== "url(" || /[a-z0-9_-]/i.test(css[i - 1] ?? "")) {
      return -1;
    }
    let j = i + 4;
    while (j < css.length && /\s/.test(css[j])) j++;
    if (css[j] === '"' || css[j] === "'") return -1;
    while (j < css.length && css[j] !== ")") {
      if (css[j] === "\\") j++;
      j++;
    }
    return j < css.length ? j + 1 : css.length;
  }
  function stripComments(css) {
    let out = "";
    let quote = "";
    for (let i = 0; i < css.length; i++) {
      const c = css[i];
      if (quote) {
        if (c === "\\") {
          out += c + (css[i + 1] ?? "");
          i++;
          continue;
        }
        if (c === quote) quote = "";
        out += c;
      } else if (c === "'" || c === '"') {
        quote = c;
        out += c;
      } else if (c === "/" && css[i + 1] === "*") {
        const end = css.indexOf("*/", i + 2);
        i = end === -1 ? css.length : end + 1;
        out += " ";
      } else {
        const end = scanUnquotedUrl(css, i);
        if (end === -1) out += c;
        else {
          out += css.slice(i, end);
          i = end - 1;
        }
      }
    }
    return out;
  }
  function importantify(css) {
    css = stripComments(css);
    const decls = [];
    let start = 0;
    let depth = 0;
    let quote = "";
    for (let i = 0; i < css.length; i++) {
      const c = css[i];
      if (quote) {
        if (c === "\\") i++;
        else if (c === quote) quote = "";
      } else if (c === "'" || c === '"') quote = c;
      else if (c === "(") depth++;
      else if (c === ")") depth = Math.max(0, depth - 1);
      else if (c === ";" && depth === 0) {
        decls.push(css.slice(start, i));
        start = i + 1;
      } else {
        const end = scanUnquotedUrl(css, i);
        if (end !== -1) i = end - 1;
      }
    }
    decls.push(css.slice(start));
    return decls.map((d) => d.trim()).filter(Boolean).map((d) => /!\s*important$/i.test(d) ? d : d + " !important").join(";");
  }
  function createPseudoSheet(doc) {
    let el = null;
    const cache = /* @__PURE__ */ new Map();
    let n = 0;
    return (pseudo, css) => {
      const k = pseudo + "|" + css;
      const hit = cache.get(k);
      if (hit) return hit;
      if (!el) {
        el = doc.createElement("style");
        doc.head.appendChild(el);
      }
      const cls = "scp" + (n++).toString(36);
      const isPseudoElement = pseudo === "before" || pseudo === "after";
      const sel = isPseudoElement ? "." + cls + "::" + pseudo : "." + cls + ":" + pseudo;
      el.sheet.insertRule(
        sel + "{" + (isPseudoElement ? css : importantify(css)) + "}",
        el.sheet.cssRules.length
      );
      cache.set(k, cls);
      return cls;
    };
  }

  // src/registry.ts
  function createRegistry() {
    const entries = /* @__PURE__ */ Object.create(null);
    function get(name) {
      return entries[name] || (entries[name] = {
        html: "",
        tpl: null,
        Logic: null,
        jsStreaming: false,
        htmlStreaming: false,
        ver: 0,
        subs: /* @__PURE__ */ new Set(),
        fetched: false
      });
    }
    function bump(name) {
      const r = get(name);
      r.ver++;
      for (const fn of r.subs) fn();
    }
    return {
      entries,
      get,
      bump,
      bumpAll() {
        for (const n in entries) bump(n);
      }
    };
  }

  // src/runtime.ts
  var COMPONENT_DIR = ".";
  function createRuntime(doc = document) {
    const registry = createRegistry();
    const pseudoClass = createPseudoSheet(doc);
    const helmet = createHelmetManager(
      doc,
      (name) => registry.get(name).htmlStreaming
    );
    const external = createExternalModules(() => registry.bumpAll());
    const factory = createComponentFactory(registry, ensureFetched);
    const host = {
      component: (name) => factory.getDC(name),
      placeholder: (props) => h(Placeholder, props),
      helmet: (node) => helmet.compile(node),
      loadExternal: (kind, url, after) => external.load(kind, url, after),
      resolveExternal: (url, name) => external.resolve(url, name),
      resolveExternalGlobal: (url, name) => external.resolveGlobal(url, name),
      resolveExternalError: (url, name) => external.getError(url, name),
      pseudoClass
    };
    function ensureFetched(name) {
      const r = registry.get(name);
      if (r.fetched) return;
      r.fetched = true;
      const url = COMPONENT_DIR + "/" + encodeURIComponent(name) + ".dc.html";
      const res = window.__resources;
      const pre = res ? res[url] : void 0;
      const target = typeof pre === "string" && pre ? pre : url;
      const blob = bundledBlob(target);
      (blob ? blob.text() : fetch(target).then((res2) => {
        if (!res2.ok) {
          console.error(
            '[dc-runtime] sibling fetch for "' + name + '" failed:',
            url,
            "returned",
            res2.status,
            "\u2014 the reference renders as an empty placeholder."
          );
          return "";
        }
        return res2.text();
      })).then((t) => {
        if (!t) return;
        const parsed = parseDcText(t);
        if (!parsed) {
          console.error(
            '[dc-runtime] sibling fetch for "' + name + '":',
            url,
            "has no <x-dc> block \u2014 not a Design Component."
          );
          return;
        }
        if (parsed.props) r.propsMeta = parsed.props;
        if (parsed.preview) r.preview = parsed.preview;
        if (parsed.template && !r.html) updateHtml(name, parsed.template);
        if (parsed.js && !r.Logic) updateJs(name, parsed.js);
      }).catch(
        (e) => console.error(
          '[dc-runtime] sibling fetch for "' + name + '" threw:',
          url,
          e
        )
      );
    }
    let rootName = null;
    function updateHtml(name, html) {
      const r = registry.get(name);
      r.html = html;
      if (name === rootName) {
        const mode = DESIGN_DOC_MODE_RE.exec(html)?.[1] ?? null;
        if (mode || !r.htmlStreaming) helmet.setDesignDocMode(mode);
      }
      try {
        r.tpl = compileTemplate(html, host);
      } catch (e) {
        console.error("[dc-runtime] template compile FAILED for", name, e);
      }
      registry.bump(name);
    }
    function updateJs(name, src) {
      const r = registry.get(name);
      const seq = r.jsSeq = (r.jsSeq || 0) + 1;
      try {
        const Cls = evalDcLogic(src);
        if (r.jsSeq !== seq) return;
        if (typeof Cls !== "function") {
          r.logicError = name + ".dc.html: <script data-dc-script> must define `class Component extends DCLogic`";
        } else {
          r.logicError = null;
          r.Logic = Cls;
        }
      } catch (e) {
        if (r.jsSeq !== seq) return;
        console.error(
          "[dc-runtime] logic class eval FAILED for",
          name,
          "\u2014 the template renders with props only.",
          e
        );
        r.logicError = name + ": " + (e instanceof Error && e.message ? e.message : String(e));
      }
      registry.bump(name);
    }
    function setStreaming(name, kind, on) {
      const r = registry.get(name);
      if (kind === "html") r.htmlStreaming = !!on;
      else r.jsStreaming = !!on;
      let any = false;
      for (const n in registry.entries) {
        const e = registry.entries[n];
        if (e && (e.htmlStreaming || e.jsStreaming)) {
          any = true;
          break;
        }
      }
      doc.documentElement.classList.toggle("sc-dc-streaming", any);
      registry.bump(name);
    }
    function dcUpdate(name, kind, content, streaming) {
      if (streaming) registry.get(name).fetched = true;
      if (kind === "html") {
        setStreaming(name, "html", !!streaming);
        updateHtml(name, content);
      } else if (kind === "js") {
        setStreaming(name, "js", !!streaming);
        if (!streaming) updateJs(name, content);
      } else if (kind === "props") {
        const { props, preview } = parseDataProps(content);
        const r = registry.get(name);
        r.propsMeta = props ?? void 0;
        r.preview = preview;
        registry.bump(name);
      }
    }
    function setProps(name, overrides) {
      registry.get(name).propOverrides = overrides && typeof overrides === "object" ? { ...overrides } : null;
      registry.bump(name);
    }
    function adoptParsed(name, parsed) {
      if (!parsed) return;
      const r = registry.get(name);
      if (parsed.props) r.propsMeta = parsed.props;
      if (parsed.preview) r.preview = parsed.preview;
      if (parsed.template) updateHtml(name, parsed.template);
      if (parsed.js) updateJs(name, parsed.js);
    }
    return {
      registry,
      getDC: factory.getDC,
      updateHtml,
      updateJs,
      dcUpdate,
      setProps,
      adoptParsed,
      setRootName: (name) => {
        rootName = name;
      },
      markFetched: (name) => {
        registry.get(name).fetched = true;
      },
      annotatedTemplate: (name) => {
        const r = registry.get(name);
        return r.tpl && r.tpl.__annotated || null;
      },
      templateSource: (name) => registry.get(name).html || null,
      StreamableLogic
    };
  }

  // src/stream-state.ts
  function createStreamTracker(staleMs = 6e4, now = Date.now) {
    const since = /* @__PURE__ */ new Map();
    const liveOne = (n) => {
      const t = since.get(n);
      if (t === void 0) return false;
      if (now() - t > staleMs) {
        since.delete(n);
        return false;
      }
      return true;
    };
    return {
      push(name, streaming, viewportKey) {
        if (viewportKey === "dc-model") return;
        if (streaming) since.set(name, now());
        else since.delete(name);
      },
      live(name) {
        if (name !== void 0) return liveOne(name);
        for (const n of [...since.keys()]) if (liveOne(n)) return true;
        return false;
      }
    };
  }

  // src/index.ts
  function hideRawTemplate() {
    const s = document.createElement("style");
    s.textContent = "x-dc{display:none!important}";
    document.head.appendChild(s);
  }
  function loadScript(src, integrity) {
    return new Promise((resolve2, reject) => {
      //! nosemgrep: create-script-element
      const s = document.createElement("script");
      s.src = src;
      if (integrity) {
        s.integrity = integrity;
        s.crossOrigin = "anonymous";
      }
      s.async = false;
      s.onload = () => resolve2();
      s.onerror = () => reject(new Error(`failed to load ${src}`));
      document.head.appendChild(s);
    });
  }
  function loadReactUmd() {
    const w = window;
    if (w.React && w.ReactDOM) return Promise.resolve();
    const react = cdnScriptFor(REACT_URL, REACT_SRI);
    const reactDom = cdnScriptFor(REACT_DOM_URL, REACT_DOM_SRI);
    return Promise.all([
      loadScript(react.src, react.integrity),
      loadScript(reactDom.src, reactDom.integrity)
    ]).then(() => void 0);
  }
  function init() {
    const runtime = createRuntime(document);
    let rootName = "Root";
    const baseCss = document.createElement("style");
    baseCss.textContent = BASE_CSS;
    document.head.prepend(baseCss);
    const notifyHost = () => {
      if (window.parent === window) return;
      const r = runtime.registry.entries[rootName];
      try {
        window.parent.postMessage(
          {
            type: "__dc_booted",
            rootName,
            propsMeta: r && r.propsMeta || null,
            preview: r && r.preview || null
          },
          "*"
        );
      } catch {
      }
    };
    const streams = createStreamTracker();
    const api = {
      __dcUpdate: (name, kind, content, streaming, viewportKey) => {
        streams.push(name, streaming, viewportKey);
        runtime.dcUpdate(name, kind, content, streaming);
        if (name === rootName && !streaming && kind === "props") notifyHost();
      },
      __dcStreaming: (name) => streams.live(name),
      __dcSetProps: (name, overrides) => runtime.setProps(name, overrides),
      /** Name of the component currently mounted as the page root — DC tools
       *  push their template-stream here when targeting "the open page". */
      __dcRootName: () => rootName,
      /** Editor bridge — the encoded, `data-dc-tpl`-annotated template source.
       *  The host editor parses this into its own template DOM so it can map a
       *  rendered node (carrying the same `data-dc-tpl`) back to the source
       *  node that emitted it. Returns the encoded form (`sc-camel-*` attrs,
       *  `<sc-raw-*>`/`<sc-helmet>` tags); the editor decodes on serialize. */
      __dcAnnotatedTemplate: (name) => runtime.annotatedTemplate(name),
      /** Editor bridge — the *original* (decoded) template source. */
      __dcTemplateSource: (name) => runtime.templateSource(name),
      __dcBoot: () => {
        rootName = boot(runtime, document) ?? rootName;
        notifyHost();
      },
      __dcRegistry: runtime.registry.entries,
      getDC: (name) => runtime.getDC(name),
      // `DCLogic` is the documented base class name; `StreamableLogic` is the
      // implementation alias kept for any project that already references it.
      DCLogic: runtime.StreamableLogic,
      StreamableLogic: runtime.StreamableLogic
    };
    Object.assign(window, api);
    window.__dcContentKeyed = true;
    if (document.readyState !== "loading") api.__dcBoot();
    else document.addEventListener("DOMContentLoaded", () => api.__dcBoot());
  }
  hideRawTemplate();
  loadReactUmd().then(init).catch((err) => {
    console.error("[dc] failed to load React or boot:", err);
    throw err;
  });
})();

