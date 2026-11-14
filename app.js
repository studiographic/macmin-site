// Effect clips play only while on screen (and not at all with Reduce Motion).
const reduce = matchMedia("(prefers-reduced-motion: reduce)").matches;
const videos = document.querySelectorAll(".effect video, .screen video, .scene video");

if (reduce) {
  videos.forEach((v) => { v.removeAttribute("autoplay"); v.pause(); v.controls = true; });
} else if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver((entries) => {
    for (const e of entries) {
      if (e.isIntersecting) e.target.play().catch(() => {});
      else e.target.pause();
    }
  }, { threshold: 0.35 });
  videos.forEach((v) => io.observe(v));
}

// Copy buttons.
document.querySelectorAll(".copy").forEach((btn) => {
  btn.addEventListener("click", async () => {
    const text = document.getElementById(btn.dataset.copy)?.textContent ?? "";
    try {
      await navigator.clipboard.writeText(text);
      btn.textContent = "Copied";
      setTimeout(() => (btn.textContent = "Copy"), 1500);
    } catch {}
  });
});

// Version, file name and checksum all come from version.json (the same file the app checks for updates).
fetch("version.json", { cache: "no-store" })
  .then((r) => r.json())
  .then((v) => {
    if (v.sha256 && !v.sha256.startsWith("PASTE")) document.getElementById("sha").textContent = v.sha256;
    if (v.file) document.getElementById("hash-cmd").textContent = `shasum -a 256 ~/Downloads/${v.file}`;
    const os = v.minimumOS ? ` · macOS ${v.minimumOS.replace(/\.0$/, "")} or later` : "";
    document.getElementById("version-line").textContent = `Version ${v.version}${os}`;
  })
  .catch(() => {});

// ---- Since 2001: reveal milestones, fill the line, unlock the counter at "Now" ----
document.documentElement.classList.add("js");
const timeline = document.getElementById("timeline");
const counter = document.querySelector(".counter");
const countEl = document.getElementById("minCount");
const foot = document.getElementById("countFoot");
const now = document.getElementById("msNow");

if (timeline) {
  const reveal = new IntersectionObserver((entries) => {
    for (const e of entries) if (e.isIntersecting) { e.target.classList.add("seen"); reveal.unobserve(e.target); }
  }, { rootMargin: "0px 0px -12% 0px" });
  timeline.querySelectorAll(".ms").forEach((m) => reveal.observe(m));

  let unlocked = false, countTimer;
  const setCount = (to) => {
    clearInterval(countTimer);
    if (reduce) { countEl.textContent = to; return; }
    let n = Number(countEl.textContent);
    countTimer = setInterval(() => {
      n += n < to ? 1 : -1;
      countEl.textContent = n;
      if (n === to) clearInterval(countTimer);
    }, 70);
  };

  let ticking = false;
  const onScroll = () => {
    ticking = false;
    const r = timeline.getBoundingClientRect();
    const mid = innerHeight * 0.6;
    const p = Math.min(1, Math.max(0, (mid - r.top) / r.height));
    timeline.style.setProperty("--p", p.toFixed(3));
    const shouldUnlock = now.getBoundingClientRect().top < mid;
    if (shouldUnlock !== unlocked) {
      unlocked = shouldUnlock;
      counter.classList.toggle("unlocked", unlocked);
      foot.textContent = unlocked ? "Welcome to the present." : "…and that’s been the list for a while.";
      setCount(unlocked ? 10 : 2);
    }
  };
  addEventListener("scroll", () => { if (!ticking) { ticking = true; requestAnimationFrame(onScroll); } }, { passive: true });
  onScroll();
}

// ---- Install steps: animate only while on screen; measure the drag distance ----
const install = document.getElementById("install");
if (install) {
  const measure = () => {
    // Layout offsets, not on-screen boxes, so a resize mid-animation still measures the resting spots.
    const icon = install.querySelector(".drag-icon"), folder = install.querySelector(".folder");
    if (!icon || !folder) return;
    const dx = folder.offsetLeft + (folder.offsetWidth - icon.offsetWidth) / 2 - icon.offsetLeft;
    if (dx > 0) icon.style.setProperty("--dx", `${dx}px`);
  };
  measure();
  addEventListener("resize", measure);
  new IntersectionObserver(([e]) => install.classList.toggle("play", e.isIntersecting), { threshold: 0.25 }).observe(install);
}

// ---- Glass highlight: light follows the pointer across whichever surface it's over ----
if (!reduce && matchMedia("(hover: hover)").matches) {
  const glass = ".card, .effect, .step, .ms-card, .perks-buy li, .buy";
  let raf = 0, last;
  addEventListener("pointermove", (e) => {
    last = e;
    if (raf) return;
    raf = requestAnimationFrame(() => {
      raf = 0;
      const el = last.target.closest?.(glass);
      if (!el) return;
      const r = el.getBoundingClientRect();
      el.style.setProperty("--mx", `${last.clientX - r.left}px`);
      el.style.setProperty("--my", `${last.clientY - r.top}px`);
    });
  }, { passive: true });
}
