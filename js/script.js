/* ==========================================================
   1. NEURAL BACKGROUND CANVAS ANIMATION
========================================================== */
const canvas = document.getElementById("neuralCanvas");
const ctx = canvas.getContext("2d");
let nodes = [];
let mouse = { x: null, y: null, active: false };

function resizeCanvas() {
  const rect = canvas.getBoundingClientRect();
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = rect.width * dpr;
  canvas.height = rect.height * dpr;
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
  createNodes(rect.width, rect.height);
}

function createNodes(w, h) {
  const count = Math.max(45, Math.floor((w * h) / 12500));
  nodes = Array.from({ length: count }, (_, i) => ({
    x: Math.random() * w,
    y: Math.random() * h,
    vx: (Math.random() - 0.5) * 0.22,
    vy: (Math.random() - 0.5) * 0.22,
    r: Math.random() * 1.8 + 1,
    pulse: Math.random() * Math.PI * 2,
    layer: i % 3,
  }));
}

function drawNetwork() {
  const w = canvas.clientWidth;
  const h = canvas.clientHeight;
  ctx.clearRect(0, 0, w, h);

  nodes.forEach((n) => {
    n.x += n.vx;
    n.y += n.vy;
    n.pulse += 0.018;
    if (n.x < -20 || n.x > w + 20) n.vx *= -1;
    if (n.y < -20 || n.y > h + 20) n.vy *= -1;
  });

  for (let i = 0; i < nodes.length; i++) {
    for (let j = i + 1; j < nodes.length; j++) {
      const a = nodes[i],
        b = nodes[j],
        dx = a.x - b.x,
        dy = a.y - b.y,
        d = Math.hypot(dx, dy);
      if (d < 145) {
        const alpha = (1 - d / 145) * 0.28;
        ctx.strokeStyle = `rgba(100,220,220,${alpha})`;
        ctx.lineWidth = 0.55;
        ctx.beginPath();
        ctx.moveTo(a.x, a.y);
        ctx.lineTo(b.x, b.y);
        ctx.stroke();
      }
    }
  }

  nodes.forEach((n) => {
    const pulse = (Math.sin(n.pulse) + 1) / 2;
    ctx.beginPath();
    ctx.arc(n.x, n.y, n.r + pulse * 1.2, 0, Math.PI * 2);
    ctx.fillStyle =
      n.layer === 1
        ? `rgba(217,255,50,${0.35 + pulse * 0.55})`
        : `rgba(25,218,232,${0.3 + pulse * 0.55})`;
    ctx.shadowBlur = 9 + pulse * 8;
    ctx.shadowColor = n.layer === 1 ? "#d9ff32" : "#19dae8";
    ctx.fill();
    ctx.shadowBlur = 0;
  });

  if (mouse.active) {
    nodes.forEach((n) => {
      const d = Math.hypot(n.x - mouse.x, n.y - mouse.y);
      if (d < 150) {
        ctx.strokeStyle = `rgba(217,255,50,${(1 - d / 150) * 0.5})`;
        ctx.beginPath();
        ctx.moveTo(n.x, n.y);
        ctx.lineTo(mouse.x, mouse.y);
        ctx.stroke();
      }
    });
  }
  requestAnimationFrame(drawNetwork);
}

window.addEventListener("resize", resizeCanvas);
canvas.addEventListener("mousemove", (e) => {
  const r = canvas.getBoundingClientRect();
  mouse.x = e.clientX - r.left;
  mouse.y = e.clientY - r.top;
  mouse.active = true;
});
canvas.addEventListener("mouseleave", () => (mouse.active = false));
resizeCanvas();
drawNetwork();

