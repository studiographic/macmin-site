const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
document.documentElement.classList.add("js");
const $ = (s, el = document) => el.querySelector(s);
const $$ = (s, el = document) => [...el.querySelectorAll(s)];

// ---- Clips match the wallpaper: Sunlit clips in light mode, Graphite clips (media/dark/) in dark ----
const darkScheme = matchMedia("(prefers-color-scheme: dark)");
// ?v bumps when the clips are re-rendered, so browsers don't keep old ones.
const clip = (slug, ext) => `media/${darkScheme.matches ? "dark/" : ""}${slug}.${ext}?v=5`;
const matchTheme = () => $$("video").forEach((v) => {
  const slug = (v.getAttribute("src") || "").match(/(\w+)\.mp4/)?.[1];
  if (!slug || v.getAttribute("src") === clip(slug, "mp4")) return;
  const t = v.currentTime, playing = !v.paused;
  v.poster = clip(slug, "jpg");
  v.src = clip(slug, "mp4");
  if (t) v.addEventListener("loadedmetadata", () => { v.currentTime = t; if (playing) v.play().catch(() => {}); }, { once: true });
});
matchTheme();
darkScheme.addEventListener("change", matchTheme);

// ---- Clips play only while on screen; a clip someone paused stays paused ----
const onScreen = (v, play) => (play && !v.dataset.userPaused ? v.play().catch(() => {}) : v.pause());
if (reduce) {
  $$("video").forEach((v) => { v.removeAttribute("autoplay"); v.pause(); v.controls = true; });
  $$(".qt-bar").forEach((bar) => (bar.hidden = true));
} else if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((es) => es.forEach((e) => onScreen(e.target, e.isIntersecting)), { threshold: 0.3 });
  $$("#heroVideo, .scene video").forEach((v) => io.observe(v));
}

// ---- Play/pause buttons and the QuickTime progress bar ----
function syncPause(v) {
  const btn = $(`[data-pause="${v.id}"]`);
  if (!btn) return;
  const paused = !!v.dataset.userPaused;
  btn.setAttribute("aria-pressed", String(paused));
  $(".sr-only", btn).textContent = paused ? "Play" : "Pause";
}
$$("[data-pause]").forEach((btn) => {
  const v = document.getElementById(btn.dataset.pause);
  if (reduce) { btn.hidden = true; return; }
  btn.addEventListener("click", () => {
    if (v.dataset.userPaused) { delete v.dataset.userPaused; v.play().catch(() => {}); }
    else { v.dataset.userPaused = "1"; v.pause(); }
    syncPause(v);
  });
});
$$("[data-progress]").forEach((bar) => {
  const v = document.getElementById(bar.dataset.progress);
  v.addEventListener("timeupdate", () => { if (v.duration) bar.style.setProperty("--t", (v.currentTime / v.duration).toFixed(3)); });
});

// ---- Effects window: one preview, every effect to pick from; runs through them until you pick one ----
const stage = $("#stage");
const buttons = $$(".picker button");
let showEffect = () => {};
if (stage) {
  const video = $("#stageVideo"), name = $("#stageName"), desc = $("#stageDesc");
  const picker = $(".picker"), tour = $("#tour");
  let current = 0, picked = false, visible = false;
  buttons.forEach((b) => b.insertAdjacentHTML("beforeend", '<span class="run" aria-hidden="true"></span>'));

  const show = (i, fromUser) => {
    current = i;
    const b = buttons[i], slug = b.dataset.effect;
    buttons.forEach((x, j) => { x.setAttribute("aria-pressed", String(j === i)); x.style.removeProperty("--run"); });
    video.src = clip(slug, "mp4");
    video.poster = clip(slug, "jpg");
    name.textContent = b.textContent;
    const pro = b.hasAttribute("data-pro"), tier = $("#stageTier");
    tier.textContent = pro ? "Pro" : "Free";
    tier.className = `tag ${pro ? "tag-pro" : "tag-free"}`;
    desc.textContent = b.dataset.desc;
    video.loop = picked;
    if (fromUser) delete video.dataset.userPaused;
    syncPause(video);
    if (fromUser || visible) onScreen(video, true);
    if (picker.scrollWidth > picker.clientWidth) {
      picker.scrollTo({ left: b.parentElement.offsetLeft - picker.clientWidth / 2 + b.offsetWidth / 2, behavior: reduce ? "auto" : "smooth" });
    }
    const next = buttons[(i + 1) % buttons.length].dataset.effect;
    if (!$(`link[data-next="${next}"]`)) document.head.insertAdjacentHTML("beforeend", `<link rel="prefetch" href="${clip(next, "mp4")}" data-next="${next}">`);
  };
  const pick = (i) => {
    if (!picked) { picked = true; desc.setAttribute("aria-live", "polite"); tour.hidden = reduce; }
    show(i, true);
  };
  showEffect = pick;
  buttons.forEach((b, i) => b.addEventListener("click", () => pick(i)));
  tour.addEventListener("click", () => { picked = false; tour.hidden = true; desc.removeAttribute("aria-live"); show(0, true); });
  picker.addEventListener("keydown", (e) => {
    const step = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 }[e.key];
    if (!step) return;
    e.preventDefault();
    const i = (current + step + buttons.length) % buttons.length;
    buttons[i].focus(); pick(i);
  });
  if (!reduce) {
    video.addEventListener("ended", () => { if (!picked) show((current + 1) % buttons.length, false); });
    video.addEventListener("timeupdate", () => {
      if (picked || !video.duration) return;
      buttons[current].style.setProperty("--run", (video.currentTime / video.duration).toFixed(3));
    });
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; onScreen(video, visible); }, { threshold: 0.3 }).observe(video);
  }
}

