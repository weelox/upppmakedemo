const body = document.body;
body.classList.add("js-enabled");
const menuToggle = document.querySelector("[data-menu-toggle]");
const nav = document.querySelector("[data-main-nav]");
const navLinks = Array.from(document.querySelectorAll("[data-main-nav] a"));
const yearEl = document.querySelector("[data-year]");

if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

if (menuToggle && nav) {
  menuToggle.addEventListener("click", () => {
    const open = body.classList.toggle("nav-open");
    menuToggle.setAttribute("aria-expanded", String(open));
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    });
  });

  document.addEventListener("click", (event) => {
    if (!body.classList.contains("nav-open")) return;
    if (!nav.contains(event.target) && !menuToggle.contains(event.target)) {
      body.classList.remove("nav-open");
      menuToggle.setAttribute("aria-expanded", "false");
    }
  });
}

const setCurrentNavLink = (activeLink) => {
  navLinks.forEach((link) => {
    if (link === activeLink) {
      link.setAttribute("aria-current", "page");
    } else {
      link.removeAttribute("aria-current");
    }
  });
};

const hashNavLinks = navLinks.filter((link) => (link.getAttribute("href") || "").startsWith("#"));
if (hashNavLinks.length) {
  const getHeaderOffset = () => {
    const header = document.querySelector(".site-header");
    const headerHeight = header ? header.getBoundingClientRect().height : 88;
    return headerHeight + 14;
  };

  const scrollToHash = (hash, smooth = true) => {
    if (!hash || hash === "#") return;
    const target = document.querySelector(hash);
    if (!target) return;
    const top = target.getBoundingClientRect().top + window.scrollY - getHeaderOffset();
    window.scrollTo({ top, behavior: smooth ? "smooth" : "auto" });
  };

  const activateHash = (hash) => {
    const link = hashNavLinks.find((item) => item.getAttribute("href") === hash) || hashNavLinks[0];
    if (link) setCurrentNavLink(link);
  };

  hashNavLinks.forEach((link) => {
    link.addEventListener("click", (event) => {
      const hash = link.getAttribute("href");
      if (!hash || !document.querySelector(hash)) return;
      event.preventDefault();
      activateHash(hash);
      history.replaceState(null, "", hash);
      scrollToHash(hash, true);
    });
  });

  const initialHash =
    window.location.hash && document.querySelector(window.location.hash) ? window.location.hash : hashNavLinks[0].getAttribute("href");
  activateHash(initialHash);

  if ("IntersectionObserver" in window) {
    const hashMap = new Map();
    hashNavLinks.forEach((link) => {
      const hash = link.getAttribute("href");
      const section = hash ? document.querySelector(hash) : null;
      if (section) hashMap.set(section, hash);
    });

    const navObserver = new IntersectionObserver(
      (entries) => {
        let best = null;
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          if (!best || entry.intersectionRatio > best.intersectionRatio) {
            best = entry;
          }
        }
        if (!best) return;
        const hash = hashMap.get(best.target);
        if (!hash) return;
        activateHash(hash);
      },
      { threshold: [0.2, 0.35, 0.55], rootMargin: "-24% 0px -54% 0px" }
    );

    hashMap.forEach((_hash, section) => navObserver.observe(section));
  } else {
    window.addEventListener("hashchange", () => activateHash(window.location.hash));
  }
} else {
  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  const exactMatch = navLinks.find((link) => link.getAttribute("href") === currentPath);
  if (exactMatch) setCurrentNavLink(exactMatch);
}