/* ==========================================================
   2. MOBILE NAVIGATION MENU
========================================================== */
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
if (menuToggle && navMenu) {
  menuToggle.addEventListener("click", () => {
    const isOpen = navMenu.classList.toggle("open");
    menuToggle.classList.toggle("active", isOpen);
    menuToggle.setAttribute("aria-expanded", String(isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Close navigation" : "Open navigation");
  });
  document
    .querySelectorAll("#navMenu a")
    .forEach((a) => a.addEventListener("click", () => {
      navMenu.classList.remove("open");
      menuToggle.classList.remove("active");
      menuToggle.setAttribute("aria-expanded", "false");
      menuToggle.setAttribute("aria-label", "Open navigation");
    }));
}

/* ==========================================================
   3. SCROLL OBSERVERS (ACTIVE LINK & REVEAL ANIMATIONS)
========================================================== */
const sections = [...document.querySelectorAll("main section[id]")];
const navLinks = [
  ...document.querySelectorAll('#navMenu a[href^="#"], #navMenu a[data-section-target]'),
];

function updateActiveNavLink() {
  if (!sections.length || !navLinks.length) return;

  const activationLine = window.innerHeight * 0.4;
  let activeSection = sections[0];
  for (const section of sections) {
    if (section.getBoundingClientRect().top > activationLine) break;
    activeSection = section;
  }

  navLinks.forEach((link) => {
    const target = link.dataset.sectionTarget || link.getAttribute("href");
    const isActive = target === `#${activeSection.id}`;
    link.classList.toggle("active", isActive);
    if (isActive) link.setAttribute("aria-current", "location");
    else link.removeAttribute("aria-current");
  });
}

let navUpdateScheduled = false;
function scheduleActiveNavUpdate() {
  if (navUpdateScheduled) return;
  navUpdateScheduled = true;
  requestAnimationFrame(() => {
    updateActiveNavLink();
    navUpdateScheduled = false;
  });
}

updateActiveNavLink();
window.addEventListener("scroll", scheduleActiveNavUpdate, { passive: true });
window.addEventListener("resize", scheduleActiveNavUpdate);
window.addEventListener("hashchange", scheduleActiveNavUpdate);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) entry.target.classList.add("visible");
    });
  },
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach((el) => revealObserver.observe(el));

/* ==========================================================
   3.1 EXPERIENCE JOURNEY VEHICLE
========================================================== */
const journeyTrack = document.querySelector(".journey-track");
if (journeyTrack) {
  const journeyStops = [...journeyTrack.querySelectorAll(".journey-stop")];
  const journeyCar = journeyTrack.querySelector(".journey-car");
  const journeyMobileQuery = window.matchMedia("(max-width: 760px)");
  let journeyUpdateScheduled = false;

  function updateJourneyProgress() {
    journeyUpdateScheduled = false;
    if (!journeyCar || !journeyStops.length) return;

    const mobileRoad = journeyMobileQuery.matches;
    const road = journeyTrack.querySelector(
      mobileRoad ? ".journey-road-mobile" : ".journey-road-desktop"
    );
    const path = road?.querySelector(".journey-road-center");
    const matrix = path?.getScreenCTM();
    if (!road || !path || !matrix) return;

    const trackRect = journeyTrack.getBoundingClientRect();
    const targetY = window.scrollY + window.innerHeight * 0.48;
    const stopPositions = journeyStops.map((stop) => {
      const rect = stop.getBoundingClientRect();
      return rect.top + window.scrollY + rect.height / 2;
    });

    let progress = 0;
    for (let index = 0; index < stopPositions.length - 1; index += 1) {
      const start = stopPositions[index];
      const end = stopPositions[index + 1];
      if (targetY >= end) {
        progress = index + 1;
      } else if (targetY > start) {
        progress = index + (targetY - start) / (end - start);
        break;
      } else {
        break;
      }
    }

    progress = Math.min(progress, journeyStops.length - 1);
    const activeIndex = Math.round(progress);
    journeyStops.forEach((stop, index) => {
      const isActive = index === activeIndex;
      stop.classList.toggle("is-active", isActive);
      stop.querySelector(".journey-card")?.classList.toggle("is-active", isActive);
      const marker = stop.querySelector(".journey-marker");
      if (isActive) marker?.setAttribute("aria-current", "step");
      else marker?.removeAttribute("aria-current");
    });

    const totalLength = path.getTotalLength();
    const pointAt = (distance) => {
      const point = road.createSVGPoint();
      const pathPoint = path.getPointAtLength(distance);
      point.x = pathPoint.x;
      point.y = pathPoint.y;
      return point.matrixTransform(matrix);
    };
    const distance = (progress / (journeyStops.length - 1)) * totalLength;
    const point = pointAt(distance);
    const before = pointAt(Math.max(0, distance - 1));
    const after = pointAt(Math.min(totalLength, distance + 1));
    const angle = (Math.atan2(after.y - before.y, after.x - before.x) * 180) / Math.PI;

    journeyCar.style.left = `${point.x - trackRect.left}px`;
    journeyCar.style.top = `${point.y - trackRect.top}px`;
    journeyCar.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;
  }

  function scheduleJourneyUpdate() {
    if (journeyUpdateScheduled) return;
    journeyUpdateScheduled = true;
    requestAnimationFrame(updateJourneyProgress);
  }

  updateJourneyProgress();
  window.addEventListener("scroll", scheduleJourneyUpdate, { passive: true });
  window.addEventListener("resize", scheduleJourneyUpdate);
  journeyMobileQuery.addEventListener("change", scheduleJourneyUpdate);
}