// ---- Menu bar: the phone menu and the real MacMin menu ----
const toggle = $("#navToggle"), links = $("#navLinks"), extra = $("#menuExtra"), drop = $("#menuDrop");
const setNav = (open) => { links.classList.toggle("open", open); toggle.setAttribute("aria-expanded", String(open)); };
const setDrop = (open) => { drop.hidden = !open; extra.setAttribute("aria-expanded", String(open)); };
toggle.addEventListener("click", () => setNav(!links.classList.contains("open")));
links.addEventListener("click", (e) => { if (e.target.closest("a")) setNav(false); });
extra.addEventListener("click", () => setDrop(drop.hidden));
addEventListener("keydown", (e) => { if (e.key === "Escape") { setNav(false); setDrop(false); } });
addEventListener("pointerdown", (e) => {
  if (!e.target.closest(".menubar")) { setNav(false); setDrop(false); }
});

// ---- Phones and tablets: send the page to your Mac ----
if (matchMedia("(pointer: coarse)").matches) {
  $$("[data-coarse]").forEach((el) => (el.hidden = false));
  $$("[data-share]").forEach((btn) => {
    btn.hidden = false;
    const label = btn.textContent;
    btn.addEventListener("click", async () => {
      const url = "https://macmin.studiographic.ca/";
      try {
        if (navigator.share) { await navigator.share({ title: "MacMin", text: "Minimize animations for the Mac", url }); return; }
        await navigator.clipboard.writeText(url);
        btn.textContent = "Link copied. Open it on your Mac.";
        setTimeout(() => (btn.textContent = label), 2500);
      } catch {}
    });
  });
}

// ---- The closing alert: you can try to keep the Genie ----
const keep = $("#keepGenie");
if (keep) {
  const lines = ["Are you sure?", "Really sure?", "Okay. Genie it is."];
  let n = 0;
  keep.addEventListener("click", () => {
    const alert = keep.closest(".alert");
    if (!reduce) { alert.classList.remove("shake"); void alert.offsetWidth; alert.classList.add("shake"); }
    keep.textContent = lines[Math.min(n++, lines.length - 1)];
  });
}

// ---- Copy buttons ----
$$(".copy").forEach((btn) => btn.addEventListener("click", async () => {
  try { await navigator.clipboard.writeText(document.getElementById(btn.dataset.copy)?.textContent ?? ""); btn.textContent = "Copied"; setTimeout(() => (btn.textContent = "Copy"), 1500); } catch {}
}));

// ---- version.json: the same file the app checks for updates. The checksum shows once a real one exists. ----
fetch("version.json", { cache: "no-store" }).then((r) => r.json()).then((v) => {
  if (v.sha256 && /^[0-9a-f]{64}$/i.test(v.sha256)) { $("#sha").textContent = v.sha256; $("#verify").hidden = false; }
  if (v.file) {
    $("#hash-cmd").textContent = `shasum -a 256 ~/Downloads/${v.file}`;
    document.querySelectorAll("[data-dmg]").forEach((el) => (el.textContent = v.file));
    $("#download-link").href = `download/${v.file}`;
  }
  const os = v.minimumOS ? ` · macOS ${v.minimumOS.replace(/\.0$/, "")} or later` : "";
  $("#version-line").textContent = `Version ${v.version}${os}`;
}).catch(() => {});

// ---- Install steps: animate only while on screen; measure the drag distance ----
const install = $("#install");
if (install) {
  const measure = () => {
    const icon = $(".drag-icon", install), folder = $(".folder", install);
    if (!icon || !folder) return;
    const dx = folder.offsetLeft + (folder.offsetWidth - icon.offsetWidth) / 2 - icon.offsetLeft;
    if (dx > 0) icon.style.setProperty("--dx", `${dx}px`);
  };
  measure();
  addEventListener("resize", measure);
  new IntersectionObserver(([e]) => install.classList.toggle("play", e.isIntersecting), { threshold: 0.2 }).observe(install);
}

// ---- Key window: the one most in view keeps its coloured traffic lights ----
if ("IntersectionObserver" in window) {
  const wins = $$(".win"), seen = new Map();
  const pickKey = () => {
    let best = null, most = 0;
    seen.forEach((r, w) => { if (r > most) { most = r; best = w; } });
    wins.forEach((w) => w.classList.toggle("inactive", w !== best));
  };
  const kio = new IntersectionObserver((es) => { es.forEach((e) => seen.set(e.target, e.intersectionRect.height)); pickKey(); },
    { threshold: [0, 0.1, 0.25, 0.5, 0.75, 1] });
  wins.forEach((w) => kio.observe(w));
}

// ---- Opening a link to a Help answer (e.g. #update from the app) opens it ----
const openTarget = () => { const d = location.hash && document.getElementById(location.hash.slice(1)); if (d && d.tagName === "DETAILS") d.open = true; };
openTarget();
addEventListener("hashchange", openTarget);