const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const io = new IntersectionObserver(
    (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          io.unobserve(entry.target);
        }
      }
    },
    { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
  );

  revealItems.forEach((item) => io.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

const inlineLogoWrap = document.querySelector("[data-inline-svg]");
if (inlineLogoWrap) {
  const triggerWrapGlitch = () => {
    inlineLogoWrap.classList.add("glitch-hit");
    window.setTimeout(() => inlineLogoWrap.classList.remove("glitch-hit"), 220);
  };

  const scheduleWrapGlitch = () => {
    const delay = 1800 + Math.random() * 3200;
    window.setTimeout(() => {
      triggerWrapGlitch();
      scheduleWrapGlitch();
    }, delay);
  };

  scheduleWrapGlitch();
}

const supportsMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const shouldRunBgFx = supportsMotion && (body.classList.contains("home-page") || body.classList.contains("upm-page"));

if (shouldRunBgFx) {
  body.classList.add("has-digital-fx");

  const canvas = document.createElement("canvas");
  canvas.className = "bg-digital-canvas";
  canvas.setAttribute("aria-hidden", "true");
  body.prepend(canvas);

  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) {
    body.classList.remove("has-digital-fx");
  } else {
    const prefersReducedData = Boolean(navigator.connection && navigator.connection.saveData);
    const lowPowerDevice =
      (typeof navigator.hardwareConcurrency === "number" && navigator.hardwareConcurrency <= 4) ||
      (typeof navigator.deviceMemory === "number" && navigator.deviceMemory <= 4);
    const qualityFactor = prefersReducedData ? 0.72 : lowPowerDevice ? 0.86 : 1;
    const targetFps = lowPowerDevice ? 30 : 40;
    const frameIntervalMs = 1000 / targetFps;
    const dprCap = lowPowerDevice ? 1 : 1.25;

    const digits = "0123456789";
    const particles = [];
    const clouds = [];
    const rand = (min, max) => min + Math.random() * (max - min);
    const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
    const fract = (value) => value - Math.floor(value);
    const smoothstep = (edge0, edge1, x) => {
      const p = clamp((x - edge0) / (edge1 - edge0), 0, 1);
      return p * p * (3 - 2 * p);
    };

    let width = 0;
    let height = 0;
    let dpr = 1;
    let cell = 13.5;
    let cols = 0;
    let rows = 0;
    let last = performance.now();
    let lastPaint = last;

    const phaseA = Math.random() * Math.PI * 2;
    const phaseB = Math.random() * Math.PI * 2;
    const phaseC = Math.random() * Math.PI * 2;
    const phaseD = Math.random() * Math.PI * 2;

    const resetCloud = (cloud, randomStart = false) => {
      cloud.x = randomStart ? rand(0, cols) : -rand(cols * 0.08, cols * 0.2);
      cloud.y = randomStart ? rand(0, rows) : rand(rows * 0.12, rows * 0.88);
      cloud.r = rand(rows * 0.16, rows * 0.42);
      cloud.vx = rand(0.015, 0.06);
      cloud.vy = rand(-0.02, 0.02);
      cloud.seed = rand(0, Math.PI * 2);
      cloud.warp = rand(1.8, 4.5);
    };

    const resetParticle = (particle, randomStart = false) => {
      particle.x = randomStart ? rand(0, width) : rand(-24, width + 24);
      particle.y = randomStart ? rand(0, height) : rand(-24, height + 24);
      particle.vx = rand(-0.12, 0.12);
      particle.vy = rand(-0.12, 0.12);
      particle.seed = rand(0, Math.PI * 2);
      particle.size = rand(cell * 0.58, cell * 0.94);
      particle.shiftInterval = rand(0.28, 2.1);
      particle.nextShift = rand(0, 1.6);
      particle.glyph = digits[Math.floor(Math.random() * digits.length)];
    };

    const respawnParticleAnywhere = (particle) => {
      // Keep respawns spread across the full field instead of only from edges.
      particle.x = rand(width * 0.04, width * 0.96);
      particle.y = rand(height * 0.04, height * 0.96);
      particle.vx = rand(-0.16, 0.16);
      particle.vy = rand(-0.16, 0.16);
    };

    const ensureClouds = () => {
      const target = clamp(Math.round(((cols * rows) / 1450) * qualityFactor), 8, 22);
      while (clouds.length < target) {
        const cloud = {};
        resetCloud(cloud, true);
        clouds.push(cloud);
      }
      if (clouds.length > target) {
        clouds.length = target;
      }
      clouds.forEach((cloud) => {
        cloud.r = clamp(cloud.r, rows * 0.14, rows * 0.46);
      });
    };

    const ensureParticles = () => {
      const isSmallViewport = width <= 900;
      const densityDivisor = (isSmallViewport ? 1420 : 980) / qualityFactor;
      const baseTarget = Math.round((width * height) / densityDivisor);
      const minTarget = Math.round((isSmallViewport ? 320 : 760) * qualityFactor);
      const maxTarget = Math.round((isSmallViewport ? 1900 : 3200) * qualityFactor);
      const target = clamp(isSmallViewport ? Math.round(baseTarget * 0.94) : baseTarget, minTarget, maxTarget);
      while (particles.length < target) {
        const particle = {};
        resetParticle(particle, true);
        particles.push(particle);
      }
      if (particles.length > target) {
        particles.length = target;
      }
      particles.forEach((particle) => {
        particle.size = clamp(particle.size, cell * 0.52, cell);
      });
    };

    const resize = () => {
      width = window.innerWidth;
      height = window.innerHeight;
      const isSmallViewport = width <= 900;
      dpr = Math.min(isSmallViewport ? 1 : dprCap, window.devicePixelRatio || 1);
      cell = width <= 680 ? 10.8 : width <= 1100 ? 12.2 : 13.5;
      cols = Math.ceil(width / cell) + 2;
      rows = Math.ceil(height / cell) + 2;
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ensureClouds();
      ensureParticles();

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
    };

    const fieldBase = (x, y, t) => {
      const nx = x / cols;
      const ny = y / rows;
      const warpX = nx + Math.sin(ny * 6.4 + t * 0.26 + phaseA) * 0.15;
      const warpY = ny + Math.cos(nx * 5.8 - t * 0.23 + phaseB) * 0.15;
      const low = Math.sin(warpX * 9.4 + t * 0.42 + phaseC) * 0.5 + 0.5;
      const mid = Math.cos(warpY * 10.8 - t * 0.38 + phaseD) * 0.5 + 0.5;
      const swirl = Math.sin((warpX + warpY) * 8.6 + t * 0.31) * 0.5 + 0.5;
      return low * 0.34 + mid * 0.34 + swirl * 0.32;
    };

    const hash2 = (x, y) => fract(Math.sin(x * 127.1 + y * 311.7 + phaseA * 11.7) * 43758.5453123);
    const flowAngle = (nx, ny, t) => {
      const curveA = Math.sin(nx * 7.2 + t * 0.22 + phaseA) * 0.7;
      const curveB = Math.cos(ny * 8.3 - t * 0.2 + phaseB) * 0.7;
      const curveC = Math.sin((nx + ny) * 4.7 + t * 0.18 + phaseC) * 0.5;
      return curveA + curveB + curveC;
    };
    const densityAt = (px, py, t) => {
      const nx = px / width;
      const ny = py / height;
      let density = fieldBase(nx * cols, ny * rows, t) * 0.24;

      for (const cloud of clouds) {
        const cx = (cloud.x / cols) * width + Math.sin(t * 0.22 + cloud.seed) * (cloud.warp * cell);
        const cy = (cloud.y / rows) * height + Math.cos(t * 0.2 + cloud.seed) * (cloud.warp * cell * 0.7);
        const dx = px - cx;
        const dy = py - cy;
        const d2 = dx * dx + dy * dy;
        const radiusPx = cloud.r * cell;
        density += Math.exp(-d2 / (radiusPx * radiusPx)) * 0.96;
      }

      const grain = hash2(nx * 86 + t * 0.4, ny * 86 - t * 0.32);
      density += (grain - 0.5) * 0.08;
      return clamp(density, 0, 1);
    };

    const tick = (now) => {
      if (now - lastPaint < frameIntervalMs) {
        window.requestAnimationFrame(tick);
        return;
      }

      const dt = Math.max(0.5, Math.min(2.2, (now - last) / 16.67));
      last = now;
      lastPaint = now;
      const t = now * 0.001;

      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "rgba(4, 8, 12, 0.1)";
      ctx.fillRect(0, 0, width, height);

      for (const cloud of clouds) {
        cloud.x += (cloud.vx + Math.sin(t * 0.46 + cloud.seed) * 0.012) * dt;
        cloud.y += (cloud.vy + Math.cos(t * 0.42 + cloud.seed) * 0.01) * dt;

        if (cloud.x - cloud.r > cols * 1.1 || cloud.y < -cloud.r * 0.45 || cloud.y > rows + cloud.r * 0.45) {
          resetCloud(cloud, false);
        }
      }

      for (const particle of particles) {
        const nx = particle.x / width;
        const ny = particle.y / height;
        const angle = flowAngle(nx, ny, t);
        particle.vx += Math.cos(angle) * 0.029 * dt;
        particle.vy += Math.sin(angle) * 0.029 * dt;

        const edge = 70;
        if (particle.x < edge) particle.vx += (edge - particle.x) * 0.0012 * dt;
        if (particle.x > width - edge) particle.vx -= (particle.x - (width - edge)) * 0.0012 * dt;
        if (particle.y < edge) particle.vy += (edge - particle.y) * 0.0012 * dt;
        if (particle.y > height - edge) particle.vy -= (particle.y - (height - edge)) * 0.0012 * dt;

        particle.vx *= 0.965;
        particle.vy *= 0.965;
        particle.x += particle.vx * dt * 1.85;
        particle.y += particle.vy * dt * 1.85;

        const wrapMargin = 36;
        if (
          particle.x < -wrapMargin ||
          particle.x > width + wrapMargin ||
          particle.y < -wrapMargin ||
          particle.y > height + wrapMargin
        ) {
          respawnParticleAnywhere(particle);
        }

        const nxNow = particle.x / width;
        const nyNow = particle.y / height;
        const density = densityAt(particle.x, particle.y, t);
        const presence = smoothstep(0.22, 0.9, density);
        if (presence < 0.04) continue;

        const skipMask = hash2(nxNow * 56 + phaseD * 2.7, nyNow * 56 - phaseB * 2.4);
        if (skipMask > presence + 0.1) continue;

        if (t > particle.nextShift) {
          particle.glyph = digits[Math.floor(hash2(nxNow * 190 + t, nyNow * 170 - t * 0.9) * digits.length)];
          particle.nextShift = t + particle.shiftInterval;
        }

        const alpha = 0.016 + presence * 0.15;
        const r = Math.round(124 + presence * 30);
        const g = Math.round(173 + presence * 40);
        const b = Math.round(198 + presence * 26);
        const driftX = Math.sin(t * 0.75 + particle.seed) * 0.45;
        const driftY = Math.cos(t * 0.7 + particle.seed * 1.2) * 0.4;

        ctx.font = `${Math.round(particle.size)}px "Geist Mono", "SFMono-Regular", "Menlo", monospace`;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha.toFixed(3)})`;
        ctx.fillText(particle.glyph, particle.x + driftX, particle.y + driftY);
      }

      const vignette = ctx.createRadialGradient(
        width * 0.5,
        height * 0.54,
        height * 0.12,
        width * 0.5,
        height * 0.54,
        height * 0.8
      );
      vignette.addColorStop(0, "rgba(0, 0, 0, 0)");
      vignette.addColorStop(1, "rgba(0, 0, 0, 0.28)");
      ctx.fillStyle = vignette;
      ctx.fillRect(0, 0, width, height);

      window.requestAnimationFrame(tick);
    };

    resize();
    window.addEventListener("resize", resize, { passive: true });
    window.requestAnimationFrame(tick);
  }
}