/* ==========================================================
   4. PROJECTS FILTER
========================================================== */
const categoryToggle = document.querySelector(".category-toggle");
const projectFilters = document.getElementById("projectFilters");
const categoryFilter = document.querySelector(".category-filter");
const categoryNext = document.querySelector(".category-next");

if (categoryToggle && projectFilters) {
  categoryToggle.addEventListener("click", () => {
    const isOpen = categoryToggle.getAttribute("aria-expanded") === "true";
    categoryToggle.setAttribute("aria-expanded", String(!isOpen));
    categoryFilter?.classList.toggle("open", !isOpen);
    projectFilters.hidden = isOpen;
    if (categoryNext) categoryNext.hidden = isOpen;
  });
}

categoryNext?.addEventListener("click", () => {
  if (!projectFilters) return;

  const maxScroll = projectFilters.scrollWidth - projectFilters.clientWidth;
  const nextPosition = projectFilters.scrollLeft + projectFilters.clientWidth;
  const targetPosition = nextPosition >= maxScroll - 2 ? 0 : nextPosition;

  projectFilters.scrollTo({ left: targetPosition, behavior: "smooth" });
  categoryNext.classList.remove("spin");
  requestAnimationFrame(() => categoryNext.classList.add("spin"));
});

document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle(
        "hidden",
        filter !== "all" &&
          !card.dataset.tags.split(" ").map((tag) => tag.toLowerCase()).includes(filter)
      );
    });
  });
});

/* ==========================================================
   5. SKILLS CAROUSEL (SLIDER)
========================================================== */
const skillsTrack = document.querySelector(".skills-track");
const skillCards = [...document.querySelectorAll(".skills-track .skill-card")];
const prevSkillButton = document.querySelector(".skills-prev");
const nextSkillButton = document.querySelector(".skills-next");

if (skillsTrack && skillCards.length > 0 && prevSkillButton && nextSkillButton) {
  let currentSkillIndex = 0;

  function getVisibleCount() {
    if (window.innerWidth <= 500) return 1;
    if (window.innerWidth <= 950) return 2;
    return 3;
  }

  function updateSkillsSlider() {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, skillCards.length - visibleCount);

    if (currentSkillIndex > maxIndex) {
      currentSkillIndex = maxIndex;
    }
    if (currentSkillIndex < 0) {
      currentSkillIndex = 0;
    }

    const cardWidth = skillCards[0].getBoundingClientRect().width;
    const gap = parseFloat(window.getComputedStyle(skillsTrack).gap) || 0;
    const offset = currentSkillIndex * (cardWidth + gap);

    skillsTrack.style.transform = `translateX(-${offset}px)`;
  }

  nextSkillButton.addEventListener("click", () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, skillCards.length - visibleCount);

    if (currentSkillIndex >= maxIndex) {
      currentSkillIndex = 0; // برگشت به اولین کارت
    } else {
      currentSkillIndex += 1; // رفتن به کارت بعدی (نشان دادن Backend و GUI Development)
    }
    updateSkillsSlider();
  });

  prevSkillButton.addEventListener("click", () => {
    const visibleCount = getVisibleCount();
    const maxIndex = Math.max(0, skillCards.length - visibleCount);

    if (currentSkillIndex <= 0) {
      currentSkillIndex = maxIndex; // رفتن به آخرین کارت‌ها
    } else {
      currentSkillIndex -= 1;
    }
    updateSkillsSlider();
  });

  window.addEventListener("resize", updateSkillsSlider);
  window.addEventListener("DOMContentLoaded", updateSkillsSlider);
  updateSkillsSlider();
}
