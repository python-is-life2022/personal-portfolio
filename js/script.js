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
  menuToggle.addEventListener("click", () => navMenu.classList.toggle("open"));
  document
    .querySelectorAll("#navMenu a")
    .forEach((a) => a.addEventListener("click", () => navMenu.classList.remove("open")));
}

/* ==========================================================
   3. SCROLL OBSERVERS (ACTIVE LINK & REVEAL ANIMATIONS)
========================================================== */
const sections = [...document.querySelectorAll("main section")];
const navLinks = [...document.querySelectorAll("nav a")];

const observer = new IntersectionObserver(
  (entries) => {
    // اگر در موبایل باشد، کلاس اکتیو اضافه نکند
    if (window.innerWidth <= 760) return;

    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((l) =>
          l.classList.toggle("active", l.getAttribute("href") === "#" + entry.target.id)
        );
      }
    });
  },
  { rootMargin: "-35% 0px -55% 0px" }
);
sections.forEach((s) => observer.observe(s));

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
   4. PROJECTS FILTER
========================================================== */
document.querySelectorAll(".filter").forEach((btn) => {
  btn.addEventListener("click", () => {
    document.querySelectorAll(".filter").forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
    const filter = btn.dataset.filter;
    document.querySelectorAll(".project-card").forEach((card) => {
      card.classList.toggle(
        "hidden",
        filter !== "all" && !card.dataset.tags.split(" ").includes(filter)
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
