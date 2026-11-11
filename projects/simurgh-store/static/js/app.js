(() => {
  "use strict";

  const translations = {
    fa: {
      metaDescription: "فروشگاه سیمرغ؛ انتخابی هوشمند برای دنیای دیجیتال شما.",
      pageTitle: "سیمرغ | فروشگاه محصولات دیجیتال",
      brand: "سیمرغ",
      brandTag: "فروشگاه محصولات دیجیتال",
      homeLink: "سیمرغ، صفحه اصلی",
      languageLabel: "انتخاب زبان",
      nav: { home: "خانه", categories: "دسته‌بندی‌ها", offers: "پیشنهاد ویژه", blog: "مجله", about: "درباره ما", contact: "تماس با ما", primaryLabel: "ناوبری اصلی" },
      search: "جستجو در فروشگاه...",
      account: { label: "حساب کاربری", signIn: "ورود / ثبت‌نام" },
      wishlist: "علاقه‌مندی‌ها",
      wishlistRemove: "حذف از علاقه‌مندی‌ها",
      cart: "سبد خرید",
      shopping: { close: "بستن", remove: "حذف", subtotal: "جمع سبد", continue: "ادامه خرید", tabsLabel: "سبد خرید و علاقه‌مندی‌ها" },
      menu: "باز کردن منو",
      hero: {
        eyebrow: "تکنولوژی، فراتر از انتظار",
        title: 'فروشگاه <span class="gradient-text">سیمرغ</span>',
        subtitle: "انتخابی هوشمند برای دنیای دیجیتال شما",
        description: "تکنولوژی، کیفیت و تجربه‌ای متفاوت از خرید محصولات دیجیتال.",
        shop: "مشاهده محصولات",
        special: "پیشنهادهای ویژه",
        meta1: "ارسال سریع",
        meta2: "قیمت مناسب",
        meta3: "تنوع بی‌نظیر",
        scroll: "کشف تجربه سیمرغ"
      },
      benefits: {
        label: "مزایای خرید",
        returns: "ضمانت بازگشت ۷ روزه", returnsSub: "خریدی بدون دغدغه",
        quality: "تضمین کیفیت", qualitySub: "محصولات اورجینال",
        delivery: "ارسال سریع", deliverySub: "به سراسر کشور",
        support: "پشتیبانی حرفه‌ای", supportSub: "همراه شما هستیم",
        payment: "پرداخت امن", paymentSub: "با درگاه معتبر"
      },
      categories: {
        kicker: "هر آنچه نیاز دارید", title: "دسته‌بندی محصولات", all: "مشاهده همه",
        menuLabel: "نمایش دسته‌بندی‌ها", previous: "دسته‌بندی قبلی", next: "دسته‌بندی بعدی",
        items: ["لپ‌تاپ", "مانیتور", "کیبورد", "ماوس", "هدست", "حافظه SSD", "لوازم گیمینگ", "کارت گرافیک"]
      },
      products: {
        kicker: "انتخاب‌های محبوب این هفته", title: "محصولات منتخب", all: "همه محصولات",
        demo: "قیمت‌ها و مشخصات زیر نمونه نمایشی هستند.",
        empty: "محصولی با این عبارت پیدا نشد.",
        ratingLabel: "امتیاز",
        add: "افزودن به سبد",
        items: [
          { name: "لپ‌تاپ گیمینگ ASUS TUF", spec: "RTX 4060 · 16GB · 1TB SSD", price: "۶۸,۹۰۰,۰۰۰", oldPrice: "۷۴,۵۰۰,۰۰۰", discount: "۸٪", rating: "4.8", image: "product-laptop.svg", alt: "تصویر نمایشی لپ‌تاپ گیمینگ", id: "laptop" },
          { name: "هدست گیمینگ HyperX Cloud", spec: "صدای فراگیر · اتصال USB-C", price: "۵,۴۹۰,۰۰۰", oldPrice: "۶,۲۰۰,۰۰۰", discount: "۱۲٪", rating: "4.9", image: "product-headset.svg", alt: "تصویر نمایشی هدست گیمینگ", id: "headset" },
          { name: "کیبورد مکانیکال RGB", spec: "سوئیچ آبی · چیدمان کامل", price: "۳,۸۵۰,۰۰۰", oldPrice: "۴,۳۰۰,۰۰۰", discount: "۱۰٪", rating: "4.7", image: "product-keyboard.svg", alt: "تصویر نمایشی کیبورد مکانیکال", id: "keyboard" },
          { name: "مانیتور حرفه‌ای 4K", spec: "27 اینچ · 144Hz · IPS", price: "۲۷,۹۰۰,۰۰۰", oldPrice: "۳۱,۰۰۰,۰۰۰", discount: "۱۰٪", rating: "4.8", image: "product-monitor.svg", alt: "تصویر نمایشی مانیتور 4K", id: "monitor" }
        ]
      },
      promo: {
        label: "پیشنهادهای ویژه",
        sectionTitle: "پیشنهاد ویژه",
        oneKicker: "صدای بازی را زندگی کن", oneTitle: "هدست‌های گیمینگ", oneDescription: "صدایی شفاف، تجربه‌ای همه‌جانبه",
        twoKicker: "سرعتی فراتر از انتظار", twoTitle: "SSDهای پرسرعت", twoDescription: "عملکرد سریع‌تر، فضای بیشتر",
        cta: "مشاهده محصولات", discount: "تا ۲۰٪ تخفیف"
      },
      brands: { kicker: "از بهترین‌های جهان", title: "برندهای معتبر", listLabel: "برندهای معتبر", previous: "برند قبلی", next: "برند بعدی" },
      social: { email: "ایمیل", instagram: "اینستاگرام", telegram: "تلگرام", youtube: "یوتیوب", linkedin: "لینکدین", x: "ایکس" },
      newsletter: {
        kicker: "از دنیای سیمرغ باخبر بمانید", title: "عضویت در خبرنامه",
        description: "از تازه‌ترین محصولات و پیشنهادهای ویژه زودتر باخبر شوید.",
        emailLabel: "آدرس ایمیل شما", emailPlaceholder: "آدرس ایمیل شما", submit: "عضویت",
        consent: "با عضویت موافقم که ایمیل‌های خبرنامه سیمرغ را دریافت کنم؛ هر زمان بخواهم می‌توانم لغو عضویت کنم.",
        success: "برای تکمیل عضویت، پیوند تأیید را از ایمیل خود باز کنید.",
        already: "این ایمیل از قبل عضو خبرنامه است."
      },
      footer: {
        description: "همراه شما در دنیای تکنولوژی؛ با بهترین قیمت، کیفیت و تجربه خریدی متفاوت.",
        quickLinks: "دسترسی سریع", services: "خدمات مشتریان", help: "راهنمای خرید",
        delivery: "شرایط و روش ارسال", returns: "رویه بازگشت کالا", faq: "پرسش‌های متداول",
        privacy: "حریم خصوصی", address: "تهران، ایران", hours: "شنبه تا پنجشنبه، ۹ تا ۱۸",
        copyright: "© ۲۰۲۶ فروشگاه سیمرغ. تمامی حقوق محفوظ است.",
        developer: "توسعه‌دهنده: امیر مصطفی خرازی", designer: "طراح UI/UX: محمد طالبی",
        backTop: "بازگشت به بالا"
      },
      messages: {
        added: "به سبد خرید اضافه شد.", removed: "از علاقه‌مندی‌ها حذف شد.",
        saved: "به علاقه‌مندی‌ها اضافه شد.", account: "ورود به حساب کاربری به‌زودی فعال می‌شود.",
        cartEmpty: "سبد خرید شما خالی است.", wishlistEmpty: "هنوز محصولی به علاقه‌مندی‌ها اضافه نکرده‌اید.",
        serverError: "ارتباط با فروشگاه برقرار نشد. لطفاً دوباره تلاش کنید.",
        newsletterError: "ثبت ایمیل انجام نشد. لطفاً دوباره تلاش کنید.",
        chatError: "ارسال پیام انجام نشد. لطفاً دوباره تلاش کنید."
      },
      chat: {
        launcher: "گفت‌وگو با سیمرغ", title: "دستیار فروشگاه سیمرغ",
        status: "پاسخ‌گوی پرسش‌های شما", close: "بستن گفتگو",
        greeting: "سلام! برای انتخاب محصول یا پرسش دربارهٔ ارسال و بازگشت کالا چطور کمکتان کنم؟",
        inputLabel: "پیام شما", placeholder: "پیام خود را بنویسید...", send: "ارسال پیام",
        disclaimer: "پاسخ‌گوی خودکار؛ اطلاعات موجودی و سفارش را از پشتیبانی پیگیری کنید.",
        promptProduct: "لپ‌تاپ پیشنهاد بده", promptShipping: "شرایط ارسال چیست؟",
        productPrompt: "لپ‌تاپ", shippingPrompt: "شرایط ارسال"
      }
    },
    en: {
      metaDescription: "SIMORGH Store: a smarter choice for your digital world.",
      pageTitle: "SIMORGH | Digital Products Store",
      brand: "SIMORGH",
      brandTag: "Digital Products Store",
      homeLink: "SIMORGH home page",
      languageLabel: "Choose language",
      nav: { home: "Home", categories: "Categories", offers: "Special Offers", blog: "Blog", about: "About Us", contact: "Contact Us", primaryLabel: "Primary navigation" },
      search: "Search the store...",
      account: { label: "Account", signIn: "Sign in / Register" },
      wishlist: "Wishlist",
      wishlistRemove: "Remove from wishlist",
      cart: "Shopping cart",
      shopping: { close: "Close", remove: "Remove", subtotal: "Subtotal", continue: "Continue shopping", tabsLabel: "Shopping cart and wishlist" },
      menu: "Open menu",
      hero: {
        eyebrow: "Technology beyond expectations",
        title: 'Your Ultimate <span class="gradient-text">Tech Destination</span>',
        subtitle: "Discover the Future of Digital Shopping",
        description: "Explore premium technology, exceptional quality, and the latest digital products.",
        shop: "Explore Products",
        special: "Special Offers",
        meta1: "Fast delivery",
        meta2: "Great prices",
        meta3: "More to explore",
        scroll: "Discover the SIMORGH experience"
      },
      benefits: {
        label: "Shopping benefits",
        returns: "7-Day Returns", returnsSub: "Shop with confidence",
        quality: "Quality Guaranteed", qualitySub: "Genuine products",
        delivery: "Fast Delivery", deliverySub: "Delivered nationwide",
        support: "Expert Support", supportSub: "Here when you need us",
        payment: "Secure Payment", paymentSub: "Trusted checkout"
      },
      categories: {
        kicker: "Everything you need", title: "Shop by Category", all: "View all",
        menuLabel: "Show categories", previous: "Previous categories", next: "Next categories",
        items: ["Laptops", "Monitors", "Keyboards", "Mice", "Headsets", "SSD Storage", "Gaming Gear", "Graphics Cards"]
      },
      products: {
        kicker: "This week's community favorites", title: "Featured Products", all: "All products",
        demo: "Prices and specifications shown are for demonstration only.",
        empty: "No products match your search.",
        ratingLabel: "Rating",
        add: "Add to Cart",
        items: [
          { name: "ASUS TUF Gaming Laptop", spec: "RTX 4060 · 16GB · 1TB SSD", price: "68,900,000", oldPrice: "74,500,000", discount: "8% OFF", rating: "4.8", image: "product-laptop.svg", alt: "Gaming laptop placeholder", id: "laptop" },
          { name: "HyperX Cloud Gaming Headset", spec: "Surround sound · USB-C", price: "5,490,000", oldPrice: "6,200,000", discount: "12% OFF", rating: "4.9", image: "product-headset.svg", alt: "Gaming headset placeholder", id: "headset" },
          { name: "RGB Mechanical Keyboard", spec: "Blue switches · Full size", price: "3,850,000", oldPrice: "4,300,000", discount: "10% OFF", rating: "4.7", image: "product-keyboard.svg", alt: "Mechanical keyboard placeholder", id: "keyboard" },
          { name: "Pro 4K Monitor", spec: "27 in · 144Hz · IPS", price: "27,900,000", oldPrice: "31,000,000", discount: "10% OFF", rating: "4.8", image: "product-monitor.svg", alt: "4K monitor placeholder", id: "monitor" }
        ]
      },
      promo: {
        label: "Special offers",
        sectionTitle: "Special offers",
        oneKicker: "Hear every detail", oneTitle: "Gaming Headsets", oneDescription: "Immersive sound. Uninterrupted play.",
        twoKicker: "Speed without compromise", twoTitle: "High-Speed SSDs", twoDescription: "Faster performance, more room.",
        cta: "Explore products", discount: "Up to 20% off"
      },
      brands: { kicker: "Top technology brands", title: "Trusted brands", listLabel: "Trusted brands", previous: "Previous brand", next: "Next brand" },
      social: { email: "Email", instagram: "Instagram", telegram: "Telegram", youtube: "YouTube", linkedin: "LinkedIn", x: "X" },
      newsletter: {
        kicker: "A little tech inspiration, delivered", title: "Join our newsletter",
        description: "Be first to hear about new arrivals and exclusive offers.",
        emailLabel: "Your email address", emailPlaceholder: "Your email address", submit: "Subscribe",
        consent: "I agree to receive SIMORGH newsletter emails. I can unsubscribe at any time.",
        success: "Please open the confirmation link sent to your email to complete your subscription.",
        already: "This email is already subscribed to the newsletter."
      },
      footer: {
        description: "Your partner in technology, with trusted products, fair prices, and a better way to shop.",
        quickLinks: "Quick Links", services: "Customer Services", help: "Buying Guide",
        delivery: "Shipping & Delivery", returns: "Returns Policy", faq: "FAQs",
        privacy: "Privacy Policy", address: "Tehran, Iran", hours: "Sat–Thu, 9 AM–6 PM",
        copyright: "© 2026 SIMORGH Store. All rights reserved.",
        developer: "Developer: Amir Mostafa Kharazi", designer: "UI/UX Designer: Mohamad Talebi",
        backTop: "Back to top"
      },
      messages: {
        added: "Added to your cart.", removed: "Removed from your wishlist.",
        saved: "Saved to your wishlist.", account: "Account sign-in is coming soon.",
        cartEmpty: "Your shopping cart is empty.", wishlistEmpty: "Your wishlist is empty.",
        serverError: "Couldn't reach the store. Please try again.",
        newsletterError: "We couldn't save your email. Please try again.",
        chatError: "Your message couldn't be sent. Please try again."
      },
      chat: {
        launcher: "Chat with SIMORGH", title: "SIMORGH Store Assistant",
        status: "Here to answer your questions", close: "Close chat",
        greeting: "Hi! I can help you choose a product or answer questions about delivery and returns.",
        inputLabel: "Your message", placeholder: "Type your message...", send: "Send message",
        disclaimer: "Automated assistant. Contact support for stock and order details.",
        promptProduct: "Recommend a laptop", promptShipping: "What are the shipping terms?",
        productPrompt: "laptop", shippingPrompt: "shipping terms"
      }
    }
  };

  const categoryAssets = [
    { image: "category-art-laptop.svg", key: "laptops" },
    { image: "category-monitor.png", key: "monitors" },
    { image: "category-art-keyboard.svg", key: "keyboards" },
    { image: "category-art-mouse.svg", key: "mice" },
    { image: "category-headset.png", key: "headsets" },
    { image: "category-art-ssd.svg", key: "ssd" },
    { image: "category-art-gaming.svg", key: "gaming" },
    { image: "photo_2026-11-09_15-41-58.jpg", key: "graphics-cards" }
  ];

  const homeCategoryImages = {
    laptops: "static/images/home-category-laptop.jpg",
    monitors: "static/images/home-category-monitor.jpg",
    keyboards: "static/images/home-category-keyboard.jpg",
    mice: "static/images/home-category-mouse.jpg",
    headsets: "static/images/home-category-headset.jpg",
    ssd: "static/images/home-category-ssd.jpg",
    gaming: "static/images/home-category-gaming.jpg",
    "graphics-cards": "static/images/photo_2026-11-09_15-41-58.jpg"
  };

  const categoryMenuIcons = {
    laptops: '<rect x="4" y="4" width="16" height="12" rx="1.5"/><path d="M2 19h20l-2-3H4l-2 3Z"/>',
    monitors: '<rect x="3" y="4" width="18" height="13" rx="2"/><path d="M12 17v4m-4 0h8"/>',
    keyboards: '<rect x="2.5" y="6" width="19" height="12" rx="2"/><path d="M6 10h.01M9 10h.01M12 10h.01M15 10h.01M18 10h.01M7 14h10"/>',
    mice: '<rect x="7" y="3" width="10" height="18" rx="5"/><path d="M12 3v6m-5 0h10"/>',
    headsets: '<path d="M3 13v-2a9 9 0 0 1 18 0v2m-18 0h4v7H5a2 2 0 0 1-2-2v-5Zm18 0h-4v7h2a2 2 0 0 0 2-2v-5Z"/>',
    ssd: '<rect x="4" y="4" width="16" height="16" rx="2"/><path d="M8 8h8v8H8zM9 2v2m6-2v2M9 20v2m6-2v2M2 9h2m-2 6h2m16-6h2m-2 6h2"/>',
    gaming: '<path d="M7 8h10a4 4 0 0 1 3.8 2.8l1 4A2.5 2.5 0 0 1 18 17l-2-2H8l-2 2a2.5 2.5 0 0 1-3.8-2.2l1-4A4 4 0 0 1 7 8Z"/><path d="M8 10v4m-2-2h4m6-1h.01M18 13h.01"/>',
    "graphics-cards": '<rect x="3" y="6" width="18" height="12" rx="2"/><path d="M7 6V4m10 2V4M7 18v2m10-2v2M8 9h8v6H8zM21 10h2m-2 4h2"/>'
  };

  const state = {
    lang: readStored("simorgh-language", "fa"),
    wishlist: [],
    products: null,
    categories: null,
    categoryFilter: null,
    categoryCarouselIndex: 0,
    categoryCount: 0,
    carouselBusy: false,
    carouselTimer: null,
    brandCarouselIndex: 0,
    brandCount: 0,
    brandCarouselBusy: false,
    brandCarouselTimer: null,
    cartCount: 0,
    cartItems: [],
    shoppingTab: "cart",
    wishlistCount: 0
  };
  if (!translations[state.lang]) state.lang = "fa";

  const select = (selector, root = document) => root.querySelector(selector);
  const selectAll = (selector, root = document) => [...root.querySelectorAll(selector)];
  const previewMode = document.body.dataset.previewMode === "true";
  const categoryHref = (slug) => previewMode ? "#products" : `/categories/${encodeURIComponent(slug)}/`;
  const productHref = (slug) => previewMode ? "#products" : `/products/${encodeURIComponent(slug)}/`;
  const escapeHTML = (value) => String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;"
  })[char]);
  const toLatinDigits = (value) => String(value)
    .replace(/[۰-۹٠-٩]/g, (digit) => {
      const persian = "۰۱۲۳۴۵۶۷۸۹".indexOf(digit);
      return String(persian >= 0 ? persian : "٠١٢٣٤٥٦٧٨٩".indexOf(digit));
    })
    .replace(/[^\d]/g, "");
  const normalizeSearchText = (value) => String(value)
    .normalize("NFKC")
    .replace(/[يى]/g, "ی")
    .replace(/ك/g, "ک")
    .replace(/[\u0640\u200c\u200e\u200f]/g, " ")
    .replace(/[۰-۹٠-٩]/g, (digit) => {
      const persian = "۰۱۲۳۴۵۶۷۸۹".indexOf(digit);
      return String(persian >= 0 ? persian : "٠١٢٣٤٥٦٧٨٩".indexOf(digit));
    })
    .replace(/\s+/g, " ")
    .trim()
    .toLocaleLowerCase();

  function readStored(key, fallback) {
    try { return localStorage.getItem(key) || fallback; }
    catch (error) { console.warn("Could not read saved storefront preference.", error); return fallback; }
  }

  function t(key) {
    return key.split(".").reduce((value, part) => value && value[part], translations[state.lang]) ?? key;
  }

  function setLanguage(language) {
    if (!translations[language]) return;
    state.lang = language;
    try { localStorage.setItem("simorgh-language", language); }
    catch (error) { console.warn("Could not save the selected language.", error); }
    document.documentElement.lang = language;
    document.documentElement.dir = language === "fa" ? "rtl" : "ltr";
    document.body.dataset.lang = language;
    document.title = t("pageTitle");
    select('meta[name="description"]').content = t("metaDescription");
    selectAll("[data-i18n]").forEach((element) => {
      const value = t(element.dataset.i18n);
      if (element.dataset.i18n.includes("hero.title")) element.innerHTML = value;
      else element.textContent = value;
    });
    selectAll("[data-i18n-placeholder]").forEach((element) => { element.placeholder = t(element.dataset.i18nPlaceholder); });
    selectAll("[data-i18n-aria]").forEach((element) => { element.setAttribute("aria-label", t(element.dataset.i18nAria)); });
    selectAll(".language-switch [data-lang]").forEach((button) => button.setAttribute("aria-pressed", String(button.dataset.lang === language)));
    select(".mobile-menu-button").setAttribute("aria-label", t("menu"));
    selectAll("[data-chat-prompt-key]").forEach((button) => { button.dataset.chatPrompt = t(button.dataset.chatPromptKey); });
    selectAll("[data-category-filter]").forEach((link) => { link.dir = language === "fa" ? "rtl" : "ltr"; });
    const brandGrid = select("[data-brand-grid]");
    brandGrid.dir = language === "fa" ? "rtl" : "ltr";
    state.brandCarouselIndex = state.brandCount;
    setBrandCarouselPosition(state.brandCarouselIndex);
    renderCategories();
    renderProducts(select(".search-box input").value);
    renderShoppingPanel();
    updateCarouselButtons();
    loadCatalog();
  }

  function renderCategories() {
    const grid = select("[data-category-grid]");
    window.clearTimeout(state.carouselTimer);
    state.carouselBusy = false;
    const categories = (state.categories || categoryAssets.map((category, index) => ({
      slug: category.key,
      image: `static/images/${category.image}`,
      name: translations[state.lang].categories.items[index]
    }))).map((category) => ({
      ...category,
      image: homeCategoryImages[category.slug] || category.image
    }));
    state.categoryCount = categories.length;
    state.categoryCarouselIndex = categories.length;
    grid.dir = state.lang === "fa" ? "rtl" : "ltr";
    grid.innerHTML = Array.from({ length: 3 }, (_, group) => categories.map((category, index) => `
      <a class="category-card category-card-${escapeHTML(category.slug)}" href="${categoryHref(category.slug)}" dir="${state.lang === "fa" ? "rtl" : "ltr"}"${group === 1 ? "" : ' aria-hidden="true" tabindex="-1"'}>
        <img src="${escapeHTML(category.image)}" alt="" loading="lazy" width="300" height="210">
        <span>${escapeHTML(category.name)}</span>
        <svg class="category-neon-border" viewBox="0 0 560 400" preserveAspectRatio="none" aria-hidden="true" focusable="false">
          <defs>
            <linearGradient id="category-neon-${group}-${index}" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0" stop-color="#782bff" stop-opacity="0"/>
              <stop offset=".35" stop-color="#782bff" stop-opacity=".2"/>
              <stop offset=".48" stop-color="#782bff"/>
              <stop offset=".54" stop-color="#146bff"/>
              <stop offset=".6" stop-color="#00c8ff"/>
              <stop offset=".66" stop-color="#146bff"/>
              <stop offset=".73" stop-color="#782bff"/>
              <stop offset=".82" stop-color="#00c8ff" stop-opacity=".2"/>
              <stop offset="1" stop-color="#782bff" stop-opacity="0"/>
              <animateTransform attributeName="gradientTransform" type="rotate" from="0 .5 .5" to="360 .5 .5" dur="3s" repeatCount="indefinite"/>
            </linearGradient>
          </defs>
          <rect x="2" y="2" width="556" height="396" rx="14" fill="none" stroke="url(#category-neon-${group}-${index})" stroke-width="4" vector-effect="non-scaling-stroke"/>
        </svg>
      </a>
    `).join("")).join("");
    select("[data-category-menu]").innerHTML = categories.map((category) => `
      <a href="${categoryHref(category.slug)}" dir="${state.lang === "fa" ? "rtl" : "ltr"}">
        <svg class="icon category-menu-icon" aria-hidden="true" viewBox="0 0 24 24">${categoryMenuIcons[category.slug] || '<rect x="4" y="4" width="16" height="16" rx="4"/><path d="m9 12 2 2 4-4"/>'}</svg>
        <span>${escapeHTML(category.name)}</span>
      </a>
    `).join("");
    setCarouselPosition(state.categoryCarouselIndex);
    updateCarouselButtons();
  }

  function updateCarouselButtons() {
    const disabled = state.categoryCount < 2;
    select('[data-action="category-previous"]').disabled = disabled;
    select('[data-action="category-next"]').disabled = disabled;
  }

  function setTrackScrollPosition(track, position) {
    track.style.scrollSnapType = "none";
    track.style.scrollBehavior = "auto";
    track.scrollLeft = position;
  }

  function setCarouselPosition(index) {
    const track = select("[data-category-grid]");
    const card = select(".category-card", track);
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const rtlFactor = state.lang === "fa" ? -1 : 1;
    setTrackScrollPosition(track, index * step * rtlFactor);
  }

  function moveCategoryCarousel(direction) {
    if (state.carouselBusy || state.categoryCount < 2) return;
    const track = select("[data-category-grid]");
    const card = select(".category-card", track);
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const distance = card.getBoundingClientRect().width + gap;
    const rtlFactor = state.lang === "fa" ? -1 : 1;
    state.categoryCarouselIndex += direction;
    state.carouselBusy = true;
    setTrackScrollPosition(track, state.categoryCarouselIndex * distance * rtlFactor);
    window.clearTimeout(state.carouselTimer);
    state.carouselTimer = window.setTimeout(() => {
      if (state.categoryCarouselIndex >= state.categoryCount * 2) {
        state.categoryCarouselIndex -= state.categoryCount;
        setCarouselPosition(state.categoryCarouselIndex);
      } else if (state.categoryCarouselIndex < state.categoryCount) {
        state.categoryCarouselIndex += state.categoryCount;
        setCarouselPosition(state.categoryCarouselIndex);
      }
      state.carouselBusy = false;
    }, 420);
  }

  function initializeBrandCarousel() {
    const track = select("[data-brand-grid]");
    const cards = selectAll(".brand-logo-card", track).map((card) => card.cloneNode(true));
    state.brandCount = cards.length;
    track.replaceChildren();
    for (let group = 0; group < 3; group += 1) {
      cards.forEach((card) => {
        const clone = card.cloneNode(true);
        if (group !== 1) {
          clone.setAttribute("aria-hidden", "true");
          select("img", clone).alt = "";
        }
        track.append(clone);
      });
    }
    state.brandCarouselIndex = state.brandCount;
  }

  function setBrandCarouselPosition(index) {
    const track = select("[data-brand-grid]");
    const card = select(".brand-logo-card", track);
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const direction = state.lang === "fa" ? -1 : 1;
    setTrackScrollPosition(track, index * step * direction);
  }

  function moveBrandCarousel(direction) {
    if (state.brandCarouselBusy || state.brandCount < 2) return;
    const track = select("[data-brand-grid]");
    const card = select(".brand-logo-card", track);
    if (!card) return;
    const gap = Number.parseFloat(getComputedStyle(track).columnGap) || 0;
    const step = card.getBoundingClientRect().width + gap;
    const directionFactor = state.lang === "fa" ? -1 : 1;
    state.brandCarouselIndex += direction;
    state.brandCarouselBusy = true;
    setTrackScrollPosition(track, state.brandCarouselIndex * step * directionFactor);
    window.clearTimeout(state.brandCarouselTimer);
    state.brandCarouselTimer = window.setTimeout(() => {
      if (state.brandCarouselIndex >= state.brandCount * 2) {
        state.brandCarouselIndex -= state.brandCount;
        setBrandCarouselPosition(state.brandCarouselIndex);
      } else if (state.brandCarouselIndex < state.brandCount) {
        state.brandCarouselIndex += state.brandCount;
        setBrandCarouselPosition(state.brandCarouselIndex);
      }
      state.brandCarouselBusy = false;
    }, 420);
  }

  function renderProducts(query = "") {
    const grid = select("[data-product-grid]");
    const normalizedQuery = normalizeSearchText(query);
    const products = (state.products || translations[state.lang].products.items.map((product) => ({
      slug: product.id,
      name: product.name,
      specification: product.spec,
      price: Number(toLatinDigits(product.price)),
      compare_at_price: Number(toLatinDigits(product.oldPrice)),
      discount_percent: Number(toLatinDigits(product.discount)),
      rating: product.rating,
      image: `static/images/${product.image}`,
      category: {
        slug: categoryAssets.find((asset) => asset.image === product.image)?.key,
        name: translations[state.lang].categories.items[categoryAssets.findIndex((asset) => asset.image === product.image)] || ""
      }
    }))).filter((product) =>
      (!state.categoryFilter || product.category.slug === state.categoryFilter)
      && normalizeSearchText(
        `${product.name} ${product.specification} ${product.category.name} ${product.brand || ""} ${product.slug}`
      ).includes(normalizedQuery)
    );
    const numberFormat = new Intl.NumberFormat(state.lang === "fa" ? "fa-IR" : "en-US");
    const markup = products.map((product) => {
      const selected = state.wishlist.includes(product.slug);
      const discountLabel = state.lang === "fa"
        ? `${numberFormat.format(product.discount_percent)}٪ تخفیف`
        : `${product.discount_percent}% OFF`;
      const price = numberFormat.format(product.price);
      const oldPrice = product.compare_at_price ? numberFormat.format(product.compare_at_price) : "";
      return `
      <article class="product-card" data-product-id="${escapeHTML(product.slug)}">
        <div class="product-media">
          <span class="discount-badge">${escapeHTML(discountLabel)}</span>
          <button class="wishlist-button${selected ? " is-selected" : ""}" type="button" data-action="wishlist" data-id="${escapeHTML(product.slug)}" aria-label="${escapeHTML(selected ? t("wishlistRemove") : t("wishlist"))}" aria-pressed="${selected}">
            <svg class="icon"><use href="#i-heart"/></svg>
          </button>
          <a class="product-detail-image-link" href="${productHref(product.slug)}" aria-label="${escapeHTML(product.name)}">
            <img src="${escapeHTML(product.image)}" alt="${escapeHTML(product.name)}" loading="lazy" width="500" height="360">
          </a>
        </div>
        <div class="product-info">
          <h3 class="product-name"><a href="${productHref(product.slug)}">${escapeHTML(product.name)}</a></h3>
          <p class="product-spec">${escapeHTML(product.specification)}</p>
          <span class="product-rating" aria-label="${escapeHTML(t("products.ratingLabel"))} ${escapeHTML(product.rating)}">
            <svg class="icon"><use href="#i-star"/></svg>${escapeHTML(product.rating)}
          </span>
          <div class="product-prices">
            <span class="product-price">${escapeHTML(price)} <small>${state.lang === "fa" ? "تومان" : "Toman"}</small></span>
            ${oldPrice ? `<span class="product-old-price">${escapeHTML(oldPrice)}</span>` : ""}
          </div>
          <div class="product-actions">
            <button class="add-cart-button" type="button" data-action="add-cart" data-id="${escapeHTML(product.slug)}">
              <svg class="icon"><use href="#i-cart"/></svg><span>${escapeHTML(t("products.add"))}</span>
            </button>
          </div>
        </div>
      </article>
    `;
    });
    grid.innerHTML = markup.join("");
    select("[data-empty-state]").hidden = products.length > 0;
  }

  function getCsrfToken() {
    const cookie = document.cookie.split("; ").find((item) => item.startsWith("csrftoken="));
    return cookie ? decodeURIComponent(cookie.slice("csrftoken=".length)) : "";
  }

  async function apiRequest(url, options = {}) {
    const method = options.method || "GET";
    const headers = { Accept: "application/json" };
    if (options.body !== undefined) headers["Content-Type"] = "application/json";
    if (method !== "GET") headers["X-CSRFToken"] = getCsrfToken();
    const response = await fetch(url, {
      method,
      headers,
      credentials: "same-origin",
      body: options.body === undefined ? undefined : JSON.stringify(options.body)
    });
    const payload = await response.json();
    if (!response.ok) throw new Error(payload.error || `Request failed (${response.status}).`);
    return payload;
  }

  let catalogRequest = 0;
  async function loadCatalog() {
    if (previewMode) return;
    const requestId = ++catalogRequest;
    const language = state.lang;
    try {
      const [products, categories] = await Promise.all([
        apiRequest(`/api/products/?lang=${language}`),
        apiRequest(`/api/categories/?lang=${language}`)
      ]);
      if (requestId !== catalogRequest) return;
      state.products = products.results;
      state.categories = categories.results;
      renderCategories();
      renderProducts(select(".search-box input").value);
      renderShoppingPanel();
    } catch (error) {
      if (requestId !== catalogRequest) return;
      console.error("Could not load the SIMORGH catalog.", error);
      notify(t("messages.serverError"));
    }
  }

  function refreshCounts() {
    select("[data-cart-count]").textContent = state.cartCount;
    select("[data-wishlist-count]").textContent = state.wishlistCount;
  }

  async function loadShoppingState() {
    if (previewMode) return;
    const [cart, wishlist] = await Promise.allSettled([
      apiRequest("/api/cart/"),
      apiRequest("/api/wishlist/")
    ]);
    if (cart.status === "fulfilled") {
      state.cartItems = cart.value.items;
      state.cartCount = cart.value.count;
      refreshCounts();
    } else {
      console.error("Could not load the SIMORGH cart.", cart.reason);
      notify(t("messages.serverError"));
    }
    if (wishlist.status === "fulfilled") {
      state.wishlist = wishlist.value.slugs;
      state.wishlistCount = wishlist.value.count;
      refreshCounts();
      renderProducts(select(".search-box input").value);
    } else {
      console.error("Could not load the SIMORGH wishlist.", wishlist.reason);
      notify(t("messages.serverError"));
    }
    renderShoppingPanel();
  }

  async function addToCart(slug) {
    if (previewMode) return;
    try {
      const cart = await apiRequest("/api/cart/", {
        method: "POST",
        body: { product_slug: slug }
      });
      state.cartItems = cart.items;
      state.cartCount = cart.count;
      refreshCounts();
      renderShoppingPanel();
      notify(t("messages.added"));
    } catch (error) {
      console.error("Could not update the SIMORGH cart.", error);
      notify(t("messages.serverError"));
    }
  }

  async function removeFromCart(slug) {
    if (previewMode) return;
    try {
      const cart = await apiRequest("/api/cart/", {
        method: "DELETE",
        body: { product_slug: slug }
      });
      state.cartItems = cart.items;
      state.cartCount = cart.count;
      refreshCounts();
      renderShoppingPanel();
    } catch (error) {
      console.error("Could not remove an item from the SIMORGH cart.", error);
      notify(t("messages.serverError"));
    }
  }

  async function toggleWishlist(slug) {
    if (previewMode) return;
    const removing = state.wishlist.includes(slug);
    try {
      const wishlist = await apiRequest("/api/wishlist/", {
        method: removing ? "DELETE" : "POST",
        body: { product_slug: slug }
      });
      state.wishlist = wishlist.slugs;
      state.wishlistCount = wishlist.count;
      refreshCounts();
      renderProducts(select(".search-box input").value);
      renderShoppingPanel();
      notify(t(removing ? "messages.removed" : "messages.saved"));
    } catch (error) {
      console.error("Could not update the SIMORGH wishlist.", error);
      notify(t("messages.serverError"));
    }
  }

  function renderShoppingPanel() {
    const content = select("[data-shopping-content]");
    const summary = select("[data-shopping-summary]");
    const cartTab = select('[data-action="shopping-tab"][data-tab="cart"]');
    const wishlistTab = select('[data-action="shopping-tab"][data-tab="wishlist"]');
    const numberFormat = new Intl.NumberFormat(state.lang === "fa" ? "fa-IR" : "en-US");
    const formatPrice = (price) => numberFormat.format(price);
    const cartName = (item) => state.lang === "fa" ? item.name_fa : item.name_en;

    select("#shopping-panel-title").textContent = t(state.shoppingTab);
    select("[data-cart-panel-count]").textContent = state.cartCount;
    select("[data-wishlist-panel-count]").textContent = state.wishlistCount;
    cartTab.setAttribute("aria-selected", String(state.shoppingTab === "cart"));
    wishlistTab.setAttribute("aria-selected", String(state.shoppingTab === "wishlist"));

    if (state.shoppingTab === "cart") {
      const total = state.cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
      content.innerHTML = state.cartItems.length
        ? `<ul class="shopping-item-list">${state.cartItems.map((item) => `
            <li class="shopping-item">
              <img src="${escapeHTML(item.image)}" alt="" width="58" height="58" loading="lazy">
              <div class="shopping-item-details">
                <strong>${escapeHTML(cartName(item))}</strong>
                <span>${formatPrice(item.price)} × ${item.quantity}</span>
                <strong class="shopping-item-total">${formatPrice(item.price * item.quantity)}</strong>
              </div>
              <button class="shopping-remove" type="button" data-action="cart-remove" data-id="${escapeHTML(item.slug)}" aria-label="${escapeHTML(t("shopping.remove"))} ${escapeHTML(cartName(item))}"><svg class="icon"><use href="#i-close"/></svg></button>
            </li>`).join("")}</ul>`
        : `<p class="shopping-empty">${t("messages.cartEmpty")}</p>`;
      summary.hidden = !state.cartItems.length;
      summary.innerHTML = state.cartItems.length
        ? `<div class="shopping-total"><span>${t("shopping.subtotal")}</span><strong>${formatPrice(total)}</strong></div><button class="button button-primary" type="button" data-action="shopping-close">${t("shopping.continue")}</button>`
        : "";
      return;
    }

    const products = (state.products || []).filter((product) => state.wishlist.includes(product.slug));
    content.innerHTML = products.length
      ? `<ul class="shopping-item-list">${products.map((product) => `
          <li class="shopping-item shopping-wishlist-item">
            <img src="${escapeHTML(product.image)}" alt="" width="58" height="58" loading="lazy">
            <div class="shopping-item-details"><strong>${escapeHTML(product.name)}</strong><span>${formatPrice(product.price)}</span></div>
            <div class="shopping-item-actions">
              <button class="shopping-remove" type="button" data-action="wishlist-remove" data-id="${escapeHTML(product.slug)}" aria-label="${escapeHTML(t("wishlistRemove"))} ${escapeHTML(product.name)}"><svg class="icon"><use href="#i-close"/></svg></button>
              <button class="button button-small button-primary" type="button" data-action="wishlist-add-to-cart" data-id="${escapeHTML(product.slug)}">${t("products.add")}</button>
            </div>
          </li>`).join("")}</ul>`
      : `<p class="shopping-empty">${t("messages.wishlistEmpty")}</p>`;
    summary.hidden = true;
    summary.innerHTML = "";
  }

  function openShoppingPanel(tab) {
    state.shoppingTab = tab;
    renderShoppingPanel();
    const dialog = select("[data-shopping-dialog]");
    if (!dialog.open) dialog.showModal();
    selectAll(".cart-header-button, .wishlist-header-button").forEach((button) => button.setAttribute("aria-expanded", "true"));
    loadShoppingState();
  }

  function notify(message) {
    const toast = document.createElement("div");
    toast.className = "toast";
    toast.setAttribute("role", "status");
    toast.textContent = message;
    select("[data-toast-region]").append(toast);
    window.setTimeout(() => toast.remove(), 3000);
  }

  document.addEventListener("click", (event) => {
    const languageButton = event.target.closest(".language-switch [data-lang]");
    if (languageButton) {
      setLanguage(languageButton.dataset.lang);
      return;
    }

    const actionButton = event.target.closest("[data-action]");
    const categoryLink = event.target.closest("[data-category-filter]");
    const searchBox = select(".search-box");
    if (searchBox && !searchBox.contains(event.target) && searchBox.classList.contains("is-open")) {
      searchBox.classList.remove("is-open");
      select(".search-toggle").setAttribute("aria-expanded", "false");
    }
    if (categoryLink && categoryLink.getAttribute("href") === "#products") {
      state.categoryFilter = categoryLink.dataset.categoryFilter;
      select(".search-box input").value = "";
      renderProducts();
      select(".nav-dropdown-toggle").setAttribute("aria-expanded", "false");
      return;
    }
    if (event.target.closest("[data-clear-category]")) {
      state.categoryFilter = null;
      renderProducts(select(".search-box input").value);
      return;
    }
    if (!actionButton) return;
    const { action, id } = actionButton.dataset;

    if (action === "search-toggle") {
      const searchInput = select("#store-search");
      const isOpen = searchBox.classList.toggle("is-open");
      actionButton.setAttribute("aria-expanded", String(isOpen));
      if (isOpen) searchInput.focus();
      else searchInput.blur();
    } else if (action === "menu") {
      const isOpen = actionButton.getAttribute("aria-expanded") === "true";
      actionButton.setAttribute("aria-expanded", String(!isOpen));
      select(".primary-nav").classList.toggle("is-open", !isOpen);
    } else if (action === "category-menu") {
      const isOpen = actionButton.getAttribute("aria-expanded") === "true";
      actionButton.setAttribute("aria-expanded", String(!isOpen));
    } else if (action === "category-next") {
      moveCategoryCarousel(1);
    } else if (action === "category-previous") {
      moveCategoryCarousel(-1);
    } else if (action === "brand-next") {
      moveBrandCarousel(1);
    } else if (action === "brand-previous") {
      moveBrandCarousel(-1);
    } else if (action === "add-cart") {
      addToCart(id);
    } else if (action === "wishlist") {
      toggleWishlist(id);
    } else if (action === "cart-remove") {
      removeFromCart(id);
    } else if (action === "wishlist-remove") {
      toggleWishlist(id);
    } else if (action === "wishlist-add-to-cart") {
      addToCart(id);
    } else if (action === "shopping-close") {
      select("[data-shopping-dialog]").close();
    } else if (action === "shopping-tab") {
      state.shoppingTab = actionButton.dataset.tab;
      renderShoppingPanel();
    } else if (action === "cart-view") {
      openShoppingPanel("cart");
    } else if (action === "wishlist-view") {
      openShoppingPanel("wishlist");
    } else if (action === "account") {
      notify(t("messages.account"));
    } else if (action === "chat-toggle") {
      const panel = select("#chat-panel");
      const opening = panel.hidden;
      panel.hidden = !opening;
      selectAll('[data-action="chat-toggle"]').forEach((button) => button.setAttribute("aria-expanded", String(opening)));
      if (opening) select("#chat-input").focus();
    }
  });

  select("[data-shopping-dialog]").addEventListener("close", () => {
    selectAll(".cart-header-button, .wishlist-header-button").forEach((button) => button.setAttribute("aria-expanded", "false"));
  });
  select("[data-shopping-dialog]").addEventListener("click", (event) => {
    if (event.target === event.currentTarget) event.currentTarget.close();
  });
  select(".search-box input").addEventListener("input", (event) => renderProducts(event.target.value));
  select("[data-category-grid]").addEventListener("scroll", updateCarouselButtons, { passive: true });
  window.addEventListener("resize", () => {
    if (!state.carouselBusy) setCarouselPosition(state.categoryCarouselIndex);
    if (!state.brandCarouselBusy) setBrandCarouselPosition(state.brandCarouselIndex);
  });
  select(".search-box input").addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      event.currentTarget.value = "";
      renderProducts();
      event.currentTarget.blur();
      select(".search-box").classList.remove("is-open");
      select(".search-toggle").setAttribute("aria-expanded", "false");
    }
  });
  document.addEventListener("keydown", (event) => {
    if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
      event.preventDefault();
      const searchBox = select(".search-box");
      const searchInput = select(".search-box input");
      if (window.matchMedia("(max-width: 760px)").matches) {
        searchBox.classList.add("is-open");
        select(".search-toggle").setAttribute("aria-expanded", "true");
      }
      searchInput.focus();
    }
  });

  select(".primary-nav").addEventListener("click", (event) => {
    if (event.target.closest("a")) {
      select(".primary-nav").classList.remove("is-open");
      select(".mobile-menu-button").setAttribute("aria-expanded", "false");
    }
  });

  select("[data-newsletter-form]").addEventListener("submit", async (event) => {
    event.preventDefault();
    if (previewMode) {
      select("[data-form-message]").textContent = "این بخش در نسخهٔ نمایشی فعال نیست.";
      return;
    }
    if (!event.currentTarget.reportValidity()) return;
    const form = event.currentTarget;
    const submit = select('button[type="submit"]', form);
    submit.disabled = true;
    try {
      const result = await apiRequest("/api/newsletter/", {
        method: "POST",
        body: {
          email: new FormData(form).get("email"),
          lang: state.lang,
          consent: new FormData(form).get("consent") === "on"
        }
      });
      select("[data-form-message]").textContent = result.already_subscribed
        ? t("newsletter.already")
        : t("newsletter.success");
    } catch (error) {
      console.error("Could not subscribe to the SIMORGH newsletter.", error);
      select("[data-form-message]").textContent = t("messages.newsletterError");
    } finally {
      submit.disabled = false;
    }
    form.reset();
  });

  function appendChatMessage(message, sender) {
    const element = document.createElement("p");
    element.className = `chat-message chat-message-${sender}`;
    element.textContent = message;
    select("[data-chat-messages]").append(element);
    element.scrollIntoView({ block: "nearest", behavior: "smooth" });
  }

  async function sendChatMessage(rawMessage) {
    if (previewMode) return;
    const message = rawMessage.trim();
    if (!message) return;
    appendChatMessage(message, "user");
    const input = select("#chat-input");
    const submit = select('[data-chat-form] button[type="submit"]');
    input.value = "";
    submit.disabled = true;
    try {
      const result = await apiRequest("/api/chat/", {
        method: "POST",
        body: { message, lang: state.lang }
      });
      appendChatMessage(result.reply, "bot");
    } catch (error) {
      console.error("Could not send a SIMORGH chat message.", error);
      appendChatMessage(t("messages.chatError"), "bot");
    } finally {
      submit.disabled = false;
      input.focus();
    }
  }

  select("[data-chat-form]").addEventListener("submit", (event) => {
    event.preventDefault();
    sendChatMessage(new FormData(event.currentTarget).get("message"));
  });

  select("[data-chat-suggestions]").addEventListener("click", (event) => {
    const button = event.target.closest("[data-chat-prompt]");
    if (button) sendChatMessage(button.dataset.chatPrompt);
  });

  initializeBrandCarousel();
  setLanguage(state.lang);
  refreshCounts();
  renderCategories();
  renderProducts();
  loadShoppingState();
})();
