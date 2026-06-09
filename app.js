// ═══════════════════════════════════════════════════════════
// Megur Dental Care — MAIN APPLICATION (GLASS EDITION)
// Renders all content from content.js configuration
// ═══════════════════════════════════════════════════════════

(function () {
  "use strict";

  const C = SITE_CONTENT;

  // ── SVG ICONS MAP ─────────────────────────────────────
  const ICONS = {
    "shield-check": `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"/></svg>`,
    sparkles: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"/></svg>`,
    heart: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/></svg>`,
    clock: `<svg class="w-6 h-6" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>`,
    tooth: `<svg class="w-8 h-8" viewBox="0 0 100 130" fill="currentColor"><path d="M50 5 C25 5 10 25 10 45 C10 60 15 70 20 85 C25 100 30 120 35 125 C38 128 42 128 45 120 C47 115 49 105 50 100 C51 105 53 115 55 120 C58 128 62 128 65 125 C70 120 75 100 80 85 C85 70 90 60 90 45 C90 25 75 5 50 5Z"/></svg>`,
    "sparkle-tooth": `<svg class="w-8 h-8" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 2C9 2 7 4 7 7c0 2 .5 4 1 6 .5 2 1 5 1.5 6 .3.5.7.5 1 0 .2-.5.4-1.5.5-2.5.1 1 .3 2 .5 2.5.3.5.7.5 1 0 .5-1 1-4 1.5-6 .5-2 1-4 1-6 0-3-2-5-5-5z"/><path d="M5 3l1.5 3M19 3l-1.5 3M12 0v2" stroke-linecap="round"/></svg>`,
    crown: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M2 17l3-9 4 4 3-8 3 8 4-4 3 9H2zM4 17v3h16v-3"/></svg>`,
    braces: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><rect x="3" y="8" width="18" height="8" rx="2"/><line x1="8" y1="8" x2="8" y2="16"/><line x1="12" y1="8" x2="12" y2="16"/><line x1="16" y1="8" x2="16" y2="16"/><circle cx="8" cy="12" r="1.5" fill="currentColor"/><circle cx="12" cy="12" r="1.5" fill="currentColor"/><circle cx="16" cy="12" r="1.5" fill="currentColor"/></svg>`,
    smile: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2" stroke-linecap="round"/><line x1="9" y1="9" x2="9.01" y2="9" stroke-width="2" stroke-linecap="round"/><line x1="15" y1="9" x2="15.01" y2="9" stroke-width="2" stroke-linecap="round"/></svg>`,
    child: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="12" cy="7" r="4"/><path d="M5.5 21c0-4.5 3-7 6.5-7s6.5 2.5 6.5 7"/></svg>`,
    surgery: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 4v6m0 0v6m0-6h6m-6 0H6" stroke-linecap="round"/><circle cx="12" cy="12" r="10"/></svg>`,
    "root-canal": `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path d="M12 2C9 2 7 4 7 7c0 2 .5 4 1 6 .5 2 1 5 1.5 6 .3.5.7.5 1 0 .2-.5.4-1.5.5-2.5.1 1 .3 2 .5 2.5.3.5.7.5 1 0 .5-1 1-4 1.5-6 .5-2 1-4 1-6 0-3-2-5-5-5z"/><path d="M10 8v6M14 8v6M12 9v8" stroke-width="1" opacity="0.5"/></svg>`,
    gift: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"/></svg>`,
    percent: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><circle cx="8" cy="8" r="2.5"/><circle cx="16" cy="16" r="2.5"/><path d="M19 5L5 19" stroke-linecap="round"/></svg>`,
    users: `<svg class="w-8 h-8" fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"/></svg>`,
    phone: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg>`,
    email: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>`,
    location: `<svg class="w-5 h-5" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>`,
    facebook: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>`,
    instagram: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>`,
    twitter: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>`,
    youtube: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>`,
    linkedin: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>`,
    google: `<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/><path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/><path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/><path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/></svg>`,
  };

  function icon(name) { return ICONS[name] || ICONS.tooth; }

  function buildSocialLinks(variant) {
    const cls = variant === "dark" ? "social-icon social-icon-dark" : "social-icon social-icon-light";
    const links = [];
    const map = { facebook: "facebook", instagram: "instagram", twitter: "twitter", youtube: "youtube", linkedin: "linkedin", googleBusiness: "google" };
    for (const [key, iconName] of Object.entries(map)) {
      if (C.social[key]) links.push(`<a href="${C.social[key]}" target="_blank" rel="noopener" class="${cls}" aria-label="${key}">${icon(iconName)}</a>`);
    }
    return links.join("");
  }

  // ═══════════════════════════════════════════════════════
  // INITIALIZATION
  // ═══════════════════════════════════════════════════════
  document.addEventListener("DOMContentLoaded", function () {
    applyMeta();
    renderNotification();
    renderNav();
    renderHero();
    renderAbout();
    renderTreatments();
    renderGallery();
   /* renderOffers();*/
    renderTeam();
    renderTestimonials();
    renderBooking();
    renderContact();
    renderFooter();
    renderWhatsApp();
    initAudio();
    initScrollSounds();
    initLoader();
    initScrollAnimations();
    initNavScroll();
    initMobileMenu();
    initBackToTop();
    initParticles();
    initCursorGlow();
    initPopupAd();
    initCounters();
  });

  // ── META ──────────────────────────────────────────────
  function applyMeta() {
    document.title = C.seo.title || C.siteName;
    const desc = document.querySelector('meta[name="description"]');
    if (desc) desc.setAttribute("content", C.seo.description || "");
    const kw = document.querySelector('meta[name="keywords"]');
    if (kw) kw.setAttribute("content", C.seo.keywords || "");
    const og = document.querySelector('meta[property="og:image"]');
    if (og) og.setAttribute("content", C.seo.ogImage || "");
  }

  // ── NOTIFICATION BANNER ───────────────────────────────
  function renderNotification() {
    if (!C.notification.enabled) return;
    const banner = document.getElementById("notification-banner");
    if (localStorage.getItem("dental_notification_dismissed")) return;

    document.getElementById("notification-text").textContent = C.notification.text;
    const link = document.getElementById("notification-link");
    link.textContent = C.notification.linkText;
    link.href = C.notification.link;

    banner.classList.remove("hidden");
    setTimeout(() => banner.classList.add("notification-visible"), 500);

    document.getElementById("notification-close").addEventListener("click", () => {
      banner.classList.remove("notification-visible");
      localStorage.setItem("dental_notification_dismissed", "1");
      setTimeout(() => { banner.classList.add("hidden"); document.getElementById("navbar").style.top = "0"; }, 500);
    });

    if (C.notification.autoDismissSeconds > 0) {
      setTimeout(() => {
        if (!localStorage.getItem("dental_notification_dismissed")) {
          banner.classList.remove("notification-visible");
          setTimeout(() => { banner.classList.add("hidden"); document.getElementById("navbar").style.top = "0"; }, 500);
        }
      }, C.notification.autoDismissSeconds * 1000);
    }

    document.getElementById("navbar").style.top = "40px";
  }

  // ── NAV ───────────────────────────────────────────────
  function renderNav() {
    const logoLink = document.getElementById("nav-logo");
    const nameSpan = document.getElementById("nav-site-name");
    const svgIcon = logoLink.querySelector("svg");

    if (!C.logo.useText && C.logo.src) {
      // Replace SVG tooth icon with actual logo image
      if (svgIcon) svgIcon.remove();
      const img = document.createElement("img");
      img.src = C.logo.src;
      img.alt = C.logo.alt || C.siteName;
      img.className = "h-12 w-auto object-contain group-hover:scale-110 transition-transform drop-shadow-[0_0_8px_rgba(201,169,110,0.4)]";
      logoLink.insertBefore(img, nameSpan);
      nameSpan.textContent = C.siteName;
    } else {
      nameSpan.textContent = C.siteName;
    }

    // Also update footer logo
    const footerName = document.getElementById("footer-site-name");
    if (footerName && !C.logo.useText && C.logo.src) {
      const fImg = document.createElement("img");
      fImg.src = C.logo.src;
      fImg.alt = C.logo.alt || C.siteName;
      fImg.className = "h-10 w-auto object-contain mb-2";
      footerName.parentNode.insertBefore(fImg, footerName);
    }
  }

  function initNavScroll() {
    const nav = document.getElementById("navbar");
    const banner = document.getElementById("notification-banner");
    window.addEventListener("scroll", () => {
      const y = window.scrollY;
      if (y > 80) {
        nav.classList.add("nav-scrolled");
        if (!banner.classList.contains("hidden")) nav.style.top = "0";
      } else {
        nav.classList.remove("nav-scrolled");
        if (!banner.classList.contains("hidden") && banner.classList.contains("notification-visible")) nav.style.top = "40px";
      }
      document.querySelectorAll("section[id]").forEach((sec) => {
        const top = sec.offsetTop - 120;
        const link = document.querySelector(`.nav-link[href="#${sec.id}"]`);
        if (link) {
          if (y >= top && y < top + sec.offsetHeight) link.classList.add("active");
          else link.classList.remove("active");
        }
      });
    });
  }

  function initMobileMenu() {
    const btn = document.getElementById("mobile-menu-btn");
    const menu = document.getElementById("mobile-menu");
    const openIcon = document.getElementById("menu-icon-open");
    const closeIcon = document.getElementById("menu-icon-close");
    let open = false;
    btn.addEventListener("click", () => {
      open = !open;
      menu.classList.toggle("hidden", !open);
      openIcon.classList.toggle("hidden", open);
      closeIcon.classList.toggle("hidden", !open);
    });
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => {
      open = false; menu.classList.add("hidden"); openIcon.classList.remove("hidden"); closeIcon.classList.add("hidden");
    }));
  }

  // ── HERO (FIXED VIDEO) ────────────────────────────────
  function renderHero() {
    const bg = document.getElementById("hero-bg");
    const h = C.hero;

    if (h.video.enabled && h.video.src) {
      if (h.video.type === "mp4") {
        const video = document.createElement("video");
        video.autoplay = true;
        video.muted = true;
        video.loop = true;
        video.playsInline = true;
        video.setAttribute("playsinline", "");
        video.style.cssText = "position:absolute;inset:0;width:100%;height:100%;object-fit:cover;";
        if (h.video.fallbackImage) video.poster = h.video.fallbackImage;
        const source = document.createElement("source");
        source.src = h.video.src;
        source.type = "video/mp4";
        video.appendChild(source);
        bg.appendChild(video);
        video.play().catch(() => {});
      } else if (h.video.type === "youtube") {
        bg.innerHTML = `<iframe src="${h.video.src}&controls=0&showinfo=0&rel=0&modestbranding=1" class="absolute inset-0 w-full h-full scale-[1.3]" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen style="pointer-events:none;object-fit:cover;"></iframe>`;
      }
    } else if (h.video.fallbackImage) {
      bg.innerHTML = `<img src="${h.video.fallbackImage}" alt="" class="absolute inset-0 w-full h-full object-cover"/>`;
    }

    document.getElementById("hero-headline").textContent = h.headline;
    document.getElementById("hero-subheadline").textContent = h.subheadline;
    const ctaP = document.getElementById("hero-cta-primary");
    ctaP.href = h.ctaPrimary.link;
    ctaP.querySelector("span").textContent = h.ctaPrimary.text;
    const ctaS = document.getElementById("hero-cta-secondary");
    ctaS.href = h.ctaSecondary.link;
    ctaS.querySelector("span").textContent = h.ctaSecondary.text;

    document.getElementById("hero-stats").innerHTML = h.stats.map((s) => {
      const raw = s.number;
      const parsed = parseFloat(raw.replace(/[^0-9.]/g, ""));
      const suffix = raw.replace(/[0-9.]/g, "");
      const isK = raw.toUpperCase().includes("K");
      const target = isK ? parsed * 1000 : parsed;
      return `<div class="stat-box">
        <div class="stat-number" data-target="${target}" data-suffix="${suffix}" data-isk="${isK}">${raw}</div>
        <div class="stat-label">${s.label}</div>
      </div>`;
    }).join("");
  }

  // ── ABOUT ─────────────────────────────────────────────
  function renderAbout() {
    const a = C.about;
    document.getElementById("about-tag").textContent = a.sectionTag;
    document.getElementById("about-headline").textContent = a.headline;
    document.getElementById("about-description").textContent = a.description;
    document.getElementById("about-image").src = a.image;

    document.getElementById("about-highlights").innerHTML = a.highlights.map((h, i) => `
      <div class="highlight-card glass-card glass-card-hover rounded-xl animate-on-scroll" data-animation="fadeInUp" data-delay="${300 + i * 100}">
        <div class="highlight-icon">${icon(h.icon)}</div>
        <div>
          <h4 class="font-semibold text-[#0A2647] mb-1">${h.title}</h4>
          <p class="text-sm text-[#6B7280]">${h.desc}</p>
        </div>
      </div>
    `).join("");

    const tourEl = document.getElementById("about-video-tour");
    if (a.videoTour.enabled) {
      tourEl.innerHTML = `<button class="video-tour-btn glass-card" onclick="openVideoModal('${a.videoTour.src}')">
        <span class="play-icon"><svg class="w-4 h-4 text-[#0A2647] ml-0.5" fill="currentColor" viewBox="0 0 24 24"><path d="M8 5v14l11-7z"/></svg></span>
        ${a.videoTour.buttonText}
      </button>`;
    }
  }

  // ── TREATMENTS (GLASS CARDS) ──────────────────────────
  function renderTreatments() {
    const t = C.treatments;
    document.getElementById("treatments-tag").textContent = t.sectionTag;
    document.getElementById("treatments-headline").textContent = t.headline;
    document.getElementById("treatments-subheadline").textContent = t.subheadline;

    document.getElementById("treatments-grid").innerHTML = t.items.map((item, i) => `
      <div class="treatment-card glass-card glass-card-hover animate-on-scroll" data-animation="fadeInUp" data-delay="${i * 80}">
        <div class="h-48 overflow-hidden rounded-t-[1.5rem]">
          <img src="${item.image}" alt="${item.title}" class="treatment-card-image w-full h-full object-cover" loading="lazy"/>
        </div>
        <div class="p-6">
          <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#0A2647] to-[#1B4D6E] flex items-center justify-center text-[#C9A96E] mb-4 -mt-10 relative z-10 shadow-lg">
            ${icon(item.icon)}
          </div>
          <h3 class="font-['Playfair_Display'] text-lg font-bold text-[#0A2647] mb-2">${item.title}</h3>
          <p class="text-sm text-[#6B7280] mb-3 leading-relaxed">${item.description}</p>
          <div class="flex items-center justify-between">
            
            <a href="#booking" class="text-[#0A2647] text-sm font-semibold hover:text-[#C9A96E] transition-colors inline-flex items-center gap-1">
              Book Now <svg class="w-4 h-4" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7"/></svg>
            </a>
          </div>
        </div>
      </div>
    `).join("");
  }

  // ── GALLERY ───────────────────────────────────────────
  function renderGallery() {
    const g = C.gallery;
    document.getElementById("gallery-tag").textContent = g.sectionTag;
    document.getElementById("gallery-headline").textContent = g.headline;
    document.getElementById("gallery-subheadline").textContent = g.subheadline;

    document.getElementById("gallery-grid").innerHTML = g.items.map((item, i) => `
      <div class="animate-on-scroll" data-animation="zoomIn" data-delay="${i * 150}">
        <div class="ba-slider" data-index="${i}">
          <img src="${item.before}" alt="Before" class="ba-before" loading="lazy"/>
          <img src="${item.after}" alt="After" class="ba-after" loading="lazy"/>
          <div class="ba-handle"></div>
          <span class="ba-label ba-label-before">Before</span>
          <span class="ba-label ba-label-after">After</span>
        </div>
        <p class="text-center text-[#C9A96E] font-semibold mt-4 text-sm uppercase tracking-wider">${item.treatment}</p>
      </div>
    `).join("");
    initBASliders();
  }

  function initBASliders() {
    document.querySelectorAll(".ba-slider").forEach((slider) => {
      let dragging = false;
      function setPos(x) {
        const rect = slider.getBoundingClientRect();
        let pct = ((x - rect.left) / rect.width) * 100;
        pct = Math.max(5, Math.min(95, pct));
        slider.querySelector(".ba-after").style.clipPath = `inset(0 ${100 - pct}% 0 0)`;
        slider.querySelector(".ba-handle").style.left = pct + "%";
      }
      slider.addEventListener("mousedown", (e) => { dragging = true; setPos(e.clientX); });
      slider.addEventListener("touchstart", (e) => { dragging = true; setPos(e.touches[0].clientX); }, { passive: true });
      window.addEventListener("mousemove", (e) => { if (dragging) setPos(e.clientX); });
      window.addEventListener("touchmove", (e) => { if (dragging) setPos(e.touches[0].clientX); }, { passive: true });
      window.addEventListener("mouseup", () => { dragging = false; });
      window.addEventListener("touchend", () => { dragging = false; });
    });
  }

  /* ── OFFERS (GLASS) ────────────────────────────────────
  function renderOffers() {
    const o = C.offers;
    document.getElementById("offers-tag").textContent = o.sectionTag;
    document.getElementById("offers-headline").textContent = o.headline;

    document.getElementById("offers-grid").innerHTML = o.items.map((item, i) => `
      <div class="offer-card glass-card glass-card-hover animate-on-scroll" data-animation="fadeInUp" data-delay="${i * 150}">
        <div class="flex items-center justify-between mb-4">
          <div class="w-14 h-14 rounded-xl bg-gradient-to-br from-[#0A2647] to-[#1B4D6E] flex items-center justify-center text-[#C9A96E] shadow-lg">${icon(item.icon)}</div>
          <span class="offer-badge">${item.badge}</span>
        </div>
        <h3 class="font-['Playfair_Display'] text-xl font-bold text-[#0A2647] mb-3">${item.title}</h3>
        <p class="text-[#6B7280] text-sm mb-4 leading-relaxed">${item.description}</p>
        <div class="flex items-center justify-between">
          <span class="text-xs text-[#6B7280]">Valid till ${new Date(item.validUntil).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</span>
          <a href="#booking" class="btn-gold text-xs px-4 py-2">Claim Offer</a>
        </div>
      </div>
    `).join("");
  }
*/
  // ── TEAM (GLASS) ──────────────────────────────────────
  function renderTeam() {
    const t = C.team;
    document.getElementById("team-tag").textContent = t.sectionTag;
    document.getElementById("team-headline").textContent = t.headline;

    document.getElementById("team-grid").innerHTML = t.members.map((m, i) => `
      <div class="team-card glass-card glass-card-hover animate-on-scroll" data-animation="fadeInUp" data-delay="${i * 150}">
        <img src="${m.image}" alt="${m.name}" class="team-avatar" loading="lazy"/>
        <h3 class="font-['Playfair_Display'] text-lg font-bold text-[#0A2647]">${m.name}</h3>
        <p class="text-[#C9A96E] font-medium text-sm mb-1">${m.role}</p>
        <p class="text-[#6B7280] text-xs mb-2">${m.specialization}</p>
        <span class="inline-block px-3 py-1 glass-gold text-[#0A2647] text-xs font-semibold rounded-full">${m.experience}</span>
      </div>
    `).join("");
  }

  // ── TESTIMONIALS (GLASS) ──────────────────────────────
  function renderTestimonials() {
    const t = C.testimonials;
    document.getElementById("testimonials-tag").textContent = t.sectionTag;
    document.getElementById("testimonials-headline").textContent = t.headline;

    document.getElementById("testimonials-grid").innerHTML = t.items.map((item, i) => `
      <div class="testimonial-card glass-card glass-card-hover animate-on-scroll" data-animation="fadeInUp" data-delay="${i * 150}">
        <div class="star-rating mb-4">${"★".repeat(item.rating)}${"☆".repeat(5 - item.rating)}</div>
        <p class="text-[#6B7280] leading-relaxed mb-6 relative z-10">"${item.text}"</p>
        <div class="flex items-center gap-4">
          <img src="${item.avatar}" alt="${item.name}" class="w-12 h-12 rounded-full object-cover border-2 border-[#C9A96E]/30 shadow-md" loading="lazy"/>
          <div>
            <p class="font-semibold text-[#0A2647]">${item.name}</p>
            <p class="text-xs text-[#6B7280]">${item.role}</p>
          </div>
        </div>
      </div>
    `).join("");
  }

  // ── BOOKING ───────────────────────────────────────────
  function renderBooking() {
    const b = C.booking;
    document.getElementById("booking-tag").textContent = b.sectionTag;
    document.getElementById("booking-headline").textContent = b.headline;
    document.getElementById("booking-subheadline").textContent = b.subheadline;
    document.getElementById("booking-phone").textContent = C.contact.phoneDisplay;
    document.getElementById("booking-email").textContent = C.contact.email;
    document.getElementById("booking-address").textContent = C.contact.address;
    document.getElementById("booking-success-text").textContent = b.successMessage;

    const select = document.getElementById("booking-treatment");
    b.treatmentOptions.forEach((opt) => { const o = document.createElement("option"); o.value = opt; o.textContent = opt; select.appendChild(o); });

    document.getElementById("booking-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const btn = form.querySelector("button[type=submit]");
      const originalText = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      if (C.formService?.enabled && C.formService.accessKey !== "YOUR_ACCESS_KEY_HERE") {
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              access_key: C.formService.accessKey,
              subject: "New Booking Request — " + (data.treatment || "General"),
              from_name: data.name || "Website Visitor",
              ...data,
              source: "Booking Form",
            }),
          });
          const result = await res.json();
          if (result.success) {
            document.getElementById("booking-success").textContent = C.formService.successMessage;
            document.getElementById("booking-success").classList.remove("hidden");
            form.reset();
          } else {
            alert(C.formService.errorMessage);
          }
        } catch (err) {
          alert(C.formService.errorMessage);
        }
      } else {
        // Fallback: just show success (no email service configured)
        document.getElementById("booking-success").classList.remove("hidden");
        form.reset();
      }
      btn.textContent = originalText;
      btn.disabled = false;
      setTimeout(() => document.getElementById("booking-success").classList.add("hidden"), 5000);
    });
  }

  // ── CONTACT (GLASS) ───────────────────────────────────
  function renderContact() {
    const c = C.contact;
    document.getElementById("contact-tag").textContent = c.sectionTag;
    document.getElementById("contact-headline").textContent = c.headline;
    document.getElementById("contact-map").src = c.mapEmbed;

    document.getElementById("contact-info-cards").innerHTML = `
      <div class="contact-card glass-card glass-card-hover rounded-xl">
        <div class="contact-card-icon">${icon("phone")}</div>
        <div><p class="text-sm text-[#6B7280] mb-1">Phone</p><a href="tel:${c.phone}" class="font-semibold text-[#0A2647] hover:text-[#C9A96E] transition-colors">${c.phoneDisplay}</a></div>
      </div>
      <div class="contact-card glass-card glass-card-hover rounded-xl">
        <div class="contact-card-icon">${icon("email")}</div>
        <div><p class="text-sm text-[#6B7280] mb-1">Email</p><a href="mailto:${c.email}" class="font-semibold text-[#0A2647] hover:text-[#C9A96E] transition-colors">${c.email}</a></div>
      </div>
      <div class="contact-card glass-card glass-card-hover rounded-xl">
        <div class="contact-card-icon">${icon("location")}</div>
        <div><p class="text-sm text-[#6B7280] mb-1">Address</p><p class="font-semibold text-[#0A2647]">${c.address}</p></div>
      </div>
    `;

    document.getElementById("contact-hours").innerHTML = c.workingHours.map((h) => `
      <div class="flex justify-between items-center py-2.5 border-b border-gray-100/50 last:border-0">
        <span class="text-[#6B7280] text-sm">${h.day}</span>
        <span class="font-semibold text-[#0A2647] text-sm">${h.time}</span>
      </div>
    `).join("");

    document.getElementById("contact-social").innerHTML = buildSocialLinks("light");
  }

  // ── FOOTER ────────────────────────────────────────────
  function renderFooter() {
    document.getElementById("footer-site-name").textContent = C.siteName;
    document.getElementById("footer-links").innerHTML = C.footer.quickLinks.map((l) =>
      `<li><a href="${l.link}" class="text-white/40 hover:text-[#C9A96E] transition-colors text-sm">${l.text}</a></li>`
    ).join("");
    document.getElementById("footer-phone").innerHTML = `${icon("phone")} <span>${C.contact.phoneDisplay}</span>`;
    document.getElementById("footer-email").innerHTML = `${icon("email")} <span>${C.contact.email}</span>`;
    document.getElementById("footer-address").innerHTML = `${icon("location")} <span>${C.contact.address}</span>`;
    document.getElementById("footer-copyright").textContent = C.footer.copyright;
    const dev = document.getElementById("footer-developer");
    dev.textContent = C.footer.developer.name;
    dev.href = C.footer.developer.link;
    document.getElementById("footer-social").innerHTML = buildSocialLinks("dark");
  }

  // ── WHATSAPP ──────────────────────────────────────────
  function renderWhatsApp() {
    if (!C.contact.whatsapp.enabled) return;
    const btn = document.getElementById("whatsapp-btn");
    btn.href = `https://wa.me/${C.contact.whatsapp.number}?text=${encodeURIComponent(C.contact.whatsapp.message)}`;
    btn.classList.remove("hidden");
    if (C.contact.whatsapp.pulseOnLoad) {
      setTimeout(() => { const p = btn.querySelector(".whatsapp-pulse"); if (p) setTimeout(() => p.style.display = "none", 6000); }, 3000);
    }
  }

  // ── AUDIO / BACKGROUND MUSIC ───────────────────────────
  function initAudio() {
    if (!C.audio.enabled || !C.audio.src) return;
    const audio = document.getElementById("bg-audio");
    const toggle = document.getElementById("music-toggle");
    const bars = document.getElementById("music-bars");
    audio.src = C.audio.src;
    audio.volume = C.audio.volume;
    audio.preload = "auto";
    if (C.audio.showControl) toggle.classList.remove("hidden");
    let playing = false;
    let autoStartRemoved = false;

    const speakerOn = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14"/><path d="M15.54 8.46a5 5 0 0 1 0 7.07"/></svg>`;
    const speakerOff = `<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#C9A96E" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><line x1="23" y1="9" x2="17" y2="15"/><line x1="17" y1="9" x2="23" y2="15"/></svg>`;

    function updateIcon() {
      if (playing) {
        toggle.innerHTML = `<div class="music-bars playing" id="music-bars"><span></span><span></span><span></span><span></span></div>`;
      } else {
        toggle.innerHTML = speakerOff;
      }
    }

    function startMusic() {
      if (playing) return;
      audio.play().then(() => {
        playing = true;
        updateIcon();
      }).catch(() => {});
    }

    function stopMusic() {
      audio.pause();
      playing = false;
      updateIcon();
    }

    toggle.addEventListener("click", (e) => {
      e.stopPropagation();
      if (playing) stopMusic();
      else startMusic();
    });

    updateIcon();

    // Try immediate autoplay (works if browser allows it)
    startMusic();

    if (C.audio.autoplayOnInteraction) {
      const autoStart = (e) => {
        if (e.target === toggle || toggle.contains(e.target)) return;
        startMusic();
        removeAutoStart();
      };
      function removeAutoStart() {
        if (autoStartRemoved) return;
        autoStartRemoved = true;
        document.removeEventListener("click", autoStart);
        document.removeEventListener("scroll", autoStart);
        document.removeEventListener("keydown", autoStart);
      }
      document.addEventListener("click", autoStart);
      document.addEventListener("scroll", autoStart, { once: true });
      document.addEventListener("keydown", autoStart, { once: true });
    }
  }

  // ── SCROLL SOUND EFFECTS ──────────────────────────────
  function initScrollSounds() {
    if (!C.scrollSounds || !C.scrollSounds.enabled) return;
    const clips = C.scrollSounds.clips;
    const vol = C.scrollSounds.volume || 0.2;
    const played = {};
    const audioCache = {};

    Object.entries(clips).forEach(([sectionId, src]) => {
      if (!src) return;
      const a = new Audio();
      a.preload = "auto";
      a.src = src;
      a.volume = vol;
      audioCache[sectionId] = a;
    });

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id;
          if (!played[id] && audioCache[id]) {
            audioCache[id].currentTime = 0;
            audioCache[id].play().catch(() => {});
            played[id] = true;
          }
        }
      });
    }, { threshold: 0.3 });

    Object.keys(clips).forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
  }

  // ── LOADER ────────────────────────────────────────────
  function initLoader() {
    if (!C.loader.enabled) { document.getElementById("loader").style.display = "none"; return; }
    document.getElementById("loader-text").textContent = C.loader.text;

    // Replace tooth SVG with logo if available
    if (!C.logo.useText && C.logo.src) {
      const toothWrap = document.querySelector(".loader-tooth-wrap");
      if (toothWrap) {
        toothWrap.innerHTML = `
          <img src="${C.logo.src}" alt="${C.logo.alt || C.siteName}"
               class="loader-logo-img"
               style="height:90px;width:auto;object-fit:contain;animation:loaderLogoPulse 1.5s ease-in-out infinite;filter:drop-shadow(0 0 20px rgba(201,169,110,0.5));" />
        `;
      }
    }
    const start = Date.now();
    window.addEventListener("load", () => {
      const remaining = Math.max(0, (C.loader.minDurationMs || 2500) - (Date.now() - start));
      setTimeout(() => {
        const loader = document.getElementById("loader");
        loader.style.opacity = "0";
        setTimeout(() => { loader.style.display = "none"; }, 700);
      }, remaining);
    });
  }

  // ── POPUP AD ──────────────────────────────────────────
  function initPopupAd() {
    if (!C.popupAd || !C.popupAd.enabled) return;
    if (sessionStorage.getItem("dental_popup_closed")) return;

    const p = C.popupAd;
    document.getElementById("popup-image").src = p.image;
    document.getElementById("popup-badge").textContent = p.badge;
    document.getElementById("popup-headline").textContent = p.headline;
    document.getElementById("popup-subtext").textContent = p.subtext;
    document.getElementById("popup-submit").textContent = p.submitText;
    document.getElementById("popup-success-text").textContent = p.successMessage;

    if (p.formFields.email) document.getElementById("popup-email").classList.remove("hidden");

    const overlay = document.getElementById("popup-overlay");

    setTimeout(() => {
      overlay.style.display = "flex";
      overlay.style.opacity = "0";
      setTimeout(() => {
        overlay.style.transition = "opacity 0.5s ease";
        overlay.style.opacity = "1";
      }, 50);
    }, p.delayMs || 4000);

    function closePopup() {
      overlay.style.transition = "opacity 0.3s ease";
      overlay.style.opacity = "0";
      setTimeout(() => { overlay.style.display = "none"; }, 300);
      sessionStorage.setItem("dental_popup_closed", "1");
    }

    document.getElementById("popup-close").addEventListener("click", closePopup);
    overlay.addEventListener("click", (e) => { if (e.target === overlay) closePopup(); });

    document.getElementById("popup-form").addEventListener("submit", async (e) => {
      e.preventDefault();
      const form = e.target;
      const btn = form.querySelector("button[type=submit]");
      const originalText = btn.textContent;
      btn.textContent = "Sending...";
      btn.disabled = true;

      const formData = new FormData(form);
      const data = Object.fromEntries(formData);

      if (C.formService?.enabled && C.formService.accessKey !== "YOUR_ACCESS_KEY_HERE") {
        try {
          const res = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              access_key: C.formService.accessKey,
              subject: "New Lead — Popup Ad Form",
              from_name: data.name || "Website Visitor",
              ...data,
              source: "Popup Ad Form",
            }),
          });
          const result = await res.json();
          if (result.success) {
            document.getElementById("popup-form").classList.add("hidden");
            document.getElementById("popup-success-text").textContent = C.formService.successMessage;
            document.getElementById("popup-success").classList.remove("hidden");
          } else {
            alert(C.formService.errorMessage);
          }
        } catch (err) {
          alert(C.formService.errorMessage);
        }
      } else {
        document.getElementById("popup-form").classList.add("hidden");
        document.getElementById("popup-success").classList.remove("hidden");
      }
      btn.textContent = originalText;
      btn.disabled = false;
      setTimeout(closePopup, 3000);
    });
  }

  // ── COUNTER ANIMATION ────────────────────────────────
  function initCounters() {
    const counters = document.querySelectorAll(".stat-number[data-target]");
    if (!counters.length) return;
    let triggered = false;

    function animateAll() {
      if (triggered) return;
      triggered = true;

      counters.forEach((el) => {
        const target = parseFloat(el.dataset.target);
        const original = el.getAttribute("data-original");
        const suffix = el.dataset.suffix || "";
        const isK = el.dataset.isk === "true";
        const duration = 2000;
        const steps = 60;
        const stepTime = duration / steps;
        let step = 0;

        const timer = setInterval(() => {
          step++;
          const progress = Math.min(step / steps, 1);
          const ease = 1 - Math.pow(1 - progress, 3);
          const current = ease * target;

          if (isK) {
            const kVal = current / 1000;
            if (kVal >= 1) {
              el.textContent = (kVal % 1 === 0 ? kVal.toFixed(0) : kVal.toFixed(1)) + "K" + (suffix.includes("+") ? "+" : "");
            } else {
              el.textContent = Math.floor(current) + (suffix.includes("+") ? "+" : "");
            }
          } else {
            el.textContent = Math.floor(current) + suffix;
          }

          if (progress >= 1) {
            clearInterval(timer);
            el.textContent = original;
          }
        }, stepTime);
      });
    }

    // Store original text and set to 0
    counters.forEach(el => {
      el.setAttribute("data-original", el.textContent);
      el.textContent = "0";
    });

    // Observe the hero-stats container instead of tiny elements
    const statsContainer = document.getElementById("hero-stats");
    if (statsContainer) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateAll();
            observer.unobserve(entry.target);
          }
        });
      }, { threshold: 0.1 });
      observer.observe(statsContainer);
    }

    // Fallback: trigger after 3.5s if IntersectionObserver hasn't fired
    setTimeout(() => { animateAll(); }, 3500);
  }

  // ── SCROLL ANIMATIONS ────────────────────────────────
  function initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => entry.target.classList.add("animated"), delay);
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -40px 0px" });
    document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
  }

  // ── BACK TO TOP ───────────────────────────────────────
  function initBackToTop() {
    const btn = document.getElementById("back-to-top");
    window.addEventListener("scroll", () => {
      if (window.scrollY > 600) { btn.style.opacity = "1"; btn.style.pointerEvents = "auto"; }
      else { btn.style.opacity = "0"; btn.style.pointerEvents = "none"; }
    });
    btn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
  }

  // ── PARTICLES ─────────────────────────────────────────
  function initParticles() {
    const container = document.getElementById("hero-particles");
    for (let i = 0; i < 25; i++) {
      const p = document.createElement("div");
      p.className = "particle";
      p.style.left = Math.random() * 100 + "%";
      const size = (Math.random() * 4 + 2) + "px";
      p.style.width = size;
      p.style.height = size;
      p.style.animationDuration = (Math.random() * 15 + 10) + "s";
      p.style.animationDelay = (Math.random() * 10) + "s";
      p.style.opacity = Math.random() * 0.5 + 0.1;
      container.appendChild(p);
    }
  }

  // ── CURSOR GLOW ───────────────────────────────────────
  function initCursorGlow() {
    const hero = document.getElementById("home");
    const glow = document.createElement("div");
    glow.className = "hero-glow";
    glow.style.opacity = "0";
    document.body.appendChild(glow);
    hero.addEventListener("mousemove", (e) => { glow.style.left = e.clientX + "px"; glow.style.top = e.clientY + "px"; glow.style.opacity = "1"; });
    hero.addEventListener("mouseleave", () => { glow.style.opacity = "0"; });
  }

  // ── VIDEO MODAL ───────────────────────────────────────
  window.openVideoModal = function (src) {
    let modal = document.querySelector(".video-modal");
    if (!modal) {
      modal = document.createElement("div");
      modal.className = "video-modal";
      modal.innerHTML = `<button class="video-modal-close">✕</button><iframe src="" allow="autoplay; encrypted-media" allowfullscreen></iframe>`;
      document.body.appendChild(modal);
      modal.querySelector(".video-modal-close").addEventListener("click", () => { modal.classList.remove("active"); modal.querySelector("iframe").src = ""; });
      modal.addEventListener("click", (e) => { if (e.target === modal) { modal.classList.remove("active"); modal.querySelector("iframe").src = ""; } });
    }
    modal.querySelector("iframe").src = src + "?autoplay=1";
    modal.classList.add("active");
  };
})();
